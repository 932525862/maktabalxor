import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductDrawerProps {
  open: boolean;
  onClose: () => void;
  prodImg: string;
  description: string;
  title: string;
}

export default function ProductDrawer({ open, onClose, prodImg, description, title }: ProductDrawerProps) {
  const [imgBig, setImgBig] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <Drawer
      open={open}
      onClose={onClose}
      width={"100%"}
      closeIcon={<CloseOutlined className="text-xl text-black" />}
      bodyStyle={{ scrollbarWidth: "none" }}
      className="custom-drawer"
    >
      <div className="flex flex-col lg:flex-row bg-white p-4 justify-between gap-6">

        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className={`relative ${imgBig ? "w-full h-[60vh]" : "w-[300px] lg:w-[500px] h-[300px] lg:h-[500px]"}`}>
            <img
              onClick={() => setImgBig(!imgBig)}
              src={prodImg}
              alt="Product"
              className={`cursor-${imgBig ? "zoom-out" : "zoom-in"} w-full h-full object-cover rounded-2xl shadow-lg`}
            />
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-lg lg:text-xl font-bold text-gray-900">Сушёные овощи</h2>
          <h1 className="text-2xl lg:text-4xl font-extrabold text-[#7f103a]">{title}</h1>
          <p className="text-sm lg:text-base text-gray-700">{description}</p>
          <p className="text-sm lg:text-base text-gray-700">
            Порой не нужны сложные рецепты и специи, достаточно лишь обжарить морковь с луком — и ваш ужин сразу станет вкуснее.
          </p>
          <p className="text-sm lg:text-base text-gray-700">
            Этот яркий овощ — настоящий кладезь витаминов A, B, PP, C, E, калия, фосфора, фолиевой кислоты.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <h3 className="font-semibold">Форма</h3>
              <ul className="text-gray-700 text-sm">
                <li>Порошок</li>
                <li>Кусочки</li>
                <li>Возможна индивидуальная нарезка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Фасовка</h3>
              <ul className="text-gray-700 text-sm">
                <li>Мешки</li>
                <li>Картонные коробки</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <button
              className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg w-full lg:w-auto hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition-transform hover:scale-105"
              onClick={() => {
                navigate("/contact");
                scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
