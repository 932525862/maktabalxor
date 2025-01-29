import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

interface ProductDrawerProps {
  open: boolean;
  onClose: () => void;
  prodImg: string;
  prodName: string;
  description: string;
  title: string;
}
export default function ProductDrawer({ open, onClose, prodImg, prodName, description, title }: ProductDrawerProps) {
  return (
    <Drawer
      closeIcon={<CloseOutlined style={{ fontSize: "28px", color: "black" }} />}
      title={<div className="text-center text-4xl h-full my-5">{title}</div>}
      size="large"
      width="100%"
      onClose={onClose}
      open={open}
      bodyStyle={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="flex items-center justify-between w-full h-full">
        {/* Image Section */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-[400px] h-[400px]">
            <img
              src={prodImg}
              alt={title}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="mt-4 text-xl text-gray-700">Кусочки 1x15 мм</div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8">
          <div className="text-gray-500 text-4xl font-bold mb-4">Сушёные ягоды</div>
          <div className="text-black text-3xl mb-6">{prodName}</div>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          {/* Form and Packaging Info */}
          <div className="flex justify-between mt-5">
            <div>
              <div className="font-medium text-lg">Форма</div>
              <div>Порошок, Слайсы, Кусочки</div>
            </div>
            <div>
              <div className="font-medium text-lg">Фасовка</div>
              <div>Мешки, Пластиковые контейнеры</div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  )
}
