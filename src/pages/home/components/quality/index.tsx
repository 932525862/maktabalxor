import { motion } from "framer-motion";
import Img1 from "../../../../assets/allimg/011.jpg";
import Img2 from "../../../../assets/allimg/011.jpg";
import Img3 from "../../../../assets/allimg/011.jpg";
import Img4 from "../../../../assets/allimg/011.jpg";
// import { useTranslation } from "react-i18next";
const AgroQuality: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 max-w-6xl mx-auto !overflow-x-hidden" id="products">
      <h4 className="text-3xl md:text-3xl lg:text-4xl font-serif font-bold text-center text-gray-800 mb-16">
       Bizning chuqurlashtirilgan fanlar
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Image and Text for Agro-Genesis */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h5 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#166534E6] mb-6">Matematika</h5>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit eveniet officiis itaque consequatur magni ut alias voluptates quos! Aliquam dolorem, maxime possimus vero hic sit perferendis maiores dicta ullam.
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
          <h5 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#166534E6] mb-6">Ingliz tili</h5>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt vel tempora quis in aliquam sint saepe sit sapiente id officia dolor libero adipisci, voluptatibus, esse voluptatem ut, reprehenderit illo aut accusamus eos? Tempore itaque in nulla unde similique alias minima?
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h5 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#166534E6] mb-6">Fizika</h5>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt, pariatur esse tenetur minus, exercitationem a, labore ratione sint natus minima. Quisquam cupiditate eos quaerat vel omnis eaque ut quos unde officiis expedita explicabo error corporis eum enim ex, iusto architecto consectetur doloremque non culpa pariatur! Deleniti officiis exercitationem voluptatum.
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
          <h2 className="text-4xl sm:text-3xl md:text-2xl lg:text-3xl font-serif font-bold text-[#166534E6] mb-6">Dasturlash</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quaerat molestiae, debitis eum beatae perspiciatis voluptatum architecto adipisci omnis sit optio nulla fugiat iure placeat, iusto dolor illum, ipsam inventore commodi doloremque eius nihil vel quisquam quo! Alias tenetur temporibus architecto dolore praesentium laborum corrupti.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AgroQuality;