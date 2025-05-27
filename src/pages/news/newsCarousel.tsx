import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/allimg/010.jpg"


//Problem with installation
import 'swiper/swiper-bundle.css';
//@ts-ignore
import 'swiper/css/pagination';


import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useLanguage } from "../../context/locales";
import { useTranslation } from "react-i18next";

const data = [
    {
        id: 1,
        img,
        createdAt: "09.09.2025",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt vel tempora quis in aliquam sint saepe sit sapiente id officia dolor libero adipisci, voluptatibus, esse voluptatem ut, reprehenderit illo aut accusamus eos? Tempore itaque in nulla unde similique alias minima?"
    }
]




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
        createdAt?: string;
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
                        <p className="absolute z-30 top-5 group-hover:top-2 animation-all duration-300 left-5 text-white block">{item?.createdAt?.slice(0, 10)}</p>
                        <img
                            src={item?.imageUrl}
                            alt="Carousel Image"
                            className="w-full h-full object-cover grayscale-50 brightness-90 group-hover:blur-sm  transition-all duration-1000"
                        />
                        <span
                            className="font-bold text-xl text-white absolute bottom-5 opacity-100 group-hover:opacity-0 group-hover:invisible visible transition-all truncate-2 text-center duration-300"
                            dangerouslySetInnerHTML={{
                                __html: item?.[`title${language}` as keyof typeof item] || "",
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#7f103a] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-4 items-center">
                            <p className="text-white font-medium text-center transition-all duration-300 transform translate-y-8 group-hover:translate-y-0">
                                <span
                                    className="font-bold text-xl truncate-2 text-center"
                                    dangerouslySetInnerHTML={{
                                        __html: item?.[`title${language}` as keyof typeof item] || "",
                                    }}
                                />
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
