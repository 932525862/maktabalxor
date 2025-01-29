import { Carousel } from "antd";
import { motion } from "framer-motion";
import hero1 from "../../../../assets/baner1.png";
import hero2 from "../../../../assets/hero/hero2.jpg";
import hero3 from "../../../../assets/hero/hero3.jpg";
import hero4 from "../../../../assets/hero/hero4.jpg";

const Hero = () => {
  return (
    <section className="relative mb-20 lg:mb-[100px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
      
      <Carousel autoplay effect="fade" dots={false} className="relative z-0">
        {[hero1, hero2, hero3, hero4].map((image, index) => (
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
          <h1 className="text-[46px] md:text-[56px] font-bold leading-[1.2] drop-shadow-lg">
            EXPORT OF NUTS, DRIED FRUITS, AND LEGUMES FROM UZBEKISTAN
          </h1>
          <p className="mt-4 text-[18px] md:text-[20px] font-light leading-[1.6] drop-shadow-md">
            We supply dried fruits, legumes, and nuts from Uzbekistan. We offer customized delivery terms and full coverage for any defects in the product.
          </p>
          <button className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-lg transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
