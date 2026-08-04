/**
 * Harita zeminleri.
 *
 * Uydu bir raster servis; diğer ikisi vektör karo üzerine kurulu ve stil
 * yüklendikten sonra `boya()` ile sayfanın paletine göre yeniden renklendiriliyor.
 * Vektör karolar OpenMapTiles şemasını izlediği için katmanlar kaynak adına
 * göre değil, `source-layer` değerine göre eşleştiriliyor — böylece taban stil
 * değişse de renklendirme çalışmaya devam eder.
 */

const ATIF_UYDU = 'Görüntüler: <a href="https://www.esri.com/">Esri</a>, Maxar, Earthstar Geographics';
const ATIF_ETIKET = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> katkıcıları, © <a href="https://carto.com/attributions">CARTO</a>';

export const UYDU_STILI = {
  version: 8,
  sources: {
    zemin: {
      type: "raster", tileSize: 256, maxzoom: 19, attribution: ATIF_UYDU,
      tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
    },
    yazi: {
      type: "raster", tileSize: 256, maxzoom: 19, attribution: ATIF_ETIKET,
      tiles: ["https://a.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png"],
    },
  },
  layers: [
    { id: "zemin", type: "raster", source: "zemin" },
    { id: "yazi", type: "raster", source: "yazi", paint: { "raster-opacity": 0.85 } },
  ],
};

/** Vektör karoların taban stili — renkler sonra ezildiği için hangisi olduğu önemli değil. */
const TABAN = "https://tiles.openfreemap.org/styles/positron";

export const ZEMINLER = [
  { id: "uydu", ad: "UYDU", tip: "raster" },

  {
    id: "gece", ad: "GECE", tip: "vektor", url: TABAN,
    palet: {
      zemin: "#0B1226",
      arazi: "#121A32",
      park: "#142B2C",
      su: "#10344B",
      akarsu: "#3FA7A0",       // Nil ve kanallar öne çıksın
      bina: "#1A2445",
      bina3d: "#232F57",
      yolAna: "#3E4874",
      yolAra: "#28315A",
      sinir: "#4A5578",
      etiket: "#D9C39A",
      etiketHalo: "#070C1C",
      yolYazi: "#8E96B8",
    },
  },

  {
    id: "papirus", ad: "PAPİRÜS", tip: "vektor", url: TABAN,
    palet: {
      zemin: "#EFE4CB",
      arazi: "#E9DDC0",
      park: "#D8E0BE",
      su: "#9DBDB8",
      akarsu: "#4E8C86",
      bina: "#DFD0AE",
      bina3d: "#D6C49C",
      yolAna: "#FFFFFF",
      yolAra: "#F7F0DE",
      sinir: "#B9A57F",
      etiket: "#4A3F2A",
      etiketHalo: "#FBF6EA",
      yolYazi: "#7A6A4A",
    },
  },
];

/** Katmanın hangi renk grubuna girdiğini `source-layer` üzerinden karara bağlar. */
function grup(katman) {
  const sl = katman["source-layer"] || "";
  if (sl === "water") return "su";
  if (sl === "waterway") return "akarsu";
  if (sl === "building") return "bina";
  if (sl === "boundary") return "sinir";
  if (sl === "transportation") return "yol";
  if (sl === "park" || sl === "landcover" || sl === "landuse") return "arazi";
  if (sl === "aeroway") return "yol";
  return "diger";
}

/** Yüklenmiş bir vektör stilini verilen palete boyar. */
export function boya(map, palet) {
  const stil = map.getStyle();
  if (!stil || !stil.layers) return;

  for (const katman of stil.layers) {
    const id = katman.id;
    const g = grup(katman);
    const sl = katman["source-layer"] || "";

    try {
      if (katman.type === "background") {
        map.setPaintProperty(id, "background-color", palet.zemin);
        continue;
      }

      if (katman.type === "symbol") {
        const yol = sl === "transportation_name";
        map.setPaintProperty(id, "text-color", yol ? palet.yolYazi : palet.etiket);
        map.setPaintProperty(id, "text-halo-color", palet.etiketHalo);
        map.setPaintProperty(id, "text-halo-width", 1.4);
        continue;
      }

      if (katman.type === "fill") {
        const renk = g === "su" ? palet.su
          : g === "bina" ? palet.bina
          : g === "arazi" ? (sl === "park" ? palet.park : palet.arazi)
          : palet.arazi;
        map.setPaintProperty(id, "fill-color", renk);
        map.setPaintProperty(id, "fill-outline-color", renk);
        continue;
      }

      if (katman.type === "line") {
        const renk = g === "akarsu" ? palet.akarsu
          : g === "su" ? palet.su
          : g === "sinir" ? palet.sinir
          : g === "yol" ? (/motorway|trunk|primary/.test(id) ? palet.yolAna : palet.yolAra)
          : palet.yolAra;
        map.setPaintProperty(id, "line-color", renk);
        continue;
      }

      if (katman.type === "fill-extrusion") {
        map.setPaintProperty(id, "fill-extrusion-color", palet.bina3d);
      }
    } catch (hata) {
      // Taban stil beklenmedik bir katman tipi taşıyorsa o katmanı atla.
      console.debug("boyanamayan katman:", id, hata?.message);
    }
  }
}

/** Yüksek yakınlaştırmada binaları kabartır — Kahire ve Luxor'da dokuyu belirginleştirir. */
export function binaKabart(map, palet) {
  const stil = map.getStyle();
  if (!stil || map.getLayer("bina-kabartma")) return;

  const vektorKaynak = Object.keys(stil.sources || {})
    .find((ad) => stil.sources[ad].type === "vector");
  if (!vektorKaynak) return;

  try {
    map.addLayer({
      id: "bina-kabartma",
      type: "fill-extrusion",
      source: vektorKaynak,
      "source-layer": "building",
      minzoom: 14.5,
      paint: {
        "fill-extrusion-color": palet.bina3d,
        "fill-extrusion-height": ["coalesce", ["get", "render_height"], 8],
        "fill-extrusion-base": ["coalesce", ["get", "render_min_height"], 0],
        "fill-extrusion-opacity": 0.72,
      },
    });
  } catch (hata) {
    console.debug("bina kabartma eklenemedi:", hata?.message);
  }
}
