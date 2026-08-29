import { DURAKLAR, GUNLER, KATEGORILER, UCUSLAR } from "./duraklar.js";
import { ZEMINLER, UYDU_STILI, boya, binaKabart } from "./zeminler.js";
import { BAGLANTILAR, TURLER, baglanti } from "./baglantilar.js";
import { mekanBilgi } from "./mekan-bilgi.js";
import { gidildiMi, gidildiDegistir, gunTamamMi, bugununGunu, ilkGezilmemis } from "./gezi-modu.js";
import { kmlOlustur, gunRotasiUrl, noktaUrl } from "./disari-aktar.js";

/* Wikimedia Commons görselleri: dosya adları sırayla denenir, hiçbiri
   bulunamazsa görsel alanı sessizce kaldırılır. */
const COMMONS = "https://commons.wikimedia.org/wiki/Special:FilePath/";

function commonsGorsel(dosyalar, genislik, altMetin) {
  const img = el("img", "durak-foto");
  img.alt = altMetin;
  img.loading = "lazy";
  img.decoding = "async";
  let i = 0;
  const dene = () => {
    if (i >= dosyalar.length) { img.remove(); return; }
    img.src = `${COMMONS}${encodeURIComponent(dosyalar[i++])}?width=${genislik}`;
  };
  img.addEventListener("error", dene);
  dene();
  return img;
}

/* MapLibre 6 yalnızca adlandırılmış dışa aktarım sunar, varsayılan yok.
   Dinamik yüklüyoruz: harita açılmazsa zaman çizelgesi tek başına ayakta kalsın. */
let maplibregl = null;

/* ————————————————————————————————— Yardımcılar */

const $ = (s, k = document) => k.querySelector(s);
const el = (tag, sinif, metin) => {
  const d = document.createElement(tag);
  if (sinif) d.className = sinif;
  if (metin != null) d.textContent = metin;
  return d;
};

const sakin = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Kamera dönüşünü kuzey üstte kalacak şekilde sınırlar.
 * ±45°'ye kadar eğim manzaraya karakter katıyor; ötesi haritayı okunmaz kılıyor.
 */
function kuzeyKoru(aci) {
  const n = ((aci % 360) + 540) % 360 - 180;   // -180..180 aralığına indir
  return Math.max(-45, Math.min(45, n));
}

