import { motion } from "framer-motion";
import Img1 from "../../../../assets/allimg/tokzorlar-iaratish.jpg";
import Img2 from "../../../../assets/allimg/OA PHOTO_85 копия.jpg";
import Img3 from "../../../../assets/allimg/IMG_4811.jpg";
import Img4 from "../../../../assets/allimg/IMG_4781.jpg";
const AgroQuality: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 max-w-6xl mx-auto" id="products">
      <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl font-serif font-bold text-center text-gray-800 mb-16">
      Nima uchun Milmax mahsulotlari sifatli? <br/> Keling, birgalikda buning sabablarini ko'rib chiqamiz.
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">01.Unumdor yerlar</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          O'zbekiston qishloq xo'jaligida unumdor yerlar muhim rol o'ynaydi. Ushbu yerlar ekinlarning samarali o'sishini ta'minlaydi. O'zbekistonning ko'plab hududlari tabiiy sharoitlar va iqlim jihatidan unumdorlikka ega bo'lib, fermerlar uchun yuqori hosil olish imkoniyatini yaratadi. Milmax mahsulotlari ishlab chiqarishda, aynan shu unumdor yerlar asosida yetishtirilgan xom ashyo ishlatiladi, bu esa mahsulotning sifatini oshiradi.
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">02.Yuqori sifatli mahsulotlar</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          Milmax mahsulotlari yuqori sifatli bo'lishi uchun zamonaviy texnologiyalar va ilg'or ishlab chiqarish jarayonlari qo'llaniladi. O'zbekistonning qishloq xo'jaligi sohasidagi uzoq yillik tajribasi va ilmiy yondashuvlar mahsulotlar sifatini ta'minlashda katta rol o'ynaydi. Mahsulotlar oziq-ovqat xavfsizligi va ekologik talablarni inobatga olgan holda ishlab chiqariladi.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">03.Tajribali xodimlar</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          Milmax kompaniyasining mahsulotlarini ishlab chiqarishda tajribali mutaxassislar va agronomlar faol ishtirok etadi. O'zbekiston qishloq xo'jaligi sohasida o'z vaqtida olingan tajriba va bilimlar, aynan Milmaxning mahsulotlarining sifatini oshiradi. Mutaxassislar yerning tabiiy sharoitlarini to'g'ri baholab, mahsulotni samarali yetishtirishda yordam beradi.
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#7f103a] mb-6">04.Jahon standartlariga javob beruvchi zavod</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          Milmax mahsulotlari yuqori sifatli texnologiyalar asosida ishlab chiqariladi. Zavodlar jahon standartlariga javob beradigan uskunalar bilan jihozlangan bo'lib, bu mahsulotlarning xalqaro bozorga mosligini ta'minlaydi. O'zbekistonning qishloq xo'jaligi infratuzilmasi va zamonaviy zavodlari ushbu jarayonni muvaffaqiyatli amalga oshirish imkonini beradi.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgroQuality;
