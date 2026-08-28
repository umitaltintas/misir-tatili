/**
 * Gezi modu — "gezildi" işaretleri ve gezi haftası yardımcıları.
 *
 * İşaretler localStorage'da saklanır (index.html'deki hazırlık listesiyle
 * aynı desen): sayfa kapansa da yolculuk boyunca durum korunur.
 */

const ANAHTAR = "rota-gezilen";

let gezilen = new Set();
try {
  const ham = JSON.parse(localStorage.getItem(ANAHTAR));
  if (Array.isArray(ham)) gezilen = new Set(ham);
} catch { /* okunamazsa boş başla */ }

function kaydet() {
  try { localStorage.setItem(ANAHTAR, JSON.stringify([...gezilen])); }
  catch { /* gizli pencere vb. — işaretler bu oturumla sınırlı kalır */ }
}

export function gidildiMi(id) {
  return gezilen.has(id);
}

export function gidildiDegistir(id) {
  if (gezilen.has(id)) gezilen.delete(id); else gezilen.add(id);
  kaydet();
  return gezilen.has(id);
}

/** Verilen durakların tamamı gezildi mi? (Gün çipine onay düşürmek için.) */
export function gunTamamMi(idler) {
  return idler.length > 0 && idler.every((id) => gezilen.has(id));
}

const AYLAR = {
  "Ocak": 0, "Şubat": 1, "Mart": 2, "Nisan": 3, "Mayıs": 4, "Haziran": 5,
  "Temmuz": 6, "Ağustos": 7, "Eylül": 8, "Ekim": 9, "Kasım": 10, "Aralık": 11,
};
const GEZI_YILI = 2026;

/** Bugün gezi günlerinden birine denk geliyorsa o günün numarası, değilse null. */
export function bugununGunu(gunler) {
  const simdi = new Date();
  for (const g of gunler) {
    const [gunNo, ayAdi] = g.tarih.split(" ");
    if (simdi.getFullYear() === GEZI_YILI &&
        simdi.getMonth() === AYLAR[ayAdi] &&
        simdi.getDate() === Number(gunNo)) return g.no;
  }
  return null;
}

/** Günün ilk gezilmemiş durağı; hepsi gezildiyse günün ilki. */
export function ilkGezilmemis(duraklar, gunNo) {
  const gunun = duraklar.filter((d) => d.gun === gunNo);
  return gunun.find((d) => !gezilen.has(d.id)) || gunun[0] || null;
}
