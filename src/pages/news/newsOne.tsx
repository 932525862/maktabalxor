import NewsCarousel from "./newsCarousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { news } from "../../constants";

export default function NewsOnePage() {
    const { id } = useParams<{ id: string }>();

    const [newsOne, setNewsOne] = useState<any>();

    useEffect(() => {
        //@ts-ignore
        setNewsOne(...news.filter((item: any) => item.id == id))
    }, [id])


    return (
        <div className="max-w-7xl mx-auto container h-full !mt-[100px]">
            <h1 className="text-2xl md:text-4xl font-bold my-10 text-center">{newsOne?.title}</h1>
            <div className="mt-0 mb-14 max-h-full h-full flex flex-col justify-center items-center">

                {/* <!-- Image Content --> */}
                <div className="flex justify-center items-center w-full h-full lg:h-[500px] lg:relative my-5">
                    <img
                        src={newsOne?.img}
                        alt={newsOne?.title}
                        className="w-full h-full object-cover rounded-lg shadow-lg lg:absolute"
                    />
                </div>

                {/* <!-- Text Content --> */}
                <div className="">
                    <div className="order-2 lg:order-1">
                        {newsOne?.text}
                    </div>
                </div>


            </div>

            <NewsCarousel />

        </div>
    );
}
