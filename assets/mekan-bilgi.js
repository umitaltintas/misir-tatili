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
    gorsel: ["El Fishawi.jpg", "El Fishawy Cafe.jpg", "Fishawi cafe.jpg", "El-Fishawi Cafe.jpg"],
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
    gorsel: ["Grand Egyptian Museum.jpg", "Grand Egyptian Museum, Giza.jpg", "The Grand Egyptian Museum.jpg"],
    donem: "2025'te açıldı", sure: "3–4 saat",
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
    gorsel: ["Valley of the Kings.jpg", "Valley of the Kings, Luxor.jpg", "ValleyOfTheKingsPano.jpg"],
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
    gorsel: ["Luxor Museum.jpg", "Luxor museum.jpg", "Luxor Museum entrance.jpg"],
    donem: "1975", sure: "1,5 saat",
  },
  "medinet-habu": {
    gorsel: ["Medinet Habu.jpg", "Medinet Habu temple.jpg", "Mortuary Temple of Ramesses III.jpg"],
    donem: "MÖ 1180 civarı", sure: "1,5 saat", unesco: "Antik Teb ve Nekropolü",
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
    gorsel: ["Soho Square Sharm El Sheikh.jpg", "SOHO Square, Sharm el-Sheikh.jpg", "Sharm el-Sheikh SOHO Square.jpg"],
    sure: "2 saat",
  },
  "ras-mohammed": {
    gorsel: ["Ras Muhammad National Park.jpg", "Ras Mohammed National Park.jpg", "Ras Muhammad nature reserve.jpg", "Shark Reef Ras Muhammad.jpg"],
    donem: "1983'ten beri milli park", sure: "Tam gün",
  },
  "old-market": {
    gorsel: ["Sharm el-Sheikh Old Market.jpg", "Old Market, Sharm el-Sheikh.jpg", "Sharm El Sheikh Old Market.jpg", "Sharm el-Sheikh.jpg"],
    sure: "2 saat",
  },
  "sharks-bay": {
    gorsel: ["Sharks Bay Sharm el-Sheikh.jpg", "Shark's Bay.jpg", "Coral reef Sharm el-Sheikh.jpg", "Red Sea coral reef, Sharm el-Sheikh.jpg"],
    sure: "Yarım gün",
  },
};

/** Bir durağın künyesini verir; kaydı olmayan duraklar için boş nesne. */
export function mekanBilgi(id) {
  return MEKAN_BILGI[id] || {};
}
