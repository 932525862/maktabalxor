import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import "./drawer.css";
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
    <div className="custom-drawer">
      <Drawer open={open} onClose={onClose} width={"100%"} closeIcon={<CloseOutlined className="text-xl text-black" color="black" />} bodyStyle={{ scrollbarWidth: "none" }} className="custom-drawer" >
        <div className="flex bg-white p-2 justify-between">
          {/* Left Section - Image */}
          <div className="w-1/2 flex flex-col items-center h-[83vh] justify-center">
            {!imgBig ? (
              <div className="relative w-[500px] h-[500px] cursor-zoom-in">
                <img
                  onClick={() => setImgBig(true)}
                  src={prodImg}
                  alt="Carrot pieces"
                  className="rounded-full w-full h-full object-cover shadow-lg"
                />
              </div>
            ) : (
              <div className="cursor-zoom-out relative w-full h-full">
                <img
                  onClick={() => setImgBig(false)}
                  src={prodImg}
                  alt="Carrot pieces"
                  className="w-full rounded-2xl h-full object-cover shadow-lg"
                />
              </div>
            )}
          </div>

          {/* Right Section - Text Content */}
          <div className="w-1/2 p-10 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Сушёные овощи</h2>
            <h1 className="text-4xl font-extrabold text-[#7f103a]">{title}</h1>

            <p className="text-gray-700">
              {description}
            </p>

            <p className="text-gray-700">
              Порой не нужны сложные рецепты и специи, достаточно лишь обжарить
              морковь с луком — и ваш ужин сразу станет вкуснее.
            </p>

            <p className="text-gray-700">
              Этот яркий овощ — настоящий кладезь витаминов A, B, PP, C, E, калия,
              фосфора, фолиевой кислоты.
            </p>

            <div className="flex items-center justify-between pt-6">
              <div>
                <h3 className="font-semibold">Форма</h3>
                <ul className="text-gray-700">
                  <li>Порошок</li>
                  <li>Кусочки</li>
                  <li>Возможна индивидуальная нарезка</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Фасовка</h3>
                <ul className="text-gray-700">
                  <li>Мешки</li>
                  <li>Картонные коробки</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center h-16" onClick={() => {
              navigate("/contact");
              scrollTo({ "top": 0, behavior: "smooth" })
            }}>
              <button className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-transform ease-in-out hover:scale-105 duration-700 hover:bg-white hover:text-green-600 cursor-pointer hover:border-2 w-full hover:border-green-600">
                Оставить заявку
              </button>
            </div>

          </div>
        </div>
      </Drawer>
    </div>
  )
}