/** İki nokta arası mesafe, km. */
function mesafe([lon1, lat1], [lon2, lat2]) {
  const R = 6371, rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad, dLon = (lon2 - lon1) * rad;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/** Uçuş bacağı için kavisli yay — düz çizgi yerine yolculuk hissi. */
function yay(a, b, kavis = 0.18, adim = 72) {
  const orta = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const kontrol = [orta[0] - dy * kavis, orta[1] + dx * kavis];
  const nokta = [];
  for (let i = 0; i <= adim; i++) {
    const t = i / adim, u = 1 - t;
    nokta.push([
      u * u * a[0] + 2 * u * t * kontrol[0] + t * t * b[0],
      u * u * a[1] + 2 * u * t * kontrol[1] + t * t * b[1],
    ]);
  }
  return nokta;
}

/* ————————————————————————————————— Durum */

const durum = {
  etkin: null,
  gun: 1,
  kapali: new Set(),
  zemin: 0,        // ZEMINLER dizisindeki sıra
  arazi: false,
};

const isaretler = new Map();  // durak.id -> maplibregl.Marker
const kartlar = new Map();    // durak.id -> HTMLElement
const boncukYenileyiciler = new Map();  // durak.id -> boncuğu tazeleyen fn (modal senkronu)

/** Gün seçiciyle atlarken gözlemcinin araya girmemesi için kısa süreli kilit. */
let secimKilidi = 0;

let map = null;
let haritaHazir = false;

/* ————————————————————————————————— Panel kurulumu */

function panelKur() {
  const panel = $("#panel");

  for (const gun of GUNLER) {
    const blok = el("section", "gun-blok");
    blok.id = `gun-${gun.no}`;

    const bas = el("header", "gun-basi");
    const sira = el("div", "sira");
    sira.append(el("b", null, `GÜN ${gun.no}`), el("span", null, `${gun.tarih} · ${gun.gunAdi} · ${gun.sehir}`));
    bas.append(sira, el("h2", null, gun.baslik), el("p", "tema", gun.tema));

    const gunDuraklari = DURAKLAR.filter((x) => x.gun === gun.no);

    // Günün karayolu kesiti için Google Maps yol tarifi (uçuş bacakları atlanır).
    const tarif = gunRotasiUrl(gunDuraklari);
    if (tarif) {
      const a = el("a", "gun-gmaps", "Günün rotası Google Maps'te ↗");
      a.href = tarif;
      a.target = "_blank";
      a.rel = "noopener";
      bas.append(a);
    }
    blok.append(bas);
    gunDuraklari.forEach((d, i) => {
      // Günün ilk durağından önce, bir önceki günün son durağından gelen bağlantı.
      const oncekiId = i === 0
        ? DURAKLAR[DURAKLAR.indexOf(d) - 1]?.id
        : gunDuraklari[i - 1].id;
      const b = oncekiId ? baglanti(oncekiId, d.id) : null;
      if (b) blok.append(baglantiYap(b));
      blok.append(kartYap(d));
    });
    panel.append(blok);
  }
}

/** İki durak arasındaki ulaşım şeridi. */
function baglantiYap(b) {
  const tur = TURLER[b.tur] || { ad: b.tur.toUpperCase(), renk: "#7A7160" };
  const k = el("div", "gecis");
  k.style.setProperty("--g-renk", tur.renk);
  k.dataset.tur = b.tur;
  if (b.gunBasi) k.classList.add("gun-basi-gecis");

  const bas = el("div", "gecis-bas");
  bas.append(el("span", "gecis-tur", tur.ad));
  if (b.sure) bas.append(el("span", "gecis-veri", b.sure));
  if (b.ucret && b.ucret !== "—") bas.append(el("span", "gecis-veri", b.ucret));
  k.append(bas);

  if (b.ozet) k.append(el("p", "gecis-ozet", b.ozet));
  if (b.detay) k.append(el("p", "gecis-detay", b.detay));
  if (b.dikkat) {
    const uyari = el("p", "gecis-dikkat");
    uyari.append(el("b", null, "Dikkat "), document.createTextNode(b.dikkat));
    k.append(uyari);
  }
  return k;
}

/** Puan yerine doğrulanabilir künye: dönem, önerilen süre, UNESCO alanı. */
function kunyeYap(bilgi) {
  if (!bilgi.donem && !bilgi.sure && !bilgi.unesco) return null;
  const kunye = el("dl", "kunye");
  const satir = (etiket, deger) => {
    kunye.append(el("dt", null, etiket), el("dd", null, deger));
  };
  if (bilgi.donem) satir("Dönem", bilgi.donem);
  if (bilgi.sure) satir("Ayırın", bilgi.sure);
  if (bilgi.unesco) satir("UNESCO", bilgi.unesco);
  return kunye;
}

function kartYap(d) {
  const kat = KATEGORILER[d.kategori];
  const k = el("article", "durak");
  k.id = `durak-${d.id}`;
  k.dataset.id = d.id;
  k.dataset.gun = d.gun;
  k.dataset.kategori = d.kategori;
  k.style.setProperty("--d-renk", kat.renk);
  k.tabIndex = 0;
  k.setAttribute("role", "button");
  k.setAttribute("aria-label", `${d.saat} — ${d.ad}. Haritada göster.`);

  k.append(el("div", "saat", d.saat));

  // Yol ipliği üstündeki boncuk aynı zamanda "gezildi" düğmesi.
  const boncuk = el("button", "boncuk");
  boncuk.type = "button";
  boncuk.append(el("span", "im", "✓"));
  const boncukYaz = () => {
    const g = gidildiMi(d.id);
    k.classList.toggle("gidildi", g);
    isaretler.get(d.id)?.getElement().classList.toggle("gidildi", g);
    boncuk.setAttribute("aria-pressed", String(g));
    boncuk.setAttribute("aria-label", g
      ? `${d.ad} — gezildi işaretini kaldır`
      : `${d.ad} — gezildi olarak işaretle`);
    boncuk.title = g ? "Gezildi — kaldırmak için tıklayın" : "Gezildi olarak işaretle";
  };
  boncuk.addEventListener("click", (e) => {
    e.stopPropagation();
    gidildiDegistir(d.id);
    boncukYaz();
    gunIsaretleriGuncelle();
  });
  boncukYaz();
  boncukYenileyiciler.set(d.id, boncukYaz);
  k.append(boncuk);

  const bilgi = mekanBilgi(d.id);
  const govde = el("div", "govde");
  govde.append(el("h3", null, d.ad));
  if (d.alt) govde.append(el("p", "alt", d.alt));

  if (bilgi.gorsel) {
    const cerceve = el("div", "foto-cerceve");
    cerceve.append(commonsGorsel(bilgi.gorsel, 640, d.ad));
    govde.append(cerceve);
  }

  const kunye = kunyeYap(bilgi);
  if (kunye) govde.append(kunye);

  govde.append(el("p", "metin", d.aciklama));
  if (d.ipucu) govde.append(el("span", "ipucu", d.ipucu));

  const rozetler = el("div", "rozetler");
  rozetler.append(el("span", "rozet", kat.ad));
  if (d.etiket) rozetler.append(el("span", "rozet vurgu", d.etiket));
  if (d.kaynak === "oneri") rozetler.append(el("span", "rozet oneri", "Sofra önerisi"));
  govde.append(rozetler);

  k.append(govde);

  const sec = () => { history.replaceState(null, "", `#durak-${d.id}`); etkinlestir(d.id, true); };
  k.addEventListener("click", sec);
  k.addEventListener("keydown", (e) => {
    if (e.target !== k) return;  // boncuğun kendi Enter'ına karışma
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sec(); }
  });

  kartlar.set(d.id, k);
  return k;
}

