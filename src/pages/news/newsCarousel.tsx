import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
//Problem with installation
import 'swiper/swiper-bundle.css';
//@ts-ignore
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useLanguage } from "../../context/locales";
import { useTranslation } from "react-i18next";
import { news } from "../../constants";






const NewsCarousel: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

   

    let { language } = useLanguage();
    language = language.split("")[0].toUpperCase() + language.split("").slice(1).join("");

   

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={60}
            centeredSlides={true}
            autoplay={{ delay: 2500 }}
            key={news?.length || "default"}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1080: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            className="mySwiper h-[270px] my-10 w-full"
        >
            {news && Array.from(news)?.map((item, index) => (
                <SwiperSlide
                    key={index}
                    className="h-full !w-full md:!w-[420px] flex justify-center items-center"
                >
                    <div
                        className="flex flex-col items-center justify-center h-full w-full font-bold relative group cursor-pointer"
                        onClick={() => {
                            navigate(`/news/${item?.id}`);
                            scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <p className="absolute z-30 top-5 group-hover:top-2 animation-all duration-300 left-5 text-white block">{item?.createdAt}</p>
                        <img
                            src={item?.img}
                            alt="Carousel Image"
                            className="w-full h-full object-cover grayscale-50 brightness-90 group-hover:blur-sm  transition-all duration-1000"
                        />
                        <span
                            className="font-bold text-xl text-white absolute bottom-5 opacity-100 group-hover:opacity-0 group-hover:invisible visible transition-all truncate-2 text-center duration-300"
                            
                        >{item.title}</span>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#166534E6] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-4 items-center">
                            <p className="text-white font-medium text-center transition-all duration-300 transform translate-y-8 group-hover:translate-y-0">
                                <span
                                    className="font-bold text-xl truncate-2 text-center"
                                    
                                >{item.text}</span>
                            </p>
                            <Link to={`/news/${item?.id}`} className="text-white font-semibold mt-2 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                {t("news.btn")} <ArrowRightOutlined />
                            </Link>
                        </div>

                        {/* <span className="absoulte top-0 left-5 text-white">17-12-2005</span> */}

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default NewsCarousel;
