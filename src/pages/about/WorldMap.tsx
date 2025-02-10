import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// Geo URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Maxsus davlatlar ro'yxati
const specialCountries = [
  "Russia",
  "Kazakhstan",
  "Kyrgyzstan",
  "Tajikistan",
  "Belarus",
  "Ukraine",
  "Azerbaijan",
  "Moldova",
  "Turkmenistan",
  "China",
  "South Korea",
  "India",
  "Turkey",
  "Afghanistan",
  "Pakistan",
  "United Arab Emirates",
  "Germany",
  "Poland",
  "Latvia",
  "Lithuania",
  "Czech Republic",
  "Italy",
];

// O'zbekiston
const Uzbekistan = "Uzbekistan";

// GeoProperties interfeysi
interface GeoProperties {
  name: string;
}

interface GeographyItem {
  properties: GeoProperties;
}

const WorldMap: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Hover holatini o'zgartirish
  const handleHover = (geo: GeographyItem) => {
    setHoveredCountry(geo.properties.name);
  };

  // Hover holatidan chiqish
  const handleLeave = () => {
    setHoveredCountry(null);
  };

  // Bosilganda modalni ochish
  const handleClick = (geo: GeographyItem) => {
    const countryName = geo.properties.name;

    if (countryName === Uzbekistan || specialCountries.includes(countryName)) {
      setHoveredCountry(countryName);
      setModalOpen(true);
    }
  };

  const { t } = useTranslation();
  return (
    <div className="bg-white px-4 relative ">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-gray-800 mb-4"
        style={{ marginTop: "100px" }}
      >
        {t("about.titleL")}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-xl font-bold text-gray-700 text-center mb-4"
      >
        <p className="text-lg font-sans text-gray-700 leading-relaxed">
        {t("about.titleL1")}
        </p>
      </motion.h2>
      <ComposableMap
        projectionConfig={{ scale: 220 }}
        className="mx-auto max-w-4/5 -translate-y-6 "
        style={{ width: "100%", height: "600px", maxHeight: "90vh" }} // 📌 Balandlik cheklangan
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter(
                (geo: GeographyItem) => geo.properties.name !== "Antarctica"
              )
              .map((geo: GeographyItem, index) => {
                const isUzbekistan = geo.properties.name === Uzbekistan;
                const isSpecialCountry = specialCountries.includes(
                  geo.properties.name
                );
                return (
                  <Geography
                    key={index}
                    geography={geo}
                    onMouseEnter={() => handleHover(geo)}
                    onMouseLeave={handleLeave}
                    onClick={() => handleClick(geo)}
                    style={{
                      default: {
                        fill: isUzbekistan
                          ? "#F53"
                          : isSpecialCountry
                          ? "#7f103a"
                          : "#7f103a",
                        outline: "none",
                        cursor: isSpecialCountry ? "pointer" : "default",
                      },
                      hover: { fill: "#D6D6DA", outline: "none" },
                      pressed: { fill: "#E42", outline: "none" },
                    }}
                  />
                );
              })
          }
        </Geographies>
      </ComposableMap>

      {hoveredCountry && (
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-700 mt-1 absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        >
          {t("about.titleL1")}: <span className="font-bold">{hoveredCountry}</span>
        </motion.p>
      )}

      {/* Modal */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50 bg-transparent shadow-md"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
          <p className="text-xl font-bold mb-4 text-center font-sans text-gray-700 leading-relaxed">
          {t("about.titleL2")}
          </p>
          <div className="max-h-64 overflow-y-auto border border-gray-300 rounded-md">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">No.f</th>
                  <th className="border border-gray-300 px-4 py-2">
                  {t("about.titleLD")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {specialCountries.map((country, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {country}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={() => setModalOpen(false)}
            className="mt-4 bg-[#7f103a] text-white px-8 py-2 rounded-md hover:bg-[#b46738] transition mx-auto block"
          >
           {t("about.titleM")}
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default WorldMap;