/* ————————————————————————————————— Üst şerit */

function seritKur() {
  const gunListe = $("#gunler");
  for (const g of GUNLER) {
    const li = el("li");
    const b = el("button", "gun-chip", `${g.no}`);
    b.type = "button";
    b.dataset.gun = g.no;
    b.title = `${g.tarih} — ${g.baslik}`;
    b.setAttribute("aria-label", `Gün ${g.no}: ${g.baslik}`);
    b.addEventListener("click", () => {
      // Bloğun başına git: gün başlığı ve o güne geçişi anlatan ulaşım şeridi de görünsün.
      // Blok başında ilk durak kartı gözlemcinin bandının altında kaldığı için
      // etkin durağı elle seçip kaydırma bitene kadar gözlemciyi susturuyoruz.
      const ilk = DURAKLAR.find((d) => d.gun === g.no);
      secimKilidi = Date.now() + 1600;
      document.getElementById(`gun-${g.no}`)
        ?.scrollIntoView({ behavior: sakin ? "auto" : "smooth", block: "start" });
      if (ilk) etkinlestir(ilk.id, true);
    });
    li.append(b);
    gunListe.append(li);
  }

  const filtreListe = $("#filtreler");
  for (const [anahtar, kat] of Object.entries(KATEGORILER)) {
    const li = el("li");
    const b = el("button", "filtre");
    b.type = "button";
    b.style.setProperty("--f-renk", kat.renk);
    b.setAttribute("aria-pressed", "true");
    b.append(el("span", "nokta"), el("span", null, kat.ad));
    b.addEventListener("click", () => {
      const acik = b.getAttribute("aria-pressed") === "true";
      b.setAttribute("aria-pressed", String(!acik));
      if (acik) durum.kapali.add(anahtar); else durum.kapali.delete(anahtar);
      suzgecUygula();
    });
    li.append(b);
    filtreListe.append(li);
  }
}

function suzgecUygula() {
  for (const d of DURAKLAR) {
    const kapali = durum.kapali.has(d.kategori);
    kartlar.get(d.id)?.classList.toggle("suzuldu", kapali);
    isaretler.get(d.id)?.getElement().classList.toggle("kapali", kapali);
  }
}

/** Günün bütün durakları gezildiyse gün çipine onay işareti düşer. */
function gunIsaretleriGuncelle() {
  for (const b of document.querySelectorAll(".gun-chip")) {
    const no = Number(b.dataset.gun);
    const idler = DURAKLAR.filter((d) => d.gun === no).map((d) => d.id);
    b.classList.toggle("tamam", gunTamamMi(idler));
  }
}

/* ————————————————————————————————— Nilometre */

const NIL_UST = 30.25, NIL_ALT = 25.55;

function nilometreKur() {
  const hat = $("#nil-hat");
  for (let i = 0; i <= 8; i++) {
    const c = el("i", "nil-cetel");
    c.style.top = `${(i / 8) * 100}%`;
    hat.append(c);
  }
}

