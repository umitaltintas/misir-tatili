/**
 * Rota verisi — Kahire + Luxor + Şarm El-Şeyh, 20–27 Kasım 2026.
 *
 * konum: [boylam, enlem] — MapLibre sırası.
 * kaynak: 'plan'   → ana programda geçen durak
 *         'oneri'  → programda adı geçmeyen, sofra/mola önerisi
 * kamera: durağa uçarken kullanılacak görüş açısı.
 */

export const KATEGORILER = {
  antik:   { ad: "Antik miras",    renk: "#8A6E13" },
  islami:  { ad: "İslami Kahire",  renk: "#217F78" },
  muze:    { ad: "Müze",           renk: "#425FB5" },
  yemek:   { ad: "Sofra",          renk: "#A8492B" },
  deneyim: { ad: "Deneyim",        renk: "#7B4D9E" },
  deniz:   { ad: "Kızıldeniz",     renk: "#2F63A8" },
  ulasim:  { ad: "Ulaşım",         renk: "#6B6250" },
};

export const GUNLER = [
  {
    no: 1, tarih: "20 Kasım", gunAdi: "Cuma", sehir: "İstanbul",
    baslik: "İstanbul → Kahire",
    tema: "Akşam uçuşuyla yola çıkış",
  },
  {
    no: 2, tarih: "21 Kasım", gunAdi: "Cumartesi", sehir: "Kahire",
    baslik: "Osmanlı ve Memlük Kahiresi",
    tema: "Kaleden çarşıya, ışıklandırmalı bir akşama",
  },
  {
    no: 3, tarih: "22 Kasım", gunAdi: "Pazar", sehir: "Kahire",
    baslik: "Gize Günü",
    tema: "Piramitler ve Büyük Mısır Müzesi",
  },
  {
    no: 4, tarih: "23 Kasım", gunAdi: "Pazartesi", sehir: "Luxor",
    baslik: "Sakkara, sonra Luxor",
    tema: "MÖ 2650'den tapınaklar şehrine",
  },
  {
    no: 5, tarih: "24 Kasım", gunAdi: "Salı", sehir: "Luxor",
    baslik: "Karnak ve Batı Yakası",
    tema: "Sabah ışığında Karnak, sonra ölüler şehri",
  },
  {
    no: 6, tarih: "25 Kasım", gunAdi: "Çarşamba", sehir: "Şarm El-Şeyh",
    baslik: "Luxor → Şarm El-Şeyh",
    tema: "Nil'den Kızıldeniz'e",
  },
  {
    no: 7, tarih: "26 Kasım", gunAdi: "Perşembe", sehir: "Şarm El-Şeyh",
    baslik: "Ras Mohammed",
    tema: "Shark ve Yolanda: Kızıldeniz'de tam gün",
  },
  {
    no: 8, tarih: "27 Kasım", gunAdi: "Cuma", sehir: "Şarm El-Şeyh",
    baslik: "Şarm → İstanbul",
    tema: "Son bir deniz sabahı, erken dönüş",
  },
];

