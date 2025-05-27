import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import sport from "../../../../assets/allimg/sports.jpg"
import travel from "../../../../assets/allimg/travel.jpeg"
import tadbir from "../../../../assets/allimg/tadbir.jpg"

// import { useTranslation } from "react-i18next";

//@ts-ignore
const Card = ({ icon, title, items, image, bgColor, textColor }) => (
    <div className={`rounded-2xl p-6 shadow-md ${bgColor} text-${textColor} flex flex-col justify-between`}>
      <div>
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <ul className="list-disc list-inside space-y-1">
           
          {
            //@ts-ignore
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <img src={image} alt={title} className="rounded-xl mt-6 w-full object-cover h-48" />
    </div>
  );
const Experience = () => {
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 md:px-10 bg-gray-100 scroll-smooth" id='production'>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-4xl font-bold mb-16 text-center"
      >
        Darsdan tashqari mashg'ulotlar
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        icon="⚽"
        title="Sport mashg'ulotlari"
        items={[
          "Shaxmat/shashka",
          "Taekwondo",
          "Qizlar uchun gimnastika",
          "Futbol",
          "Volleybol",
          "Stol tennis",
        ]}
        image={sport}
        bgColor="bg-blue-100"
        textColor="blue-900"
      />
      <Card
        icon="⚕"
        title="Tadbirlar"
        items={[
          "Psixologimiz har oy ota-onalar bilan bog'lanib fikr almashishadi",
          "Kurator boshlang'ich sinf ota-onalari bilan aloqada bo'ladi",
          "O'rta va katta sinflar uchun tarbiyachi ota-onalar bilan ishlaydi",
          "Yilda faqatgina 2 marta ota-onalar majlisi",
        ]}
        image={tadbir}
        bgColor="bg-yellow-100"
        textColor="yellow-800"
      />
      <Card
        icon="📜"
        title="Madaniy sayohatlar"
        items={[
          "Muzey, tog' va ma'rifiy ko'ngil-ochar maskanlarga ekskursiyalar",
          "Zavod, o'quv markazlari kabi joylarga sayohatlar",
        ]}
        image={travel}
        bgColor="bg-purple-100"
        textColor="purple-900"
      />
    </div>
    </div>
  );
};

export default Experience;
