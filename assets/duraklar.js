/**
 * Rota verisi — Kahire + Luxor, 24–30 Ekim 2026.
 *
 * konum: [boylam, enlem] — MapLibre sırası.
 * kaynak: 'plan'   → ana programda geçen durak
 *         'oneri'  → programda adı geçmeyen, sofra/mola önerisi
 * kamera: durağa uçarken kullanılacak görüş açısı.
 */

export const KATEGORILER = {
  antik:   { ad: "Antik miras",    renk: "#C9A227" },
  islami:  { ad: "İslami Kahire",  renk: "#3FA7A0" },
  muze:    { ad: "Müze",           renk: "#6C8BD9" },
  yemek:   { ad: "Sofra",          renk: "#C4603F" },
  deneyim: { ad: "Deneyim",        renk: "#A87BC7" },
  ulasim:  { ad: "Ulaşım",         renk: "#7A7160" },
};

export const GUNLER = [
  {
    no: 1, tarih: "24 Ekim", gunAdi: "Cumartesi", sehir: "Kahire",
    baslik: "İstanbul → Kahire",
    tema: "Varış ve Kavalalı'nın Kahiresi",
  },
  {
    no: 2, tarih: "25 Ekim", gunAdi: "Pazar", sehir: "Kahire",
    baslik: "Gize Günü",
    tema: "Piramitler ve Büyük Mısır Müzesi",
  },
  {
    no: 3, tarih: "26 Ekim", gunAdi: "Pazartesi", sehir: "Kahire",
    baslik: "Sakkara + İslami Kahire",
    tema: "MÖ 2650'den Memlüklere",
  },
  {
    no: 4, tarih: "27 Ekim", gunAdi: "Salı", sehir: "Luxor",
    baslik: "Kahire → Luxor",
    tema: "Doğu yakası: tapınaklar günü",
  },
  {
    no: 5, tarih: "28 Ekim", gunAdi: "Çarşamba", sehir: "Luxor",
    baslik: "Batı Yakası",
    tema: "Ölüler şehri: Krallar Vadisi",
  },
  {
    no: 6, tarih: "29 Ekim", gunAdi: "Perşembe", sehir: "Luxor",
    baslik: "Luxor'un Tadını Çıkarın",
    tema: "Cumhuriyet Bayramı'nı Nil'de kutlayın",
  },
  {
    no: 7, tarih: "30 Ekim", gunAdi: "Cuma", sehir: "Kahire",
    baslik: "Kahire → İstanbul",
    tema: "Dönüş",
  },
];