export const DURAKLAR = [
  // ————————————————————————— GÜN 1
  {
    id: "ist-kalkis", gun: 1, saat: "22:10", kategori: "ulasim", kaynak: "plan",
    ad: "İstanbul Havalimanı",
    alt: "Kalkış — akşam uçuşu",
    konum: [28.7519, 41.2753],
    aciklama: "AJet'in (Turkish Airlines operasyonu) Sabiha Gökçen'den 22:10 direkt seferi, 2 saat 30 dakika — 20 Kasım 2026 için doğrulanmış gerçek sefer. THY'nin sabah seferinden kişi başı ~11.700 ₺ (2 kişi ~500 $) daha ucuz; karşılığı bir gece erken yola çıkıp Kahire'de bir gece daha kalmak — hem tasarruf hem dinlenmiş bir ilk gün. Dönüş Şarm El-Şeyh'ten olduğu için bileti tek yön alın.",
    kamera: { zoom: 9, pitch: 30, bearing: 20 },
  },
  {
    id: "cai-varis", gun: 1, saat: "23:40", kategori: "ulasim", kaynak: "plan",
    ad: "Kahire Havalimanı",
    alt: "Gece yarısına yakın varış",
    konum: [31.4056, 30.1219],
    aciklama: "Vize kapıda alınıyor: kişi başı 30 $ — Mart 2026'da 25'ten yükseldi, Türkçe kaynakların çoğu hâlâ eski rakamı yazıyor. Banko nakit dolar istiyor, POS yok ve para üstü vermiyorlar; 60 $'ı tam ve küçük banknotla hazırlayın.",
    ipucu: "Gece yarısına yakın geldiğiniz için kuyruk gündüze göre genelde daha kısa. Otele varış gece yarısını bulur — resepsiyona geç check-in yapacağınızı önceden bildirin. Bu akşam için başka plan yok: doğrudan yatış, yarın (21 Kasım) tam ve dinlenmiş bir günle Kahire Kalesi'nden başlıyorsunuz. Kuyruğu hiç beklemek istemezseniz Ağustos 2026'da başlayan dijital QR vizesini kartla önceden alabilirsiniz (36 $, apps.visaonarrival.gov.eg).",
    kamera: { zoom: 12, pitch: 40, bearing: -20 },
  },
  {
    id: "kale", gun: 2, saat: "09:30", kategori: "islami", kaynak: "plan",
    ad: "Kahire Kalesi",
    alt: "Muhammed Ali Camii ve türbesi",
    konum: [31.2599, 30.0287],
    aciklama: "Kavalalı Mehmet Ali Paşa'nın İstanbul camilerini örnek alarak yaptırdığı Alabaster Camii. Paşa'nın türbesi caminin içinde. <b>Neye bakmalı:</b> Minareler ince ve kalem uçlu — İstanbul tipi. Memlük Kahiresi köşeli minare yapardı; Paşa bilerek Osmanlı üslubunu seçti, yani cami bir mimari tercih değil siyasi beyandır. Alt duvarlardaki alabaster kaplama adını verdiği şey. Avludaki saat kulesi Fransa kralı Louis Philippe'in hediyesi: karşılığında Luxor Tapınağı'nın dikilitaşlarından biri gitti — <b>saat hiç düzgün çalışmadı</b>, dikilitaş hâlâ Paris'te. İki gün sonra Luxor'da o dikilitaşın boş kaidesini göreceksiniz. Batı terası Kahire'ye bakar, açık havada piramitler seçilir. Aynı kompleksteki En-Nasır Muhammed Camii (1318) çok daha eski, çok daha sade ve çoğu zaman bomboş.",
    ipucu: "Kale içindeki Cevahir Sarayı'na da uğrayın — Paşa'nın kabul sarayı.",
    etiket: "Osmanlı izi",
    kamera: { zoom: 16.2, pitch: 60, bearing: -35 },
  },
  {
    id: "sultan-hasan", gun: 2, saat: "11:45", kategori: "islami", kaynak: "plan",
    ad: "Sultan Hasan Medresesi",
    alt: "Memlük mimarisinin zirvesi",
    konum: [31.2564, 30.0325],
    aciklama: "Dört mezhep için dört ayrı avlusu olan dev külliye. Taş işçiliği ve ölçek bakımından Kahire'nin en iddialı yapısı — kalenin hemen eteğinde. <b>Neye bakmalı:</b> Ortadaki açık avludan dört yöne dört eyvan açılıyor, her biri bir Sünni mezhep için — arkalarında o mezhebin öğrencilerinin odaları var. <b>Hanefî eyvanı en büyüğü.</b> Giriş portali 38 metre; içeri girerken sokağın gürültüsünün nasıl kesildiğine dikkat edin, akustik olağanüstü. Tavandan sarkan zincirler bir zamanlar yüzlerce kandil taşıyordu, kandiller şimdi müzelerde. Kıble eyvanının arkasındaki türbe odası Sultan Hasan için yapıldı ama <b>o hiç buraya gömülmedi</b>: öldürüldü, cesedi bulunamadı.",
    ipucu: "Karşısındaki Rifai Camii ile ortak bilet: kişi başı yaklaşık 10 $.",
    kamera: { zoom: 16.8, pitch: 62, bearing: 30 },
  },
  {
    id: "rifai", gun: 2, saat: "12:35", kategori: "islami", kaynak: "plan",
    ad: "Rifai Camii",
    alt: "Kavalalı hanedanının türbe camii",
    konum: [31.2570, 30.0331],
    aciklama: "Kral Faruk ve son İran Şahı Rıza Pehlevi burada gömülü. Sultan Hasan'ın tam karşısında, 600 yıl sonra ona öykünerek yapıldı. Aynı bilete dahil, 20–30 dakika yeter.",
    ipucu: "Son giriş genelde 16:00 civarında kesiliyor ama bu saatte bolca vaktiniz var. Çıkışta Ezher Parkı'na (16:45) kadar uzun bir öğle molası kalıyor — yakında bir lokantada rahat bir öğle yemeği ve dinlenme için iyi bir fırsat.",
    etiket: "Osmanlı izi",
    kamera: { zoom: 17, pitch: 60, bearing: 30 },
  },
  {
    id: "ezher-parki", gun: 2, saat: "16:45", kategori: "deneyim", kaynak: "oneri",
    ad: "El-Ezher Parkı",
    alt: "Gerçek gün batımı",
    konum: [31.2637, 30.0403],
    aciklama: "Beş yüzyıl boyunca moloz döküm alanı olan tepe, Ağa Han Vakfı'nın uzun restorasyonuyla Kahire'nin en güzel parkına dönüştü. Batıya bakan terasından İslami Kahire'nin minare ormanı ve Kale silüeti tek karede görünüyor.",
    ipucu: "Kasım'da güneş <b>16:57'de</b> batıyor — programın gerçek gün batımını görebileceğiniz tek noktası burası, ve El-Muizz'e yürüme mesafesinde. 23:00'a kadar açık, giriş ~50 EGP. Çayınızı içip hava karardıktan sonra El-Muizz'e geçin; o cadde zaten ışıklandırmayla güzel. Kazılarda ortaya çıkan Eyyubi surlarının restore edilmiş bölümü parkın kenarında duruyor.",
    etiket: "Paket turlarda yok",
    kamera: { zoom: 16, pitch: 55, bearing: -75 },
  },
  {
    id: "muizz", gun: 2, saat: "18:00", kategori: "deneyim", kaynak: "plan",
    ad: "El-Muizz Caddesi",
    alt: "Işıklandırma yürüyüşü",
    konum: [31.2610, 30.0490],
    aciklama: "Dünyada en yoğun Orta Çağ İslam eseri barındıran sokak. Bab Zuveyla kapısından girip akşam ışıklandırmasıyla kuzeye, Khan el-Khalili'ye doğru yürüyün. <b>Neye bakmalı:</b> Güneyden girerken <b>Bab Zuveyla</b> — Memlük döneminde idamların yapıldığı kapı; bitişiğindeki el-Müeyyed Camii'nin minarelerine çıkılıyor. Caddenin tam ortasında duran <b>Abdurrahman Kethüda Sebil-Küttabı</b>: altı çeşme, üstü Kur'an mektebi. <b>Kalavun külliyesi</b> (1285) bir medrese, bir türbe ve bir hastaneden oluşuyor — o hastane 20. yüzyıla kadar hasta kabul etti. <b>El-Akmar Camii</b> (1125) Fatımi dönemi; Kahire'nin taşa oyulmuş en eski süslü cephesi burada. Kuzey ucunda Bab el-Futuh kapısı.",
    ipucu: "Kasım'da Kahire'de güneş 16:57'de batıyor; buraya geldiğinizde hava çoktan kararmış olur. Sorun değil — caddenin asıl güzel hâli zaten gece aydınlatmasıyla. Ama gerçek gün batımını görmek isterseniz 16:15'te El-Ezher Parkı'nda olun: 23:00'a kadar açık, ~50 EGP, İslami Kahire silüetine bakan en iyi manzara, buraya 10 dakika.",
    kamera: { zoom: 17, pitch: 60, bearing: 10 },
  },
  {
    id: "khan", gun: 2, saat: "19:30", kategori: "deneyim", kaynak: "plan",
    ad: "Khan el-Khalili",
    alt: "Akşam çarşısı",
    konum: [31.2622, 30.0477],
    aciklama: "14. yüzyıldan beri ayakta olan kapalı çarşı. Akşam saatlerinde asıl kalabalığına kavuşuyor. <b>Neye bakmalı:</b> 1382'de emir Cerkes el-Halili, Fatımi halifelerinin türbe külliyesini yıktırıp yerine bir kervansaray yaptırdı — çarşının adı ondan geliyor. Turistik tezgâhların arasında kaybolmuş <b>Memlük dönemi taş kapılarını ve tonozlu geçitlerini</b> arayın, hâlâ ayaktalar. Zanaatlar sokaklara ayrılmış: kuyumcular, bakırcılar, baharatçılar ayrı hatlarda. Asıl çarşı deneyimi ana caddede değil, o dar yan kollarda.",
    kamera: { zoom: 17, pitch: 55, bearing: 20 },
  },
  {
    id: "fishawy", gun: 2, saat: "21:00", kategori: "yemek", kaynak: "plan",
    ad: "El Fishawy",
    alt: "250 yıllık kahvehane",
    konum: [31.2624, 30.0476],
    aciklama: "Çarşının göbeğinde, aynalarla kaplı, 1797'den beri aynı ailede olan ve hiç kapanmayan kahvehane. Naguib Mahfouz üçlemesinin bir kısmını burada yazmış. 21:00 doğru saat: gündüz paket turlarla dolup taşıyor, akşam Mısırlı aileler ve öğrenciler geliyor.",
    ipucu: "Yazılı menü yok ve fiyat müşteriye göre değişiyor — tek gerçek riski bu. <b>Oturmadan önce her kalemin fiyatını tek tek sorun.</b> Nane çayı (şay bi-na'na) ve karkade ısmarlayın; iki kişi 150–250 EGP olmalı, 400 EGP'yi aşıyorsa itiraz edin. Küçük banknotla ödeyin. Masaya gelen satıcılara göz teması kurmadan \"la, şükran\" deyin. Fiyat tartışmasıyla uğraşmak istemezseniz 3 dakika ötedeki Naguib Mahfouz Cafe'de fiyatlar menüde yazılı ve sabit — klimalı, daha pahalı, daha az otantik.",
    kamera: { zoom: 18, pitch: 50, bearing: 20 },
  },

  // ————————————————————————— GÜN 2
  {
    id: "keops", gun: 3, saat: "08:00", kategori: "antik", kaynak: "plan",
    ad: "Gize Platosu",
    alt: "Keops, Kefren, Mikerinos",
    konum: [31.1342, 29.9792],
    aciklama: "Keops MÖ 2560 civarında dikildi; 146 metreydi, dış kaplamasını kaybedince 138'e indi. <b>3.800 yıl boyunca dünyanın en yüksek insan yapısı olarak kaldı</b> — bu rekoru başka hiçbir yapı kıramadı. <b>Neye bakmalı:</b> Kefren daha yüksek görünür ama değildir; hem daha yüksek bir kaya tabanında durur hem de <b>tepesinde orijinal kireçtaşı kaplaması hâlâ duruyor.</b> O beyaz külah çok önemli: üç piramidin de bir zamanlar baştan aşağı böyle pürüzsüz ve parlak olduğunu gösteren tek kalıntı bu — bugün gördüğünüz basamaklı yüzey aslında iç dolgu. Mikerinos'un tabanında ise granit kaplama yarım bırakılmış, işçilerin işi nasıl yaptığı orada görülüyor. Platonun güneyindeki üç küçük piramit kraliçelere ait.",
    ipucu: "Kapı açılışında girin: serin, tenha, ışık ideal. Giriş kişi başı 700 EGP. Yeni ana kapı <b>Fayyum Yolu üzerindeki Ziyaretçi Merkezi</b> — taksiciye bunu tarif edin, eski Al-Haram kapısını değil; oradaki kartlı makinelerden bileti kendiniz alıp kimseyle muhatap olmadan turnikeye geçersiniz. Sfenks tarafındaki kapıda gişe yok, oradan yalnız önceden alınmış biletle girilir ama çıkış için ideal. Plato içinde bilete dahil ücretsiz elektrikli servis dolaşıyor (08:00'den önce çalışmıyor) — Keops'tan Sfenks'e 1,3 km'yi yürümek istemezseniz binin. Keops'un içine girmek ayrı bilet ve pahalı (1.500 EGP): içeride oyma da hazine de yok, çıplak granit oda ve dar rampa var; Krallar Vadisi'ni zaten gezeceğiniz için atlanabilir — merak ediyorsanız Kefren piramidi 280 EGP'ye aynı deneyimi veriyor. \"Bedava\" deve/at teklifi yoktur: binerken değil <b>inerken</b> pazarlık yapılır, o yüzden hiç binmeyin.",
    kamera: { zoom: 15, pitch: 65, bearing: 35 },
  },
  {
    id: "sfenks", gun: 3, saat: "10:30", kategori: "antik", kaynak: "plan",
    ad: "Büyük Sfenks",
    alt: "Kefren'in bekçisi",
    konum: [31.1376, 29.9753],
    aciklama: "Tek parça kayadan oyulmuş 73 metrelik aslan gövdesi. Doğuya, gün doğumuna bakar. <b>Neye bakmalı:</b> Pençelerinin arasında duran <b>Rüya Steli</b>: IV. Tutmosis, Sfenks'in rüyasına girip beni kumdan kurtar sana tahtı vereyim dediğini yazdırmış — kendi meşruiyetini bir rüyaya dayandıran firavun. Burnun Napolyon'un askerlerince kırıldığı hikâyesi doğru değil; burun Napolyon'dan yüzyıllar önce zaten yoktu. Hemen yanında <b>Kefren'in Vadi Tapınağı</b> duruyor: Eski Krallık'tan kalan en iyi korunmuş yapı, bazı granit blokları 100 tonun üzerinde.",
    ipucu: "\"Fotoğrafınızı çekeyim\" diye telefonunuzu isteyen kişi sonunda para istiyor, azına da itiraz ediyor. Elinize kola/şal tutuşturulursa almayın.",
    kamera: { zoom: 17.5, pitch: 70, bearing: 30 },
  },
  {
    id: "gem", gun: 3, saat: "14:00", kategori: "muze", kaynak: "plan",
    ad: "Büyük Mısır Müzesi",
    alt: "GEM",
    konum: [31.1194, 29.9938],
    aciklama: "Dünyanın en büyük arkeoloji müzesi, piramitlerin hemen yanında. Tutankhamun koleksiyonunun tamamı ilk kez tek çatı altında. Kraliyet mumyaları burada değil — onlar Fustat'taki Medeniyet Müzesi'nde (NMEC); mumya görmek istiyorsanız ayrı bir yarım gün gerekir. <b>Neye bakmalı:</b> Girişteki <b>Büyük Merdiven</b> kraliyet heykelleriyle çevrili ve yukarı çıktıkça sonundaki pencere piramitleri çerçeveliyor — müzenin en iyi tasarım kararı. Atriyumda 11 metrelik <b>II. Ramses kolosu</b>. Tutankhamun galerilerinde koleksiyonun tamamı: 5.000'den fazla parça, tarihte ilk kez bir arada. Keops'un yanındaki çukurda bulunan <b>güneş teknesi</b> de buraya taşındı.",
    ipucu: "Öğle yemeği derdi yok: müzenin içinde <b>Zooba</b> (koshari, taameya, şavarma — hijyeni yüksek, alkolsüz, iki kişi 400–700 EGP), Mandarine Koueider (şark tatlıları) ve birkaç kafe var, hepsi 18:00'e kadar açık. Platodan çıkarken manzaralı bir öğle isterseniz plato içindeki <b>9 Pyramids Lounge</b> dokuz piramide birden bakıyor (09:00–17:00, son giriş 16:00, rezervasyon iyi olur). Gişe satışı yok, bilet saat dilimli: gitmeden tickets.gem.eg üzerinden alın (visit-gem.com artık buraya yönleniyor). 1 Kasım 2026'da zam yürürlükte — kişi başı 35 $. 22 Kasım pazara denk geliyor, o gün galeriler 18:00'de kapanıp son girişi 17:00'de kesiyor; 4–5 saatlik müze için 14:00 dilimi sınırda, mümkünse daha erken bir dilim seçin.",
    etiket: "Paket turlarda yok",
    kamera: { zoom: 16, pitch: 55, bearing: -35 },
  },
  {
    id: "abou-tarek", gun: 3, saat: "20:00", kategori: "yemek", kaynak: "oneri",
    ad: "Abou Tarek",
    alt: "Koshary",
    konum: [31.2437, 30.0505],
    aciklama: "Mercimek, pirinç, makarna ve kızarmış soğanın üst üste bindiği milli yemek koshary'nin en bilinen adresi. Maarouf ile Champollion sokaklarının kesiştiği köşede; dört katlı ve hep dolu. Menü yok, sadece boy seçiyorsunuz. İki kişi 100–160 EGP.",
    ipucu: "Kalabalığa aldanmayın, devir hızı çok yüksek — oturduktan ~5 dakika sonra önünüzde. Rezervasyon yok, sıraya girip oturuyorsunuz. <b>Para yemek gelmeden önce alınıyor; bu dolandırıcılık değil, buranın usulü.</b> Nakit ve küçük banknot götürün. Sirkeli sos (daqqa) ve acı sos (shatta) ayrı geliyor — azar azar ekleyin, hepsini dökerseniz sirke ağır gelir. Kapanış saati kaynaklarda 22:00 ile 24:00 arasında çelişiyor, 20:00 her hâlükârda güvenli.",
    kamera: { zoom: 17, pitch: 45, bearing: 0 },
  },

  // ————————————————————————— GÜN 3
  {
    id: "sakkara", gun: 4, saat: "08:00", kategori: "antik", kaynak: "plan",
    ad: "Sakkara",
    alt: "Coser'in Basamaklı Piramidi",
    konum: [31.2165, 29.8712],
    aciklama: "Mısır'ın en eski piramidi — Gize'dekilerden yaklaşık bir asır önce, mimar İmhotep tarafından tasarlandı. Valizlerle gelin: buradan doğruca havalimanına geçilecek. <b>Neye bakmalı:</b> Giriş kolonadındaki sütunlar demet demet saz görünümünde oyulmuş — taşın tek başına ayakta durabileceğine <b>henüz güvenmedikleri</b> için bildikleri bitkisel mimariyi taklit etmişler; mimarlık tarihinin en dokunaklı ayrıntılarından biri. Piramidin kuzey yüzünde <b>serdab</b> var: kapalı bir hücre, içinde Coser'in heykeli, duvarda iki delik — heykel 4.700 yıldır o deliklerden dışarı bakıyor. Ti ve Mereruka mastabalarındaki kabartmalar Eski Krallık gündelik hayatının elimizdeki en zengin kaydı: balıkçılık, hayvan besisi, marangozlar. Unas Piramidi'nin içinde <b>ilk Piramit Metinleri</b> var — bilinen en eski dinî yazılı külliyat.",
    ipucu: "Uçuş 14:00'te olduğu için bu sabah artık sıkışık değil: 08:00'de girin, havalimanına 60–90 dakikalık yol için 11:30'da çıkmanız yeterli — Basamaklı Piramit, İmhotep Müzesi ve Ti/Mereruka mastabalarının hepsine vakit var, hiçbirini atlamayın.",
    kamera: { zoom: 16, pitch: 62, bearing: 30 },
  },
  {
    id: "cai-lxr", gun: 4, saat: "14:00", kategori: "ulasim", kaynak: "plan",
    ad: "Kahire → Luxor",
    alt: "Air Cairo direkt, 1 saat",
    konum: [31.4056, 30.1219],
    aciklama: "Kahire–Luxor hattında sabah (05:00–08:25) ve öğleden sonra (14:00'ten itibaren) iki ayrı kümede sefer var, ortasında sefer yok. Sakkara'dan sonra en erken gerçekçi seçenek 14:00 — bu da Karnak'ı bu günden çıkarıp ertesi sabaha taşımayı gerektiriyor, çünkü 15:00 varıştan sonra Karnak'ın son girişine (16:00) yetişecek zaman kalmıyor.",
    ipucu: "Karnak'ı feda etmeyin, sadece güne taşıyın: yarın sabah 06:00 açılışında, boş ve serin bir Karnak sizi bekliyor — turist otobüsleri gelmeden önce.",
    kamera: { zoom: 6.5, pitch: 45, bearing: 15 },
  },
  {
    id: "luxor-tapinak", gun: 4, saat: "17:00", kategori: "antik", kaynak: "plan",
    ad: "Luxor Tapınağı",
    alt: "Işıklandırmada",
    konum: [32.6393, 25.6996],
    aciklama: "Avlusunda Ebu'l Haggag Camii yükselir: tapınak ve cami iç içe. Girişteki tek dikilitaşın eşi Paris'te, Concorde Meydanı'nda. <b>Neye bakmalı:</b> Girişteki tek dikilitaşın eşi Paris'te; karşılığında gelen saat Kahire Kalesi'nin avlusunda, hiç çalışmadan duruyor. <b>Ebu'l-Haccac Camii'nin kapısı zeminden üç metre yukarıda:</b> cami, tapınak kumla dolduktan sonra o seviyeye inşa edilmiş; kazı tapınağı boşaltınca kapı havada kalmış. Bir binada 3.400 yıllık katman farkını bu kadar net gösteren başka örnek yok. İçeride Roma dönemi bir odada <b>firavun kabartmalarının üstüne boyanmış Hıristiyan freskleri</b> var — pagan, Hıristiyan ve İslam üst üste. III. Amenhotep'in kolonadı ve II. Ramses kolosları avluda.",
    ipucu: "Karanlıkta ışıklandırılmış hâli Luxor'un en güzel manzaralarından ve akşam açık kalan tek büyük tapınak bu — asıl değeri burada. Uçak 15:00'te iniyor, otele valiz bırakıp 17:00'de burada olmak rahat sığar. Güneş 16:59'da batıyor, 17:00 girişiyle hem alacakaranlığı hem ışıkları görürsünüz. <b>Kapanış saatinde kaynaklar çelişiyor</b> (bakanlık 20:00, bazı kaynaklar 19:00), o yüzden 18:30 yerine öne çekildi; otelinize sorun. Bilet 500 EGP, kartla. İçindeki Ebu'l-Haggag Camii aktif bir cami — namaz vaktine denk gelirseniz cemaate katılabilirsiniz.",
    kamera: { zoom: 16.8, pitch: 62, bearing: 15 },
  },
  {
    id: "sofra", gun: 4, saat: "20:00", kategori: "yemek", kaynak: "oneri",
    ad: "Sofra",
    alt: "Geleneksel Mısır sofrası",
    konum: [32.6404, 25.6975],
    aciklama: "Nil kıyısındaki turistik restoranlardan uzakta, 1930'lardan kalma bir evde tagine ve mezeler. Adres: 90 Mohamed Farid St., Al Manshiya. 11:00–24:00 açık. Kişi başı 400–600 EGP. <b>Alkol servisi yok</b> — Luxor'da en rahat edeceğiniz adres.",
    ipucu: "<b>Rezervasyon yapın</b>, yorumlarda tekrar eden uyarı bu ve kasım yüksek sezon; teras katını özellikle isteyin. Oteliniz aracılığıyla ya da Facebook sayfalarından yazmak en pratiği. Nil kıyısında değil iç mahallede, akşam gidiş ve dönüş için taksi ayarlayın. Burada pirinç dolgulu güvercin (hamam mahshi) ve tatlı olarak umm ali deneyin.",
    kamera: { zoom: 17.5, pitch: 45, bearing: 15 },
  },

  // ————————————————————————— GÜN 4
  {
    id: "karnak", gun: 5, saat: "06:00", kategori: "antik", kaynak: "plan",
    ad: "Karnak Tapınağı",
    alt: "Hipostil Salonu, dünden kalan",
    konum: [32.6573, 25.7188],
    aciklama: "Mısır'ın en büyük tapınak kompleksi, 2000 yıl boyunca eklenerek büyüdü. Dünden bugüne taşındı çünkü Luxor'a iniş 15:00'te ve son giriş saatine (16:00) yetişecek zaman kalmıyordu — kayıp değil kazanç: 06:00 açılışında ne tur otobüsü ne kalabalık var. <b>Neye bakmalı:</b> Girişte koç başlı sfenksler dizisi. İlk pilon <b>bitirilmemiş</b> ve arkasında <b>inşaat rampasının kerpiç kalıntısı hâlâ duruyor</b> — bu tapınakların nasıl yapıldığını gösteren en somut kanıt, çoğu ziyaretçi farkına varmadan geçiyor. Hipostil salonda 134 sütun, ortadaki on ikisi 21 metre. Hatşepsut'un dikilitaşı 29 metreyle <b>Mısır'da ayakta duran en yüksek dikilitaş</b>; ikizi kutsal gölün yanında devrilmiş hâlde yatıyor — tepeden tırnağa yakından inceleyebileceğiniz tek dikilitaş o. Bilete dahil olan Açık Hava Müzesi'nde I. Senusret'in <b>Beyaz Şapel</b>'i parça parça bulunup yeniden kurulmuş hâlde duruyor.",
    ipucu: "1,5 saat ayırın, 07:30'da çıkın — Krallar Vadisi'nin kendi açılışı 07:00, batı yakaya geçiş 45 dakika sürüyor, bu yüzden vadiye biraz gecikmeli girmiş olacaksınız. Bilet 600 EGP ve <b>gişe nakit almıyor, sadece kart</b>. Açık Hava Müzesi'ni ve kutsal gölü atlamayın; çoğu ziyaretçi hipostil salonu görüp çıkıyor.",
    kamera: { zoom: 16.2, pitch: 60, bearing: -25 },
  },
  {
    id: "krallar-vadisi", gun: 5, saat: "08:15", kategori: "antik", kaynak: "plan",
    ad: "Krallar Vadisi",
    alt: "62 mezar, 3'ü bilete dahil",
    konum: [32.6014, 25.7402],
    aciklama: "Yeni Krallık firavunlarının kaya mezarları. Standart bilet yaklaşık 750 EGP ve üç mezar içeriyor; Tutankhamun ayrı bilet. <b>Neye bakmalı:</b> Mezarların hepsi aynı şemayı izliyor: inen koridor, sonra <b>kuyu şaftı</b> (hem sel suyunu tutmak hem soyguncuyu düşürmek için), sütunlu salon, defin odası. Duvarlardaki metinler süs değil <b>tarif</b>: Amduat ve Kapılar Kitabı, güneşin gece yolculuğunun saat saat haritası — firavunun aynı yolu geçebilmesi için. KV9'un tavanında gökyüzü tanrıçası Nut boydan boya uzanıyor. Ve şu ayrıntı: <b>Tutankhamun'un mezarı 3.200 yıl soyulmadan kaldı çünkü KV9'u kazan işçiler molozu onun kapısının üstüne döktü.</b>",
    ipucu: "Karnak'tan sonra buraya 08:15 gibi varıyorsunuz — 07:00 açılışı kadar erken değil ama kasım sonunda öğlene kadar hâlâ tolere edilebilir; asıl kızgın saatler 12:00'den sonra. Bilet 750 EGP ve <b>açık mezarlardan üçünü</b> seçme hakkı veriyor; hangi mezarların açık olduğu rotasyonla değişiyor, liste sabah girişte panoda. Ek biletli mezarlar ayrı: I. Seti (KV17) 2.000 EGP — vadinin en iyisi, tek ek bilet alacaksanız bu; V./VI. Ramses (KV9) 220 EGP — fiyat/performansta açık ara önde; Tutankhamun (KV62) 700 EGP — küçük bir oda, çoğu ziyaretçi değmediğini söylüyor. <b>Turnikeden geçtikten sonra bilet alamıyorsunuz</b>, ek mezar kararını kapıda verin. Telefon fotoğrafı ücretsiz, flaş her yerde yasak. Tur otobüsleri 09:00'da geliyor — erken girin.",
    kamera: { zoom: 15.3, pitch: 68, bearing: 35 },
  },
  {
    id: "hatsepsut", gun: 5, saat: "09:45", kategori: "antik", kaynak: "plan",
    ad: "Hatşepsut Tapınağı",
    alt: "Deir el-Bahri",
    konum: [32.6068, 25.7381],
    aciklama: "Kadın firavunun kayalığa oyulmuş üç teraslı tapınağı; arkasındaki 300 metrelik uçurum yapının parçası gibi durur. Mimarı, Hatşepsut'un başdanışmanı Senenmut. Diğer tapınaklar peyzaja konur, bu ondan çıkar gibi görünür — 3.500 yıl sonra hâlâ modern durmasının sebebi bu.",
    ipucu: "Üç şeyi kaçırmayın. <b>Punt Kolonadı</b> (orta teras, güney): Punt Ülkesi'ne yapılan deniz seferi — gemiler, sepetlerde taşınan canlı buhur ağaçları, zürafalar. <b>Anubis Şapeli</b> (kuzey uç): tapınağın en iyi korunmuş renkleri burada ve çoğu ziyaretçi uğramadan geçiyor. Ve her yerde göreceğiniz <b>keski izleri</b>: üvey oğlu III. Tutmosis, ölümünden yirmi yıl sonra bütün tasvirlerini kazıtmış — figürün olması gereken yerde oyuk var, komşusu sapasağlam. Kendisi takma sakallı ve erkek firavun kıyafetiyle betimlenmiş; kalıp buydu. Mumyası Kahire'de, NMEC'te. Gölge yok, otoparktan rampaya 300–400 m; sabah serininde yürüyün. Otoparkın yanındaki Asasif mezarları çıkışta 30–45 dakika — el feneri götürün.",
    kamera: { zoom: 15.8, pitch: 70, bearing: -35 },
  },
  {
    id: "memnon", gun: 5, saat: "10:45", kategori: "antik", kaynak: "plan",
    ad: "Memnon Devleri",
    alt: "Yol üstü, 15 dakika",
    konum: [32.6106, 25.7205],
    aciklama: "3.400 yıldır ayakta duran 18 metrelik ikiz heykeller. III. Amenhotep'in bugün yok olmuş tapınağının kapı bekçileriydi. <b>Neye bakmalı:</b> Bu iki heykel, <b>Mısır'da yapılmış en büyük ölü tapınağından</b> geriye kalan her şey — Karnak'tan bile genişti, sel ve deprem yok etti. MÖ 27'deki depremden sonra kuzeydeki heykel şafak vakti <b>ses çıkarmaya</b> başladı; Yunan ve Romalı turistler bunu duymak için ta buralara geldi ve <b>adlarını heykelin bacaklarına kazıdı — o yazılar hâlâ orada.</b> İmparator Septimius Severus heykeli onartınca ses kesildi. Yol kenarında, ücretsiz, 20 dakika; ama ne olduğunu bilmeden bakarsanız sadece iki yıpranmış heykel görürsünüz.",
    etiket: "Ücretsiz",
    kamera: { zoom: 17, pitch: 65, bearing: 30 },
  },
  {
    id: "medinet-habu", gun: 5, saat: "11:05", kategori: "antik", kaynak: "plan",
    ad: "Medinet Habu",
    alt: "III. Ramses Tapınağı",
    konum: [32.6008, 25.7196],
    aciklama: "Orijinal boyaları en iyi korunmuş kabartmalar burada — üstelik Karnak'ın kalabalığı olmadan. Memnon Devleri'nin hemen ötesinde. <b>Neye bakmalı:</b> Kabartmalar <b>alışılmadık derecede derin</b> oyulmuş — III. Ramses, kendisinden sonra gelenlerin adını kazımasını istemedi ve haklı çıktı. Kuzey duvarındaki <b>Deniz Kavimleri deniz savaşı</b>, o savaşın dünyadaki tek görsel kaydı. Yanındaki sahnede kâtipler öldürülen düşmanların kesik ellerini sayıyor. Tavanlarda ve üst duvarlarda <b>orijinal boya</b> duruyor — Karnak'ta kaybettiğiniz rengi burada bulacaksınız. Giriş kapısı Suriye kalelerinden kopyalanmış bir migdol; tapınağın içinde Kıpti dönemi kilise kalıntıları da var.",
    ipucu: "Batı yakasında öğle yemeği için en iyi adres tam karşıda: <b>Café & Restaurant Maratonga</b> — açık hava, gölge, taze pişmiş ekmek, uygun fiyat, alkol öne çıkmıyor. Ramesseum tarafında kalırsanız Marsam Hotel'in bahçesi ya da Panorama'nın çatı terası (11:00'den itibaren) da iyi. Ramesseum Rest House manzaralı ama bira servisi yapıyor.",
    etiket: "Kalabalıksız",
    kamera: { zoom: 16.5, pitch: 62, bearing: -40 },
  },
  {
    id: "deir-el-medina", gun: 5, saat: "12:15", kategori: "antik", kaynak: "oneri",
    ad: "Deir el-Medina",
    alt: "Ustaların kendi köyü — vaktiniz kalırsa",
    konum: [32.6019, 25.7286],
    aciklama: "Krallar Vadisi'ndeki mezarları kazan ve boyayan ustaların yaşadığı köy — ve kendileri için yaptıkları mezarlar. Sennedjem ile Inherkhau'nun mezarlarındaki renkler firavun mezarlarınınkinden daha canlı; kendi elleriyle, acele etmeden yapmışlar.",
    ipucu: "Karnak bu güne eklenince batı yakasının geri kalanı sıkıştı; bu durak ilk feda edilecek olan — <b>kaynak: öneri</b>, plana dahil değil. Vaktiniz varsa Medinet Habu'ya 1,8 km, bilet ~220 EGP, 45 dakika yeter. Yoksa doğrudan öğle yemeğine geçip otelde dinlenin, 16:30'daki felluka için güç toplayın.",
    etiket: "Kalabalıksız · isteğe bağlı",
    kamera: { zoom: 17, pitch: 58, bearing: 25 },
  },
  {
    id: "felluka", gun: 5, saat: "16:30", kategori: "deneyim", kaynak: "plan",
    ad: "Nil'de felluka",
    alt: "Gün batımı yelkenlisi",
    konum: [32.6360, 25.6980],
    aciklama: "Geleneksel yelkenliyle bir saat: 15–20 $. Cruise'un vaat ettiği manzaranın özeti, fiyatın kırkta biri.",
    kamera: { zoom: 15.5, pitch: 65, bearing: 340 },
  },

  // ————————————————————————— GÜN 5
  {
    id: "mumyalama", gun: 6, saat: "09:00", kategori: "muze", kaynak: "oneri",
    ad: "Mumyalama Müzesi",
    alt: "Tekniğin kendisi",
    konum: [32.6396, 25.7003],
    aciklama: "Corniche üzerinde küçük ama iyi kurgulanmış bir müze: mumyalama aletleri, kanopik kavanozlar, mumyalanmış kediler ve timsahlar, sürecin adım adım anlatımı.",
    ipucu: "Dört gündür mezar geziyorsunuz; burası o mezarların <b>neden</b> ve <b>nasıl</b> yapıldığını anlatan parça. 09:00'da açılıyor, 45 dakika yeter, Luxor Müzesi'ne Corniche boyunca 650 metre. Sırayı bozmayın — önce burayı görüp sonra Luxor Müzesi'ne giderseniz oradaki mumyalar bambaşka anlam kazanıyor. Bilet ~220 EGP. Bu sabah zaten boştu ve müze 13:00'te kapanıyor.",
    kamera: { zoom: 17, pitch: 50, bearing: 340 },
  },
  {
    id: "luxor-muze", gun: 6, saat: "10:15", kategori: "muze", kaynak: "plan",
    ad: "Luxor Müzesi",
    alt: "Uçuş öncesi sakin sabah",
    konum: [32.6428, 25.7036],
    aciklama: "Küçük ama titizlikle seçilmiş koleksiyon. Akşam uçuşundan önce Corniche'te yürüyüş ve müzeyle rahat bir veda sabahı. <b>Neye bakmalı:</b> <b>İki kraliyet mumyası</b> — 18. hanedanı kuran I. Ahmose ve I. Ramses olduğu düşünülen mumya; sargısız hâlde, karartılmış odada iklimlendirilmiş vitrinlerde. I. Ramses, Krallar Vadisi'nde 2.000 EGP'ye girmeyi tarttığınız mezarın sahibi I. Seti'nin babası. Bir de <b>Karnak zulası</b>: 1989'da Karnak'ta bir çukura gömülü bulunan heykeller — gömüldükleri için neredeyse kusursuz korunmuşlar, Mısır heykel sanatının en iyi örnekleri arasındalar. Akhenaton'un yıktırılan tapınağından kalan <b>talatat blokları</b> da burada, duvar hâlinde yeniden birleştirilmiş.",
    ipucu: "Kışın müze <b>öğle arası veriyor: 09:00–13:00, sonra 17:00–20:00</b>. Siz 16:00 uçuşundasınız, yani sabah seansı tek şansınız — 10:00'da girip 12:00'de çıkın, sonra havalimanına. Gize ve GEM'in kalabalığından sonra burası küçük, sakin ve özenli bir seçki; yorulmuş gözle bakmak için ideal. Gişe kartla çalışıyor.",
    kamera: { zoom: 17, pitch: 50, bearing: 0 },
  },
  {
    id: "lxr-ssh", gun: 6, saat: "16:50", kategori: "ulasim", kaynak: "plan",
    ad: "Luxor → Şarm El-Şeyh",
    alt: "Kahire aktarmalı, ~4 saat",
    konum: [32.7066, 25.6710],
    aciklama: "Luxor–Şarm arasında artık düzenli bir direkt sefer yok; genel kaynaklarda geçen \"pazartesi/çarşamba/cumartesi direkt\" bilgisi 2026 kışında güncel değil — gerçek uçuş EgyptAir'in Kahire aktarmalı hattı. Luxor 16:50 kalkış, Kahire'de ~1 sa 45 dk bekleme, Şarm'a 20:45 varış.",
    ipucu: "Aktarma tek biletle (aynı rezervasyon) alınırsa bagaj Şarm'a kadar gider, ayrı check-in gerekmez. Kahire'deki bekleme yatsı vaktine denk geliyor — terminaldeki mescide rahatça yetişirsiniz. Varışın gecikmesi bu akşamı kısaltıyor: otel transferi dahil ~21:15'te odada olursunuz, ilk akşam sade geçsin.",
    kamera: { zoom: 12, pitch: 40, bearing: 350 },
  },

  // ————————————————————————— GÜN 6
  {
    id: "ras-mohammed", gun: 7, saat: "08:30", kategori: "deniz", kaynak: "plan",
    ad: "Ras Mohammed Milli Parkı",
    alt: "Tekne + şnorkel turu",
    konum: [34.2455, 27.7237],
    aciklama: "Sina'nın ucunda, Kızıldeniz'in en ünlü resifleri: Shark ve Yolanda. Tam günlük tekne turu öğle yemeği dahil; kasım sonunda deniz hâlâ 25–26°C.",
    ipucu: "Turu otelden değil, ücretsiz iptalli olarak önceden ayırtın ve rezervasyonda dört şeyi <b>yazılı</b> teyit ettirin: milli park ücreti dahil mi (değilse kişi başı 7–15 € arası değişiyor, nakit ve genelde kapıda), öğle yemeği ve otel transferi dahil mi, kaç durak yapılıyor, dönüş saati kaç. <b>Maske ve şnorkeli Türkiye'den götürün</b> — kiralık maske sızdırır. Deniz ayakkabısı şart. Shark ve Yolanda açık deniz noktası: altınızda dip değil mavi boşluk var ve akıntı sert olabilir, can yeleği isteyin ve akıntı yönünü kaptana sorun. Pasaportunuzu yanınıza alın.",
    etiket: "26 Kasım",
    kamera: { zoom: 13.5, pitch: 60, bearing: 20 },
  },
  {
    id: "quad-safari", gun: 7, saat: "18:00", kategori: "deneyim", kaynak: "plan",
    ad: "Sina'da quad + deve safarisi",
    alt: "Çöl akşamı, Bedevi yemeği",
    konum: [34.3300, 27.9930],
    aciklama: "Tekne dönüşünden sonra tur aracı otelden alır, 15–20 dakikada çöl istasyonuna götürür; brifing ve kask, sonra Sina dağlarına doğru ~30 km rehberli quad sürüşü. Echo Dağı'nda yankı molası, Bedevi köyünde çay ve 10–15 dakikalık deve binişi, ardından Bedevi kampında akşam yemeği. Toplam 3 saat; gün batımı 16:46 olduğu için tur zaten karanlıkta devam ediyor — ışık değil, çöl gecesi ve ateş başı sohbeti asıl kazanç.",
    ipucu: "Bu durak <b>Sharm Old Market'in balık akşamının yerine geçiyor</b> — ikisi aynı akşama sığmıyor, tekne 17:00'de dönüyor ve tur 18:00'de otelden alıyor. Deniz ürünleri akşamını tercih ederseniz bu turu iptal edip Old Market'e gidin. <b>Kişi başı tekli quad alın</b> (15–20 €): çift kişilik 10 €'luk turlarda arkada oturan toz yutar; 2 kişi için özel tur ~60 € ve 30 araçlık konvoy kuyruğundan kurtarır. GetYourGuide veya Viator'dan 24 saat ücretsiz iptalli ayırtın, alış saatini bir gece önce WhatsApp'tan teyit ettirin — tekne gecikirse 18:00 yerine 18:30 alışı isteyin, çoğu operatör esnek. Bakiyeyi online ödeyin; yanınıza yalnız bahşiş için 100–200 EGP. <b>Ekipman:</b> kapalı ayakkabı zorunlu, uzun kol ve pantolon, toz için buff ya da şal (turda satılan şalı almayın, fahiş), çöl gecesi soğuyor — ince bir mont. Kask tur veriyor, takmadan sürmeyin; sürücü belgesi istenmiyor. <b>Sigorta:</b> seyahat sigortalarının çoğu quad kazasını kapsam dışı tutuyor — poliçenizde \"motorlu araç / ATV\" istisnasına bakın, gerekirse ek teminat. Deve kısmında hayvanın haline bakın; kötüyse binmeden fotoğraf çekip geçin.",
    etiket: "26 Kasım",
    kamera: { zoom: 13, pitch: 60, bearing: 300 },
  },

  // ————————————————————————— GÜN 7
  {
    id: "sharks-bay", gun: 8, saat: "05:50", kategori: "deniz", kaynak: "plan",
    ad: "Sharks Bay — otelin resifi",
    alt: "Kısa son yüzme",
    konum: [34.3940, 27.9440],
    aciklama: "Otelin house reef'inde son, kısa bir şnorkel: korunaklı koy, kıyıdan birkaç kulaçta mercan. Dün gece çöl turundan geç dönüldüğü ve bugün uçuş 10:50 olduğu için pencere dar — yine de günü denizle kapatmaya değer.",
    ipucu: "<b>Gerçek pencereniz 05:50–06:50.</b> Bu hatta Pegasus'un 10:50 seferi THY'nin 11:45'ine göre kişi başı ~4.500 ₺ daha ucuz, sadece 55 dakika erken — uluslararası uçuş ve Şarm'daki çifte güvenlik kontrolü için 3 saat önce havalimanında olun, yani 07:50. Geriye sayarsanız: 07:05 check-out, 06:50 sudan çıkış, bavul akşamdan hazır olmalı. <b>Şnorkelden sonra uçmak tıbben tamamen güvenli</b> — 18 saat kuralı yalnızca tüplü dalış için. Mercana basmayın, deniz ayakkabısı takın, cankurtaran yok — birlikte yüzün.",
    kamera: { zoom: 15, pitch: 55, bearing: 15 },
  },
  {
    id: "ssh-donus", gun: 8, saat: "10:50", kategori: "ulasim", kaynak: "plan",
    ad: "Şarm → İstanbul",
    alt: "Pegasus direkt, 2 sa 45 dk",
    konum: [34.3950, 27.9773],
    aciklama: "27 Kasım için tek yön fiyatları gerçekten çok farklı: THY'nin 11:45 seferi kişi başı ~11.500 ₺ iken, Pegasus'un yalnızca 55 dakika daha erken 10:50 seferi ~7.030 ₺ — 2 kişi toplamda yaklaşık 9.000 ₺ (~190 $) fark. Uçuşun kendisi neredeyse aynı saatte, yalnız havalimanına çıkış biraz erkene alınıyor. Yurt dışı çıkış harcını (kişi başı 1.250 ₺) Türkiye'den ayrılmadan dijital ödemiş olun.",
    kamera: { zoom: 12, pitch: 35, bearing: 340 },
  },
];

/** Şehirler arası uçuş bacakları — haritada kesikli yay olarak çizilir. */
export const UCUSLAR = [
  { id: "ist-cai", from: [28.7519, 41.2753], to: [31.4056, 30.1219], gun: 1, etiket: "İstanbul → Kahire" },
  { id: "cai-lxr", from: [31.4056, 30.1219], to: [32.7066, 25.6710], gun: 4, etiket: "Kahire → Luxor" },
  { id: "lxr-ssh", from: [32.7066, 25.6710], to: [34.3950, 27.9773], gun: 6, etiket: "Luxor → Şarm El-Şeyh" },
  { id: "ssh-ist", from: [34.3950, 27.9773], to: [28.7519, 41.2753], gun: 8, etiket: "Şarm → İstanbul" },
];
