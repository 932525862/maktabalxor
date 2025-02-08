// import bg from "../../assets/production/bg.jpg"
import { useEffect, useState } from "react"
import ProductDrawer from "../../components/drawer"
import { useLanguage } from "../../context/locales";
import { useTranslation } from "react-i18next";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
const WetFruits = () => {
  const [open, setOpen] = useState<boolean>(false);

  type ProdTypes = "wet" | "dry" | "nuts";

  interface WetProducts {
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

  const [wetProducts, setWetProducts] = useState<WetProducts[] | []>([]);
  const [singleData, setSingleData] = useState<WetProducts>();
  const { t } = useTranslation();
  let { language } = useLanguage();
  language = language.split("")[0].toUpperCase() + language.split("").slice(1).join("");
  const getWetProducts = async () => {
    try {
      const response = await fetch("https://milmax-backend.milmax.uz/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data: { data: WetProducts[] } = await response.json();
      setWetProducts(Array.from(data?.data)?.filter((item) => item?.type === "wet"));
      // console.log(data?.data, "Data from products new");

    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getWetProducts();
  }, []);


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

  return (
    <>
      <div className="container max-w-7xl h-full w-full mx-auto flex flex-col justify-between">
        <div className="uppercase flex text-center justify-center items-center h-[130px] text-2xl md:text-4xl rounded-3xl mt-5  font-bold bg-[url('/assets/bg.jpg')]"
        // style={{ backgroundImage: `url(${bg})` }}
        >{t("products.wet")}</div>
        <div className="flex flex-wrap justify-center items-center gap-5 my-5 py-20">
          {wetProducts ? Array.from(wetProducts)?.map((item, idx) => (
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
          )) : (
            // Skeleton Loader while loading
            [...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-[250px] h-[250px] p-3"
              >
                <Skeleton style={{ width: 250, height: 250, borderRadius: 20 }} />
              </div>
            )))}
        </div>
      </div>
      <ProductDrawer open={open} onClose={() => setOpen(false)} data={singleData} />
    </>
  );
};

export default WetFruits;
