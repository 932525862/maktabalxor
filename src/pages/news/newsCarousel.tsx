import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/abouta2.jpg";

//Problem with installation
import 'swiper/swiper-bundle.css';
// @ts-expect-error  prevents error
import 'swiper/css/pagination';


import { Autoplay } from "swiper/modules";

const NewsCarousel: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={60}
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
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
            className="mySwiper h-[270px] w-full my-10"
        >
            {Array.from({ length: 9 }, (_, index) => (
                <SwiperSlide
                    key={index}
                    className="h-full !w-full md:!w-[385px] flex justify-center items-center"
                >
                    <div
                        className="flex flex-col items-center justify-center h-full w-full font-bold relative group cursor-pointer"
                        onClick={() => {
                            navigate(`/news/${index + 1}`);
                            scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <img
                            src={img1}
                            alt="Carousel Image"
                            className="w-full h-full object-cover rounded-2xl hover:rounded-4xl transition-all duration-500"
                        />
                        <span className="font-bold text-xl text-white absolute bottom-5 opacity-100 group-hover:opacity-0 group-hover:invisible visible transition-all duration-300">
                            {"Ho'l Meva Yangiliklari"} {index + 1}
                        </span>
                        <span className="absolute top-[50%] text-white text-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 flex items-center justify-center">
                            More -&gt;
                        </span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default NewsCarousel;
