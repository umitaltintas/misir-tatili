/**
 * Duraklar arası ulaşım.
 *
 * Her kayıt bir önceki duraktan sonrakine nasıl gidileceğini anlatır.
 * `gunBasi: true` olanlar geceyi otelde geçirdikten sonraki ilk hareket —
 * süre ve ücret otel bölgesine göre değişir, metinde bu belirtilir.
 *
 * Ücretler Ağustos 2026 araştırmasına dayalı tahmindir. Mısır'da enflasyon
 * yüksek seyrettiği için EGP tutarlarını gitmeden doğrulayın.
 *
 * `mesafe` yalnızca yürünen bacaklarda var ve OpenStreetMap yol ağı üzerinden
 * yaya profiliyle ölçülmüştür (Valhalla; BRouter ile çapraz kontrol edildi,
 * ikisi %5 içinde örtüşüyor). Kapıdan kapıya kuş uçuşu değil, gerçek yürüme yolu.
 */

export const TURLER = {
  ucak:    { ad: "UÇAK",    renk: "#1B655F" },
  uber:    { ad: "UBER",    renk: "#7C6210" },
  taksi:   { ad: "TAKSİ",   renk: "#82580E" },
  yuruyus: { ad: "YÜRÜYÜŞ", renk: "#4C633E" },
  feribot: { ad: "FERİBOT", renk: "#425FB5" },
  tekne:   { ad: "TEKNE",   renk: "#2F63A8" },
  minibus: { ad: "TUR ARACI", renk: "#5E6F8C" },
};

