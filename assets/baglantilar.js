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
    sure: "2 sa 15 dk", ucret: "210–380 $ (2 kişi, tek yön)",
    ozet: "Doğrudan uçuş",
    detay: "Dönüş Şarm'dan olduğu için gidiş-dönüş yerine tek yön alın. Pegasus ve AJet bacak bazlı fiyatladığından tek yön ceza yok; THY'de tek yön pahalıysa multi-city arayın.",
    dikkat: "Kahire'de pasaport kontrolünden önce vize bandrolü satan bankoya uğrayın — sırayı karıştırmak en yaygın hata.",
  },
  {
    from: "cai-varis", to: "kale", tur: "uber",
    sure: "45–70 dk", ucret: "200–300 EGP",
    ozet: "Havalimanından şehre",
    detay: "Uber, Careem ve InDrive havalimanında çalışıyor; uygulama sizi belirlenmiş buluşma noktasına yönlendirir. Önce otele valiz bırakıp Kale'ye geçin. Gidenlerin ortak tavsiyesi InDrive: aynı yolu Uber'den ucuza götürüyor, Uber'in araçları biraz daha iyi.",
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
    from: "abou-tarek", to: "sakkara", tur: "uber", gunBasi: true,
    sure: "50–70 dk", ucret: "250–350 EGP",
    ozet: "Valizlerle çöle doğru güneye",
    detay: "Otelden çıkış yapıp valizleri de alın: Sakkara'dan doğruca havalimanına geçilecek. Yol tarım arazileri arasından geçiyor.",
    dikkat: "Sakkara'da araç bulmak zor — en pratiği sabah aracı yarım gün için tutup (2 kişi 30–45 $) bekletmek; aynı araç sizi havalimanına bırakır. Şoför yol üstünde halı ya da papirüs atölyesine sokmak isteyecek: komisyon aldığı duraklar, baştan \"durak yok\" deyin.",
  },
  {
    from: "sakkara", to: "cai-lxr", tur: "uber",
    sure: "60–80 dk", ucret: "300–400 EGP",
    ozet: "Sakkara'dan havalimanına",
    detay: "İç hat terminali (Terminal 3 veya 1) biletinize göre değişir; şoföre doğru terminali söyleyin. Uçuş artık 14:00'te olduğu için sabah rahat: 11:30'da Sakkara'dan çıkmak fazlasıyla yeterli.",
    dikkat: "İç hatlarda da kalkıştan 2 saat önce havalimanında olun.",
  },
  {
    from: "cai-lxr", to: "luxor-tapinak", tur: "ucak",
    sure: "1 sa uçuş + 30 dk yol", ucret: "160–220 $ (2 kişi, tek yön)",
    ozet: "Luxor'a uçuş, otele bırakış, tapınağa geçiş",
    detay: "Air Cairo'nun 14:00 seferi 15:00'te iniyor. Luxor havalimanı şehre 10 km; taksi 150–250 EGP. Otele valiz bırakıp doğrudan Luxor Tapınağı'na geçin — Karnak bu güne değil, yarın sabaha alındı.",
    dikkat: "Luxor'da Uber çalışmıyor — burada taksi pazarlığı normal. Binmeden önce fiyatı netleştirin. Otelinizden araç istemek çoğu zaman daha kolay.",
  },
  {
    from: "luxor-tapinak", to: "sofra", tur: "yuruyus",
    sure: "10–15 dk", ucret: "—",
    mesafe: "410 m",
    ozet: "Akşam yemeğine",
    detay: "Tapınağın doğusundaki sokaklarda. Karanlıkta yol sormaktan çekinmeyin, mesafe kısa.",
  },
  {
    from: "sofra", to: "karnak", tur: "taksi", gunBasi: true,
    sure: "10–15 dk", ucret: "80–120 EGP",
    ozet: "Sabah erken Karnak'a",
    detay: "Karnak, Luxor Tapınağı'nın 3 km kuzeyinde, aynı doğu yakada — ferry gerekmiyor. 06:00 açılışına yetişmek için otelden 05:40 gibi çıkın.",
    dikkat: "Bu saatte sokaklar boş, taksi bulmak biraz zaman alabilir; otelden bir gece önce araç ayarlatın.",
  },
  {
    from: "karnak", to: "krallar-vadisi", tur: "feribot",
    sure: "45–60 dk", ucret: "Feribot 10–20 EGP + araç 150–250 EGP",
    ozet: "Nil'i geçip batı yakaya",
    detay: "İki seçenek var. Yolcu feribotu Corniche'den kalkar, karşıya 5 dakikada geçirir; batı yakada taksi veya tuk-tuk tutarsınız. Alternatif olarak otelden tam günlük taksi tutup güneydeki köprüden geçebilirsiniz — daha pahalı ama gün boyu aracınız yanınızda kalır.",
    dikkat: "Krallar Vadisi 07:00'de açılıyor; Karnak'tan sonra vardığınızda saat 08:15 civarı olacak — ideal değil ama kasım sonunda hâlâ tolere edilebilir. Vadi girişinden mezarlara kadar ayrıca küçük bir servis var (5–10 EGP).",
  },
  {
    from: "krallar-vadisi", to: "hatsepsut", tur: "taksi",
    sure: "10–15 dk", ucret: "Günlük araca dahil",
    ozet: "Vadiden tapınağa",
    detay: "Araç dağı dolaştığı için yol 5,8 km sürüyor; sırttan geçen patika ise 1,7 km (25 dk) ama 82 m tırmanışlı — tepeden Hatşepsut'a yukarıdan bakmak için değer, sıcakta zorlar. Batı yakada tek tek araç aramak yerine sabah tuttuğunuz aracı gün boyu elinizde tutmak çok daha rahat.",
  },
  {
    from: "hatsepsut", to: "memnon", tur: "taksi",
    sure: "10 dk", ucret: "Günlük araca dahil",
    ozet: "Dönüş yolu üstünde",
    detay: "Heykeller ana yolun kenarında; araç kenara çekiyor, 15 dakikada görülüyor. Ayrı bilet yok.",
  },
  {
    from: "memnon", to: "medinet-habu", tur: "taksi",
    sure: "5–10 dk", ucret: "Günlük araca dahil",
    ozet: "Biraz ötede",
    detay: "Medinet Habu, Memnon Devleri'nin 1,7 km güneybatısında. Aynı araçla devam edin; tapınak öğlen saatinde bile sakin.",
  },
  {
    from: "medinet-habu", to: "deir-el-medina", tur: "taksi",
    sure: "8–10 dk", ucret: "60–100 EGP",
    ozet: "Köyün içinden vadiye",
    detay: "1,8 km; şoförünüz tam gün tuttuysanız zaten bekliyordur. Yürünebilir de ama öğle sıcağında gölgesiz.",
  },
  {
    from: "deir-el-medina", to: "felluka", tur: "feribot",
    sure: "40–55 dk", ucret: "Feribot 10–20 EGP + araç 150–250 EGP",
    ozet: "Gün batımı için doğu yakaya",
    detay: "Felluka kaptanları Corniche boyunca, Luxor Tapınağı hizasında bekler. Bir saatlik tur 2 kişi 15–20 $.",
    dikkat: "Fiyatı ve süreyi binmeden önce netleştirin; \"bir saat\" yarım saate dönebiliyor. Rüzgâr yoksa tekne ilerlemez — kaptana rüzgâr durumunu sorun.",
  },
  {
    from: "felluka", to: "mumyalama", tur: "yuruyus", gunBasi: true,
    sure: "10–15 dk", ucret: "—",
    mesafe: "700 m",
    ozet: "Corniche boyunca sakin sabah",
    detay: "Mumyalama Müzesi Corniche üzerinde, doğu yaka otellerinin çoğuna yürüme mesafesinde. Müze 09:00'da açılıyor; geç çıkış (late checkout) isteyip bavulları resepsiyonda bırakın.",
  },
  {
    from: "mumyalama", to: "luxor-muze", tur: "yuruyus",
    sure: "9 dk", ucret: "—",
    mesafe: "650 m",
    ozet: "İki müze arası",
    detay: "Corniche boyunca kuzeye, Nil sizde solda. İki müze de aynı caddede; arada kahve içecek yer bol.",
  },
  {
    from: "luxor-muze", to: "lxr-ssh", tur: "taksi",
    sure: "20–30 dk", ucret: "150–250 EGP",
    ozet: "Havalimanına",
    detay: "Otelden valizleri alıp havalimanına geçin. Uçuş 16:50, iç hat için 2 saat önce yeterli.",
  },
  {
    from: "lxr-ssh", to: "ras-mohammed", tur: "ucak", gunBasi: true,
    sure: "Uçuş ~4 sa (Kahire aktarmalı) + 15 dk transfer", ucret: "250–320 $ (2 kişi) + taksi 250–350 EGP",
    ozet: "Kızıldeniz'e iniş, gecikmeli",
    detay: "Luxor 16:50 kalkış, Kahire'de ~1 sa 45 dk bekleme, Şarm'a 20:45 varış. Şarm havalimanı Sharks Bay'e 10–15 dakika; önceden ayarlanmış otel transferi (8–15 $) pazarlık derdini sıfırlar. Geç saatte otele varacağınız için bu akşam sade geçsin: hafif bir yemek ve erken uyku, yarın tam gün tekne turu var.",
    dikkat: "Şarm'da Uber yok; Careem kısıtlı çalışıyor. Havalimanı taksisinde fiyatı binmeden netleştirin.",
  },
  {
    from: "ras-mohammed", to: "quad-safari", tur: "minibus",
    sure: "15–20 dk", ucret: "tura dahil",
    ozet: "Tekne dönüşü çölden alış",
    detay: "Tekne 17:00–17:30'da otele bırakır; quad turunun aracı 18:00'de aynı kapıdan alır. Aradaki 30–45 dakikada duş almaya vakit yok — mayo üstüne giyilecek bir kat kıyafeti çantada bulundurun.",
    dikkat: "Alış saatini bir gece önce WhatsApp'tan teyit ettirin; tekne gecikirse operatöre haber verip 18:30'a çekin.",
  },
  {
    from: "quad-safari", to: "sharks-bay", tur: "taksi", gunBasi: true,
    sure: "10–15 dk", ucret: "150–250 EGP",
    ozet: "Çöl gecesinden son sabaha",
    detay: "Tur ~21:00–21:15'te otele bırakır. Sabah 05:50'te house reef'te kısa bir yüzüş için erken kalkın; bavulu akşamdan hazırlamış olun (uçuş 10:50'ye alındığı için sabah 55 dakika erkene çekildi).",
  },
  {
    from: "sharks-bay", to: "ssh-donus", tur: "taksi",
    sure: "10–15 dk", ucret: "150–250 EGP",
    ozet: "Havalimanına",
    detay: "06:50 sudan çıkış, 07:05 check-out, 07:20 otelden çıkış — Sharks Bay havalimanının hemen yanında, kısacık bir transfer. Uçuş 10:50 (Pegasus) ve uluslararası + çifte güvenlik kontrolü var, 07:50'de havalimanında olun.",
    dikkat: "Yurt dışı çıkış harcını Türkiye'den ayrılmadan dijital ödemiş olmanız gerekiyordu — dönüşte değil, gidişte.",
  },
];

/** Bir durak çiftinin bağlantısını verir. */
export function baglanti(fromId, toId) {
  return BAGLANTILAR.find((b) => b.from === fromId && b.to === toId) || null;
}
