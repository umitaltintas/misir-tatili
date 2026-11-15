/**
 * Rota verisi — Kahire + Şarm El-Şeyh (Luxor günübirlik), 4–11 Aralık 2026. 4 kişi.
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
    no: 1, tarih: "4 Aralık", gunAdi: "Cuma", sehir: "İstanbul",
    baslik: "İstanbul → Kahire",
    tema: "Gece uçuşuyla yola çıkış",
  },
  {
    no: 2, tarih: "5 Aralık", gunAdi: "Cumartesi", sehir: "Kahire",
    baslik: "Osmanlı ve Memlük Kahiresi",
    tema: "Kaleden çarşıya, ışıklandırmalı bir akşama",
  },
  {
    no: 3, tarih: "6 Aralık", gunAdi: "Pazar", sehir: "Kahire",
    baslik: "Gize Günü",
    tema: "Piramitler ve Büyük Mısır Müzesi",
  },
  {
    no: 4, tarih: "7 Aralık", gunAdi: "Pazartesi", sehir: "Şarm El-Şeyh",
    baslik: "Kahire → Şarm El-Şeyh",
    tema: "Öğleden sonra deniz, akşam çöl",
  },
  {
    no: 5, tarih: "8 Aralık", gunAdi: "Salı", sehir: "Şarm El-Şeyh",
    baslik: "Ras Mohammed",
    tema: "Bütün gün resifler, erken yatış",
  },
  {
    no: 6, tarih: "9 Aralık", gunAdi: "Çarşamba", sehir: "Luxor",
    baslik: "Luxor'a Günübirlik",
    tema: "Uçakla Krallar Vadisi ve Karnak, gece Şarm'a dönüş",
  },
  {
    no: 7, tarih: "10 Aralık", gunAdi: "Perşembe", sehir: "Şarm El-Şeyh",
    baslik: "Serbest Gün ve Eski Şarm",
    tema: "Luxor'dan sonra dinlenme, akşam çarşı",
  },
  {
    no: 8, tarih: "11 Aralık", gunAdi: "Cuma", sehir: "Şarm El-Şeyh",
    baslik: "Şarm → İstanbul",
    tema: "Son bir deniz sabahı, erken dönüş",
  },
];

export const DURAKLAR = [
  // ————————————————————————— KAHİRE
  {
    id: "ist-kalkis", gun: 1, saat: "22:10", kategori: "ulasim", kaynak: "plan",
    ad: "İstanbul Havalimanı",
    alt: "Kalkış — akşam uçuşu",
    konum: [29.3092, 40.8986],
    aciklama: "<b>Bilet alındı.</b> AJet'in Sabiha Gökçen'den akşam direkt seferi, 2 saat 30 dakika; Mısır saati Türkiye'nin bir saat gerisinde, iniş yerel saatle 23:40. Sabah seferi yerine bir gece önceden yola çıkmak hem ucuz hem de 5 Aralık'ı dinlenmiş ve tam bir gün olarak kazandırıyor. Dönüş Şarm'dan, bu yüzden iki tek yön bilet.",
    kamera: { zoom: 9, pitch: 30, bearing: 20 },
  },
  {
    id: "cai-varis", gun: 1, saat: "23:40", kategori: "ulasim", kaynak: "plan",
    ad: "Kahire Havalimanı",
    alt: "Gece yarısına yakın varış",
    konum: [31.4056, 30.1219],
    aciklama: "Vize kapıda alınıyor: kişi başı 30 $ — Mart 2026'da 25'ten yükseldi, Türkçe kaynakların çoğu hâlâ eski rakamı yazıyor. Banko nakit dolar istiyor, POS yok ve para üstü vermiyorlar; dört kişi için 120 $'ı tam ve küçük banknotla hazırlayın.",
    ipucu: "Gece yarısına yakın geldiğiniz için kuyruk gündüze göre genelde daha kısa. Otele varış gece yarısını bulur — resepsiyona geç check-in yapacağınızı önceden bildirin. Bu akşam için başka plan yok: doğrudan yatış, yarın (5 Aralık) tam ve dinlenmiş bir günle Kahire Kalesi'nden başlıyorsunuz. Kuyruğu hiç beklemek istemezseniz Ağustos 2026'da başlayan dijital QR vizesini kartla önceden alabilirsiniz (36 $, <a href=\"https://apps.visaonarrival.gov.eg\" target=\"_blank\" rel=\"noopener\">apps.visaonarrival.gov.eg</a>).",
    kamera: { zoom: 12, pitch: 40, bearing: -20 },
  },
  {
    id: "kale", gun: 2, saat: "09:30", kategori: "islami", kaynak: "plan",
    ad: "Kahire Kalesi",
    alt: "Muhammed Ali Camii ve türbesi",
    konum: [31.2599, 30.0287],
    aciklama: "Kavalalı Mehmet Ali Paşa'nın İstanbul camilerini örnek alarak yaptırdığı Alabaster Camii. Paşa'nın türbesi caminin içinde. <b>Neye bakmalı:</b> Minareler ince ve kalem uçlu — İstanbul tipi. Memlük Kahiresi köşeli minare yapardı; Paşa bilerek Osmanlı üslubunu seçti, yani cami bir mimari tercih değil siyasi beyandır. Alt duvarlardaki alabaster kaplama adını verdiği şey. Avludaki saat kulesi Fransa kralı Louis Philippe'in hediyesi: karşılığında Luxor Tapınağı'nın dikilitaşlarından biri gitti — <b>saat hiç düzgün çalışmadı</b>, dikilitaş hâlâ Paris'te. O dikilitaşın boş kaidesi bugün Luxor Tapınağı'nın girişinde duruyor. Batı terası Kahire'ye bakar, açık havada piramitler seçilir. Aynı kompleksteki En-Nasır Muhammed Camii (1318) çok daha eski, çok daha sade ve çoğu zaman bomboş.",
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
    ipucu: "Aralık başında güneş <b>16:55'te</b> batıyor — programın gerçek gün batımını görebileceğiniz tek noktası burası, ve El-Muizz'e yürüme mesafesinde. 23:00'a kadar açık, giriş ~50 EGP. Çayınızı içip hava karardıktan sonra El-Muizz'e geçin; o cadde zaten ışıklandırmayla güzel. Kazılarda ortaya çıkan Eyyubi surlarının restore edilmiş bölümü parkın kenarında duruyor.",
    etiket: "Paket turlarda yok",
    kamera: { zoom: 16, pitch: 55, bearing: -75 },
  },
  {
    id: "muizz", gun: 2, saat: "18:00", kategori: "deneyim", kaynak: "plan",
    ad: "El-Muizz Caddesi",
    alt: "Işıklandırma yürüyüşü",
    konum: [31.2610, 30.0490],
    aciklama: "Dünyada en yoğun Orta Çağ İslam eseri barındıran sokak. Bab Zuveyla kapısından girip akşam ışıklandırmasıyla kuzeye, Khan el-Khalili'ye doğru yürüyün. <b>Neye bakmalı:</b> Güneyden girerken <b>Bab Zuveyla</b> — Memlük döneminde idamların yapıldığı kapı; bitişiğindeki el-Müeyyed Camii'nin minarelerine çıkılıyor. Caddenin tam ortasında duran <b>Abdurrahman Kethüda Sebil-Küttabı</b>: altı çeşme, üstü Kur'an mektebi. <b>Kalavun külliyesi</b> (1285) bir medrese, bir türbe ve bir hastaneden oluşuyor — o hastane 20. yüzyıla kadar hasta kabul etti. <b>El-Akmar Camii</b> (1125) Fatımi dönemi; Kahire'nin taşa oyulmuş en eski süslü cephesi burada. Kuzey ucunda Bab el-Futuh kapısı.",
    ipucu: "Aralık başında Kahire'de güneş 16:55'te batıyor; buraya geldiğinizde hava çoktan kararmış olur. Sorun değil — caddenin asıl güzel hâli zaten gece aydınlatmasıyla. Ama gerçek gün batımını görmek isterseniz 16:15'te El-Ezher Parkı'nda olun: 23:00'a kadar açık, ~50 EGP, İslami Kahire silüetine bakan en iyi manzara, buraya 10 dakika.",
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
    ipucu: "Yazılı menü yok ve fiyat müşteriye göre değişiyor — tek gerçek riski bu. <b>Oturmadan önce her kalemin fiyatını tek tek sorun.</b> Nane çayı (şay bi-na'na) ve karkade ısmarlayın; dört kişi 300–500 EGP olmalı, 800 EGP'yi aşıyorsa itiraz edin. Küçük banknotla ödeyin. Masaya gelen satıcılara göz teması kurmadan \"la, şükran\" deyin. Fiyat tartışmasıyla uğraşmak istemezseniz 3 dakika ötedeki Naguib Mahfouz Cafe'de fiyatlar menüde yazılı ve sabit — klimalı, daha pahalı, daha az otantik.",
    kamera: { zoom: 18, pitch: 50, bearing: 20 },
  },

  {
    id: "keops", gun: 3, saat: "08:00", kategori: "antik", kaynak: "plan",
    ad: "Gize Platosu",
    alt: "Keops, Kefren, Mikerinos",
    konum: [31.1342, 29.9792],
    aciklama: "Keops MÖ 2560 civarında dikildi; 146 metreydi, dış kaplamasını kaybedince 138'e indi. <b>3.800 yıl boyunca dünyanın en yüksek insan yapısı olarak kaldı</b> — bu rekoru başka hiçbir yapı kıramadı. <b>Neye bakmalı:</b> Kefren daha yüksek görünür ama değildir; hem daha yüksek bir kaya tabanında durur hem de <b>tepesinde orijinal kireçtaşı kaplaması hâlâ duruyor.</b> O beyaz külah çok önemli: üç piramidin de bir zamanlar baştan aşağı böyle pürüzsüz ve parlak olduğunu gösteren tek kalıntı bu — bugün gördüğünüz basamaklı yüzey aslında iç dolgu. Mikerinos'un tabanında ise granit kaplama yarım bırakılmış, işçilerin işi nasıl yaptığı orada görülüyor. Platonun güneyindeki üç küçük piramit kraliçelere ait.",
    ipucu: "Kapı açılışında girin: serin, tenha, ışık ideal. Giriş kişi başı 700 EGP. Yeni ana kapı <b>Fayyum Yolu üzerindeki Ziyaretçi Merkezi</b> — taksiciye bunu tarif edin, eski Al-Haram kapısını değil; oradaki kartlı makinelerden bileti kendiniz alıp kimseyle muhatap olmadan turnikeye geçersiniz. Sfenks tarafındaki kapıda gişe yok, oradan yalnız önceden alınmış biletle girilir ama çıkış için ideal. Plato içinde bilete dahil ücretsiz elektrikli servis dolaşıyor (08:00'den önce çalışmıyor) — Keops'tan Sfenks'e 1,3 km'yi yürümek istemezseniz binin. Keops'un içine girmek ayrı bilet ve pahalı (1.500 EGP): içeride oyma da hazine de yok, çıplak granit oda ve dar rampa var. Bir piramidin içini görmek istiyorsanız Kefren piramidi 280 EGP'ye aynı deneyimi veriyor; programda başka piramit içi yok, bu fırsatı değerlendirin. \"Bedava\" deve/at teklifi yoktur: binerken değil <b>inerken</b> pazarlık yapılır, o yüzden hiç binmeyin.",
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
    aciklama: "Dünyanın en büyük arkeoloji müzesi, piramitlerin hemen yanında. Tutankhamun koleksiyonunun tamamı ilk kez tek çatı altında. Kraliyet mumyaları burada değil — onlar Fustat'taki Medeniyet Müzesi'nde (NMEC); bu programa sığmadı. Tutankhamun'un altın maskesi ve II. Ramses burada. <b>Neye bakmalı:</b> Girişteki <b>Büyük Merdiven</b> kraliyet heykelleriyle çevrili ve yukarı çıktıkça sonundaki pencere piramitleri çerçeveliyor — müzenin en iyi tasarım kararı. Atriyumda 11 metrelik <b>II. Ramses kolosu</b>. Tutankhamun galerilerinde koleksiyonun tamamı: 5.000'den fazla parça, tarihte ilk kez bir arada. Keops'un yanındaki çukurda bulunan <b>güneş teknesi</b> de buraya taşındı.",
    ipucu: "Öğle yemeği derdi yok: müzenin içinde <b>Zooba</b> (koshari, taameya, şavarma — hijyeni yüksek, alkolsüz, dört kişi 800–1.400 EGP), Mandarine Koueider (şark tatlıları) ve birkaç kafe var, hepsi 18:00'e kadar açık. Platodan çıkarken manzaralı bir öğle isterseniz plato içindeki <b>9 Pyramids Lounge</b> dokuz piramide birden bakıyor (09:00–17:00, son giriş 16:00, rezervasyon iyi olur). Gişe satışı yok, bilet saat dilimli: gitmeden <a href=\"https://tickets.gem.eg\" target=\"_blank\" rel=\"noopener\">tickets.gem.eg</a> üzerinden alın (visit-gem.com artık buraya yönleniyor). 1 Kasım 2026'da zam yürürlükte — kişi başı 35 $. 6 Aralık pazara denk geliyor, o gün galeriler 18:00'de kapanıp son girişi 17:00'de kesiyor; 4–5 saatlik müze için 14:00 dilimi sınırda, mümkünse daha erken bir dilim seçin. Dört kişilik bileti tek siparişte alın.",
    etiket: "Paket turlarda yok",
    kamera: { zoom: 16, pitch: 55, bearing: -35 },
  },
  {
    id: "abou-tarek", gun: 3, saat: "20:00", kategori: "yemek", kaynak: "oneri",
    ad: "Abou Tarek",
    alt: "Koshary",
    konum: [31.2437, 30.0505],
    aciklama: "Mercimek, pirinç, makarna ve kızarmış soğanın üst üste bindiği milli yemek koshary'nin en bilinen adresi. Maarouf ile Champollion sokaklarının kesiştiği köşede; dört katlı ve hep dolu. Menü yok, sadece boy seçiyorsunuz. Dört kişi 200–320 EGP.",
    ipucu: "Kalabalığa aldanmayın, devir hızı çok yüksek — oturduktan ~5 dakika sonra önünüzde. Rezervasyon yok, sıraya girip oturuyorsunuz. <b>Para yemek gelmeden önce alınıyor; bu dolandırıcılık değil, buranın usulü.</b> Nakit ve küçük banknot götürün. Sirkeli sos (daqqa) ve acı sos (shatta) ayrı geliyor — azar azar ekleyin, hepsini dökerseniz sirke ağır gelir. Kapanış saati kaynaklarda 22:00 ile 24:00 arasında çelişiyor, 20:00 her hâlükârda güvenli.",
    kamera: { zoom: 17, pitch: 45, bearing: 0 },
  },

  // ————————————————————————— ŞARM
  {
    id: "cai-ssh", gun: 4, saat: "12:00", kategori: "ulasim", kaynak: "plan",
    ad: "Kahire → Şarm El-Şeyh",
    alt: "Nile Air direkt, ~1 saat",
    konum: [31.4056, 30.1219],
    aciklama: "Nile Air'ın 12:00 seferi, Şarm'a 13:05 varış. 15 Kasım'da Google Flights'ta kişi başı ~4.105 ₺, günün en uygun fiyatlı makul saatli seferi. Otele 13:30 gibi varıyorsunuz, check-in saatine (genelde 14:00) tam denk geliyor. Alternatifler: EgyptAir 09:05 (10:05 varış, ~6.128 ₺) daha uzun bir deniz öğleden sonrası isteyene; Air Cairo 06:00 (~3.992 ₺) en ucuzu ama 03:30 kalkış demek. Air Cairo'nun 11:00 seferinde yalnız Premium Economy kalmış (~6.118 ₺).",
    ipucu: "<b>Bagaj hakkını biletinizde kontrol edin</b>: Nile Air'ın en ucuz tarifesinde valiz dahil olmayabilir, dört valizin ek ücreti EgyptAir farkını kapatabilir; satın almadan önce karşılaştırın. Kahire'den 09:00'da çıkın, trafiğe pay bırakın. Şarm'a Kahire'den gelenlerde vize kontrolü yok, iç hat gibi çıkıyorsunuz.",
    kamera: { zoom: 6.5, pitch: 45, bearing: 120 },
  },
  {
    id: "otel-resif", gun: 4, saat: "14:00", kategori: "deniz", kaynak: "plan",
    ad: "Otelin resifi",
    alt: "İlk deniz öğleden sonrası",
    konum: [34.3940, 27.9440],
    aciklama: "Havalimanından otele 10–15 dakika. Check-in (genelde 14:00; erken girişi önceden sorun), öğle yemeği ve ilk şnorkel: Ras Nasrani ya da Sharks Bay'deki otellerin kendi resifi, kıyıdan birkaç kulaçta mercan. Kahire'nin gürültüsünden sonra ilk sessiz öğleden sonra.",
    ipucu: "Aralık başında deniz ~24–25°C, hava gündüz ~26°C; su ilk anda serin gelir ama 10 dakikada alışılır. Güneş 16:48'de batıyor, 15:30'dan sonra resif gölgede kalıyor; denize öğleden hemen sonra girin. Deniz ayakkabısı şart, cankurtaran yoksa yalnız yüzmeyin.",
    kamera: { zoom: 15, pitch: 55, bearing: 15 },
  },
  {
    id: "quad-safari", gun: 4, saat: "18:00", kategori: "deneyim", kaynak: "plan",
    ad: "Sina'da quad + deve safarisi",
    alt: "Çöl akşamı, Bedevi yemeği",
    konum: [34.3300, 27.9930],
    aciklama: "Tur aracı otelden alır, 15–20 dakikada çöl istasyonuna götürür; brifing ve kask, sonra Sina dağlarına doğru ~30 km rehberli quad sürüşü. Echo Dağı'nda yankı molası, Bedevi köyünde çay ve 10–15 dakikalık deve binişi, ardından Bedevi kampında akşam yemeği. Toplam 3 saat; gün batımı 16:48 olduğu için tur karanlıkta geçiyor. Işık değil, çöl gecesi, yıldızlar ve ateş başı sohbeti asıl kazanç.",
    ipucu: "Şarm'daki ilk akşam için ideal: öğleden sonra deniz, akşam çöl, 21:00 gibi otelde olursunuz; yarın sabah Ras Mohammed teknesi 08:30'da alıyor. Erken yatmak isterseniz 14:30–15:00 alışlı <b>gün batımı turunu</b> seçin, 19:00'da dönersiniz. <b>Kişi başı tekli quad alın</b> (15–20 €): çift kişilik turlarda arkada oturan toz yutar. Dört kişi için özel tur ~100–120 € ve 30 araçlık konvoydan kurtarır. <a href=\"https://www.getyourguide.com/sharm-el-sheikh-l408/\" target=\"_blank\" rel=\"noopener\">GetYourGuide</a> veya <a href=\"https://www.viator.com/Sharm-el-Sheikh/d827\" target=\"_blank\" rel=\"noopener\">Viator</a>'dan ücretsiz iptalli ayırtın, alış saatini bir gece önce WhatsApp'tan teyit ettirin. Bakiyeyi online ödeyin; yanınıza yalnız bahşiş için 200–400 EGP. <b>Ekipman:</b> kapalı ayakkabı zorunlu, uzun kol ve pantolon, toz için buff ya da şal, çöl gecesi Aralık'ta soğuk: mont alın. Kask takmadan sürmeyin. <b>Sigorta:</b> seyahat sigortalarının çoğu quad kazasını kapsam dışı tutuyor, poliçede \"motorlu araç / ATV\" istisnasına bakın.",
    etiket: "7 Aralık",
    kamera: { zoom: 13, pitch: 60, bearing: 300 },
  },

  {
    id: "ras-mohammed", gun: 5, saat: "08:30", kategori: "deniz", kaynak: "plan",
    ad: "Ras Mohammed Milli Parkı",
    alt: "Tekne + şnorkel turu",
    konum: [34.2455, 27.7237],
    aciklama: "Sina'nın ucunda, Kızıldeniz'in en ünlü resifleri: Shark ve Yolanda. Tam günlük tekne turu öğle yemeği dahil; aralık başında deniz hâlâ ~24–25°C. Ertesi sabah 04:00'te Luxor'a alınacağınız için akşamı otelde geçirip erken yatın.",
    ipucu: "Turu otelden değil, <a href=\"https://www.getyourguide.com/sharm-el-sheikh-l408/\" target=\"_blank\" rel=\"noopener\">GetYourGuide</a> ya da <a href=\"https://www.viator.com/Sharm-el-Sheikh/d827\" target=\"_blank\" rel=\"noopener\">Viator</a> üzerinden ücretsiz iptalli olarak önceden ayırtın ve rezervasyonda dört şeyi <b>yazılı</b> teyit ettirin: milli park ücreti dahil mi (değilse kişi başı 7–15 € arası değişiyor, nakit ve genelde kapıda), öğle yemeği ve otel transferi dahil mi, kaç durak yapılıyor, dönüş saati kaç. <b>Maske ve şnorkeli Türkiye'den götürün</b> — kiralık maske sızdırır. Deniz ayakkabısı şart. Shark ve Yolanda açık deniz noktası: altınızda dip değil mavi boşluk var ve akıntı sert olabilir, can yeleği isteyin ve akıntı yönünü kaptana sorun. Pasaportunuzu yanınıza alın.",
    etiket: "8 Aralık",
    kamera: { zoom: 13.5, pitch: 60, bearing: 20 },
  },

  // ————————————————————————— LUXOR GÜNÜBİRLİK
  {
    id: "lxr-gidis", gun: 6, saat: "04:00", kategori: "ulasim", kaynak: "plan",
    ad: "Şarm → Luxor",
    alt: "Otelden alış, sabah uçuşu",
    konum: [34.3950, 27.9773],
    aciklama: "Travco'nun Şarm'dan günübirlik Luxor turu: otelden 04:00 civarı alış, Şarm havalimanından sabah iç hat uçuşu (~1 saat), Luxor'da rehber ve klimalı araç karşılıyor. Uçuşlar, rehber, girişler ve öğle yemeği fiyata dahil. Tur <b>yalnızca çarşamba</b> günleri var; plan bu yüzden 9 Aralık'a kurulu.",
    ipucu: "Rezervasyon <a href=\"https://experiences.easyjet.com/uk/sharm-el-sheikh/luxor-day-trip-from-sharm-el-sheikh-including-flights-344816\" target=\"_blank\" rel=\"noopener\">easyJet Holidays (Travco)</a> üzerinden; paylaşımlı grupta kişi başı ~£276–294, 48 saat öncesine kadar ücretsiz iptal. Dört kişi için <b>özel grup</b> kişi başı ~£349: sadece ~£55 fazlasına rehber ve araç yalnız sizin. Uçuş bilgileri için pasaport bilgilerinizi isteyecekler. <b>Pasaportu yanınıza alın</b>, yalnız küçük bir sırt çantası yeterli. Otel kahvaltı paketi (breakfast box) hazırlatın; bir gece önceden resepsiyona söyleyin. Rehberlik İngilizce.",
    etiket: "Sadece çarşamba",
    kamera: { zoom: 6, pitch: 45, bearing: 250 },
  },
  {
    id: "krallar-vadisi", gun: 6, saat: "08:00", kategori: "antik", kaynak: "plan",
    ad: "Krallar Vadisi",
    alt: "62 mezar, 3'ü bilete dahil",
    konum: [32.6014, 25.7402],
    aciklama: "Yeni Krallık firavunlarının kaya mezarları. Standart bilet yaklaşık 750 EGP ve üç mezar içeriyor; Tutankhamun ayrı bilet. <b>Neye bakmalı:</b> Mezarların hepsi aynı şemayı izliyor: inen koridor, sonra <b>kuyu şaftı</b> (hem sel suyunu tutmak hem soyguncuyu düşürmek için), sütunlu salon, defin odası. Duvarlardaki metinler süs değil <b>tarif</b>: Amduat ve Kapılar Kitabı, güneşin gece yolculuğunun saat saat haritası — firavunun aynı yolu geçebilmesi için. KV9'un tavanında gökyüzü tanrıçası Nut boydan boya uzanıyor. Ve şu ayrıntı: <b>Tutankhamun'un mezarı 3.200 yıl soyulmadan kaldı çünkü KV9'u kazan işçiler molozu onun kapısının üstüne döktü.</b>",
    ipucu: "Tur önce batı yakasına geçiyor; vadiye 08:00 gibi, tur otobüslerinin en yoğun saatinden önce varıyorsunuz. Standart bilet tura dahil ve <b>üç açık mezarı</b> kapsıyor; hangi mezarların açık olduğu rotasyonla değişiyor. Ek biletli mezarlar ayrı: I. Seti (KV17) 2.000 EGP, vadinin en iyisi; V./VI. Ramses (KV9) 220 EGP, fiyat/performansta açık ara önde; Tutankamon (KV62) 700 EGP, küçük bir oda. <b>Turnikeden geçtikten sonra bilet alamıyorsunuz</b>: ek mezar istiyorsanız rehbere kapıda söyleyin, kartınızı hazır tutun. Flaş her yerde yasak.",
    kamera: { zoom: 15.3, pitch: 68, bearing: 35 },
  },
  {
    id: "hatsepsut", gun: 6, saat: "10:15", kategori: "antik", kaynak: "plan",
    ad: "Hatşepsut Tapınağı",
    alt: "Deir el-Bahri",
    konum: [32.6068, 25.7381],
    aciklama: "Kadın firavunun kayalığa oyulmuş üç teraslı tapınağı; arkasındaki 300 metrelik uçurum yapının parçası gibi durur. Mimarı, Hatşepsut'un başdanışmanı Senenmut. Diğer tapınaklar peyzaja konur, bu ondan çıkar gibi görünür — 3.500 yıl sonra hâlâ modern durmasının sebebi bu.",
    ipucu: "Üç şeyi kaçırmayın. <b>Punt Kolonadı</b> (orta teras, güney): Punt Ülkesi'ne yapılan deniz seferi — gemiler, sepetlerde taşınan canlı buhur ağaçları, zürafalar. <b>Anubis Şapeli</b> (kuzey uç): tapınağın en iyi korunmuş renkleri burada ve çoğu ziyaretçi uğramadan geçiyor. Ve her yerde göreceğiniz <b>keski izleri</b>: üvey oğlu III. Tutmosis, ölümünden yirmi yıl sonra bütün tasvirlerini kazıtmış — figürün olması gereken yerde oyuk var, komşusu sapasağlam. Kendisi takma sakallı ve erkek firavun kıyafetiyle betimlenmiş; kalıp buydu. Gölge yok, otoparktan rampaya 300–400 m; şapka ve su alın. Turda burada genelde 45 dakika kalınıyor, Anubis Şapeli için rehberden izin isteyin.",
    kamera: { zoom: 15.8, pitch: 70, bearing: -35 },
  },
  {
    id: "memnon", gun: 6, saat: "11:30", kategori: "antik", kaynak: "plan",
    ad: "Memnon Devleri",
    alt: "Yol üstü, 15 dakika",
    konum: [32.6106, 25.7205],
    aciklama: "3.400 yıldır ayakta duran 18 metrelik ikiz heykeller. III. Amenhotep'in bugün yok olmuş tapınağının kapı bekçileriydi. <b>Neye bakmalı:</b> Bu iki heykel, <b>Mısır'da yapılmış en büyük ölü tapınağından</b> geriye kalan her şey — Karnak'tan bile genişti, sel ve deprem yok etti. MÖ 27'deki depremden sonra kuzeydeki heykel şafak vakti <b>ses çıkarmaya</b> başladı; Yunan ve Romalı turistler bunu duymak için ta buralara geldi ve <b>adlarını heykelin bacaklarına kazıdı — o yazılar hâlâ orada.</b> İmparator Septimius Severus heykeli onartınca ses kesildi. Yol kenarında, ücretsiz, turda fotoğraf molası olarak 15 dakika; ama ne olduğunu bilmeden bakarsanız sadece iki yıpranmış heykel görürsünüz.",
    etiket: "Ücretsiz",
    kamera: { zoom: 17, pitch: 65, bearing: 30 },
  },
  {
    id: "karnak", gun: 6, saat: "14:00", kategori: "antik", kaynak: "plan",
    ad: "Karnak Tapınağı",
    alt: "Hipostil Salonu, öğle yemeğinden sonra",
    konum: [32.6573, 25.7188],
    aciklama: "Mısır'ın en büyük tapınak kompleksi, 2000 yıl boyunca eklenerek büyüdü. Tur öğle yemeğinden sonra doğu yakasına dönüp burayla bitiyor. <b>Neye bakmalı:</b> Girişte koç başlı sfenksler dizisi. İlk pilon <b>bitirilmemiş</b> ve arkasında <b>inşaat rampasının kerpiç kalıntısı hâlâ duruyor</b> — bu tapınakların nasıl yapıldığını gösteren en somut kanıt, çoğu ziyaretçi farkına varmadan geçiyor. Hipostil salonda 134 sütun, ortadaki on ikisi 21 metre. Hatşepsut'un dikilitaşı 29 metreyle <b>Mısır'da ayakta duran en yüksek dikilitaş</b>; ikizi kutsal gölün yanında devrilmiş hâlde yatıyor — tepeden tırnağa yakından inceleyebileceğiniz tek dikilitaş o. Bilete dahil olan Açık Hava Müzesi'nde I. Senusret'in <b>Beyaz Şapel</b>'i parça parça bulunup yeniden kurulmuş hâlde duruyor.",
    ipucu: "Turda 1,5–2 saat ayrılıyor; rehberin anlatımından sonra serbest zaman isteyin ve <b>Açık Hava Müzesi'ni ve kutsal gölü</b> atlamayın, çoğu grup hipostil salonu görüp çıkıyor. Bilet tura dahil. <b>Luxor Tapınağı programda yok</b>; dönüş uçuşundan önce boş zaman kalırsa rehberden akşam ışıklandırmasında 30 dakika uğramayı isteyin (bilet 500 EGP, kartla, kendiniz ödersiniz).",
    kamera: { zoom: 16.2, pitch: 60, bearing: -25 },
  },
  {
    id: "lxr-donus", gun: 6, saat: "19:30", kategori: "ulasim", kaynak: "plan",
    ad: "Luxor → Şarm",
    alt: "Akşam dönüşü, gece otelde",
    konum: [32.7066, 25.6710],
    aciklama: "Karnak'tan sonra genelde bir otelde ya da restoranda dinlenme molası var, ardından akşam uçuşuyla Şarm'a dönüş. Otele 21:30–22:00 gibi varıyorsunuz; günün toplamı ~17 saat.",
    ipucu: "Gidenlerin tek şikâyeti dönüş uçuşu öncesi ~2 saatlik bekleme; şarjı dolu bir telefon, powerbank ve hafif bir hırka alın. Uçuş saati ancak rezervasyondan sonra belli oluyor, bir gün önce teyit edin. Yarın programsız: alarm kurmayın.",
    kamera: { zoom: 12, pitch: 40, bearing: 350 },
  },

  // ————————————————————————— ŞARM
  {
    id: "serbest-gun", gun: 7, saat: "10:00", kategori: "deniz", kaynak: "plan",
    ad: "Otelde serbest gün",
    alt: "Resif, havuz ya da Tiran",
    konum: [34.3940, 27.9440],
    aciklama: "Luxor'un 17 saatinden sonra programsız bir gün. Geç kahvaltı, otelin resifinde şnorkel, havuz başında kitap. Bu gün aynı zamanda <b>yedek gün</b>: 8 Aralık'ta rüzgâr yüzünden Ras Mohammed teknesi iptal olursa tur buraya kayar.",
    ipucu: "Denize öğleden önce ve öğleden hemen sonra girin; güneş 16:48'de batıyor ve 15:30'dan sonra resif gölgede kalıyor. Bir tekne günü daha isteyenler için <b>Tiran Adası</b> turu var (Ras Mohammed'den daha sığ ve sakin resifler, kişi başı ~25–40 $); ama Luxor'un ertesi günü çoğu kişi dinlenmeyi seçiyor. Naama Bay'de yürüyüş ya da cam tabanlı tekne de hafif seçenekler.",
    etiket: "Yedek gün",
    kamera: { zoom: 15, pitch: 55, bearing: 15 },
  },
  {
    id: "eski-sarm", gun: 7, saat: "18:30", kategori: "deneyim", kaynak: "plan",
    ad: "Eski Şarm ve Es-Sahabe Camii",
    alt: "Old Market, balık akşamı",
    konum: [34.2960, 27.8640],
    aciklama: "Şarm'ın otel şeridinden çıkıp şehre değdiği tek yer: Old Market (Sharm el-Maya). Dar çarşı sokakları, baharat ve nargile dükkânları, akşamları ışıklandırılan Osmanlı-Memlük üslubunda <b>Es-Sahabe Camii</b>. Cami yeni (2017), ama mimarisi Kahire'de gördüğünüz kubbe ve minarelere bilinçli bir selam.",
    ipucu: "Gündüzü otelde geçirip 18:30'da çıkın. Akşam yemeği için çarşıdaki balık lokantalarında tezgâhtan balığı seçip tartıyla ödüyorsunuz: <b>kilo fiyatını ve pişirme ücretini önceden sorun</b>. Camide akşam ya da yatsıya cemaatle yetişebilirsiniz. Çarşıda pazarlık kuralı Kahire ile aynı. Otelden taksi 20–25 dakika; dönüş fiyatını da gidişte konuşun.",
    kamera: { zoom: 16.5, pitch: 55, bearing: 0 },
  },
  {
    id: "farsha", gun: 7, saat: "21:00", kategori: "yemek", kaynak: "oneri",
    ad: "Farsha Café",
    alt: "Kayalıklarda Bedevi kafesi",
    konum: [34.3170, 27.8530],
    aciklama: "Hadaba'da denize inen kayalıkların üstüne yayılmış, fenerler, halılar ve minderlerle döşenmiş açık hava kafesi. Şarm'ın en çok fotoğraflanan mekânı; manzara ve atmosfer için gidilir, çay, taze meyve suyu ve nargile.",
    ipucu: "Akşamüstü ve gün batımı saatlerinde uzun kuyruk oluyor; gidenler <b>21:00'den sonra</b> çok daha sakin olduğunu söylüyor. Girişte sıra fişi alıp bekliyorsunuz. Fiyatlar turistik mekâna göre makul, ama menüdeki fiyata servis eklenebilir. Merdivenler dik ve karanlık; düz tabanlı ayakkabı giyin. Eski Şarm'dan taksiyle 10 dakika.",
    etiket: "Sofra önerisi",
    kamera: { zoom: 17, pitch: 55, bearing: 90 },
  },

  // ————————————————————————— DÖNÜŞ
  {
    id: "sharks-bay", gun: 8, saat: "05:50", kategori: "deniz", kaynak: "plan",
    ad: "Sharks Bay — otelin resifi",
    alt: "Kısa son yüzme",
    konum: [34.3940, 27.9440],
    aciklama: "Otelin resifinde son, kısa bir şnorkel: korunaklı koy, kıyıdan birkaç kulaçta mercan. Uçuş 10:50 olduğu için pencere dar, yine de tatili denizle kapatmaya değer.",
    ipucu: "<b>Gerçek pencereniz 05:50–06:50.</b> Güneş 06:24'te doğuyor, ilk ışıkta su sakin. Uluslararası uçuş ve Şarm'daki çifte güvenlik kontrolü için 3 saat önce havalimanında olun, yani 07:50. Geriye sayarsanız: 07:05 check-out, 06:50 sudan çıkış, bavul akşamdan hazır olmalı. <b>Şnorkelden sonra uçmak tıbben tamamen güvenli</b> — 18 saat kuralı yalnızca tüplü dalış için. Mercana basmayın, deniz ayakkabısı takın, cankurtaran yok — birlikte yüzün.",
    kamera: { zoom: 15, pitch: 55, bearing: 15 },
  },
  {
    id: "ssh-donus", gun: 8, saat: "10:50", kategori: "ulasim", kaynak: "plan",
    ad: "Şarm → İstanbul",
    alt: "Pegasus direkt, 2 sa 45 dk",
    konum: [34.3950, 27.9773],
    aciklama: "<b>Bilet alındı.</b> Pegasus'un 10:50 direkt seferi, 2 saat 45 dakika; Türkiye saatiyle 14:35 civarı İstanbul. Bu hatta THY'nin 11:45 seferinden belirgin şekilde ucuzdu. Yurt dışı çıkış harcını (kişi başı 1.250 ₺) Türkiye'den ayrılmadan dijital ödemiş olun.",
    kamera: { zoom: 12, pitch: 35, bearing: 340 },
  },
];

/** Şehirler arası uçuş bacakları — haritada kesikli yay olarak çizilir. */
export const UCUSLAR = [
  { id: "ist-cai", from: [29.3092, 40.8986], to: [31.4056, 30.1219], gun: 1, etiket: "İstanbul → Kahire" },
  { id: "cai-ssh", from: [31.4056, 30.1219], to: [34.3950, 27.9773], gun: 4, etiket: "Kahire → Şarm El-Şeyh" },
  { id: "ssh-lxr", from: [34.3950, 27.9773], to: [32.7066, 25.6710], gun: 6, etiket: "Şarm → Luxor (günübirlik)" },
  { id: "lxr-ssh", from: [32.7066, 25.6710], to: [34.3950, 27.9773], gun: 6, etiket: "Luxor → Şarm" },
  { id: "ssh-ist", from: [34.3950, 27.9773], to: [29.3092, 40.8986], gun: 8, etiket: "Şarm → İstanbul" },
];
