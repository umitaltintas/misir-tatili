/**
 * index.html'in gün gün program listelerini assets/duraklar.js'ten üretir.
 *
 * Neden var: index.html bilerek kendi kendine yeten tek bir dosya —
 * çift tıklayınca, internetsiz açılıyor. Bu yüzden ES modülü import
 * edemiyor ve durak bilgisini kendi içinde tutmak zorunda. Sonuç olarak
 * aynı bilgi iki yerde duruyordu ve elle güncellendikçe ayrışıyordu.
 *
 * Bu betik duraklar.js'i tek doğruluk kaynağı yapar: her günün
 * <ul class="stops" data-gun="N"> bloğunun içini yeniden yazar.
 * Ürettiği HTML commit'lendiği için index.html çevrimdışı çalışmaya
 * devam eder.
 *
 * Kullanım:  node araclar/program-uret.mjs
 *            node araclar/program-uret.mjs --kontrol   (yazmaz, fark var mı bakar)
 *
 * Elle yazılmış kısımlara (fotoğraflar, gün başlıkları, tema satırları)
 * dokunmaz — onlar index.html'de kalır.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { DURAKLAR, GUNLER } from "../assets/duraklar.js";

const HEDEF = new URL("../index.html", import.meta.url);
const kontrolMu = process.argv.includes("--kontrol");

/** & < > kaçışı. Zaten <b> içeren alanlar için kullanılmaz. */
const kacir = (t) => t.replace(/&(?!(?:amp|lt|gt|quot|#\d+);)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Vurgu etiketlerini ve bağlantıları koru, gerisini kaçır. */
const KORUNAN = /^(<\/?[bi]>|<a href="[^"<>]*"(?: target="_blank" rel="noopener")?>|<\/a>)$/;
function zengin(metin) {
  return metin
    .split(/(<\/?[bi]>|<a [^<>]*>|<\/a>)/)
    .map((p) => (KORUNAN.test(p) ? p : kacir(p)))
    .join("");
}

function duraklariYaz(gunNo) {
  const gunun = DURAKLAR.filter((d) => d.gun === gunNo);
  if (!gunun.length) throw new Error(`Gün ${gunNo} için durak yok`);

  return gunun
    .map((d) => {
      // Özet hep görünür; "Neye bakmalı" anlatımı ve ipucu katlanır.
      // <details> betiksiz de çalışır, index.html çevrimdışı kalır.
      const NEYE = "<b>Neye bakmalı:</b>";
      const kes = d.aciklama.indexOf(NEYE);
      const ozet = kes < 0 ? d.aciklama : d.aciklama.slice(0, kes).trim();
      const anlatim = kes < 0 ? "" : d.aciklama.slice(kes + NEYE.length).trim();

      const ic = [];
      if (anlatim) ic.push(`<span class="anlatim">${zengin(anlatim)}</span>`);
      if (d.ipucu) ic.push(`<span class="ipucu-mini">${zengin(d.ipucu)}</span>`);
      const etiket = anlatim && d.ipucu ? "Neye bakmalı · ipucu" : anlatim ? "Neye bakmalı" : "İpucu";
      const devam = ic.length
        ? `<details class="devam"><summary>${etiket}</summary>${ic.join("")}</details>`
        : "";
      return (
        `<li><span class="t">${kacir(d.saat)}</span>` +
        `<div class="what"><b>${kacir(d.ad)}</b>` +
        `<span>${zengin(ozet)}</span>${devam}</div></li>`
      );
    })
    .join("\n              ");
}

let html = readFileSync(HEDEF, "utf8");
const once = html;
let degisen = 0;

for (const g of GUNLER) {
  const kalip = new RegExp(
    `(<ul class="stops" data-gun="${g.no}">)([\\s\\S]*?)(</ul>)`,
    "m"
  );
  if (!kalip.test(html)) throw new Error(`index.html'de data-gun="${g.no}" bulunamadı`);
  html = html.replace(kalip, (_m, bas, eski, son) => {
    const yeni = `\n              ${duraklariYaz(g.no)}\n            `;
    if (eski !== yeni) degisen++;
    return bas + yeni + son;
  });
}

if (kontrolMu) {
  if (html !== once) {
    console.error(`index.html güncel değil — ${degisen} gün farklı. Çalıştırın: node araclar/program-uret.mjs`);
    process.exit(1);
  }
  console.log("index.html duraklar.js ile uyumlu.");
} else {
  writeFileSync(HEDEF, html);
  console.log(
    degisen === 0
      ? "Değişiklik yok, index.html zaten güncel."
      : `${degisen} günün program listesi yeniden üretildi (${DURAKLAR.length} durak).`
  );
}
