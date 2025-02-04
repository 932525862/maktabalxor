import { motion } from "framer-motion";
import Img1 from "../../assets/allimg/hist1.png";
import Img2 from "../../assets/allimg/hist2.png";
import { useTranslation } from "react-i18next";
const AgroGenesis: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-gray-800 mb-16">
      {t("about.titleQ")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Image and Text for Agro-Genesis */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">{t("about.titleQ1")}</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          {t("about.titleQ1p")}
          </p>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={Img1}
            alt="Agro-Genesis"
            className="object-cover w-full h-72 md:h-80"
          />
        </motion.div>

        {/* Image and Text for Middle Ages */}
        <motion.div
          className="overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={Img2}
            alt="Middle Ages"
            className="object-cover w-full h-72 md:h-80"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">{t("about.titleQ2")}</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          {t("about.titleQ2p")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgroGenesis;