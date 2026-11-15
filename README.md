# Kahire + Şarm El-Şeyh + Luxor — 4–11 Aralık 2026

Dört kişilik, 7 gece 8 günlük Mısır gezisi planı: Kahire'de 3 gece (iki tam gün:
İslami Kahire, Gize ve GEM), Şarm El-Şeyh'te 4 gece. Luxor'da konaklama yok; 9 Aralık
çarşamba günü Şarm'dan uçaklı günübirlik turla (Travco) geziliyor. Gidiş
(4 Aralık, AJet 22:10) ve dönüş (11 Aralık, Şarm'dan Pegasus 10:50) biletleri
alındı. Güncel kararlar ve açık işler: [DURUM.md](DURUM.md).

## Sayfalar

| Sayfa | Adres |
|---|---|
| Programın tamamı — gün gün plan, bütçe tablosu, konaklama, ipuçları | [/](https://umitaltintas.github.io/misir-tatili/) |
| Nil'den Kızıldeniz'e — gün gün zaman çizelgesi | [/rota.html](https://umitaltintas.github.io/misir-tatili/rota.html) |
| Gitmeden önce — okuma, izleme ve dinleme listesi | [/kaynaklar.html](https://umitaltintas.github.io/misir-tatili/kaynaklar.html) |

### Programın tamamı (`index.html`)

- **Gün gün program** — İslami Kahire (tek günde), Gize ve GEM, Şarm'dan günübirlik Luxor (Krallar Vadisi, Hatşepsut, Karnak),
  Ras Mohammed, serbest bir deniz günü, Eski Şarm ve Sina'da quad + deve safarisi. Her durakta kısa özet görünür;
  "Neye bakmalı" anlatımı ve ipucu dokununca açılır (baskıda hepsi açık çıkar)
- **İbadet planı** — sekiz günün vakit namazları, o gün bulunulan şehrin koordinatından
  çalışma anında hesaplanır (Diyanet açıları 18°/17°, **Hanefî** ikindi); aktarma
  günlerinde tablo şehri vakit vakit değiştirir. Her gün için vaktin programda nereye
  denk geldiği yazılı: öğle Sultan Hasan'da, yatsı çölde Bedevi
  kampında ve Eski Şarm'daki Es-Sahabe Camii'nde, öğle Ras Mohammed teknesinde. Üç şehir için kıble açısı, ve Mısır'daki iki
  fark: camiler ikindiyi Şafiî ölçüsüyle ~45 dk önce, imsakı ~7 dk erken okur
- **Canlı bütçe hesabı** — dolar kurunu yazın, kalemleri açıp kapatın; 4 kişilik toplam,
  kişi başı tutar ve giriş/kapanış özetleri anında yeniden hesaplanır
- **Para ve nakit paneli** — ne kadar nakit alınacağı (4 kişi ≈720 $), nerede
  bozdurulacağı, hangi harcamanın nakit hangisinin kart olduğu, şehir bazında
  günlük EGP ihtiyacı ve bahşiş aralıkları. ATM'de DCC tuzağı, çarşıda döviz
  uzatmama kuralı ve varış günü bankaların kapalı olması ayrıca işaretli
- **Konaklama rehberi** — iki şehir için araştırılmış otel önerileri: gecelik fiyat
  aralığı, konum gerekçesi ve artı/eksiler (Ağustos 2026 araştırması). Her kartın
  başında şehrin otelinden bir Commons fotoğrafı, her otel adı da Google Maps'te
  o oteli arayan bir bağlantı. Sayfadaki fotoğraflar tıklanınca tam ekran açılır
- **Ulaşım rehberi** — Kahire'de Uber/InDrive (dört kişiye büyük araç), iç hat uçuşu,
  Şarm'da transfer düzeni, trafik saatleri ve kaçınılacaklar
- **Hazırlık listesi** — 20 maddelik yapılacaklar; işaretler `localStorage`'da saklanır
- **Bölüm çubuğu** — hero geçilince belirir, bulunduğunuz bölümü vurgular
- **On üç altın kural** — yüksek sezon uyarısı, Luxor turunun yalnız çarşamba olması,
  GEM ön bileti, ören girişlerinde kart zorunluluğu, şişe suyu kuralı, "bedava" tuzağı
  ve pazarlıkta anchor fiyat
- Kalkışa kalan gün sayısı ve yazdırmaya uygun çıktı düzeni

Tek dosyalık statik sayfa — CSS ve JS gömülü, `file://` üzerinden de açılır. Görseller
Wikimedia Commons'tan (CC) çalışma anında çekilir; bir dosya adı bulunamazsa sonraki
alternatif denenir.

### Nil'den Kızıldeniz'e (`rota.html`)

28 durağın tamamı saatiyle, süresiyle ve aralarındaki ulaşımla. Ekranda tek gün
durur; günler arasında çipler ya da ileri-geri düğmeleriyle geçilir.

- **Görsel ve künye** — 28 durağın tamamı için Wikimedia Commons fotoğrafı, dönem
  bilgisi, önerilen süre ve UNESCO alanı. Görsele dokununca aynı dosyanın 1600
  piksellik hâli tam ekran açılır: önce önbellekteki küçük hâl görünür, büyüğü
  gelince yerine geçer. Altında mekânın adı ve Commons'taki dosya sayfasına
  (lisans ve fotoğrafçı orada) bağlantı. Görsel yüklenemezse çerçeve iz
  bırakmadan kalkar.
- **Duraklar arası ulaşım** — her geçiş için araç türü, süre, ücret ve dikkat notu:
  hangi noktada Uber çalışır, nerede şoförü bekletmek gerekir, feribot mu köprü mü.
  Yürünen bacaklar noktalı çizgiyle ayrılır ve **ölçülmüş mesafe** taşır:
  OpenStreetMap yol ağı üzerinden yaya profiliyle (Valhalla, BRouter ile çapraz
  kontrollü) — kuş uçuşu değil, gerçek yürüme yolu. Hafta boyunca yürünen toplam
  6,9 km.
- **Yol ipliği** — zaman çizelgesi kesintisiz bir hatla örülü: duraklar kategori
  renginde boncuk, geçişler ulaşım türünün renginde segment, yürüyüşler noktalı.
- **Gezi modu** — boncuğa dokununca durak "gezildi" işaretlenir (`localStorage`);
  günün tüm durakları bitince gün çipine ✓ düşer. Gezi haftasında sayfa, bugünün
  ilk gezilmemiş durağına açılır.
- **Özet satırı, istendiğinde ayrıntı** — her durak tek satır: saat, ad, alt
  başlık ve önerilen süre. Dokununca açıklama, fotoğraf, künye, ipucu ve konum
  bağlantısı altında açılır. Günün tamamını okumak isteyenler için *Hepsini aç*.
- **Google Maps aktarımı** — kapanıştaki düğme rotayı KML indirir
  ([My Maps](https://mymaps.google.com)'e içe aktarınca telefonda *Kayıtlı → Haritalar*
  altında gün gün klasörlü açılır). Gün başlıkları günün karayolu kesiti için yol
  tarifi bağlantısı taşır; her durakta *Haritada aç ↗* o noktayı iğneyle açar.
- **Katman süzgeçleri** — antik miras, İslami Kahire, müze, sofra, deneyim, Kızıldeniz, ulaşım
- Klavyeyle gezinme (`←` `→`), durak bazlı derin bağlantı (`#durak-karnak`)

### Gitmeden önce (`kaynaklar.html`)

Okuma, izleme ve dinleme listesi: kitaplar (hepsi Türkçe baskısıyla), belgeseller,
filmler, podcastler, dijital arşivler, Kur'an'da Mısır ve planı yaparken taranan
bloglar. Her kart programdaki durağa `rota.html#durak-…` bağlantısıyla bağlı; güne
göre süzülür. Başta "Önce bunlar" altılısı ve kalkışa kadar haftalık takvim var.
İşaretler `localStorage`'da saklanır; platform bilgileri Eylül 2026 itibarıyla.

## Teknik

Derleme adımı yok — dosyalar olduğu gibi yayınlanıyor.

```
bloglar/                Planın karşılaştırıldığı sekiz gezi yazısı (ham kaynak)
index.html              Programın tamamı (kendi içinde bağımsız)
rota.html               Gün gün zaman çizelgesi
assets/duraklar.js      Rota verisi: koordinat, saat, kategori, açıklama
assets/baglantilar.js   Duraklar arası ulaşım: tür, süre, ücret, uyarılar
assets/gezi-modu.js     "Gezildi" işaretleri (localStorage) ve gezi haftası yardımcıları
assets/disari-aktar.js  Google Maps aktarımı: KML üretimi ve yol tarifi URL'leri
assets/mekan-bilgi.js   Görsel dosya adları ve künye (dönem, süre, UNESCO)
assets/rota.js          Gün görünümü, açılır ayrıntı, süzgeçler
assets/rota.css         Tasarım katmanı
```

Yerelde çalıştırmak için bir HTTP sunucusu gerekir (ES modülleri `file://`
üzerinden yüklenmez):

```sh
node araclar/sunucu.mjs
```


## Kaynaklar

Plan Ağustos 2026 masabaşı araştırmasıyla kuruldu; sonra `bloglar/` altındaki sekiz
gezi yazısı (kişisel seyahat notları, tur operatörü rehberleri ve 190 girdilik bir
ekşi sözlük başlığı) okunup her iddia planla karşılaştırıldı. Birden fazla bağımsız
kaynakta tekrar eden ve somut olan bilgiler alındı; tek kişilik anekdotlar ve
gitmemiş kişilerin yorumları elendi. Fiyat ve prosedür gibi hızlı eskiyen kalemler
ayrıca güncel web kaynaklarından doğrulandı — kapıda vize ücretinin Mart 2026'da
25 $'dan 30 $'a çıktığı bu şekilde yakalandı.

## Notlar

Uçuş fiyatları 6 Kasım 2026'da Google Flights'ta görülen fiyatlardır; Luxor turu
easyJet Holidays/Travco fiyatıdır (1 £ ≈ 66 ₺); gerisi Ağustos 2026 araştırmasına
dayalı tahmindir ($ ≈ 49,5 ₺) ve bağlayıcı değildir. Otel fiyatları çift kişilik oda
gecelik tahminleridir (dört kişi = iki oda); Aralık yüksek sezonda artabilir.
Şarm'dan Luxor turu yalnız çarşamba günleri var ve plan 9 Aralık'a kuruludur —
uçuş saatleri ancak rezervasyondan sonra belli oluyor.

Konum bağlantıları yaklaşıktır: ören yerleri isabetli, restoran ve çarşı noktaları
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

## Araçlar

`rota.html` ES modülü kullandığı için çift tıklayarak açılmıyor, sunucu ister.
Yerelde bakarken:

```bash
node araclar/sunucu.mjs
```

Sıradan statik sunuculardan farkı, her yanıta `Cache-Control: no-store`
koyması — tarayıcı eski CSS/JS'i önbellekten okuyup düzelttiğiniz şeyi hâlâ
bozuk göstermiyor.

`index.html` sunucu istemez; çift tıklayınca çevrimdışı açılır. Program
listesini `assets/duraklar.js`'ten üretiyor:

```bash
node araclar/program-uret.mjs
```

Veriyi değiştirdikten sonra bunu çalıştırmayı unutursanız `--kontrol` uyarır.
