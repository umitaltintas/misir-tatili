# Kahire + Luxor + Şarm El-Şeyh — 21–27 Kasım 2026

İki kişilik, 6 gece 7 günlük Mısır gezisi planı: beş gün antik ve İslami miras,
son iki gün Kızıldeniz. İslami Kahire tek yoğun güne toplandı; kazanılan zaman
Şarm El-Şeyh'e ayrıldı ve dönüş uçuşu Şarm'dan (açık çeneli bilet).

## Sayfalar

| Sayfa | Adres |
|---|---|
| Programın tamamı — gün gün plan, bütçe tablosu, konaklama, ipuçları | [/](https://umitaltintas.github.io/misir-tatili/) |
| Nil'den Kızıldeniz'e — interaktif harita ve zaman çizelgesi | [/rota.html](https://umitaltintas.github.io/misir-tatili/rota.html) |

### Programın tamamı (`index.html`)

- **Gün gün program** — Gize, Sakkara, İslami Kahire (tek günde), Karnak, Krallar
  Vadisi, Medinet Habu, Ras Mohammed ve Sharks Bay
- **İbadet planı** — yedi günün vakit namazları, o gün bulunulan şehrin koordinatından
  çalışma anında hesaplanır (Diyanet açıları 18°/17°, **Hanefî** ikindi); aktarma
  günlerinde tablo şehri vakit vakit değiştirir. Her gün için vaktin programda nereye
  denk geldiği yazılı: ikindi Sultan Hasan'da, akşam Luxor Tapınağı'ndaki Ebu'l-Haccac
  Camii'nde, öğle Ras Mohammed teknesinde. Üç şehir için kıble açısı, ve Mısır'daki iki
  fark: camiler ikindiyi Şafiî ölçüsüyle ~45 dk önce, imsakı ~7 dk erken okur
- **Canlı bütçe hesabı** — dolar kurunu yazın, kalemleri açıp kapatın; toplam, paket
  turlarla fark ve giriş/kapanış özetleri anında yeniden hesaplanır
- **Para ve nakit paneli** — ne kadar nakit alınacağı (2 kişi ≈430 $), nerede
  bozdurulacağı, hangi harcamanın nakit hangisinin kart olduğu, şehir bazında
  günlük EGP ihtiyacı ve bahşiş aralıkları. ATM'de DCC tuzağı, çarşıda döviz
  uzatmama kuralı ve varış günü bankaların kapalı olması ayrıca işaretli
- **Konaklama rehberi** — üç şehir için araştırılmış otel önerileri: gecelik fiyat
  aralığı, konum gerekçesi ve artı/eksiler (Ağustos 2026 araştırması). Her kartın
  başında şehrin otelinden bir Commons fotoğrafı, her otel adı da Google Maps'te
  o oteli arayan bir bağlantı
- **Ulaşım rehberi** — Kahire'de Uber, Luxor'da taksi pazarlığı, batı yakasına geçiş,
  Şarm'da transfer düzeni, trafik saatleri ve kaçınılacaklar
- **Hazırlık listesi** — 19 maddelik yapılacaklar; işaretler `localStorage`'da saklanır
- **Bölüm çubuğu** — hero geçilince belirir, bulunduğunuz bölümü vurgular
- **On iki altın kural** — yüksek sezon bilet uyarısı, Luxor–Şarm direkt sefer günleri,
  GEM ön bileti, ören girişlerinde kart zorunluluğu, şişe suyu kuralı, "bedava" tuzağı
  ve pazarlıkta anchor fiyat
- Kalkışa kalan gün sayısı ve yazdırmaya uygun çıktı düzeni

Tek dosyalık statik sayfa — CSS ve JS gömülü, `file://` üzerinden de açılır. Görseller
Wikimedia Commons'tan (CC) çalışma anında çekilir; bir dosya adı bulunamazsa sonraki
alternatif denenir.

### Nil'den Kızıldeniz'e (`rota.html`)

29 durağın tamamı saatiyle, kategorisiyle ve harita üzerindeki yeriyle.

- **Görsel ve künye** — 24 mekân için Wikimedia Commons fotoğrafı, dönem bilgisi,
  önerilen süre ve UNESCO alanı. Görsel yüklenemezse çerçeve iz bırakmadan kalkar.
- **Duraklar arası ulaşım** — her geçiş için araç türü, süre, ücret ve dikkat notu:
  hangi noktada Uber çalışır, nerede şoförü bekletmek gerekir, feribot mu köprü mü.
  Yürünen bacaklar haritada noktalı çizgiyle ayrılır ve **ölçülmüş mesafe** taşır:
  OpenStreetMap yol ağı üzerinden yaya profiliyle (Valhalla, BRouter ile çapraz
  kontrollü) — kuş uçuşu değil, gerçek yürüme yolu. Hafta boyunca yürünen toplam
  8,7 km.
- **Yol ipliği** — zaman çizelgesi kesintisiz bir hatla örülü: duraklar kategori
  renginde boncuk, geçişler ulaşım türünün renginde segment, yürüyüşler noktalı.
- **Gezi modu** — boncuğa dokununca durak "gezildi" işaretlenir (`localStorage`);
  günün tüm durakları bitince gün çipine ✓ düşer. Gezi haftasında sayfa, bugünün
  ilk gezilmemiş durağına açılır.
- **Adım pili** — haritanın altındaki ‹ n/27 › denetimiyle dokunmatikte de durak
  durak gezilir.
- **Durak modali** — haritadaki işarete tıklayınca fotoğraf, künye, açıklama ve
  ipucuyla ayrıntı penceresi açılır; "gezildi" işareti buradan da atılabilir.
- **Google Maps aktarımı** — kapanıştaki düğme rotayı KML indirir
  ([My Maps](https://mymaps.google.com)'e içe aktarınca telefonda *Kayıtlı → Haritalar*
  altında gün gün klasörlü açılır). Gün başlıkları günün karayolu kesiti için yol
  tarifi bağlantısı taşır, modaldeki *Google Maps ↗* tek durağı iğneyle açar.
- **Sakin kamera** — kaydırma durulana dek kamera bekler; komşu duraklara kısa
  geçiş (`easeTo`), şehirler arasında gerçek uçuş (`flyTo`).

- **Kaydırdıkça harita güneye iner** — sayfanın dikey ekseni gerçek enlemi izler,
  Kahire 30.1°K'den Luxor 25.7°K'ye; son günlerde Sina'nın ucuna, Şarm'a (27.9°K)
  sıçrar. Soldaki *nilometre* o anki enlemi gösterir.
- **Her durağın kendi kamera açısı var** — Gize'ye güneybatıdan, Hatşepsut'a
  kayalığın üstünden bakılır.
- **Katman süzgeçleri** — antik miras, İslami Kahire, müze, sofra, deneyim, Kızıldeniz, ulaşım
- **Üç zemin** — uydu (raster), gece ve papirüs (vektör). Vektör zeminler sayfanın
  paletine göre çalışma anında yeniden renklendirilir; yüksek yakınlaştırmada
  binalar kabarır. Vektör servisi yanıt vermezse harita kendiliğinden uyduya döner.
- **3D arazi** — yükseklik verisiyle kabartma (Krallar Vadisi'nde belirgin)
- Klavyeyle gezinme (`←` `→`), durak bazlı derin bağlantı (`#durak-karnak`)

## Teknik

Derleme adımı yok — dosyalar olduğu gibi yayınlanıyor.

```
bloglar/                Planın karşılaştırıldığı sekiz gezi yazısı (ham kaynak)
index.html              Programın tamamı (kendi içinde bağımsız)
rota.html               İnteraktif harita + zaman çizelgesi
assets/duraklar.js      Rota verisi: koordinat, saat, kategori, kamera
assets/baglantilar.js   Duraklar arası ulaşım: tür, süre, ücret, uyarılar
assets/gezi-modu.js     "Gezildi" işaretleri (localStorage) ve gezi haftası yardımcıları
assets/disari-aktar.js  Google Maps aktarımı: KML üretimi ve yol tarifi URL'leri
assets/mekan-bilgi.js   Görsel dosya adları ve künye (dönem, süre, UNESCO)
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

## Kaynaklar

Plan Ağustos 2026 masabaşı araştırmasıyla kuruldu; sonra `bloglar/` altındaki sekiz
gezi yazısı (kişisel seyahat notları, tur operatörü rehberleri ve 190 girdilik bir
ekşi sözlük başlığı) okunup her iddia planla karşılaştırıldı. Birden fazla bağımsız
kaynakta tekrar eden ve somut olan bilgiler alındı; tek kişilik anekdotlar ve
gitmemiş kişilerin yorumları elendi. Fiyat ve prosedür gibi hızlı eskiyen kalemler
ayrıca güncel web kaynaklarından doğrulandı — kapıda vize ücretinin Mart 2026'da
25 $'dan 30 $'a çıktığı bu şekilde yakalandı.

## Notlar

Fiyatlar Ağustos 2026 araştırmasına dayalı tahmindir ($ ≈ 46,6 ₺) ve bağlayıcı değildir.
Otel fiyatları çift kişilik oda gecelik tahminleridir; Kasım yüksek sezonda artabilir.
Luxor→Şarm direkt seferi (Air Cairo, pzt/çrş/cmt) plana temel alınmıştır — bilet
almadan önce o haftaki sefer gün ve saatini doğrulayın.

Harita konumları yaklaşıktır: ören yerleri isabetli, restoran ve çarşı noktaları
doğru sokağı gösterir ama kapı numarası vermez. "Sofra önerisi" rozetli duraklar
ana programda geçmez, rotaya uyduğu için eklenmiştir — gitmeden önce güncel adres
ve çalışma saatlerini doğrulayın.

Sayfalarda bilinçli olarak puan veya kullanıcı yorumu yok. Bunlar Google ve
Tripadvisor gibi kaynaklara ait canlı verilerdir; uydurulmuş bir puan gerçek
sanılacağı için hiç konmadı. Yerine doğrulanabilir künye tercih edildi: yapının
dönemi, önerilen süre, UNESCO alanı.

Ulaşım süreleri ve EGP tutarları da tahmindir. Mısır'da enflasyon yüksek seyrettiği
için yerel para birimindeki rakamlar hızla eskiyor; taksi ve feribot ücretlerini
gitmeden doğrulayın.
