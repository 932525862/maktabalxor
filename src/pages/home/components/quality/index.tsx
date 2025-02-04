import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Img1 from "../../../../assets/allimg/q1.jpg";
import Img2 from "../../../../assets/allimg/q2.jpg";
import Img3 from "../../../../assets/allimg/q3.jpg";
import Img4 from "../../../../assets/allimg/q4.jpg";

const AgroQuality: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 max-w-6xl mx-auto" id="products">
      {loading ? (
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-1/3 mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-300 h-80 rounded-xl"></div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl font-serif font-bold text-center text-gray-800 mb-16">
            {t("home.milmaxqt")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[{ img: Img1, title: "home.milmaxq1", desc: "home.milmaxq1p" },
              { img: Img2, title: "home.milmax2", desc: "home.milmax2p" },
              { img: Img3, title: "home.milmax3", desc: "home.milmax3p" },
              { img: Img4, title: "home.milmax4", desc: "home.milmax4p" }].map((item, index) => (
              <>
                <motion.div
                  key={index}
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">
                    {t(item.title)}
                  </h2>
                  <p className="text-lg font-sans text-gray-700 leading-relaxed">
                    {t(item.desc)}
                  </p>
                </motion.div>
                <motion.div
                  key={`img-${index}`}
                  className="overflow-hidden rounded-xl"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <img src={item.img} alt={t(item.title)} className="object-cover w-full h-72 md:h-80" />
                </motion.div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AgroQuality;
