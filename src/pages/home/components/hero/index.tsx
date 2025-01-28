import { Carousel } from "antd";
import hero1 from "../../../../assets/hero/hero1.jpg";
import hero2 from "../../../../assets/hero/hero2.jpg";
import hero3 from "../../../../assets/hero/hero3.jpg";
import hero4 from "../../../../assets/hero/hero4.jpg";

const Hero = () => {
  return (
    <section className="">
      <div className="container relative">
        <div className="absolute top-20 z-10 left-5">
          <h1 className="text-[46px] font-bold text-white max-w-[696px] leading-[64px]">EXPORT OF NUTS, DRIED FRUITS, AND LEGUMES FROM UZBEKISTAN</h1>
          <p className="max-w-[696px] text-[18px] font-normal leading-[32px] text-white">
            We supply dried fruits, legumes, and nuts from Uzbekistan. We offer
            customized delivery terms and full coverage for any defects in the
            product.
          </p>
        </div>
      </div>
      <Carousel autoplay>
        <div className="h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={hero1}
            alt="milmax hero image"
          />
        </div>
        <div className="h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={hero2}
            alt="milmax hero image"
          />
        </div>
        <div className="h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={hero3}
            alt="milmax hero image"
          />
        </div>
        <div className="h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={hero4}
            alt="milmax hero image"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