function nilometreGuncelle(d) {
  const imlec = $("#nil-imlec"), etiket = $("#nil-etiket");
  const oran = (NIL_UST - d.konum[1]) / (NIL_UST - NIL_ALT);
  imlec.style.top = `${Math.min(100, Math.max(0, oran * 100))}%`;
  const kuzeyDisi = d.konum[1] > NIL_UST;
  etiket.textContent = `${d.konum[1].toFixed(2)}°K`;
  etiket.style.opacity = kuzeyDisi ? ".4" : ".75";
  etiket.title = kuzeyDisi
    ? "Ölçeğin kuzeyinde — İstanbul, Mısır penceresinin dışında"
    : "Rotanın o anki enlemi";
}

/* ————————————————————————————————— Harita katmanları */

function katmanVerisi() {
  const gunlukRota = { type: "FeatureCollection", features: [] };

  for (const g of GUNLER) {
    const noktalar = DURAKLAR.filter((d) => d.gun === g.no);
    for (let i = 0; i < noktalar.length - 1; i++) {
      const a = noktalar[i], b = noktalar[i + 1];
      // Uçuş bacakları ayrı katmanda çiziliyor; şehirler arası atlamayı burada atla.
      if (mesafe(a.konum, b.konum) > 120) continue;
      const bag = baglanti(a.id, b.id);
      gunlukRota.features.push({
        type: "Feature",
        properties: { gun: g.no, yaya: bag?.tur === "yuruyus" },
        geometry: { type: "LineString", coordinates: [a.konum, b.konum] },
      });
    }
  }

  const ucus = {
    type: "FeatureCollection",
    features: UCUSLAR.map((u) => ({
      type: "Feature",
      properties: { gun: u.gun, etiket: u.etiket },
      geometry: { type: "LineString", coordinates: yay(u.from, u.to) },
    })),
  };

  return { gunlukRota, ucus };
}

function katmanlariKur() {
  const { gunlukRota, ucus } = katmanVerisi();

  if (!map.getSource("rota")) map.addSource("rota", { type: "geojson", data: gunlukRota });
  if (!map.getSource("ucus")) map.addSource("ucus", { type: "geojson", data: ucus });

  if (!map.getLayer("ucus-hat")) {
    map.addLayer({
      id: "ucus-hat", type: "line", source: "ucus",
      layout: { "line-cap": "round" },
      paint: {
        "line-color": "#3FA7A0",
        "line-width": 1.4,
        "line-dasharray": [2, 3],
        "line-opacity": 0.5,
      },
    });
  }

  if (!map.getLayer("rota-hat")) {
    map.addLayer({
      id: "rota-hat", type: "line", source: "rota",
      filter: ["!=", ["get", "yaya"], true],
      layout: { "line-cap": "round", "line-join": "round" },
      paint: {
        "line-color": "#C9A227",
        "line-width": ["interpolate", ["linear"], ["zoom"], 8, 1.2, 14, 2.6],
        "line-opacity": 0.35,
      },
    });
  }

  // Yürünen bacaklar noktalı: haritada araçla gidilenlerden ayırt edilsin.
  if (!map.getLayer("rota-yaya")) {
    map.addLayer({
      id: "rota-yaya", type: "line", source: "rota",
      filter: ["==", ["get", "yaya"], true],
      layout: { "line-cap": "round" },
      paint: {
        "line-color": "#8FAF7E",
        "line-width": 2,
        "line-dasharray": [0.6, 1.8],
        "line-opacity": 0.4,
      },
    });
  }

  if (!map.getSource("dem")) {
    map.addSource("dem", {
      type: "raster-dem",
      tiles: ["https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"],
      encoding: "terrarium", tileSize: 256, maxzoom: 14,
      attribution: 'Yükseklik: <a href="https://registry.opendata.aws/terrain-tiles/">Terrain Tiles</a>',
    });
  }
  if (durum.arazi) map.setTerrain({ source: "dem", exaggeration: 1.4 });

  rotaVurgula(durum.gun);
}

