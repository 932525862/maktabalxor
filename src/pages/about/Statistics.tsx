import React, { useState, useEffect } from "react";
import Patr from "../../assets/allimg/3.png";
import { useTranslation } from "react-i18next";

const CompanyAbout: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="w-full mb-8 animate-pulse">
        <div className="relative w-full h-82 bg-gray-300"></div>
        <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="h-10 bg-gray-300 w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-300 w-full mb-6"></div>
          </div>
          <div className="space-y-6">
            <div className="h-4 bg-gray-300 w-full"></div>
            <div className="h-4 bg-gray-300 w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mb-8">
      <div className="relative w-full h-82 flex flex-col items-center justify-center text-white text-5xl font-extrabold">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${Patr})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <span className="relative text-2xl md:text-6xl lg:text-7xl ">{t("about.title")}</span>
      </div>
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            {t("about.title2")}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#7f103a] mt-4">
            {t("about.title3")}
          </h2>
          <p className="text-gray-700 text-lg mt-6">
            {t("about.title4")}
          </p>
        </div>
        <div className="text-gray-700 text-lg space-y-6">
          <p className="text-base md:text-lg">
            {t("about.titlep1")}
          </p>
          <p className="text-base md:text-lg">
            {t("about.titlep2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
