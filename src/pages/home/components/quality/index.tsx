import { motion } from "framer-motion";
import Img1 from "../../../../assets/allimg/tokzorlar-iaratish.jpg";
import Img2 from "../../../../assets/allimg/OA PHOTO_85 копия.jpg";
import Img3 from "../../../../assets/allimg/IMG_4811.jpg";
import Img4 from "../../../../assets/allimg/IMG_4781.jpg";
import { useTranslation } from "react-i18next";
const AgroQuality: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 max-w-6xl mx-auto" id="products">
      <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl font-serif font-bold text-center text-gray-800 mb-16">
      {t("home.milmaxqt")}
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">{t("home.milmaxq1")}</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          {t("home.milmaxq1p")}
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">{t("home.milmax2")}</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          {t("home.milmax2p")}
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">{t("home.milmax3")}</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          {t("home.milmax3p")}
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
            src={Img3}
            alt="Agro-Genesis"
            className="object-cover w-full h-72 md:h-80"
          />
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={Img4}
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">{t("home.milmax4")}</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          {t("home.milmax4p")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgroQuality;