/** Etkin günün rotası öne çıkar, diğerleri geri çekilir. */
function rotaVurgula(gun) {
  if (!haritaHazir || !map.getLayer("rota-hat")) return;
  map.setPaintProperty("rota-hat", "line-opacity",
    ["case", ["==", ["get", "gun"], gun], 0.95, 0.18]);
  // Tek bir zoom tabanlı interpolate kullanılmalı; gün ayrımı durak noktalarında yapılır.
  const esit = ["==", ["get", "gun"], gun];
  map.setPaintProperty("rota-hat", "line-width",
    ["interpolate", ["linear"], ["zoom"],
      8, ["case", esit, 2, 1],
      14, ["case", esit, 3.6, 1.8]]);
  if (map.getLayer("rota-yaya")) {
    map.setPaintProperty("rota-yaya", "line-opacity", ["case", esit, 0.95, 0.22]);
  }
  map.setPaintProperty("ucus-hat", "line-opacity",
    ["case", ["==", ["get", "gun"], gun], 0.9, 0.28]);
}

/* ————————————————————————————————— İşaretler */

function isaretleriKur() {
  for (const d of DURAKLAR) {
    const kat = KATEGORILER[d.kategori];
    const knt = el("button", "isaret");
    knt.type = "button";
    knt.style.setProperty("--m-renk", kat.renk);
    knt.setAttribute("aria-label", `${d.ad} — gün ${d.gun}, ${d.saat}`);
    if (gidildiMi(d.id)) knt.classList.add("gidildi");

    const bilgi = mekanBilgi(d.id);
    const popup = new maplibregl.Popup({ offset: 16, closeButton: false, closeOnClick: false })
      .setLngLat(d.konum);

    const icerik = el("div", "balon");
    if (bilgi.gorsel) icerik.append(commonsGorsel(bilgi.gorsel, 320, d.ad));
    icerik.append(el("b", null, d.ad));
    icerik.append(el("span", null, `${d.saat} · Gün ${d.gun}${bilgi.sure ? ` · ${bilgi.sure}` : ""}`));
    popup.setDOMContent(icerik);

    const isaret = new maplibregl.Marker({ element: knt })
      .setLngLat(d.konum)
      .addTo(map);

    const ac = () => popup.addTo(map);
    const kapa = () => popup.remove();
    knt.addEventListener("mouseenter", ac);
    knt.addEventListener("mouseleave", kapa);
    knt.addEventListener("focus", ac);
    knt.addEventListener("blur", kapa);
    knt.addEventListener("click", (e) => {
      e.stopPropagation();
      kapa();                    // hover balonu modalın altında kalmasın
      etkinlestir(d.id, false);  // kart vurgulansın ama kamera yerinde kalsın
      modalAc(d);
    });

    isaretler.set(d.id, isaret);
  }
}

/* ————————————————————————————————— Etkin durak */

/** Gözlemciden gelen kamera istekleri kaydırma durulana dek bekletilir;
    komşu duraklar arasında kısa geçiş, şehirler arasında gerçek uçuş yapılır. */
let kameraZamanlayici = null;
let kameraHedef = null;

function kameraGit(d, beklet) {
  clearTimeout(kameraZamanlayici);
  const git = () => {
    if (!haritaHazir) return;
    const k = d.kamera || {};
    const goruntu = {
      center: d.konum,
      zoom: k.zoom ?? 15.5,
      pitch: durum.arazi ? Math.min((k.pitch ?? 55) + 8, 78) : (k.pitch ?? 55),
      // Kuzey her zaman üst yarıda kalsın: sayfa "aşağı kaydırmak güneye
      // gitmektir" diyor, harita bunun tersini gösterirse iki sinyal çelişir.
      bearing: kuzeyKoru(k.bearing ?? 0),
      essential: true,
    };
    const yakin = kameraHedef && mesafe(kameraHedef, d.konum) < 3;
    kameraHedef = d.konum;
    if (yakin) map.easeTo({ ...goruntu, duration: sakin ? 0 : 850 });
    else map.flyTo({ ...goruntu, duration: sakin ? 0 : 2100, curve: 1.3 });
  };
  if (beklet && !sakin) kameraZamanlayici = setTimeout(git, 320);
  else git();
}

function etkinlestir(id, ucur, beklet = false) {
  if (durum.etkin === id) return;
  const d = DURAKLAR.find((x) => x.id === id);
  if (!d) return;
  durum.etkin = id;

  for (const [key, k] of kartlar) k.classList.toggle("etkin", key === id);
  for (const [key, m] of isaretler) {
    const e = m.getElement();
    e.classList.toggle("etkin", key === id);
    e.classList.toggle("soluk", key !== id);
  }

  if (durum.gun !== d.gun) {
    durum.gun = d.gun;
    for (const b of document.querySelectorAll(".gun-chip")) {
      b.setAttribute("aria-current", String(Number(b.dataset.gun) === d.gun));
    }
    rotaVurgula(d.gun);
  }

  nilometreGuncelle(d);
  durumYaz(d);
  adimYaz(d);

  if (ucur) kameraGit(d, beklet);
}

