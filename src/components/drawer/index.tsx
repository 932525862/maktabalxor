import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import { useLanguage } from "../../context/locales";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


type ProdTypes = "wet" | "dry" | "nuts";

interface DataProps {
  nameRu: string;
  nameUz: string;
  nameEn: string;
  nameAr: string;
  descriptionRu: string;
  descriptionUz: string;
  descriptionEn: string;
  descriptionAr: string;
  imageUrl: string;
  type: ProdTypes;
}


interface ProductDrawerProps {
  open: boolean;
  onClose: () => void;
  data: DataProps | undefined;
}
export default function ProductDrawer({ open, onClose, data }: ProductDrawerProps) {
  console.log(data, "Data from drawer");

  const { t } = useTranslation();

  const navigate = useNavigate();

  let { language } = useLanguage();
  language = language.split("")[0].toUpperCase() + language.split("").slice(1).join("");

  const [imgBig, setImgBig] = useState<boolean>(false);
  return (
    <Drawer open={open} onClose={onClose} width={"100%"} closeIcon={<CloseOutlined className="text-xl text-black" color="black" />} bodyStyle={{ scrollbarWidth: "none" }}>
      <div className="flex flex-col lg:flex-row bg-white p-2 justify-between items-center">
        {/* Left Section - Image */}
        <div className="lg:w-1/2 w-full flex flex-col items-center h-auto lg:h-[83vh] justify-center">
          {!imgBig ? (
            <div className="relative w-full md:w-[500px] h-auto md:h-[500px] cursor-zoom-in">
              <img
                onClick={() => setImgBig(true)}
                src={data?.imageUrl}
                alt={data?.nameUz}
                className="rounded-full w-full h-full object-cover shadow-lg"
              />
            </div>
          ) : (
            <div className="cursor-zoom-out relative w-full h-full">
              <img
                onClick={() => setImgBig(false)}
                src={data?.imageUrl}
                alt="Carrot pieces"
                className="w-full rounded-2xl h-full object-cover shadow-lg"
              />
            </div>
          )}

          {/* <p className="mt-4 text-sm text-gray-500">Кусочки 1x15 мм</p> */}
        </div>

        {/* Right Section - Text Content */}
        <div className="lg:w-1/2 w-full p-2 lg:p-10 space-y-4 order-2">
          <h2 className="text-xl font-bold text-gray-900" dangerouslySetInnerHTML={{
            __html: data?.[`name${language}` as keyof DataProps] || ""
          }} />

          <p className="text-gray-700 text-[18px]"
            dangerouslySetInnerHTML={{
              __html: data?.[`description${language}` as keyof DataProps] || ""
            }}
          />
          <div className="flex items-center justify-center text-white h-16">
            <button className="bg-[#7f103a] text-white font-bold px-6 py-3 rounded-lg transition-transform ease-in-out hover:scale-105 duration-500 hover:bg-white hover:text-[#7f103a] cursor-pointer hover:border-2 w-full hover:border-[#7f103a]" onClick={() => navigate("/contact")}>
              {t("products.btn")}
            </button>
          </div>

        </div>
      </div>
    </Drawer>
  )
}
