import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Geo URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Maxsus davlatlar ro'yxati
const specialCountries = [
  "Russia", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Belarus",
  "Ukraine", "Azerbaijan", "Moldova", "Turkmenistan", "China",
  "South Korea", "India", "Turkey", "Afghanistan", "Pakistan",
  "United Arab Emirates", "Germany", "Poland", "Latvia", "Lithuania",
  "Czech Republic", "Italy"
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
  const { t } = useTranslation();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

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
    }
  };

  return (
    <div className="bg-white py-2 px-4">
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
      <ComposableMap projectionConfig={{ scale: 0 }} className="mx-auto">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo: GeographyItem) => geo.properties.name !== "Antarctica") // Faqat Janubiy muzlikni olib tashlash
              .map((geo: GeographyItem) => {
                const isUzbekistan = geo.properties.name === Uzbekistan;
                const isSpecialCountry = specialCountries.includes(geo.properties.name);
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
                          ? "#f53" // O‘zbekiston
                          : isSpecialCountry
                          ? "#7f103a" // Ro‘yxatdagi davlatlar
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
          className="text-center text-gray-700 mt-4"
        >
          Hovered Country: <span className="font-bold">{hoveredCountry}</span>
        </motion.p>
      )}
    </div>
  );
};

export default WorldMap;