function adimYaz(d) {
  const sira = DURAKLAR.indexOf(d) + 1;
  $("#adim-sayac").textContent = `${sira}/${DURAKLAR.length}`;
  $("#adim-geri").disabled = sira === 1;
  $("#adim-ileri").disabled = sira === DURAKLAR.length;
}

function durumYaz(d) {
  const kat = KATEGORILER[d.kategori];
  $("#harita-durum").innerHTML =
    `<b>${d.saat}</b> · Gün ${d.gun} · ${kat.ad}<br>${d.ad}<br>` +
    `${d.konum[1].toFixed(4)}°K, ${d.konum[0].toFixed(4)}°D`;
}

/* ————————————————————————————————— Durak modali */

/** Haritadaki işarete tıklayınca açılan ayrıntı penceresi. */
function modalAc(d) {
  const modal = $("#durak-modal");
  const kat = KATEGORILER[d.kategori];
  const bilgi = mekanBilgi(d.id);
  modal.innerHTML = "";
  modal.style.setProperty("--d-renk", kat.renk);

  const kapat = el("button", "modal-kapat", "×");
  kapat.type = "button";
  kapat.setAttribute("aria-label", "Kapat");
  kapat.addEventListener("click", () => modal.close());
  modal.append(kapat);

  if (bilgi.gorsel) {
    const cerceve = el("div", "modal-foto");
    cerceve.append(commonsGorsel(bilgi.gorsel, 960, d.ad));
    modal.append(cerceve);
  }

  const govde = el("div", "modal-govde");
  govde.append(el("p", "modal-ust", `${d.saat} · Gün ${d.gun} · ${kat.ad}`));
  const baslik = el("h3", null, d.ad);
  baslik.id = "modal-baslik";
  govde.append(baslik);
  if (d.alt) govde.append(el("p", "alt", d.alt));

  const kunye = kunyeYap(bilgi);
  if (kunye) govde.append(kunye);

  govde.append(el("p", "metin", d.aciklama));
  if (d.ipucu) govde.append(el("span", "ipucu", d.ipucu));

  if (d.etiket || d.kaynak === "oneri") {
    const rozetler = el("div", "rozetler");
    if (d.etiket) rozetler.append(el("span", "rozet vurgu", d.etiket));
    if (d.kaynak === "oneri") rozetler.append(el("span", "rozet oneri", "Sofra önerisi"));
    govde.append(rozetler);
  }

  const eylemler = el("div", "modal-eylemler");

  const gezildiBtn = el("button", "modal-eylem");
  gezildiBtn.type = "button";
  const gezildiYaz = () => {
    const g = gidildiMi(d.id);
    gezildiBtn.textContent = g ? "✓ Gezildi" : "Gezildi işaretle";
    gezildiBtn.setAttribute("aria-pressed", String(g));
    gezildiBtn.classList.toggle("secili", g);
  };
  gezildiBtn.addEventListener("click", () => {
    gidildiDegistir(d.id);
    boncukYenileyiciler.get(d.id)?.();
    gunIsaretleriGuncelle();
    gezildiYaz();
  });
  gezildiYaz();

  const cizelgeBtn = el("button", "modal-eylem", "Çizelgede gör");
  cizelgeBtn.type = "button";
  cizelgeBtn.addEventListener("click", () => {
    modal.close();
    kartlar.get(d.id)?.scrollIntoView({ behavior: sakin ? "auto" : "smooth", block: "center" });
  });

  const gmapsA = el("a", "modal-eylem", "Google Maps ↗");
  gmapsA.href = noktaUrl(d);
  gmapsA.target = "_blank";
  gmapsA.rel = "noopener";

  eylemler.append(gezildiBtn, cizelgeBtn, gmapsA);
  govde.append(eylemler);
  modal.append(govde);

  modal.showModal();
}

/** KML indirme: My Maps'e içe aktarılınca rota Google Maps'te açılır. */
function disariAktarKur() {
  $("#kml-btn")?.addEventListener("click", () => {
    const blob = new Blob([kmlOlustur(GUNLER, DURAKLAR, KATEGORILER)],
      { type: "application/vnd.google-earth.kml+xml" });
    const url = URL.createObjectURL(blob);
    const a = el("a");
    a.href = url;
    a.download = "nilden-kizildenize-rota.kml";
    a.click();
    URL.revokeObjectURL(url);
  });
}

