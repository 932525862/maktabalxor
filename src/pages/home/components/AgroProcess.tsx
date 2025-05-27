import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img from "../../../assets/allimg/2.jpg";

const AgroProcess = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 p-6 md:p-12">
        
        <>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8"
          >
            {t("home.milmax")}
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  color: "bg-blue-100",
                  title: "Bolaning asl potensialini kashf qilamiz",
                  text: "Har bir bolaning o’z dunyosi bor, va bizning dasturimiz uning shu dunyosidagi qobiliyati, kuchli jihatlari va qiziqishlarini yanada rivojlantirishga qaratilgan",
                  titleColor: "text-blue-900",
                },
                {
                  color: "bg-yellow-50",
                  title: "Farzandingizning o‘qishga bo'lgan qiziqishini uyg‘otamiz",
                  text: "O'quv jadvalimiz bolani bilim olishga bo'lgan qiziqishini paydo qiladi va uni hayotning barcha jabhalarida muvaffaqiyatga erishishi uchun tayyorlaydi",
                  titleColor: "text-yellow-600",
                },
                {
                  color: "bg-green-100",
                  title: "Kelajakka tayyorlaymiz",
                  text: "Bizning o'quvchilarimiz har tomonlama yetuk, o'ziga ishonadigan individual shaxs sifatida va kelajakdagi muqarrar to'siq va imkoniyatlarga tayyor holda yetishib chiqishadi",
                  titleColor: "text-green-700",
                },
                {
                  color: "bg-purple-100",
                  title: "Qadriyatlarni shakllantiramiz",
                  text: "1-sinfdan boshlab zararli odatlarni bartaraf etib, foydali odatlarni shakllantiramiz. Duo olish, kattalarga hurmat, erta turish, sport va ovqatlanish odoblarini vazifa qilib beramiz va doimiy ota-onalar bilan birgalikda nazorat qilamiz",
                  titleColor: "text-purple-700",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className={`${card.color} p-6 rounded-lg shadow-md`}
                >
                  <div className={`text-xl font-bold mb-2 ${card.titleColor}`}>
                    {card.title}
                  </div>
                  <p className="text-black">{card.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt="O'qituvchi va o'quvchilar"
                className="rounded-lg object-cover max-h-[300px] w-full xl:max-h-full xl:h-full"
              />
            </motion.div>
          </div>
        </>
      
    </div>
  );
};

export default AgroProcess;
