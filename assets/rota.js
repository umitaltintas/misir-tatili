import { DURAKLAR, GUNLER, KATEGORILER, UCUSLAR } from "./duraklar.js";
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


/* ————————————————————————————————— Yardımcılar */

const $ = (s, k = document) => k.querySelector(s);
const el = (tag, sinif, metin) => {
  const d = document.createElement(tag);
  if (sinif) d.className = sinif;
  if (metin != null) d.textContent = metin;
  return d;
};

/**
 * Vurgu etiketi (<b>, <i>) içerebilen alanlar için. İçerik bu repodaki
 * veri dosyalarından geliyor, kullanıcı girdisi yok — innerHTML güvenli.
 * Düz metin alanlarında el() kullanmaya devam edin.
 */
const zenginEl = (tag, sinif, html) => {
  const d = document.createElement(tag);
  if (sinif) d.className = sinif;
  if (html != null) d.innerHTML = html;
  return d;
};

/** Katlanabilir detay bloğu: özet hep görünür, gövde istendiğinde açılır. */
const katlanir = (sinif, baslik, html) => {
  const d = document.createElement("details");
  d.className = sinif;
  const s = document.createElement("summary");
  s.textContent = baslik;
  d.append(s);
  const g = document.createElement("div");
  g.className = "katlanir-govde";
  g.innerHTML = html;
  d.append(g);
  return d;
};

const sakin = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const durum = {
  etkin: null,
  gun: 1,
  gorunenGun: null,   // ekranda açık olan gün (tek gün modu)
  kapali: new Set(),
};

const kartlar = new Map();              // durak.id -> HTMLElement
const boncukYenileyiciler = new Map();  // durak.id -> boncuğu tazeleyen fn




/* ————————————————————————————————— Panel kurulumu */

function panelKur() {
  const panel = $("#panel");

  for (const gun of GUNLER) {
    const blok = el("section", "gun-blok");
    blok.id = `gun-${gun.no}`;
    blok.dataset.gun = gun.no;

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
  if (b.mesafe) bas.append(el("span", "gecis-veri", b.mesafe));
  if (b.ucret && b.ucret !== "—") bas.append(el("span", "gecis-veri", b.ucret));
  k.append(bas);

  if (b.ozet) bas.append(el("span", "gecis-ozet", b.ozet));

  // Ayrıntı ve uyarı katlı gelir: şerit tek bakışta okunsun, gerisi istendiğinde.
  const ek = [];
  if (b.detay) ek.push(`<p>${b.detay}</p>`);
  if (b.dikkat) ek.push(`<p class="gecis-dikkat"><b>Dikkat </b>${b.dikkat}</p>`);
  if (ek.length) k.append(katlanir("gecis-kat", "Ayrıntı", ek.join("")));

  return k;
}

/** Puan yerine doğrulanabilir künye: dönem, önerilen süre, UNESCO alanı. */
/** Künye tek satır: "1176 · 2 saat · Tarihi Kahire".
    Üç satırlık etiket-değer listesi kartın yarısını yiyordu. */
function kunyeYap(bilgi) {
  if (!bilgi.donem && !bilgi.unesco) return null;
  const kunye = el("p", "kunye");
  // Süre özet satırında zaten var, burada tekrarlamıyoruz.
  const parcalar = [];
  if (bilgi.donem) parcalar.push(["donem", bilgi.donem]);
  if (bilgi.unesco) parcalar.push(["unesco", bilgi.unesco]);
  parcalar.forEach(([tip, deger], i) => {
    if (i) kunye.append(el("span", "kunye-ayrac", "·"));
    const e = el("span", `kunye-parca k-${tip}`, deger);
    e.title = { donem: "Yapım/kuruluş tarihi", sure: "Önerilen süre", unesco: "UNESCO Dünya Mirası alanı" }[tip];
    kunye.append(e);
  });
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

  /* Satır = özet. Gezi listesi önce taranabilir olmalı; paragrafı her satıra
     yaymak dikey ritmi bozuyordu. Ayrıntı, durak seçilince altında açılır. */
  const ozet = el("div", "ozet");
  const ad = el("div", "ozet-ad");
  ad.append(el("h3", null, d.ad));
  if (d.alt) ad.append(el("p", "alt", d.alt));
  ozet.append(ad);

  // Satırda yalnızca süre: tararken işe yarayan tek künye alanı o.
  // Dönem ve UNESCO ayrıntıya iniyor.
  if (bilgi.sure) ozet.append(el("span", "ozet-sure", bilgi.sure));
  govde.append(ozet);

  const detay = el("div", "detay");
  const kunye = kunyeYap(bilgi);
  if (kunye) detay.append(kunye);

  if (bilgi.gorsel) {
    const cerceve = el("div", "foto-cerceve");
    cerceve.append(commonsGorsel(bilgi.gorsel, 640, d.ad));
    detay.append(cerceve);
  }

  detay.append(zenginEl("p", "metin", d.aciklama));
  if (d.ipucu) detay.append(katlanir("ipucu-kat", "İpucu", d.ipucu));

  // Kategori rozeti yok: ipliğin boncuk rengi ve üstteki süzgeç zaten söylüyor.
  if (d.etiket || d.kaynak === "oneri") {
    const rozetler = el("div", "rozetler");
    if (d.etiket) rozetler.append(el("span", "rozet vurgu", d.etiket));
    if (d.kaynak === "oneri") rozetler.append(el("span", "rozet oneri", "Sofra önerisi"));
    detay.append(rozetler);
  }

  // Gömülü harita kaldırıldı; konum için doğrudan Google Maps bağlantısı.
  const konumBag = el("a", "konum-bag", "Haritada aç ↗");
  konumBag.href = noktaUrl(d);
  konumBag.target = "_blank";
  konumBag.rel = "noopener";
  konumBag.addEventListener("click", (e) => e.stopPropagation());
  detay.append(konumBag);

  govde.append(detay);
  k.append(govde);

  /* Açılma tıklamaya bağlı, kaydırmaya değil: gözlemci etkin durağı
     değiştirdikçe kartlar açılıp kapansa sayfa okurken altınızda zıplardı. */
  const sec = () => {
    history.replaceState(null, "", `#durak-${d.id}`);
    k.classList.toggle("acilmis");
    etkinlestir(d.id, true);
  };
  k.addEventListener("click", sec);
  k.addEventListener("keydown", (e) => {
    if (e.target !== k) return;  // boncuğun kendi Enter'ına karışma
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sec(); }
  });

  kartlar.set(d.id, k);
  return k;
}

