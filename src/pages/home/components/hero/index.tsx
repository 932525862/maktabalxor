import { Carousel } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import hero1 from "../../../../assets/allimg/2.png";
import hero2 from "../../../../assets/allimg/OA PHOTO_11 копия.jpg";
import hero3 from "../../../../assets/allimg/OA PHOTO_65 копия.jpg";
import hero4 from "../../../../assets/allimg/OA PHOTO_70 копия.jpg";
import hero5 from "../../../../assets/allimg/010.jpg";
import hero6 from "../../../../assets/allimg/011.jpg"


const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative mb-20 lg:mb-[100px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />

      <Carousel autoplay effect="fade" dots={false} className="relative z-0">
        {[hero1,hero5, hero2, hero3, hero4,hero6].map((image, index) => (
          <div key={index} className="h-[calc(100vh-70px)]">
            <img className="w-full h-full object-cover" src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Carousel>

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-10 md:px-20 lg:px-40 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[700px] text-white"
        >
          <h1 className="text-[36px] text-center md:text-left md:text-[56px] font-bold leading-[1.2] drop-shadow-lg">
            {t("home.homeB")}
          </h1>
          <p className="mt-4 text-[18px] text-center md:text-left md:text-[20px] font-light leading-[1.6] drop-shadow-md">
          {t("home.homeB1")}
          </p>

          <Link
            to={"/about"}
            className="flex justify-center md:w-max w-full border border-white py-5 px-15 rounded-[8px] text-[18px] text-white font-medium transition hover:bg-[#7f103a] hover:text-white mt-5"
          >
            {t("home.homeBB")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
