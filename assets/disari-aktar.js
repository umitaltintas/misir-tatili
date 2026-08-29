/**
 * Dışa aktarma — rotayı Google Maps tarafına taşıyan yardımcılar.
 *
 * KML: mymaps.google.com'a içe aktarılır; rota Google Maps uygulamasında
 * "Kayıtlı → Haritalar" altında açılır. Gün klasörleri, kategori renkleri
 * ve açıklamalar korunur.
 *
 * Yol tarifi URL'leri: Google Maps en çok ~9 ara nokta kabul ettiği için
 * tüm rota tek bağlantıya sığmaz; günlük bağlantılar bu sınırın içinde kalır.
 */

/** İki nokta arası mesafe, km (rota.js'tekiyle aynı; modül bağımsız kalsın). */
function mesafe([lon1, lat1], [lon2, lat2]) {
  const R = 6371, rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad, dLon = (lon2 - lon1) * rad;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/** Uçuş bacaklarını (>120 km) atıp günün en uzun karayolu kesitini döndürür. */
function enUzunKesit(duraklar) {
  const kesitler = [[]];
  for (const d of duraklar) {
    const son = kesitler[kesitler.length - 1];
    if (son.length && mesafe(son[son.length - 1].konum, d.konum) > 120) kesitler.push([d]);
    else son.push(d);
  }
  return kesitler.sort((a, b) => b.length - a.length)[0];
}

const enlemBoylam = (d) => `${d.konum[1].toFixed(5)},${d.konum[0].toFixed(5)}`;

/** Günün durakları arasında yol tarifi; iki karayolu durağı yoksa null. */
export function gunRotasiUrl(duraklar) {
  const kesit = enUzunKesit(duraklar);
  if (kesit.length < 2) return null;
  const p = new URLSearchParams({
    api: "1",
    origin: enlemBoylam(kesit[0]),
    destination: enlemBoylam(kesit[kesit.length - 1]),
    travelmode: "driving",
  });
  const ara = kesit.slice(1, -1).map(enlemBoylam).join("|");
  if (ara) p.set("waypoints", ara);
  return `https://www.google.com/maps/dir/?${p}`;
}

/** Tek durağı Google Maps'te iğneyle açar. */
export function noktaUrl(d) {
  return `https://www.google.com/maps/search/?api=1&query=${enlemBoylam(d)}`;
}

/* ————————————————————————————————— KML */

const xml = (s) => String(s)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

/** "#RRGGBB" → KML'in aabbggrr sırası. */
function kmlRenk(hex) {
  const [r, g, b] = [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)];
  return `ff${b}${g}${r}`.toLowerCase();
}

export function kmlOlustur(gunler, duraklar, kategoriler) {
  const stiller = Object.entries(kategoriler).map(([anahtar, kat]) => `
  <Style id="${anahtar}">
    <IconStyle>
      <color>${kmlRenk(kat.renk)}</color>
      <Icon><href>http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png</href></Icon>
    </IconStyle>
  </Style>`).join("");

  const klasorler = gunler.map((g) => {
    const gunun = duraklar.filter((d) => d.gun === g.no);

    const noktalar = gunun.map((d) => {
      const kat = kategoriler[d.kategori];
      const satirlar = [`Gün ${d.gun} · ${d.saat} · ${kat.ad}`, "", d.aciklama];
      if (d.ipucu) satirlar.push("", `İpucu: ${d.ipucu}`);
      return `
    <Placemark>
      <name>${xml(d.ad)}</name>
      <styleUrl>#${d.kategori}</styleUrl>
      <description><![CDATA[${satirlar.join("<br>")}]]></description>
      <Point><coordinates>${d.konum[0]},${d.konum[1]},0</coordinates></Point>
    </Placemark>`;
    }).join("");

    // Karayolu kesitleri çizgi olarak; uçuş bacakları çizilmez.
    const kesitler = [];
    for (const d of gunun) {
      const son = kesitler[kesitler.length - 1];
      if (son && mesafe(son[son.length - 1].konum, d.konum) <= 120) son.push(d);
      else kesitler.push([d]);
    }
    const hatlar = kesitler.filter((k) => k.length > 1).map((k) => `
    <Placemark>
      <name>Gün ${g.no} rotası</name>
      <styleUrl>#rota-hatti</styleUrl>
      <LineString><tessellate>1</tessellate><coordinates>
        ${k.map((d) => `${d.konum[0]},${d.konum[1]},0`).join(" ")}
      </coordinates></LineString>
    </Placemark>`).join("");

    return `
  <Folder>
    <name>Gün ${g.no} — ${xml(g.baslik)} (${xml(g.tarih)})</name>
    <description>${xml(g.tema)}</description>${noktalar}${hatlar}
  </Folder>`;
  }).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>Nil Boyunca — Kahire + Luxor, 24–30 Ekim 2026</name>
  <description>Konumlar yaklaşıktır; ören yerleri isabetli, restoran ve çarşı noktaları doğru sokağı gösterir.</description>
  <Style id="rota-hatti">
    <LineStyle><color>${kmlRenk("#C9A227")}</color><width>3</width></LineStyle>
  </Style>${stiller}${klasorler}
</Document>
</kml>
`;
}
