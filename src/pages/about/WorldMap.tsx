import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { Dialog } from "@headlessui/react"; // Modal uchun
import { motion } from "framer-motion";

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
    if (
      geo.properties.name === Uzbekistan ||
      specialCountries.includes(geo.properties.name)
    ) {
      setHoveredCountry(geo.properties.name);
      setModalOpen(true);
    }
  };

  return (
    <div className="bg-white py-2 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-serif font-bold text-center text-gray-800 mb-4"
        style={{ marginTop: "100px" }} // Pastga tushirish uchun
      >
        MILMAX LOGISTIKASI
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-xl font-bold text-gray-700 text-center mb-4"
      >
        Milmax kompaniyasi ushbu xaritada ko‘rsatilgan davlatlarga o‘z
        mahsulotlarini yetkazib bera oladi.
      </motion.h2>
      <ComposableMap projectionConfig={{ scale: 150 }} className="mx-auto">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo: GeographyItem) => {
              const isUzbekistan = geo.properties.name === Uzbekistan;
              const isSpecialCountry = specialCountries.includes(
                geo.properties.name
              );
              return (
                <Geography
                  //@ts-ignore
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleHover(geo)}
                  onMouseLeave={handleLeave}
                  onClick={() => handleClick(geo)}
                  style={{
                    default: {
                      fill: isUzbekistan
                        ? "yellow" // O‘zbekiston sariq rangda
                        : isSpecialCountry
                        ? "green" // Ro‘yxatdagi davlatlar yashil rangda
                        : "#D6D6DA", // Boshqa davlatlar kul rangda
                      outline: "none",
                    },
                    hover: { fill: "#F53", outline: "none" },
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
          className="text-center text-gray-700 mt-4"
        >
          Hovered Country: <span className="font-bold">{hoveredCountry}</span>
        </motion.p>
      )}

      {/* Modal */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50 bg-transparent"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
          <h2 className="text-xl font-bold mb-4 text-center">
            Ushbu ro‘yxatdagi davlatlarga havo, dengiz va avtomobil yo‘llari
            orqali mahsulotlarni yetkazib beramiz.
          </h2>
          <div className="max-h-64 overflow-y-auto border border-gray-300 rounded-md">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">No.</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Country Name
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
            className="mt-4 bg-[#d58044] text-white px-4 py-2 rounded-md hover:bg-[#b46738] transition mx-auto block"
          >
            Close
          </button>

          {/* Modalni yopish tugmasi uchun yopilish belgisini joylashtirish */}
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
          >
            ✖
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default WorldMap;