export const BAGLANTILAR = [
  {
    from: "ist-kalkis", to: "cai-varis", tur: "ucak",
    sure: "2 sa 30 dk", ucret: "Alındı (4 kişi, tek yön)",
    ozet: "Akşam uçuşu, doğrudan",
    detay: "AJet'in 4 Aralık akşamı Sabiha Gökçen seferi. Mısır saati Türkiye'nin bir saat gerisinde: 22:10 kalkış, yerel saatle 23:40 iniş. Dönüş Şarm'dan, iki tek yön bilet alındı.",
    dikkat: "Kahire'de pasaport kontrolünden önce vize bandrolü satan bankoya uğrayın — sırayı karıştırmak en yaygın hata.",
  },
  {
    from: "cai-varis", to: "kale", tur: "uber", gunBasi: true,
    sure: "45–70 dk (havalimanından otele)", ucret: "200–300 EGP",
    ozet: "Gece yarısı otele, sabah Kale'ye",
    detay: "Vizeden sonra Uber/Careem/InDrive ile doğrudan otele geçin — varış gece yarısına yakın, resepsiyona geç check-in yapacağınızı önceden bildirin. Sabahki kısa hareket (otelden Kale'ye, bölgeye göre 10–20 dk taksi) ayrı bir yerel bacak; burada gösterilen süre yalnızca gece yarısı transferi için.",
    dikkat: "Terminal çıkışında \"taxi?\" diye yaklaşanlarla pazarlık etmeyin — fiyat üç katına çıkabiliyor. Uygulamadan çağırmak hem ucuz hem tartışmasız. Binmeden plakayı doğrulayın: Mısır plakaları Arap rakamlı, yanlış araca binen turist çok.",
  },
  {
    from: "kale", to: "sultan-hasan", tur: "yuruyus",
    sure: "12–15 dk", ucret: "—",
    mesafe: "1,1 km",
    ozet: "Kaleden aşağı iniş",
    detay: "Sultan Hasan, kalenin eteğindeki Salah El-Din Meydanı'nda — kale kapısından inen yol doğrudan oraya çıkar.",
    dikkat: "Meydanda trafik yoğun ve yaya geçidi nadir; karşıya yerlilerle birlikte geçin.",
  },
  {
    from: "sultan-hasan", to: "rifai", tur: "yuruyus",
    sure: "1 dk", ucret: "—",
    mesafe: "110 m",
    ozet: "Tam karşısında",
    detay: "İki dev yapı dar bir geçitle ayrılıyor. Ortak bilet ikisini de kapsıyor.",
  },
  {
    from: "rifai", to: "ezher-parki", tur: "yuruyus",
    sure: "30–40 dk", ucret: "—",
    mesafe: "2,2 km",
    ozet: "Darb el-Ahmar'dan tepeye",
    detay: "Yol Orta Çağ'dan kalma Darb el-Ahmar mahallesinden geçip parkın güney kapısına çıkar. Yokuş var ve gün batımına yetişmeniz gerekiyor — yorgunsanız 60–90 EGP'ye araç çağırın, 10 dakika.",
  },
  {
    from: "ezher-parki", to: "muizz", tur: "yuruyus",
    sure: "25–30 dk", ucret: "—",
    mesafe: "1,9 km",
    ozet: "Parktan Bab Zuveyla'ya",
    detay: "Karanlıkta yürüyeceksiniz ama yol boyunca aydınlatma var ve mahalle canlı. Bab Zuveyla kapısının altından girip El-Muizz'e çıkın; minaresine çıkarsanız İslami Kahire'nin damları ayaklarınızın altında.",
  },
  {
    from: "muizz", to: "khan", tur: "yuruyus",
    sure: "10 dk", ucret: "—",
    mesafe: "270 m",
    ozet: "Cadde çarşıya çıkar",
    detay: "El-Muizz Caddesi'ni kuzeye doğru yürüyün; akşam ışıklandırması gün batımından sonra en güzel hâlini alıyor ve yol sizi Khan el-Khalili'ye bırakır.",
  },
  {
    from: "khan", to: "fishawy", tur: "yuruyus",
    sure: "2 dk", ucret: "—",
    mesafe: "40 m",
    ozet: "Çarşının içinde",
    detay: "El Fishawy, Khan el-Khalili'nin göbeğinde dar bir aralıkta. Ana caddeden içeri sapınca aynalı cephesinden tanırsınız.",
  },
  {
    from: "fishawy", to: "keops", tur: "uber", gunBasi: true,
    sure: "40–60 dk", ucret: "150–250 EGP",
    ozet: "Otelden Gize Platosu'na",
    detay: "Downtown veya Zamalek'ten kalkış saatine göre 40–60 dakika. Gize'de kalıyorsanız 10 dakika.",
    dikkat: "08:00 açılışını yakalamak için 07:00'de yola çıkın. Kahire trafiği 07:30'dan sonra hızla kilitleniyor.",
  },
  {
    from: "keops", to: "sfenks", tur: "yuruyus",
    sure: "20–25 dk", ucret: "—",
    mesafe: "1,3 km",
    ozet: "Plato içinde yürüyüş",
    detay: "Keops'tan Sfenks'e inen yol çöl zemininde, gölgesiz. Plato içinde ücretli elektrikli araç servisi de var.",
    dikkat: "Yol boyunca deve ve at turu teklifleri gelir; \"la şükran\" (hayır teşekkürler) deyip yürümeye devam edin. Binmek isterseniz fiyatı önce ve yazılı netleştirin, hayvanın durumuna bakın.",
  },
  {
    from: "sfenks", to: "gem", tur: "uber",
    sure: "10–20 dk", ucret: "60–90 EGP",
    ozet: "Müzeye geçiş",
    detay: "Yaklaşık 2,5 km. Plato çıkışında araç çağırmak sorunsuz. Plato içinde ücretsiz elektrikli servis dolaşıyor; Keops–Sfenks arasını yürümek istemezseniz onu kullanın.",
  },
  {
    from: "gem", to: "abou-tarek", tur: "uber",
    sure: "40–55 dk", ucret: "150–220 EGP",
    ozet: "Downtown'a akşam dönüşü",
    detay: "Akşam saatleri trafiğin en yoğun olduğu dilim; süreyi geniş tutun.",
  },
  {
    from: "abou-tarek", to: "sakkara", tur: "taksi", gunBasi: true,
    sure: "50–70 dk", ucret: "Günlük araç 50–70 $ (4 kişi)",
    ozet: "Şoförlü araçla çöle doğru güneye",
    detay: "Bugün üç durak var ve üçü birbirinden uzak: Sakkara, Dahşur ve Fustat'taki NMEC. En pratiği oteldeki ya da InDrive'daki bir şoförü tam gün tutmak; dört kişi tek araca sığıyor, araç gün boyu sizi bekliyor. Otelden 07:00'de çıkın.",
    dikkat: "Şoför yol üstünde halı ya da papirüs atölyesine sokmak isteyecek: komisyon aldığı duraklar, baştan \"durak yok\" deyin. Fiyatı ve dönüş saatini binmeden yazılı netleştirin; bekleme ücreti ayrı mı sorun.",
  },
  {
    from: "sakkara", to: "dahsur", tur: "taksi",
    sure: "20–25 dk", ucret: "Günlük araca dahil",
    ozet: "10 km güneye",
    detay: "Sakkara'dan Dahşur'a tarım arazileri ve hurmalıklar arasından kısa bir yol. Dahşur'da araç kapıdan Kırık Piramit'e, oradan Kırmızı Piramit'e sizi taşıyor; alan geniş, aradaki mesafe yürünmez.",
  },
  {
    from: "dahsur", to: "nmec", tur: "taksi",
    sure: "40–60 dk", ucret: "Günlük araca dahil",
    ozet: "Kahire'ye dönüş, Fustat'a",
    detay: "Kuzeye, Kahire'ye geri dönüş. Yolda bir lokantada öğle yemeği molası verin (şoföre yerel bir yer sorun). NMEC, Eski Kahire'deki Fustat'ta, Ayn el-Sira gölünün kıyısında.",
    dikkat: "Öğleden sonra trafik 15:00'te yoğunlaşıyor; NMEC'in kapanış saatine göre 15:00'ten geç kalmayın.",
  },
  {
    from: "nmec", to: "cai-ssh", tur: "uber", gunBasi: true,
    sure: "45–70 dk (otelden havalimanına)", ucret: "250–400 EGP (4 kişi, büyük araç)",
    ozet: "Sabah havalimanına",
    detay: "Uçuş 11:00. İç hat için 2 saat önce havalimanında olun: otelden 08:00'de çıkın, trafik için pay bırakın. Dört kişi ve valizler için uygulamada büyük araç (UberXL / Comfort) seçin ya da otelden transfer isteyin.",
    dikkat: "Hangi terminalden kalktığınızı biletten kontrol edip şoföre söyleyin; Kahire'de terminaller arası mesafe uzun.",
  },
  {
    from: "cai-ssh", to: "otel-resif", tur: "ucak",
    sure: "~1 sa uçuş + 15 dk transfer", ucret: "~24.300 ₺ (4 kişi, tek yön) + transfer 10–20 $",
    ozet: "Kızıldeniz'e iniş",
    detay: "Şarm'a ~12:05 iniş. Havalimanından Sharks Bay 10–15 dakika; önceden ayarlanmış otel transferi pazarlık derdini sıfırlar. Check-in saati gelmemişse valizi bırakıp öğle yemeğine ve denize geçin.",
    dikkat: "Şarm'da Uber yok; Careem kısıtlı çalışıyor. Havalimanı taksisinde fiyatı binmeden netleştirin.",
  },
  {
    from: "otel-resif", to: "quad-safari", tur: "minibus",
    sure: "15–20 dk", ucret: "tura dahil",
    ozet: "Otelden çöle alış",
    detay: "Tur aracı 18:00'de otel kapısından alıyor. Mayodan çıkıp kapalı ayakkabı, uzun kol ve mont hazırlayın.",
  },
  {
    from: "quad-safari", to: "lxr-gidis", tur: "minibus", gunBasi: true,
    sure: "Otelden havalimanına 10–20 dk", ucret: "tura dahil",
    ozet: "Gece yarısından sonra kısa uyku, 04:00 alış",
    detay: "Çöl turu ~21:00'de otele bırakıyor; erken yatın. Travco aracı 04:00 civarında otelden alıp Şarm havalimanına götürüyor.",
    dikkat: "Alış saatini bir gün önce teyit edin; kahvaltı paketini resepsiyona akşamdan söyleyin.",
  },
  {
    from: "lxr-gidis", to: "krallar-vadisi", tur: "ucak",
    sure: "~1 sa uçuş + 45 dk yol", ucret: "tura dahil",
    ozet: "Luxor'a iniş, batı yakasına",
    detay: "Luxor havalimanında rehber karşılıyor, araç köprüden Nil'in batı yakasına geçiyor. Gün boyu aynı araç ve rehber sizinle.",
  },
  {
    from: "krallar-vadisi", to: "hatsepsut", tur: "minibus",
    sure: "10–15 dk", ucret: "tura dahil",
    ozet: "Vadiden tapınağa",
    detay: "Araç dağı dolaşarak 5,8 km gidiyor. Hatşepsut otoparkından tapınağa küçük bir servis treni var (birkaç EGP, nakit).",
  },
  {
    from: "hatsepsut", to: "memnon", tur: "minibus",
    sure: "10 dk", ucret: "tura dahil",
    ozet: "Yol üstünde fotoğraf molası",
    detay: "Heykeller ana yolun kenarında; araç kenara çekiyor, 15 dakikada görülüyor. Ayrı bilet yok.",
  },
  {
    from: "memnon", to: "karnak", tur: "minibus",
    sure: "Öğle yemeği + 40 dk yol", ucret: "tura dahil",
    ozet: "Öğle yemeği, sonra doğu yakasına",
    detay: "Öğle yemeği genelde bir Nil kıyısı restoranında, tura dahil. Ardından köprüden doğu yakasına, Karnak'a geçiş.",
    dikkat: "Öğle yemeğinde içecekler genelde ayrı ücretli; fiyatı önceden sorun.",
  },
  {
    from: "karnak", to: "lxr-donus", tur: "minibus",
    sure: "20–30 dk", ucret: "tura dahil",
    ozet: "Dinlenme molası, sonra havalimanı",
    detay: "Karnak'tan sonra dönüş uçuşuna kadar bir otelde ya da restoranda bekleme olabiliyor. Luxor havalimanı şehre 10 km.",
  },
  {
    from: "lxr-donus", to: "ras-mohammed", tur: "minibus", gunBasi: true,
    sure: "Otelden marinaya 20–30 dk", ucret: "tura dahil",
    ozet: "Gece Şarm'a dönüş, sabah tekne",
    detay: "Luxor dönüş uçuşu Şarm'a akşam iniyor, Travco otele bırakıyor. Sabah tekne turu 08:00–08:30'da otelden alıyor.",
    dikkat: "Uzun bir günün ertesi; tekne turunun alış saatini bir gece önce teyit edin, istersen daha geç alışlı yarım günlük tur seçin.",
  },
  {
    from: "ras-mohammed", to: "eski-sarm", tur: "taksi",
    sure: "20–25 dk", ucret: "250–400 EGP (4 kişi)",
    ozet: "Tekne dönüşü, akşam şehre",
    detay: "Tekne 17:00 civarında otele bırakıyor. Duştan sonra taksiyle Old Market'e; Es-Sahabe Camii'nin önünde inin.",
    dikkat: "Taksimetre fiilen kullanılmıyor: fiyatı binmeden netleştirin, dönüşü de gidişte konuşun.",
  },
  {
    from: "eski-sarm", to: "farsha", tur: "taksi",
    sure: "10 dk", ucret: "100–200 EGP",
    ozet: "Hadaba kayalıklarına",
    detay: "Farsha Café, Old Market'in güneydoğusunda Hadaba'da, denize bakan yamaçta.",
  },
  {
    from: "farsha", to: "sharks-bay", tur: "taksi", gunBasi: true,
    sure: "25–30 dk", ucret: "300–450 EGP (4 kişi)",
    ozet: "Otele dönüş, son sabah",
    detay: "Erken dönün: sabah 05:50'de son yüzüş ve 07:20'de havalimanına çıkış var. Valizleri bu akşam Farsha'ya gitmeden hazırlayın.",
  },
  {
    from: "sharks-bay", to: "ssh-donus", tur: "taksi",
    sure: "10–15 dk", ucret: "Otel transferi 10–20 $",
    ozet: "Havalimanına",
    detay: "06:50 sudan çıkış, 07:05 check-out, 07:20 otelden çıkış. Uçuş 10:50 (Pegasus); uluslararası uçuş ve çifte güvenlik kontrolü var, 07:50'de havalimanında olun.",
    dikkat: "Yurt dışı çıkış harcını Türkiye'den ayrılmadan dijital ödemiş olmanız gerekiyordu — dönüşte değil, gidişte.",
  },
];

/** Bir durak çiftinin bağlantısını verir. */
export function baglanti(fromId, toId) {
  return BAGLANTILAR.find((b) => b.from === fromId && b.to === toId) || null;
}
