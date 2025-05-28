import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Stat = {
  value: string;
  label: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Statistics: React.FC = () => {
  const { t } = useTranslation();
  

  // stats massivini komponent ichida aniqlaymiz
  const stats: Stat[] = [
    { value: "14,000", label: t("about.titleR1") },
    { value: "202 m²", label: t("about.titleR2") },
    { value: "1M m²", label: t("about.titleR3") },
    { value: "500+", label: t("about.titleR4") },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif font-bold text-center text-gray-800 mb-16">
        {t("about.titleR")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <p className="text-[#186e38] text-4xl font-bold group-hover:scale-105 group-hover:text-orange-700 transition transform duration-300">
              {stat.value}
            </p>
            <p className="text-gray-600 text-lg font-medium mt-2 group-hover:text-gray-800 transition duration-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;