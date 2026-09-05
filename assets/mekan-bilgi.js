/**
 * Duraklara ait görsel ve künye bilgisi.
 *
 * gorsel: Wikimedia Commons dosya adları. Sırayla denenir; hiçbiri
 *         bulunamazsa görsel alanı sessizce gizlenir (bkz. rota.js).
 * donem:  yapının inşa/kuruluş tarihi — doğrulanabilir, objektif bilgi.
 * sure:   yerinde geçirmeniz önerilen süre; programın akışına göre tahmin.
 * unesco: mekânın dahil olduğu UNESCO Dünya Mirası alanı.
 *
 * Burada bilinçli olarak puan veya kullanıcı yorumu yok: o veriler
 * Google/Tripadvisor gibi kaynaklara ait, uydurulamaz.
 */

export const MEKAN_BILGI = {
  kale: {
    gorsel: ["Mosque of Muhammad Ali, Citadel of Cairo.jpg", "Cairo Citadel.jpg", "Muhammad Ali Mosque.jpg"],
    donem: "Kale 1176, cami 1848", sure: "2 saat", unesco: "Tarihi Kahire",
  },
  khan: {
    gorsel: ["Khan el-Khalili.jpg", "Khan El-Khalili.jpg", "Khan el Khalili bazaar.jpg"],
    donem: "1382", sure: "2 saat", unesco: "Tarihi Kahire",
  },
  fishawy: {
    gorsel: ["Flickr - Gaspa - Cairo, Caffè Fishawi.jpg", "Cairo FishawyCafé1 byDanielCsorfoly.JPG"],
    donem: "1797", sure: "1 saat",
  },
  keops: {
    gorsel: ["All Gizah Pyramids.jpg", "Pyramids of Giza.jpg", "Giza Pyramids.jpg"],
    donem: "MÖ 2560 civarı", sure: "2–3 saat", unesco: "Memphis ve Nekropolü",
  },
  sfenks: {
    gorsel: ["Great Sphinx of Giza - 20080716a.jpg", "Great Sphinx of Giza.jpg", "Sphinx of Giza.jpg"],
    donem: "MÖ 2500 civarı", sure: "30–45 dk", unesco: "Memphis ve Nekropolü",
  },
  gem: {
    gorsel: ["Grand Egyptian Museum 2025.jpg", "Grand Egyptian Museum 2025 (70046).jpg"],
    donem: "2025'te açıldı", sure: "4–5 saat",
  },
  "abou-tarek": {
    gorsel: ["Koshary.jpg", "Kushari.jpg", "Koshari.jpg"],
    donem: "1950'ler", sure: "1 saat",
  },
  sakkara: {
    gorsel: ["Saqqara pyramid ver 2.jpg", "Saqqara pyramid.jpg", "Step Pyramid of Djoser.jpg"],
    donem: "MÖ 2650 civarı", sure: "2 saat", unesco: "Memphis ve Nekropolü",
  },
  "sultan-hasan": {
    gorsel: ["Mosque-Madrassa of Sultan Hassan.jpg", "Sultan Hassan Mosque.jpg", "Mosque of Sultan Hassan.jpg"],
    donem: "1356–1363", sure: "1 saat", unesco: "Tarihi Kahire",
  },
  rifai: {
    gorsel: ["Al-Rifa'i Mosque.jpg", "Al Rifai Mosque.jpg", "Al-Rifai Mosque, Cairo.jpg", "Rifai Mosque.jpg"],
    donem: "1869–1912", sure: "30 dk", unesco: "Tarihi Kahire",
  },
  "ezher-parki": {
    gorsel: ["Al Azhar Park 3.jpg", "Al-Azhar Park Cairo (1).jpg", "Al-Azhar Sunset.jpg"],
    donem: "2005'te açıldı", sure: "1–1,5 saat",
  },
  muizz: {
    gorsel: ["Al-Muizz Street.jpg", "Muizz Street.jpg", "Al-Muizz li-Din Allah Street.jpg", "El Moez Street.jpg"],
    donem: "Fatımi dönemi, 10. yüzyıl", sure: "2 saat", unesco: "Tarihi Kahire",
  },
  karnak: {
    gorsel: ["Karnak Temple.jpg", "Great Hypostyle Hall, Karnak.jpg", "Hypostyle hall, Karnak temple.jpg"],
    donem: "MÖ 2000 – MÖ 30", sure: "2–3 saat", unesco: "Antik Teb ve Nekropolü",
  },
  "luxor-tapinak": {
    gorsel: ["Egypt.LuxorTemple.06.jpg", "Luxor Temple.jpg", "Luxor Temple at night.jpg"],
    donem: "MÖ 1400 civarı", sure: "1,5 saat", unesco: "Antik Teb ve Nekropolü",
  },
  "krallar-vadisi": {
    gorsel: ["Thebes, Luxor, Egypt, Panoramic view of the Valley of the Kings.jpg", "Thebes, Luxor, Egypt, Valley of the Kings from above.jpg"],
    donem: "MÖ 1539 – MÖ 1075", sure: "3 saat", unesco: "Antik Teb ve Nekropolü",
  },
  hatsepsut: {
    gorsel: ["Mortuary Temple of Hatshepsut.jpg", "Temple of Hatshepsut.jpg", "Deir el-Bahari.jpg"],
    donem: "MÖ 1470 civarı", sure: "1,5 saat", unesco: "Antik Teb ve Nekropolü",
  },
  memnon: {
    gorsel: ["Colossi of Memnon.jpg", "Colossi of Memnon, Luxor.jpg", "Memnon colossi.jpg"],
    donem: "MÖ 1350 civarı", sure: "15 dk", unesco: "Antik Teb ve Nekropolü",
  },
  "luxor-muze": {
    gorsel: ["By ovedc - Luxor Museum - 01.jpg", "Luxor Museum 01.jpg", "Luxor Museum 2010.jpg"],
    donem: "1975", sure: "1,5 saat",
  },
  "medinet-habu": {
    gorsel: ["Medinet Habu.jpg", "Medinet Habu temple.jpg", "Mortuary Temple of Ramesses III.jpg"],
    donem: "MÖ 1180 civarı", sure: "1,5 saat", unesco: "Antik Teb ve Nekropolü",
  },
  "deir-el-medina": {
    gorsel: ["Deir el-Medina ruins (2009a).jpg", "Deir al Medineh near Luxor.jpg"],
    donem: "MÖ 1550–1080", sure: "1–1,5 saat", unesco: "Antik Teb ve Nekropolü",
  },
  mumyalama: {
    gorsel: ["Musée Momification - Louxor (EG) - 2025-12-10 - 1.jpg", "Musée Momification - Louxor (EG) - 2025-12-10 - 10.jpg"],
    donem: "1997'de açıldı", sure: "45 dk – 1 saat",
  },
  felluka: {
    gorsel: ["Felucca on the Nile.jpg", "Feluccas on the Nile.jpg", "Felucca Luxor.jpg"],
    sure: "1 saat",
  },
  sofra: {
    gorsel: ["Egyptian food.jpg", "Egyptian cuisine.jpg", "Tagine.jpg"],
    sure: "1,5 saat",
  },
  soho: {
    gorsel: ["Sharm Soho Square R01.jpg", "02 SOHO Square.jpg"],
    sure: "2 saat",
  },
  "ras-mohammed": {
    gorsel: ["Ras Mohammed Bay.jpg", "Tortuga carey (Eretmochelys imbricata), parque nacional Ras Muhammad, Egipto, 2022-03-28, DD 56.jpg"],
    donem: "1983'ten beri milli park", sure: "Tam gün",
  },
  "old-market": {
    gorsel: ["Sharm el-Sheikh Old Market.jpg", "Old Market, Sharm el-Sheikh.jpg", "Sharm El Sheikh Old Market.jpg", "Sharm el-Sheikh.jpg"],
    sure: "2 saat",
  },
  "quad-safari": {
    gorsel: ["Sharm elshiekh desert and mountains.jpg", "A local Bedouin with his camel at Yamit in the Sinai Penisula (FL62907534).jpg", "Dessert Safari.jpg"],
    sure: "3 saat",
  },
  // Ulaşım durakları: künye yerine yalnızca havalimanı görseli.
  "ist-kalkis": {
    gorsel: ["İstanbul Havalimanı Airport 2019 16.jpg", "Istanbul Airport, Arnavutköy (P1090184).jpg"],
  },
  "cai-varis": {
    gorsel: ["Cairo Airport Terminal 3.jpg", "Gate at Terminal 3 Cairo International Airport - panoramio.jpg"],
  },
  "cai-lxr": {
    gorsel: ["Luxor International Airport (14023866758).jpg", "Luxor International Airport (14207238921).jpg"],
  },
  "lxr-ssh": {
    gorsel: ["Arival Hall At Sharm El-Sheikh Airport - panoramio.jpg", "Airport of Sharm El Sheikh - panoramio.jpg"],
  },
  "ssh-donus": {
    gorsel: ["Sharm el-Sheikh Airport-01.jpg", "Sharm airport.JPG"],
  },
};

/** Bir durağın künyesini verir; kaydı olmayan duraklar için boş nesne. */
export function mekanBilgi(id) {
  return MEKAN_BILGI[id] || {};
}
