import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const AgroProcess = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 sec delay
    return () => clearTimeout(timer);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-100 p-6 md:p-12">
      {loading ? (
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-1/3 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-300 h-32 rounded-lg"></div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            className="text-2xl md:text-4xl font-bold text-center mb-8"
          >
            {t("home.milmax")}
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div 
                key={num}
                variants={itemVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
              >
                <span className="text-[#7f103a] text-3xl font-bold mb-4">{`0${num}`}</span>
                <p className="text-gray-800">{t(`home.milmax${num}`)}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AgroProcess;
