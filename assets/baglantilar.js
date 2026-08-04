/**
 * Duraklar arası ulaşım.
 *
 * Her kayıt bir önceki duraktan sonrakine nasıl gidileceğini anlatır.
 * `gunBasi: true` olanlar geceyi otelde geçirdikten sonraki ilk hareket —
 * süre ve ücret otel bölgesine göre değişir, metinde bu belirtilir.
 *
 * Ücretler Temmuz 2026 araştırmasına dayalı tahmindir. Mısır'da enflasyon
 * yüksek seyrettiği için EGP tutarlarını gitmeden doğrulayın.
 */

export const TURLER = {
  ucak:    { ad: "UÇAK",    renk: "#3FA7A0" },
  uber:    { ad: "UBER",    renk: "#C9A227" },
  taksi:   { ad: "TAKSİ",   renk: "#D9A441" },
  yuruyus: { ad: "YÜRÜYÜŞ", renk: "#8FAF7E" },
  feribot: { ad: "FERİBOT", renk: "#6C8BD9" },
};

export const BAGLANTILAR = [
  {
    from: "ist-kalkis", to: "cai-varis", tur: "ucak",
    sure: "2 sa 15 dk", ucret: "260–340 $ (2 kişi, gidiş-dönüş)",
    ozet: "Doğrudan uçuş",
    detay: "Türk Hava Yolları, Pegasus ve EgyptAir doğrudan uçuyor. Cumhuriyet Bayramı haftası olduğu için erken alın.",
    dikkat: "Kahire'de pasaport kontrolünden önce vize bandrolü satan bankoya uğrayın — sırayı karıştırmak en yaygın hata.",
  },
  {
    from: "cai-varis", to: "kale", tur: "uber",
    sure: "45–70 dk", ucret: "200–300 EGP",
    ozet: "Havalimanından şehre",
    detay: "Uber ve Careem havalimanında çalışıyor; uygulama sizi belirlenmiş buluşma noktasına yönlendirir. Resmi sarı havalimanı taksileri de sabit tarifeli.",
    dikkat: "Terminal çıkışında \"taxi?\" diye yaklaşanlarla pazarlık etmeyin — fiyat üç katına çıkabiliyor. Uygulamadan çağırmak hem ucuz hem tartışmasız.",
  },
  {
    from: "kale", to: "khan", tur: "uber",
    sure: "15–25 dk", ucret: "60–90 EGP",
    ozet: "Kaleden çarşıya",
    detay: "Yaklaşık 3 km. Kale çıkışında araç bulmak kolay, uygulamadan çağırın.",
  },
  {
    from: "khan", to: "fishawy", tur: "yuruyus",
    sure: "2 dk", ucret: "—",
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
    ozet: "Plato içinde yürüyüş",
    detay: "Keops'tan Sfenks'e inen yol çöl zemininde, gölgesiz. Plato içinde ücretli elektrikli araç servisi de var.",
    dikkat: "Yol boyunca deve ve at turu teklifleri gelir; \"la şükran\" (hayır teşekkürler) deyip yürümeye devam edin. Binmek isterseniz fiyatı önce ve yazılı netleştirin, hayvanın durumuna bakın.",
  },
  {
    from: "sfenks", to: "gem", tur: "uber",
    sure: "10–20 dk", ucret: "60–90 EGP",
    ozet: "Müzeye geçiş",
    detay: "Yaklaşık 2,5 km. Plato çıkışında araç çağırmak sorunsuz.",
  },
  {
    from: "gem", to: "abou-tarek", tur: "uber",
    sure: "40–55 dk", ucret: "150–220 EGP",
    ozet: "Downtown'a akşam dönüşü",
    detay: "Akşam saatleri trafiğin en yoğun olduğu dilim; süreyi geniş tutun.",
  },
  {
    from: "abou-tarek", to: "sakkara", tur: "uber", gunBasi: true,
    sure: "50–70 dk", ucret: "250–350 EGP",
    ozet: "Çöle doğru güneye",
    detay: "Şehir dışına çıkıyorsunuz; yol tarım arazileri arasından geçiyor.",
    dikkat: "Sakkara'da dönüş için araç bulmak zor — burası şehir değil. Ya şoförü bekletin (saat başı ödeme konuşun) ya da günlük araç + şoför tutun. Yarım gün 2 kişi 30–45 $ civarı.",
  },
  {
    from: "sakkara", to: "ibn-tulun", tur: "uber",
    sure: "40–55 dk", ucret: "200–300 EGP",
    ozet: "Şehre dönüş",
    detay: "Sabah tuttuğunuz araçla dönmek en pratiği. İbn Tulun, İslami Kahire'nin güney ucunda.",
  },
  {
    from: "ibn-tulun", to: "sultan-hasan", tur: "yuruyus",
    sure: "12–18 dk", ucret: "—",
    ozet: "Kısa yürüyüş",
    detay: "Yaklaşık 1 km, düz ve gölgeli sokaklardan. Sıcaksa 40–60 EGP'ye kısa bir Uber de mümkün.",
  },
  {
    from: "sultan-hasan", to: "rifai", tur: "yuruyus",
    sure: "1 dk", ucret: "—",
    ozet: "Tam karşısında",
    detay: "İki dev yapı dar bir geçitle ayrılıyor. Ortak bilet ikisini de kapsıyor.",
  },
  {
    from: "rifai", to: "bab-zuveyla", tur: "yuruyus",
    sure: "20–30 dk", ucret: "—",
    ozet: "Eski şehre yürüyüş",
    detay: "Yaklaşık 1,5 km; çarşı sokaklarından geçtiği için yürümek başlı başına gezi. Yorgunsanız 50–70 EGP'ye araç çağırın.",
  },
  {
    from: "bab-zuveyla", to: "muizz", tur: "yuruyus",
    sure: "1 dk", ucret: "—",
    ozet: "Cadde kapıdan başlıyor",
    detay: "El-Muizz Caddesi Bab Zuveyla'nın hemen kuzeyinden başlar ve Khan el-Khalili'ye kadar uzanır. Akşam ışıklandırmasıyla kuzeye doğru yürüyün.",
    dikkat: "Cadde akşam yayalaştırılıyor; gün batımından sonra en güzel hâlini alıyor.",
  },
  {
    from: "muizz", to: "cai-lxr", tur: "uber", gunBasi: true,
    sure: "45–70 dk", ucret: "200–300 EGP",
    ozet: "Otelden havalimanına",
    detay: "İç hat terminali (Terminal 3 veya 1) biletinize göre değişir; Uber'e doğru terminali girin.",
    dikkat: "İç hatlarda da kalkıştan 2 saat önce havalimanında olun; güvenlik kontrolü girişte bir kez daha yapılıyor.",
  },
  {
    from: "cai-lxr", to: "karnak", tur: "ucak",
    sure: "1 sa uçuş + 25 dk yol", ucret: "280–320 $ (2 kişi, gidiş-dönüş)",
    ozet: "Luxor'a uçuş ve tapınağa geçiş",
    detay: "EgyptAir ve Nile Air günde birkaç sefer yapıyor. Luxor havalimanı şehre 10 km; taksi 150–250 EGP.",
    dikkat: "Luxor'da Uber çalışmıyor — burada taksi pazarlığı normal. Binmeden önce fiyatı netleştirin. Otelinizden araç istemek çoğu zaman daha kolay.",
  },
  {
    from: "karnak", to: "luxor-tapinak", tur: "taksi",
    sure: "10–15 dk", ucret: "80–120 EGP",
    ozet: "İki tapınak arası",
    detay: "Yaklaşık 3 km. Nil kıyısındaki Corniche boyunca yürümek de mümkün (40 dk) ve akşamüstü keyifli.",
    dikkat: "Kaleş (at arabası) teklifleri yoğun. Hayvanların durumu çoğu zaman kötü; taksi hem daha hızlı hem daha az sorunlu.",
  },
  {
    from: "luxor-tapinak", to: "sofra", tur: "yuruyus",
    sure: "10–15 dk", ucret: "—",
    ozet: "Akşam yemeğine",
    detay: "Tapınağın doğusundaki sokaklarda. Karanlıkta yol sormaktan çekinmeyin, mesafe kısa.",
  },
  {
    from: "sofra", to: "krallar-vadisi", tur: "feribot", gunBasi: true,
    sure: "45–60 dk", ucret: "Feribot 10–20 EGP + araç 150–250 EGP",
    ozet: "Nil'i geçip batı yakaya",
    detay: "İki seçenek var. Yolcu feribotu Corniche'den kalkar, karşıya 5 dakikada geçirir; batı yakada taksi veya tuk-tuk tutarsınız. Alternatif olarak otelden yarım günlük taksi tutup güneydeki köprüden geçebilirsiniz — daha pahalı ama gün boyu aracınız yanınızda kalır.",
    dikkat: "Krallar Vadisi 07:00'de açılıyor ve öğleden sonra vadi fırına dönüyor. Feribotu kullanacaksanız 06:15 gibi yola çıkın. Vadi girişinden mezarlara kadar ayrıca küçük bir servis var (5–10 EGP).",
  },
  {
    from: "krallar-vadisi", to: "hatsepsut", tur: "taksi",
    sure: "10–15 dk", ucret: "Yarım günlük araca dahil",
    ozet: "Vadiden tapınağa",
    detay: "Yaklaşık 3 km. Batı yakada tek tek araç aramak yerine sabah tuttuğunuz aracı gün boyu elinizde tutmak çok daha rahat.",
  },
  {
    from: "hatsepsut", to: "memnon", tur: "taksi",
    sure: "10 dk", ucret: "Yarım günlük araca dahil",
    ozet: "Dönüş yolu üstünde",
    detay: "Heykeller ana yolun kenarında; araç kenara çekiyor, 15 dakikada görülüyor. Ayrı bilet yok.",
  },
  {
    from: "memnon", to: "luxor-muze", tur: "feribot",
    sure: "30–45 dk", ucret: "Feribot 10–20 EGP + araç 100–150 EGP",
    ozet: "Doğu yakaya dönüş",
    detay: "Feribot iskelesine araçla inip karşıya geçin; müze Corniche üzerinde, iskeleye yürüme mesafesinde.",
  },
  {
    from: "luxor-muze", to: "medinet-habu", tur: "feribot", gunBasi: true,
    sure: "40–55 dk", ucret: "Feribot 10–20 EGP + araç 150–250 EGP",
    ozet: "Batı yakaya son geçiş",
    detay: "Dünkü rotanın aynısı. Medinet Habu batı yakanın güneyinde, Memnon Devleri'nin biraz ötesinde.",
    dikkat: "Sabah erken gidin: hem serin hem de bu tapınakta kalabalık nadiren oluyor.",
  },
  {
    from: "medinet-habu", to: "felluka", tur: "feribot",
    sure: "40–55 dk", ucret: "Feribot 10–20 EGP + araç 150–250 EGP",
    ozet: "Gün batımı için doğu yakaya",
    detay: "Felluka kaptanları Corniche boyunca, Luxor Tapınağı hizasında bekler. Bir saatlik tur 2 kişi 15–20 $.",
    dikkat: "Fiyatı ve süreyi binmeden önce netleştirin; \"bir saat\" yarım saate dönebiliyor. Rüzgâr yoksa tekne ilerlemez — kaptana rüzgâr durumunu sorun.",
  },
  {
    from: "felluka", to: "lxr-cai", tur: "taksi",
    sure: "25–35 dk", ucret: "150–250 EGP",
    ozet: "Havalimanına",
    detay: "Otelden valizleri alıp havalimanına geçin. Akşam uçuşu için 2 saat önce orada olun.",
  },
  {
    from: "lxr-cai", to: "donus", tur: "ucak", gunBasi: true,
    sure: "1 sa uçuş + ertesi sabah dönüş",
    ucret: "Otel–havalimanı 100–200 EGP",
    ozet: "Kahire'de bir gece, sonra İstanbul",
    detay: "Havalimanına yakın bir otelde konaklayın; çoğu ücretsiz servis sağlıyor, rezervasyonda sorun.",
    dikkat: "Yurt dışı çıkış harcını Türkiye'den ayrılmadan dijital ödemiş olmanız gerekiyordu — dönüşte değil, gidişte.",
  },
];

/** Bir durak çiftinin bağlantısını verir. */
export function baglanti(fromId, toId) {
  return BAGLANTILAR.find((b) => b.from === fromId && b.to === toId) || null;
}
