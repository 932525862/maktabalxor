import { Carousel } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import hero1 from "../../../../assets/allimg/2.jpg";
import hero2 from "../../../../assets/allimg/5.jpg";
import hero3 from "../../../../assets/allimg/6.jpg";
import hero4 from "../../../../assets/allimg/7.jpg";
import hero5 from "../../../../assets/allimg/010.jpg";
import hero6 from "../../../../assets/allimg/011.jpg";
import CountUp from "react-countup";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative mb-20 lg:mb-[100px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />

      <Carousel autoplay effect="fade" dots={false} className="relative z-0">
        {[hero1, hero5, hero2, hero3, hero4, hero6].map((image, index) => (
          <div key={index} className="h-[calc(100vh-70px)]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`slide-${index}`}
            />
            
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
          <h1 className="text-4xl lg:text-5xl font-bold">
            {t("Biz bilan boshlang")}
          </h1>

          {/* Counterlar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8 text-white font-semibold text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
              <h4 className="text-4xl lg:text-5xl text-yellow-400">
                <CountUp end={1500} duration={3} separator="," />
              </h4>
              <p className="mt-2 text-base">+ o'quvchilar</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
              <h4 className="text-4xl lg:text-5xl text-green-400">
                <CountUp end={20} duration={3} />
              </h4>
              <p className="mt-2 text-base">ta filial</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
              <h4 className="text-4xl lg:text-5xl text-blue-400">
                <CountUp end={10} duration={3} />
              </h4>
              <p className="mt-2 text-base">yillik tajriba</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
              <h4 className="text-4xl lg:text-5xl text-pink-400">
                <CountUp end={50} duration={3} separator="," />
              </h4>
              <p className="mt-2 text-base">+ to‘garaklar soni</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
              <h4 className="text-4xl lg:text-5xl text-orange-400">
                <CountUp end={100} duration={3} />
              </h4>
              <p className="mt-2 text-base">sinf xonalari</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
              <h4 className="text-4xl lg:text-5xl text-cyan-400">
                <CountUp end={100} duration={3} />
              </h4>
              <p className="mt-2 text-base">+ bitiruvchilar har yili</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
