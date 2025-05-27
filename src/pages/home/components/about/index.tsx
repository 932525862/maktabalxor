import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import about1 from "../../../../assets/allimg/011.jpg";
import about2 from "../../../../assets/allimg/2.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-10 px-6 md:px-16 text-gray-800 relative container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1}}
            className="max-h-[240px] "
          >
            <img
              src={about1}
              alt="Talabalar"
              className="rounded-xl shadow-lg object-cover h-60 w-full"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6}}
            className="max-h-[240px] md:translate-y-60"
          >
            <img
              src={about2}
              alt="VR o‘rganish"
              className="rounded-xl shadow-lg object-cover h-60 w-full"
            />
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6}}
            className="text-green-600 uppercase tracking-wide font-semibold mb-2"
          >
            "Biz haqimizda
          </motion.h3>

          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6,}}
            className="text-3xl md:text-4xl font-bold text-green-800 mb-6 underline underline-offset-8"
          >
            Bizning imkoniyat va yutuqlarimiz
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 0.6}}
            className="text-lg max-w-3xl mb-6"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at est
            numquam perferendis. Iste fuga magnam aspernatur ratione vel
            voluptate iure quam veniam saepe. Amet quasi impedit tempora velit
            itaque.
          </motion.p>
          <div className="flex gap-5 items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5}}
              className="bg-green-100  border-green-500 p-4 mb-6 rounded-lg w-[180px] text-[20px] flex flex-col items-center"
            >
              <p className="text-green-700 font-semibold text-center">
                O‘quvchilar imtixon asosida
              </p>
              <p className="text-5xl font-bold text-green-800 mt-2 border-b-4 w-full text-center">
                1
              </p>
              <p className="text-green-700 font-medium mt-1 text-center">
                sinfdan qabul qilinadi
              </p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1,}}
            >
              <p className="mb-3">
                O'quvchilar maktabda quyidagi imkoniyatlarga ega bo'lishadi:
              </p>
              <ul className="space-y-3 text-base text-gray-700">
                <>
                  <li>✅ Xalqaro dasturlar asosidagi ta’lim</li>
                  <li>✅ Chuqurlashtirilgan fanlar va malakali ustozlar</li>
                  <li>✅ Zamonaviy o‘quv xonalari</li>
                  <li>✅ Qo'shimcha repetitorlik kurslari</li>
                  <li>✅ Oliy ta’limga imtiyoz</li>
                </>
              </ul>
            </motion.div>
          </div>

          <div className="mb-3">
            <Link
              to={"/about"}
              className="flex justify-center md:w-max w-full border border-[#166534E6] py-3 px-10 rounded-[8px] text-[18px] text-[#166534E6] font-medium transition hover:bg-[#166534E6] hover:text-white"
            >
              {t("home.homeBB")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
