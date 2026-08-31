/**
 * Yerelde bakmak için küçük statik sunucu.
 *
 * Neden var: rota.html ES modülü kullandığı için dosyayı çift tıklayarak
 * açamıyorsunuz, sunucu gerekiyor. Ama sıradan bir statik sunucuda tarayıcı
 * CSS ve JS'i önbellekte tutup değişiklikleri göstermiyor — düzelttiğiniz
 * bir şeyi hâlâ bozuk görüyorsunuz. Bu sunucu her yanıta no-store koyuyor,
 * yani her yenilemede dosyanın güncel hâli geliyor.
 *
 * Kullanım:  node araclar/sunucu.mjs [port]
 *
 * Sadece geliştirme içindir; yayında GitHub Pages kendi başlıklarını veriyor.
 */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const KOK = new URL("..", import.meta.url).pathname;
const PORT = Number(process.argv[2]) || 8080;

const TURLER = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".kml": "application/vnd.google-earth.kml+xml",
  ".md": "text/markdown; charset=utf-8",
};

createServer(async (istek, yanit) => {
  try {
    // Yol gezinme koruması: kökün dışına çıkan istekleri reddet.
    const yol = decodeURIComponent(new URL(istek.url, "http://x").pathname);
    const guvenli = normalize(yol).replace(/^(\.\.[/\\])+/, "");
    let hedef = join(KOK, guvenli);

    let bilgi = await stat(hedef).catch(() => null);
    if (bilgi?.isDirectory()) {
      hedef = join(hedef, "index.html");
      bilgi = await stat(hedef).catch(() => null);
    }
    if (!bilgi) {
      yanit.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return yanit.end("Bulunamadı: " + guvenli);
    }

    const govde = await readFile(hedef);
    yanit.writeHead(200, {
      "Content-Type": TURLER[extname(hedef).toLowerCase()] || "application/octet-stream",
      // Asıl mesele bu satır.
      "Cache-Control": "no-store, must-revalidate",
    });
    yanit.end(govde);
  } catch (e) {
    yanit.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    yanit.end("Hata: " + e.message);
  }
}).listen(PORT, () => {
  console.log(`Hazır — http://localhost:${PORT}/          (dashboard)`);
  console.log(`        http://localhost:${PORT}/rota.html (gün gün rota)`);
  console.log("Önbellek kapalı: yenileyince değişiklikleri görürsünüz.");
});
