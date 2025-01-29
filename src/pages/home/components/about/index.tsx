import { Link } from "react-router-dom";
import about1 from "../../../../assets/about1.jpg";
import about2 from "../../../../assets/about2.jpg";

const AboutUs = () => {
  return (
    <section className="relative mb-20 lg:mb-[100px] pt-10">
      <div className="hidden lg:block w-[43%] max-h-[380px] bg-custom-orange rounded-r-2xl px-10 absolute z-20 top-1/2 -translate-y-1/2">
        <div className="grid grid-cols-2 gap-x-5">
          <div className="max-h-[380px] -translate-y-10">
            <img
              className="h-full object-cover rounded-2xl"
              src={about1}
              alt="milmax product image"
            />
          </div>
          <div className="max-h-[380px] translate-y-10">
            <img
              className="h-full object-cover rounded-2xl"
              src={about2}
              alt="milmax product image"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-end gap-x-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[36px] font-bold uppercase leading-[48px] text-custom-text mb-5">
              ABOUT MILMAX AGRO
            </h2>
            <p className="text-[18px] font-normal leading-[32px] text-custom-text mb-5">
              We export dried fruits, legumes, and nuts worldwide, all produced
              in Uzbekistan. This allows us to personally oversee the quality
              control of our entire product range, right from local farmers and
              gardeners.
            </p>

            <div className="md:flex gap-x-10 mb-10">
              <div className="md:w-1/2">
                <span className="text-[48px] leading-[48px] text-custom-orange">
                  5+
                </span>
                <br />
                <p className="text-[18px] font-normal leading-[32px] text-custom-text mb-5">
                  years of experience in the supply of agricultural products
                  worldwide{" "}
                </p>
              </div>
              <div className="md:w-1/2">
                <span className="text-[48px] leading-[48px] text-custom-orange">
                  80+
                </span>
                <br />
                <p className="text-[18px] font-normal leading-[32px] text-custom-text mb-5">
                  partners of farms throughout Uzbekistan{" "}
                </p>
              </div>
            </div>

            <Link
              to={"/about"}
              className="flex justify-center md:w-max w-full border border-custom-orange py-5 px-10 rounded-[8px] text-[18px] text-custom-orange font-medium transition hover:bg-custom-orange hover:text-white"
            >
              Moro detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