export const DURAKLAR = [
  // ————————————————————————— GÜN 1
  {
    id: "ist-kalkis", gun: 1, saat: "06:30", kategori: "ulasim", kaynak: "plan",
    ad: "İstanbul Havalimanı",
    alt: "Kalkış",
    konum: [28.7519, 41.2753],
    aciklama: "Kahire'ye uçuş yaklaşık 2 saat 15 dakika. Cumhuriyet Bayramı haftası olduğu için bileti erkenden almış olun.",
    kamera: { zoom: 9, pitch: 30, bearing: 160 },
  },
  {
    id: "cai-varis", gun: 1, saat: "09:00", kategori: "ulasim", kaynak: "plan",
    ad: "Kahire Havalimanı",
    alt: "Kapıda vize",
    konum: [31.4056, 30.1219],
    aciklama: "Vize kapıda alınıyor: kişi başı 25 $. Kartınızı hazır bulundurun, kuyruk bankonun hemen solunda.",
    ipucu: "Pasaport kontrolünden önce vize bandrolü satan bankoya uğrayın — sırayı karıştırmak yaygın hata.",
    kamera: { zoom: 12, pitch: 40, bearing: 200 },
  },
  {
    id: "kale", gun: 1, saat: "14:00", kategori: "islami", kaynak: "plan",
    ad: "Kahire Kalesi",
    alt: "Muhammed Ali Camii ve türbesi",
    konum: [31.2599, 30.0287],
    aciklama: "Kavalalı Mehmet Ali Paşa'nın İstanbul camilerini örnek alarak yaptırdığı Alabaster Camii. Paşa'nın türbesi caminin içinde.",
    ipucu: "Kale içindeki Cevahir Sarayı'na da uğrayın — Paşa'nın kabul sarayı.",
    etiket: "Osmanlı izi",
    kamera: { zoom: 16.2, pitch: 60, bearing: -35 },
  },
  {
    id: "khan", gun: 1, saat: "19:00", kategori: "deneyim", kaynak: "plan",
    ad: "Khan el-Khalili",
    alt: "Akşam çarşısı",
    konum: [31.2622, 30.0477],
    aciklama: "14. yüzyıldan beri ayakta olan kapalı çarşı. Akşam saatlerinde asıl kalabalığına kavuşuyor.",
    kamera: { zoom: 17, pitch: 55, bearing: 20 },
  },
  {
    id: "fishawy", gun: 1, saat: "21:00", kategori: "yemek", kaynak: "plan",
    ad: "El Fishawy",
    alt: "250 yıllık kahvehane",
    konum: [31.2624, 30.0476],
    aciklama: "Çarşının göbeğinde, aynalarla kaplı ve hiç kapanmadığı söylenen kahvehane. Nane çayı ısmarlayın.",
    kamera: { zoom: 18, pitch: 50, bearing: 20 },
  },

  // ————————————————————————— GÜN 2
  {
    id: "keops", gun: 2, saat: "08:00", kategori: "antik", kaynak: "plan",
    ad: "Gize Platosu",
    alt: "Keops, Kefren, Mikerinos",
    konum: [31.1342, 29.9792],
    aciklama: "Kapı açılışında girin: serin, tenha ve ışık ideal. Giriş kişi başı yaklaşık 700 EGP.",
    ipucu: "Ödeme yalnızca kartla — gişede nakit geçmiyor.",
    kamera: { zoom: 15, pitch: 65, bearing: 135 },
  },
  {
    id: "sfenks", gun: 2, saat: "10:30", kategori: "antik", kaynak: "plan",
    ad: "Büyük Sfenks",
    alt: "Kefren'in bekçisi",
    konum: [31.1376, 29.9753],
    aciklama: "Tek parça kayadan oyulmuş 73 metrelik aslan gövdesi. Doğuya, gün doğumuna bakar.",
    kamera: { zoom: 17.5, pitch: 70, bearing: 95 },
  },
  {
    id: "gem", gun: 2, saat: "14:00", kategori: "muze", kaynak: "plan",
    ad: "Büyük Mısır Müzesi",
    alt: "GEM",
    konum: [31.1194, 29.9938],
    aciklama: "Dünyanın en büyük arkeoloji müzesi, piramitlerin hemen yanında. Tutankhamun koleksiyonunun tamamı ilk kez tek çatı altında.",
    ipucu: "Gişe satışı yok. Bileti gitmeden visit-gem.com üzerinden alın (~1.450 EGP).",
    etiket: "Paket turlarda yok",
    kamera: { zoom: 16, pitch: 55, bearing: -60 },
  },
  {
    id: "abou-tarek", gun: 2, saat: "20:00", kategori: "yemek", kaynak: "oneri",
    ad: "Abou Tarek",
    alt: "Koshary",
    konum: [31.2437, 30.0505],
    aciklama: "Mercimek, pirinç, makarna ve kızarmış soğanın üst üste bindiği milli yemek koshary'nin en bilinen adresi. Dört katlı ve hep dolu.",
    kamera: { zoom: 17, pitch: 45, bearing: 0 },
  },

  // ————————————————————————— GÜN 3
  {
    id: "sakkara", gun: 3, saat: "08:30", kategori: "antik", kaynak: "plan",
    ad: "Sakkara",
    alt: "Coser'in Basamaklı Piramidi",
    konum: [31.2165, 29.8712],
    aciklama: "Mısır'ın en eski piramidi — Gize'dekilerden yaklaşık bir asır önce, mimar İmhotep tarafından tasarlandı.",
    kamera: { zoom: 16, pitch: 62, bearing: 110 },
  },
  {
    id: "ibn-tulun", gun: 3, saat: "12:30", kategori: "islami", kaynak: "plan",
    ad: "İbn Tulun Camii",
    alt: "879 — Kahire'nin en eskisi",
    konum: [31.2494, 30.0288],
    aciklama: "Şehrin özgün halini koruyan en eski camisi. Samarra'dan esinlenen dışarıdan tırmanılan spiral minaresiyle tanınır.",
    etiket: "Ücretsiz",
    kamera: { zoom: 17, pitch: 58, bearing: -15 },
  },
  {
    id: "sultan-hasan", gun: 3, saat: "15:00", kategori: "islami", kaynak: "plan",
    ad: "Sultan Hasan Medresesi",
    alt: "Memlük mimarisinin zirvesi",
    konum: [31.2564, 30.0325],
    aciklama: "Dört mezhep için dört ayrı avlusu olan dev külliye. Taş işçiliği ve ölçek bakımından Kahire'nin en iddialı yapısı.",
    ipucu: "Karşısındaki Rifai Camii ile ortak bilet: kişi başı yaklaşık 10 $.",
    kamera: { zoom: 16.8, pitch: 62, bearing: 30 },
  },
  {
    id: "rifai", gun: 3, saat: "16:00", kategori: "islami", kaynak: "plan",
    ad: "Rifai Camii",
    alt: "Kavalalı hanedanının türbe camii",
    konum: [31.2570, 30.0331],
    aciklama: "Kral Faruk ve son İran Şahı Rıza Pehlevi burada gömülü. Sultan Hasan'ın tam karşısında, 600 yıl sonra ona öykünerek yapıldı.",
    etiket: "Osmanlı izi",
    kamera: { zoom: 17, pitch: 60, bearing: 30 },
  },
  {
    id: "bab-zuveyla", gun: 3, saat: "17:30", kategori: "islami", kaynak: "plan",
    ad: "Bab Zuveyla",
    alt: "Fatımi surlarının güney kapısı",
    konum: [31.2578, 30.0424],
    aciklama: "Minarelerine çıkılabiliyor: İslami Kahire'nin damları üzerinde şehrin en iyi manzarası.",
    kamera: { zoom: 17.5, pitch: 65, bearing: 0 },
  },
  {
    id: "muizz", gun: 3, saat: "18:30", kategori: "deneyim", kaynak: "plan",
    ad: "El-Muizz Caddesi",
    alt: "Gün batımı yürüyüşü",
    konum: [31.2610, 30.0490],
    aciklama: "Dünyada en yoğun Orta Çağ İslam eseri barındıran sokak. Akşam ışıklandırmasıyla gezip Khan el-Khalili'ye yürüyerek çıkın.",
    kamera: { zoom: 17, pitch: 60, bearing: 10 },
  },

  // ————————————————————————— GÜN 4
  {
    id: "cai-lxr", gun: 4, saat: "08:00", kategori: "ulasim", kaynak: "plan",
    ad: "Kahire → Luxor",
    alt: "İç hat, ~1 saat",
    konum: [31.4056, 30.1219],
    aciklama: "EgyptAir veya Nile Air, kişi başı yaklaşık 70–80 $. Otele valiz bırakıp doğrudan geziye çıkabilirsiniz.",
    kamera: { zoom: 6.5, pitch: 45, bearing: 175 },
  },
  {
    id: "karnak", gun: 4, saat: "14:00", kategori: "antik", kaynak: "plan",
    ad: "Karnak Tapınağı",
    alt: "Hipostil Salonu",
    konum: [32.6573, 25.7188],
    aciklama: "Mısır'ın en büyük tapınak kompleksi, 2000 yıl boyunca eklenerek büyüdü. 134 sütunlu hipostil salonuna en az 2–3 saat ayırın.",
    kamera: { zoom: 16.2, pitch: 60, bearing: -25 },
  },
  {
    id: "luxor-tapinak", gun: 4, saat: "18:30", kategori: "antik", kaynak: "plan",
    ad: "Luxor Tapınağı",
    alt: "Işıklandırmada",
    konum: [32.6393, 25.6996],
    aciklama: "Avlusunda Ebu'l Haggag Camii yükselir: tapınak ve cami iç içe. Girişteki tek dikilitaşın eşi Paris'te, Concorde Meydanı'nda.",
    ipucu: "Akşam saatinde gezin — ışıklandırma sütunları bambaşka gösteriyor.",
    kamera: { zoom: 16.8, pitch: 62, bearing: 15 },
  },
  {
    id: "sofra", gun: 4, saat: "21:00", kategori: "yemek", kaynak: "oneri",
    ad: "Sofra",
    alt: "Geleneksel Mısır sofrası",
    konum: [32.6404, 25.6975],
    aciklama: "Nil kıyısındaki turistik restoranlardan uzakta, 1930'lardan kalma bir evde tagine ve mezeler.",
    kamera: { zoom: 17.5, pitch: 45, bearing: 15 },
  },

  // ————————————————————————— GÜN 5
  {
    id: "krallar-vadisi", gun: 5, saat: "07:00", kategori: "antik", kaynak: "plan",
    ad: "Krallar Vadisi",
    alt: "62 mezar, 3'ü bilete dahil",
    konum: [32.6014, 25.7402],
    aciklama: "Yeni Krallık firavunlarının kaya mezarları. Standart bilet yaklaşık 750 EGP ve üç mezar içeriyor; Tutankhamun ayrı bilet.",
    ipucu: "Erken gidin: vadi kayalık bir çanak, öğleden sonra fırına dönüyor.",
    kamera: { zoom: 15.3, pitch: 68, bearing: 55 },
  },
  {
    id: "hatsepsut", gun: 5, saat: "10:00", kategori: "antik", kaynak: "plan",
    ad: "Hatşepsut Tapınağı",
    alt: "Deir el-Bahri",
    konum: [32.6068, 25.7381],
    aciklama: "Kadın firavunun kayalığa oyulmuş üç teraslı tapınağı. Arkasındaki 300 metrelik uçurum yapının bir parçası gibi durur.",
    kamera: { zoom: 15.8, pitch: 70, bearing: -75 },
  },
  {
    id: "memnon", gun: 5, saat: "12:00", kategori: "antik", kaynak: "plan",
    ad: "Memnon Devleri",
    alt: "Yol üstü, 15 dakika",
    konum: [32.6106, 25.7205],
    aciklama: "3.400 yıldır ayakta duran 18 metrelik ikiz heykeller. III. Amenhotep'in bugün yok olmuş tapınağının kapı bekçileriydi.",
    etiket: "Ücretsiz",
    kamera: { zoom: 17, pitch: 65, bearing: 90 },
  },
  {
    id: "luxor-muze", gun: 5, saat: "16:00", kategori: "muze", kaynak: "plan",
    ad: "Luxor Müzesi",
    alt: "Sıcaktan kaçış",
    konum: [32.6428, 25.7036],
    aciklama: "Küçük ama titizlikle seçilmiş koleksiyon. Kahire'nin kalabalığından sonra ferahlatıcı bir sergileme.",
    kamera: { zoom: 17, pitch: 50, bearing: 0 },
  },

  // ————————————————————————— GÜN 6
  {
    id: "medinet-habu", gun: 6, saat: "08:00", kategori: "antik", kaynak: "plan",
    ad: "Medinet Habu",
    alt: "III. Ramses Tapınağı",
    konum: [32.6008, 25.7196],
    aciklama: "Orijinal boyaları en iyi korunmuş kabartmalar burada — üstelik Karnak'ın kalabalığı olmadan.",
    etiket: "Kalabalıksız",
    kamera: { zoom: 16.5, pitch: 62, bearing: -40 },
  },
  {
    id: "felluka", gun: 6, saat: "17:00", kategori: "deneyim", kaynak: "plan",
    ad: "Nil'de felluka",
    alt: "Cumhuriyet Bayramı gün batımı",
    konum: [32.6360, 25.6980],
    aciklama: "Geleneksel yelkenliyle bir saat: 15–20 $. Cruise'un vaat ettiği manzaranın özeti, fiyatın kırkta biri.",
    etiket: "29 Ekim",
    kamera: { zoom: 15.5, pitch: 65, bearing: 340 },
  },
  {
    id: "lxr-cai", gun: 6, saat: "21:00", kategori: "ulasim", kaynak: "plan",
    ad: "Luxor → Kahire",
    alt: "Akşam uçuşu",
    konum: [32.7066, 25.6710],
    aciklama: "Havalimanına yakın bir otelde geceleyin; sabah dönüş uçuşu için transfer derdi kalmasın.",
    kamera: { zoom: 12, pitch: 40, bearing: 350 },
  },

  // ————————————————————————— GÜN 7
  {
    id: "donus", gun: 7, saat: "09:00", kategori: "ulasim", kaynak: "plan",
    ad: "Kahire → İstanbul",
    alt: "Dönüş",
    konum: [31.4056, 30.1219],
    aciklama: "Yurt dışı çıkış harcını (kişi başı 1.250 ₺) Türkiye'den ayrılmadan dijital olarak ödemiş olun — havalimanında pul satışı kalktı.",
    kamera: { zoom: 8, pitch: 35, bearing: 340 },
  },
];

/** Şehirler arası uçuş bacakları — haritada kesikli yay olarak çizilir. */
export const UCUSLAR = [
  { id: "ist-cai", from: [28.7519, 41.2753], to: [31.4056, 30.1219], gun: 1, etiket: "İstanbul → Kahire" },
  { id: "cai-lxr", from: [31.4056, 30.1219], to: [32.7066, 25.6710], gun: 4, etiket: "Kahire → Luxor" },
  { id: "lxr-cai", from: [32.7066, 25.6710], to: [31.4056, 30.1219], gun: 6, etiket: "Luxor → Kahire" },
  { id: "cai-ist", from: [31.4056, 30.1219], to: [28.7519, 41.2753], gun: 7, etiket: "Kahire → İstanbul" },
];
