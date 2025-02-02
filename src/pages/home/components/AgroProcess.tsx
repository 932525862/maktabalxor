import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const AgroProcess = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 p-6 md:p-12">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        className="text-2xl md:text-4xl font-bold text-center mb-8"
      >
        {t("home.milmax")}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#7f103a] text-3xl font-bold mb-4">01</span>
          <p className="text-gray-800">
          {t("home.milmax1")}
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#7f103a] text-3xl font-bold mb-4">02</span>
          <p className="text-gray-800">
          {t("home.milmax2")}
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#7f103a] text-3xl font-bold mb-4">03</span>
          <p className="text-gray-800">
          {t("home.milmax3")}
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#7f103a] text-3xl font-bold mb-4">04</span>
          <p className="text-gray-800">
          {t("home.milmax4")}
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#7f103a] text-3xl font-bold mb-4">05</span>
          <p className="text-gray-800">
          {t("home.milmax5")}
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg"
        >
          <span className="text-[#7f103a] text-3xl font-bold mb-4">06</span>
          <p className="text-gray-800">
          {t("home.milmax6")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgroProcess;
