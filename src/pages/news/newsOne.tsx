import NewsCarousel from "./newsCarousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/locales";

interface NewsOne {
    titleUz: string,
    titleRu: string;
    titleEn: string;
    titleAr: string;
    descriptionUz: string;
    descriptionRu: string;
    descriptionEn: string;
    descriptionAr: string;
    imageUrl: string;
    id: number;
}



export default function NewsOnePage() {
    const { id } = useParams<{ id: string }>();
    let { language } = useLanguage();
    language = language.split("")[0].toUpperCase() + language.split("").slice(1).join("");


    const [newsOne, setNewsOne] = useState<NewsOne>();

    const getNewsOne = async () => {
        try {
            const response = await fetch("https://milmax-backend.milmax.uz/api/news/" + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response?.ok) {
                const data = await response.json();
                setNewsOne(data?.data);
                console.log(data?.data, "Data from news One Page");
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

    useEffect(() => {
        getNewsOne();
    }, [id])


    return (
        <div className="max-w-7xl mx-auto container h-full !mt-[100px]">
            <h1 className="text-2xl md:text-4xl font-bold my-10 text-center">{newsOne && newsOne[`title${language}` as keyof NewsOne]}</h1>
            <div className="mt-0 max-h-full h-full flex flex-col justify-center items-center">

                {/* <!-- Image Content --> */}
                <div className="flex justify-center items-center w-full h-full lg:h-[500px] lg:relative my-5">
                    <img
                        src={newsOne?.imageUrl}
                        alt={newsOne?.titleUz}
                        className="w-full h-full object-cover rounded-lg shadow-lg lg:absolute"
                    />
                </div>

                {/* <!-- Text Content --> */}
                <div className="">
                    <div className="order-2 lg:order-1">
                        {newsOne && (
                            <div dangerouslySetInnerHTML={{ __html: newsOne[`description${language}` as keyof NewsOne] || "" }} />
                        )}
                    </div>
                </div>


            </div>

            <NewsCarousel />

        </div>
    );
}
