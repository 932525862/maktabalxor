/* eslint-disable @typescript-eslint/no-unused-vars */
import img1 from "../../assets/abouta2.jpg";
import img2 from "../../assets/about2.jpg";
import NewsCarousel from "./newsCarousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
            <h1 className="text-2xl md:text-4xl font-bold my-10 md:mt-10 md:mb-0 text-center">{newsOne && newsOne[`titleUz` as keyof NewsOne]}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 place-items-center mt-0 max-h-full h-full lg:h-[80vh]">
                {/* <!-- Text Content --> */}
                <div className="lg:p-5 p-0 text-center order-2 lg:order-1">
                    <div className="lg:p-5 p-0 text-center order-2 lg:order-1">
                        {newsOne && (
                            <div dangerouslySetInnerHTML={{ __html: newsOne["descriptionUz" as keyof NewsOne] || "" }} />
                        )}
                    </div>
                </div>

                {/* <!-- Image Content --> */}
                <div className="flex flex-col order-1 lg:order-2 justify-center items-center w-[90%] lg:w-[500px] h-[70%]">
                    <img
                        src={newsOne?.imageUrl}
                        alt={newsOne?.titleUz}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            <NewsCarousel />

        </div>
    );
}