function modalKur() {
  const modal = $("#durak-modal");
  // Karartıya tıklayınca kapat; Esc'i <dialog> kendisi karşılıyor.
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
}

/* ————————————————————————————————— Scroll senkronu */

function gozlemciKur() {
  const gozlemci = new IntersectionObserver((girisler) => {
    if (Date.now() < secimKilidi) return;
    const gorunen = girisler
      .filter((g) => g.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (gorunen) etkinlestir(gorunen.target.dataset.id, true, true);
  }, { rootMargin: "-22% 0px -58% 0px", threshold: 0 });

  for (const k of kartlar.values()) gozlemci.observe(k);
}

function komsuyaGit(adim) {
  const sira = DURAKLAR.map((d) => d.id);
  const i = sira.indexOf(durum.etkin);
  const sonraki = sira[i + adim];
  if (!sonraki) return false;
  kartlar.get(sonraki)?.scrollIntoView({ behavior: sakin ? "auto" : "smooth", block: "center" });
  return true;
}

function gezinmeKur() {
  document.addEventListener("keydown", (e) => {
    if (e.target instanceof Element && e.target.closest("input, textarea")) return;
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (komsuyaGit(e.key === "ArrowRight" ? 1 : -1)) e.preventDefault();
  });
  $("#adim-geri").addEventListener("click", () => komsuyaGit(-1));
  $("#adim-ileri").addEventListener("click", () => komsuyaGit(1));
}

/* ————————————————————————————————— Zemin değişimi */

let zeminZamanlayici = null;

/** Harita üstünde kısa süreli bilgi notu. */
function zeminNotu(metin) {
  let not = $("#zemin-not");
  if (!not) {
    not = el("p", "zemin-not");
    not.id = "zemin-not";
    not.setAttribute("role", "status");
    $(".harita-sarmal").append(not);
  }
  not.textContent = metin;
  not.classList.add("gorunur");
  clearTimeout(not._sure);
  not._sure = setTimeout(() => not.classList.remove("gorunur"), 6500);
}

function zeminUygula(indeks) {
  const z = ZEMINLER[indeks];
  durum.zemin = indeks;

  const btn = $("#zemin-btn");
  btn.textContent = z.ad;
  btn.setAttribute("aria-pressed", String(z.tip === "vektor"));

  haritaHazir = false;
  clearTimeout(zeminZamanlayici);

  if (z.tip === "raster") {
    map.setStyle(UYDU_STILI);
    return;
  }

  map.setStyle(z.url);

  // Vektör karo servisi yanıt vermezse sessizce boş harita bırakma; uyduya dön.
  zeminZamanlayici = setTimeout(() => {
    if (!haritaHazir && durum.zemin === indeks) {
      zeminNotu(`${z.ad} zemini yüklenemedi — uydu görünümüne dönüldü.`);
      zeminUygula(0);
    }
  }, 9000);
}

/* ————————————————————————————————— Harita araçları */

function araclarKur() {
  const zeminBtn = $("#zemin-btn");
  zeminBtn.addEventListener("click", () => {
    zeminUygula((durum.zemin + 1) % ZEMINLER.length);
  });

  const araziBtn = $("#arazi-btn");
  araziBtn.addEventListener("click", () => {
    durum.arazi = !durum.arazi;
    araziBtn.setAttribute("aria-pressed", String(durum.arazi));
    if (durum.arazi) {
      map.setTerrain({ source: "dem", exaggeration: 1.4 });
      map.easeTo({ pitch: Math.min(map.getPitch() + 12, 78), duration: sakin ? 0 : 900 });
    } else {
      map.setTerrain(null);
    }
  });
}

/** Üst şerit satır sayısı ekran genişliğine göre değişiyor; yüksekliği tahmin
    etmek yerine ölçüp yapışkan konumlandırmaya bildiriyoruz. */
function seritYuksekligiIzle() {
  const ust = $(".ust");
  const yaz = () =>
    document.documentElement.style.setProperty("--ust-h", `${Math.round(ust.getBoundingClientRect().height)}px`);
  yaz();
  new ResizeObserver(yaz).observe(ust);
}

/* ————————————————————————————————— Ölçüler */

function olculeriYaz() {
  let toplam = 0;
  for (let i = 0; i < DURAKLAR.length - 1; i++) {
    toplam += mesafe(DURAKLAR[i].konum, DURAKLAR[i + 1].konum);
  }
  $("#olcu-durak").textContent = DURAKLAR.length;
  $("#olcu-km").textContent = Math.round(toplam).toLocaleString("tr-TR");
  $("#olcu-enlem").textContent =
    (Math.max(...DURAKLAR.map((d) => d.konum[1])) - Math.min(...DURAKLAR.map((d) => d.konum[1]))).toFixed(1) + "°";
}

/* ————————————————————————————————— Hata perdesi */

function perdeHata(baslik, metin) {
  const perde = $("#perde");
  perde.hidden = false;
  perde.classList.remove("cikiyor");
  perde.innerHTML = "";
  perde.append(el("p", "hata-baslik", baslik), el("p", null, metin));
}

/* ————————————————————————————————— Başlat */

async function baslat() {
  // Harita olsun olmasın çalışması gereken her şey önce kurulur.
  panelKur();
  seritKur();
  seritYuksekligiIzle();
  nilometreKur();
  olculeriYaz();
  gezinmeKur();
  modalKur();
  disariAktarKur();
  gozlemciKur();
  gunIsaretleriGuncelle();

  // Derin bağlantı öncelikli; yoksa gezi haftasındaysak bugünün ilk
  // gezilmemiş durağına açıl — sayfa yolda, cepte kullanılacak.
  const geziGunu = bugununGunu(GUNLER);
  const hedef = location.hash.startsWith("#durak-")
    ? DURAKLAR.find((d) => `#durak-${d.id}` === location.hash)
    : (geziGunu ? ilkGezilmemis(DURAKLAR, geziGunu) : null);
  const ilk = hedef || DURAKLAR[0];

  try {
    maplibregl = await import("./vendor/maplibre/maplibre-gl.mjs");
  } catch (hata) {
    console.error(hata);
    perdeHata("Harita yüklenemedi",
      "Zaman çizelgesi aşağıda çalışmaya devam ediyor: her durak saati, açıklaması ve koordinatıyla listede.");
    etkinlestir(ilk.id, false);
    return;
  }

  try {
    map = new maplibregl.Map({
      container: "harita",
      style: UYDU_STILI,
      center: sakin ? ilk.konum : [30.8, 34.5],
      zoom: sakin ? (ilk.kamera?.zoom ?? 15) : 4.4,
      pitch: sakin ? (ilk.kamera?.pitch ?? 50) : 0,
      bearing: 0,
      attributionControl: { compact: true },
      maxPitch: 80,
    });
  } catch (hata) {
    console.error(hata);
    perdeHata("Harita açılamadı",
      "Tarayıcınız WebGL desteklemiyor olabilir. Zaman çizelgesi aşağıda çalışmaya devam ediyor.");
    etkinlestir(ilk.id, false);
    return;
  }

  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "bottom-right");
  // Dar ekranda ölçek çubuğu kaynak künyesiyle çakışıyor.
  if (window.innerWidth > 1000) {
    map.addControl(new maplibregl.ScaleControl({ unit: "metric" }), "bottom-left");
  }

  map.on("style.load", () => {
    haritaHazir = true;
    clearTimeout(zeminZamanlayici);
    const z = ZEMINLER[durum.zemin];
    if (z.tip === "vektor") {
      boya(map, z.palet);
      binaKabart(map, z.palet);
    }
    katmanlariKur();
  });

  map.once("load", () => {
    isaretleriKur();
    suzgecUygula();
    araclarKur();

    const perde = $("#perde");
    perde.classList.add("cikiyor");
    setTimeout(() => { perde.hidden = true; }, 520);

    // Açılış: yolculuk İstanbul'dan başlıyor, harita güneye iniyor.
    if (!sakin && !hedef) {
      setTimeout(() => etkinlestir(DURAKLAR[0].id, true), 450);
    } else {
      etkinlestir(ilk.id, true);
      if (hedef) kartlar.get(hedef.id)?.scrollIntoView({ block: "center" });
    }
  });

  map.on("error", (e) => {
    // Tek tek karo hataları normaldir (kapsama boşlukları); yalnızca konsola.
    console.warn("Harita uyarısı:", e?.error?.message || e);
  });
}

baslat();