/* ————————————————————————————————— Gün gün görünüm

   Sayfa 32 durağı tek akışta gösterince 28.000 pikseli aşıyordu ve harita
   metnin ihtiyacı olan genişliği yiyordu. Artık ekranda tek gün duruyor;
   günler arasında çipler ya da alt/üstteki ileri-geri düğmeleriyle geçiliyor. */

/** Ekranda yalnızca verilen günü bırakır. */
function gunGoster(no, odakla = true) {
  if (durum.gorunenGun === no) return;
  durum.gorunenGun = no;

  for (const blok of document.querySelectorAll(".gun-blok")) {
    blok.classList.toggle("acik", Number(blok.dataset.gun) === no);
  }
  for (const b of document.querySelectorAll(".gun-chip")) {
    b.setAttribute("aria-current", String(Number(b.dataset.gun) === no));
  }
  gunNavYaz(no);

  if (odakla) {
    const ilk = DURAKLAR.find((d) => d.gun === no);
    if (ilk) {
      etkinlestir(ilk.id, true);
      window.scrollTo({ top: 0, behavior: sakin ? "auto" : "smooth" });
    }
  }
}

/** Alt gezinme: önceki/sonraki gün düğmeleri ve ortadaki etiket. */
function gunNavYaz(no) {
  const g = GUNLER.find((x) => x.no === no);
  const onceki = GUNLER.find((x) => x.no === no - 1);
  const sonraki = GUNLER.find((x) => x.no === no + 1);

  for (const kutu of document.querySelectorAll(".gun-nav")) {
    const geri = kutu.querySelector(".gun-nav-geri");
    const ileri = kutu.querySelector(".gun-nav-ileri");
    const etiket = kutu.querySelector(".gun-nav-etiket");

    geri.disabled = !onceki;
    ileri.disabled = !sonraki;
    // Şehir adı ayrı span: dar ekranda gizlenip düğme metni kırpılmasın.
    geri.innerHTML = onceki
      ? `‹ Gün ${onceki.no}<span class="gun-nav-sehir"> · ${onceki.sehir}</span>`
      : "‹ İlk gün";
    ileri.innerHTML = sonraki
      ? `Gün ${sonraki.no}<span class="gun-nav-sehir"> · ${sonraki.sehir}</span> ›`
      : "Son gün ›";
    if (etiket) etiket.textContent = g ? `${g.tarih} ${g.gunAdi}` : "";
  }
}

