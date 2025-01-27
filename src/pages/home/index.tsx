import heroImage1 from "../../assets/hero/hero1.jpg";
import heroImage2 from "../../assets/hero/hero2.jpg";
import heroImage3 from "../../assets/hero/hero3.jpg";
import heroImage4 from "../../assets/hero/hero4.jpg";

const HomePage = () => {
  return (
    <>
      <section className="bg-[url(./assets/img1.jpg)]">
        <div className="container">
          <div className="flex justify-between items-center gap-x-20 h-[600px]">
            <div className="max-w-[696px] mb-20">
              <h1 className="text-[46px] leading-[64px] font-bold uppercase text-[#242424] mb-5">
                EXPORT OF NUTS, DRIED FRUITS, AND LEGUMES FROM UZBEKISTAN
              </h1>
              <p className="text-[18px] font-normal leading-[32px]">
                We supply dried fruits, legumes, and nuts from Uzbekistan. We
                offer customized delivery terms and full coverage for any
                defects in the product.
              </p>
            </div>

            <div className="grid gap-2 grid-cols-2 h-max w-1/2">
              <div>
                <img src={heroImage1} alt="milmax product image" />
              </div>
              <div>
                <img src={heroImage2} alt="milmax product image" />
              </div>
              <div>
                <img src={heroImage4} alt="milmax product image" />
              </div>
              <div>
                <img src={heroImage3} alt="milmax product image" />
              </div>
              {/* <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
            </Swiper> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
