import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";


//Problem with installation
import 'swiper/swiper-bundle.css';
//@ts-ignore
import 'swiper/css/pagination';


import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useLanguage } from "../../context/locales";
import { useTranslation } from "react-i18next";




const NewsCarousel: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [news, setNews] = useState<{
        titleUz: string, titleRu: string;
        titleEn: string;
        titleAr: string;
        descriptionUz: string;
        descriptionRu: string;
        descriptionEn: string;
        descriptionAr: string;
        imageUrl: string;
        id: number;
    }[] | []>();

    const getNews = async () => {
        try {
            const response = await fetch("https://milmax-backend.milmax.uz/api/news", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response?.ok) {
                const data = await response.json();
                setNews(data?.data);
                console.log(data?.data, "Data from news");
            }
            else {
                const error = await response.json();
                console.error("Error while fetching data : ", error);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    let { language } = useLanguage();
    language = language.split("")[0].toUpperCase() + language.split("").slice(1).join("");


    useEffect(() => {
        getNews();
    }, [])

    useEffect(() => {
        if (news) {
            console.log(news, "news");
        }
    }, [news])


    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={60}
            centeredSlides={true}
            autoplay={{ delay: 2000 }}
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
                    className="h-full !w-full md:!w-[400px] flex justify-center items-center"
                >
                    <div
                        className="flex flex-col items-center justify-center h-full w-full font-bold relative group cursor-pointer"
                        onClick={() => {
                            navigate(`/news/${item?.id}`);
                            scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <img
                            src={item?.imageUrl}
                            alt="Carousel Image"
                            className="w-full h-full object-cover rounded-2xl hover:rounded-4xl transition-all duration-500"
                        />
                        <span
                            className="font-bold text-xl text-white absolute bottom-5 opacity-100 group-hover:opacity-0 group-hover:invisible visible transition-all truncate-2 text-center duration-300"
                            dangerouslySetInnerHTML={{
                                __html: item?.[`title${language}` as keyof typeof item] || "",
                            }}
                        />

                        <span className="absolute top-[50%] text-[#7f103a] text-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 flex items-center justify-center gap-3">
                            {t("news.btn")} <ArrowRightOutlined />
                        </span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default NewsCarousel;