function gunNavKur() {
  for (const kutu of document.querySelectorAll(".gun-nav")) {
    kutu.querySelector(".gun-nav-geri")
      .addEventListener("click", () => gunGoster(durum.gorunenGun - 1));
    kutu.querySelector(".gun-nav-ileri")
      .addEventListener("click", () => gunGoster(durum.gorunenGun + 1));
  }

  // Okuma modu: taramak yerine günün tamamını okumak isteyenler için
  // bütün ayrıntılar açık kalır. Tercih tarayıcıda saklanır.
  const dugmeler = [...document.querySelectorAll(".hepsi-btn")];
  const yaz = (acik) => {
    document.body.classList.toggle("hepsi-acik", acik);
    for (const b of dugmeler) {
      b.setAttribute("aria-pressed", String(acik));
      b.textContent = acik ? "Hepsini kapat" : "Hepsini aç";
    }
    try { localStorage.setItem("rota-hepsi-acik", acik ? "1" : "0"); } catch {}
  };
  let baslangic = false;
  try { baslangic = localStorage.getItem("rota-hepsi-acik") === "1"; } catch {}
  yaz(baslangic);
  for (const b of dugmeler) {
    b.addEventListener("click", () => yaz(!document.body.classList.contains("hepsi-acik")));
  }
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
    b.addEventListener("click", () => gunGoster(g.no));
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




/* ————————————————————————————————— Harita katmanları */




/* ————————————————————————————————— İşaretler */


/* ————————————————————————————————— Etkin durak */



function etkinlestir(id, ucur, beklet = false) {
  if (durum.etkin === id) return;
  const d = DURAKLAR.find((x) => x.id === id);
  if (!d) return;
  durum.etkin = id;

  for (const [key, k] of kartlar) k.classList.toggle("etkin", key === id);

  if (durum.gun !== d.gun) {
    durum.gun = d.gun;
    gunGoster(d.gun, false);
  }

}



/* ————————————————————————————————— Durak modali */


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

/* <details> baskıda CSS ile açılmıyor; yazdırmadan önce elle açıp sonra
   eski hâline döndürüyoruz ki çıktıda hiçbir bilgi eksik kalmasın. */
function baskiKur() {
  let acilanlar = [];
  addEventListener("beforeprint", () => {
    acilanlar = [...document.querySelectorAll("details:not([open])")];
    for (const d of acilanlar) d.open = true;
  });
  addEventListener("afterprint", () => {
    for (const d of acilanlar) d.open = false;
    acilanlar = [];
  });
}


/* ————————————————————————————————— Scroll senkronu */


function komsuyaGit(adim) {
  const i = DURAKLAR.findIndex((d) => d.id === durum.etkin);
  const sonraki = DURAKLAR[i + adim];
  if (!sonraki) return false;

  // Gün sınırını geçiyorsak önce o günü aç, yoksa kart gizli kalır.
  if (sonraki.gun !== durum.gorunenGun) {
    gunGoster(sonraki.gun, false);
  }
  etkinlestir(sonraki.id, true);
  const hedefKart = kartlar.get(sonraki.id);
  hedefKart?.classList.add("acilmis");
  hedefKart?.scrollIntoView({ behavior: sakin ? "auto" : "smooth", block: "center" });
  return true;
}

function gezinmeKur() {
  document.addEventListener("keydown", (e) => {
    if (e.target instanceof Element && e.target.closest("input, textarea")) return;
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (komsuyaGit(e.key === "ArrowRight" ? 1 : -1)) e.preventDefault();
  });
}

/* ————————————————————————————————— Zemin değişimi */



/* ————————————————————————————————— Harita araçları */


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

/** İki nokta arası kuş uçuşu mesafe, km. Üstteki "km yol" sayacı için. */
function mesafe([lon1, lat1], [lon2, lat2]) {
  const R = 6371, rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad, dLon = (lon2 - lon1) * rad;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

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



/* ————————————————————————————————— Başlat */

function baslat() {
  panelKur();
  seritKur();
  gunNavKur();
  seritYuksekligiIzle();
  olculeriYaz();
  gezinmeKur();
  baskiKur();
  disariAktarKur();
  gunIsaretleriGuncelle();
  suzgecUygula();

  // Derin bağlantı öncelikli; yoksa gezi haftasındaysak bugünün ilk
  // gezilmemiş durağına açıl — sayfa yolda, cepte kullanılacak.
  const geziGunu = bugununGunu(GUNLER);
  const hedef = location.hash.startsWith("#durak-")
    ? DURAKLAR.find((d) => `#durak-${d.id}` === location.hash)
    : (geziGunu ? ilkGezilmemis(DURAKLAR, geziGunu) : null);
  const ilk = hedef || DURAKLAR[0];

  gunGoster(ilk.gun, false);
  etkinlestir(ilk.id);

  if (hedef) {
    kartlar.get(hedef.id)?.classList.add("acilmis");
    kartlar.get(hedef.id)?.scrollIntoView({ block: "center" });
  }
}

baslat();
