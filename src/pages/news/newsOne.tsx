import img1 from "../../assets/abouta2.jpg";
import img2 from "../../assets/about2.jpg";
import NewsCarousel from "./newsCarousel";
import { useParams } from "react-router-dom";

export default function NewsOnePage() {
    const { id } = useParams<{ id: string }>();
    return (
        <div className="max-w-7xl mx-auto container h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mt-10 max-h-full h-full md:h-[80vh]">
                {/* <!-- Text Content --> */}
                <div className="p-5 text-center">
                    <h1 className="text-4xl font-bold mb-8">Financial Report {id}</h1>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold">Revenue Growth</h2>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                semper ipsum urna, nec cursus dolor dictum nec. Donec luctus
                                mauris quis cursus.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Return on Investment</h2>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                semper ipsum urna, nec cursus dolor dictum nec. Donec luctus
                                mauris quis cursus.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Customer Satisfaction</h2>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                semper ipsum urna, nec cursus dolor dictum nec. Donec luctus
                                mauris quis cursus.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- Image Content --> */}
                <div className="space-y-6 flex flex-col">
                    <div className="w-[350px] md:w-[450px] h-[200px]">
                        <img
                            src={img1}
                            alt="Fruit Image"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-[350px] md:w-[450px] h-[200px]">
                        <img
                            src={img2}
                            alt="Fruit Image"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <NewsCarousel />

        </div>
    );
}
