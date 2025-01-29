import React from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/allimg/hist1.png";
import Img2 from "../../assets/allimg/hist2.png";

const AgroGenesis: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
      <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl font-serif font-bold text-center text-gray-800 mb-16">
        O'zbekiston Qishloq Xo'jaligining Tarixi
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-4xl font-serif font-bold text-red-600 mb-6">AGRO-GENESIS</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            O'zbekistonda qishloq xo'jaligi miloddan avvalgi 3000-yillarga borib taqaladi, bu davrda dastlabki ekin ekish va sug'orish amaliyotlari rivojlangan. Ayniqsa, qanat tizimlari va murakkab suvni boshqarish tizimlari orqali o'simliklarni sug'orish, mintaqadagi qishloq xo'jaligining asosiy usullaridan bo'lib, iqtisodiy taraqqiyotga katta hissa qo'shgan. Bu amaliyotlar nafaqat o'zbek yerlarida, balki butun Markaziy Osiyoda qishloq xo'jaligining rivojlanishiga turtki bo'lib, ajralib turadigan madaniyat va texnologik yutuqlarni shakllantirgan.
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-4xl font-serif font-bold text-red-600 mb-6">MIDDLE AGES</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            Islomiy qishloq xo'jaligi yangiliklari joriy etilgan, shu jumladan ilg'or sug'orish texnikalari, ekinlarni yetishtirishda samaradorlikni oshiradigan yangi metodlar va o'zgartirilgan sug'orish tizimlari. Bu davr, shuningdek, Samaniylar va Temuriylar kabi turli imperiyalar ostida qishloq xo'jaligi fanining va amaliyotining rivojlanishini ko'rgan, ilm-fan sohasidagi yangiliklar va qishloq xo'jaligi texnologiyalarining o'zaro aloqasi orqali yangi agrar tizimlarning shakllanishiga sabab bo'lgan.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgroGenesis;
