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
- **Canlı bütçe hesabı** — dolar kurunu yazın, kalemleri açıp kapatın; toplam, paket
  turlarla fark ve giriş/kapanış özetleri anında yeniden hesaplanır
- **Hazırlık listesi** — 12 maddelik yapılacaklar; işaretler `localStorage`'da saklanır
- **Bölüm çubuğu** — hero geçilince belirir, bulunduğunuz bölümü vurgular
- **Sekiz altın kural** — bayram haftası bilet uyarısı, GEM ön bileti, kartla ödeme zorunluluğu
- Kalkışa kalan gün sayısı ve yazdırmaya uygun çıktı düzeni

Tek dosyalık statik sayfa — CSS ve JS gömülü, `file://` üzerinden de açılır. Görseller
Wikimedia Commons'tan (CC) çalışma anında çekilir; bir dosya adı bulunamazsa sonraki
alternatif denenir.

### Nil Boyunca (`rota.html`)

27 durağın tamamı saatiyle, kategorisiyle ve harita üzerindeki yeriyle.

- **Kaydırdıkça harita güneye iner** — sayfanın dikey ekseni gerçek enlemi izler,
  Kahire 30.1°K'den Luxor 25.7°K'ye. Soldaki *nilometre* o anki enlemi gösterir.
- **Her durağın kendi kamera açısı var** — Gize'ye güneybatıdan, Hatşepsut'a
  kayalığın üstünden bakılır.
- **Katman süzgeçleri** — antik miras, İslami Kahire, müze, sofra, deneyim, ulaşım
- **Üç zemin** — uydu (raster), gece ve papirüs (vektör). Vektör zeminler sayfanın
  paletine göre çalışma anında yeniden renklendirilir; yüksek yakınlaştırmada
  binalar kabarır. Vektör servisi yanıt vermezse harita kendiliğinden uyduya döner.
- **3D arazi** — yükseklik verisiyle kabartma (Krallar Vadisi'nde belirgin)
- Klavyeyle gezinme (`←` `→`), durak bazlı derin bağlantı (`#durak-karnak`)

## Teknik

Derleme adımı yok — dosyalar olduğu gibi yayınlanıyor.

```
index.html              Programın tamamı (kendi içinde bağımsız)
rota.html               İnteraktif harita + zaman çizelgesi
assets/duraklar.js      Rota verisi: koordinat, saat, kategori, kamera
assets/zeminler.js      Harita zeminleri ve palet renklendirmesi
assets/rota.js          Harita, scroll senkronu, süzgeçler
assets/rota.css         Tasarım katmanı
assets/vendor/maplibre  MapLibre GL JS 6.1.0 (BSD-3-Clause, repoda sabit)
```

Vektör zeminler katmanları kaynak adına göre değil `source-layer` değerine göre
eşleştirir (OpenMapTiles şeması), böylece taban stil değişse de renklendirme
çalışmaya devam eder.

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
| Uydu etiketleri | CARTO, © OpenStreetMap katkıcıları |
| Vektör karolar (gece / papirüs) | OpenFreeMap, © OpenStreetMap katkıcıları — API anahtarı gerektirmez |
| Yükseklik (3D) | AWS Terrain Tiles (terrarium) |

## Notlar

Fiyatlar Temmuz 2026 araştırmasına dayalı tahmindir ($ ≈ 46,6 ₺) ve bağlayıcı değildir.

Harita konumları yaklaşıktır: ören yerleri isabetli, restoran ve çarşı noktaları
doğru sokağı gösterir ama kapı numarası vermez. "Sofra önerisi" rozetli duraklar
ana programda geçmez, rotaya uyduğu için eklenmiştir — gitmeden önce güncel adres
ve çalışma saatlerini doğrulayın.
