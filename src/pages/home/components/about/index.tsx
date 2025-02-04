import { Link } from "react-router-dom";
import about1 from "../../../../assets/allimg/011.jpg";
import about2 from "../../../../assets/allimg/2.png";
import batrbak from "../../../../assets/allimg/3.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative mb-20 lg:mb-[100px] pt-10">
      <div 
        className="hidden lg:block w-[43%] max-h-[380px] rounded-r-2xl px-10 absolute z-20 top-1/2 -translate-y-1/2"
        style={{ backgroundImage: `url(${batrbak})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="grid grid-cols-2 gap-x-5">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-h-[380px] -translate-y-10"
          >
            {loading ? <Skeleton height={380} borderRadius={16} /> : 
              <img className="h-full object-cover rounded-2xl" src={about1} alt="milmax product image" />
            }
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-h-[380px] translate-y-10"
          >
            {loading ? <Skeleton height={380} borderRadius={16} /> : 
              <img className="h-full object-cover rounded-2xl" src={about2} alt="milmax product image" />
            }
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-end gap-x-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[30px] text-center md:text-left md:text-[36px] font-bold uppercase leading-[48px] text-custom-text mb-5">
              {loading ? <Skeleton width={200} height={40} /> : t("home.homeAt")}
            </h2>
            <p className="text-[18px] font-normal leading-[32px] text-custom-text mb-5">
              {loading ? <Skeleton count={3} /> : t("home.homeAp")}
            </p>

            <div className="md:flex gap-x-10 mb-10">
              <div className="md:w-1/2">
                <span className="text-[48px] leading-[48px] text-[#7f103a]">
                  {loading ? <Skeleton width={50} height={50} /> : "5+"}
                </span>
                <br />
                <p className="text-[18px] font-normal leading-[32px] text-custom-text mb-5">
                  {loading ? <Skeleton width={100} /> : t("home.homeAp1")}
                </p>
              </div>
              <div className="md:w-1/2">
                <span className="text-[48px] leading-[48px] text-[#7f103a]">
                  {loading ? <Skeleton width={50} height={50} /> : "80+"}
                </span>
                <br />
                <p className="text-[18px] font-normal leading-[32px] text-custom-text mb-5">
                  {loading ? <Skeleton width={100} /> : t("home.homeAp2")}
                </p>
              </div>
            </div>

            <Link
              to={"/about"}
              className="flex justify-center md:w-max w-full border border-[#7f103a] py-5 px-15 rounded-[8px] text-[18px] text-[#7f103a] font-medium transition hover:bg-[#7f103a] hover:text-white"
            >
              {loading ? <Skeleton width={100} height={20} /> : t("home.homeBB")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
