# Kahire + Luxor — 24–30 Ekim 2026

İki kişilik, 6 gece 7 günlük kültür odaklı Mısır gezisi planı. Cruise ve plaj yok;
bütçenin tamamı antik ve İslami mirasa ayrılmış.

## Sayfalar

| Sayfa | Adres |
|---|---|
| Programın tamamı — gün gün plan, bütçe tablosu, ipuçları | [/](https://umitaltintas.github.io/misir-tatili/) |
| Nil Boyunca — interaktif harita ve zaman çizelgesi | [/rota.html](https://umitaltintas.github.io/misir-tatili/rota.html) |

### Programın tamamı (`index.html`)

- **Gün gün program** — Gize, Sakkara, İslami Kahire, Karnak, Krallar Vadisi, Medinet Habu
- **Bütçe tablosu** — 2 kişi ≈ 72–92 bin ₺ (Temmuz 2026 fiyat araştırması)
- **Sekiz altın kural** — bayram haftası bilet uyarısı, GEM ön bileti, kartla ödeme zorunluluğu

Tek dosyalık statik sayfa. Görseller Wikimedia Commons'tan (CC) çalışma anında çekilir;
bir dosya adı bulunamazsa sonraki alternatif denenir.

### Nil Boyunca (`rota.html`)

27 durağın tamamı saatiyle, kategorisiyle ve harita üzerindeki yeriyle.

- **Kaydırdıkça harita güneye iner** — sayfanın dikey ekseni gerçek enlemi izler,
  Kahire 30.1°K'den Luxor 25.7°K'ye. Soldaki *nilometre* o anki enlemi gösterir.
- **Her durağın kendi kamera açısı var** — Gize'ye güneybatıdan, Hatşepsut'a
  kayalığın üstünden bakılır.
- **Katman süzgeçleri** — antik miras, İslami Kahire, müze, sofra, deneyim, ulaşım
- **Uydu / çizim** zemin değişimi ve **3D arazi** (Krallar Vadisi'nde belirgin)
- Klavyeyle gezinme (`←` `→`), durak bazlı derin bağlantı (`#durak-karnak`)

## Teknik

Derleme adımı yok — dosyalar olduğu gibi yayınlanıyor.

```
index.html              Programın tamamı (kendi içinde bağımsız)
rota.html               İnteraktif harita + zaman çizelgesi
assets/duraklar.js      Rota verisi: koordinat, saat, kategori, kamera
assets/rota.js          Harita, scroll senkronu, süzgeçler
assets/rota.css         Tasarım katmanı
assets/vendor/maplibre  MapLibre GL JS 6.1.0 (BSD-3-Clause, repoda sabit)
```

MapLibre CDN yerine repoda tutuluyor: sürüm sabit kalıyor ve web worker
same-origin çalıştığı için CORS sorunu çıkmıyor.

Yerelde çalıştırmak için bir HTTP sunucusu gerekir (ES modülleri `file://`
üzerinden yüklenmez):

```sh
python3 -m http.server 8000
```

### Harita veri kaynakları

| Katman | Kaynak |
|---|---|
| Uydu | Esri World Imagery (Esri, Maxar, Earthstar Geographics) |
| Etiket ve çizim zemin | CARTO, © OpenStreetMap katkıcıları |
| Yükseklik (3D) | AWS Terrain Tiles (terrarium) |

## Notlar

Fiyatlar Temmuz 2026 araştırmasına dayalı tahmindir ($ ≈ 46,6 ₺) ve bağlayıcı değildir.

Harita konumları yaklaşıktır: ören yerleri isabetli, restoran ve çarşı noktaları
doğru sokağı gösterir ama kapı numarası vermez. "Sofra önerisi" rozetli duraklar
ana programda geçmez, rotaya uyduğu için eklenmiştir — gitmeden önce güncel adres
ve çalışma saatlerini doğrulayın.
