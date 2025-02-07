// import bg from "../../assets/production/bg.jpg"
import { useEffect, useState } from "react"
import ProductDrawer from "../../components/drawer"
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/locales";
const Nuts = () => {
    const [open, setOpen] = useState<boolean>(false);

    function onOpen() {
        setTimeout(() => {
            setOpen(true);
        }, 200);
    }

    useEffect(() => {
        if (open) {
            onOpen();
        }
    }, [open])

    type ProdTypes = "wet" | "dry" | "nuts";

    interface DryProducts {
        nameUz: string;
        nameRu: string;
        nameEn: string;
        nameAr: string;
        descriptionUz: string;
        descriptionRu: string;
        descriptionEn: string;
        descriptionAr: string;
        imageUrl: string;
        type: ProdTypes;
        [key: string]: string;
    }

    const [dryProducts, setDryProducts] = useState<DryProducts[] | []>([]);
    const [singleData, setSingleData] = useState<DryProducts>();
    const { t } = useTranslation();
    let { language } = useLanguage();
    language = language.split("")[0].toUpperCase() + language.split("").slice(1).join("");
    const getDryProducts = async () => {
        try {
            const response = await fetch("https://milmax-backend.milmax.uz/api/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const data: { data: DryProducts[] } = await response.json();
            setDryProducts(Array.from(data?.data)?.filter((item) => item?.type === "dry"));
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getDryProducts();
    }, []);

    return (
        <>
            <div className="container max-w-7xl h-full w-full mx-auto flex flex-col justify-between">
                <div className="uppercase text-center flex justify-center items-center h-[130px] text-2xl md:text-4xl rounded-3xl mt-5 font-bold bg-[url('/assets/bg.jpg')]"
                // style={{ backgroundImage: `url(${bg})` }}
                >{t("products.nuts")}</div>
                <div className="flex flex-wrap justify-center items-center gap-5 my-5 py-20">
                    {dryProducts && Array.from(dryProducts)?.map((item, idx) => (
                        <>
                            <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => { setOpen(true); setSingleData(item) }} key={idx}>
                                <img src={item?.imageUrl} alt="Dry Product Image" className="rounded-tr-4xl rounded-bl-3xl rounded-bt-2xl rounded-tl-xl rounded-br-[50px] mix-blend-multiply object-cover h-full w-full" />
                                <span className="absolute z-20 bottom-5 group-hover:bottom-[45%] left-[25%] items-center justify-center text-white font-bold text-2xl transition-all duration-500"
                                    dangerouslySetInnerHTML={{
                                        __html: item?.[`name${language}`] || ""
                                    }}
                                />
                            </div>

                        </>
                    ))}
                </div>
            </div>
            <ProductDrawer open={open} onClose={() => setOpen(false)} data={singleData} />
        </>
    );
};

export default Nuts;
