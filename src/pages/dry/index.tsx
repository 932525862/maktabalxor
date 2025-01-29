import almondsImg from "../../assets/production/almondsImg.jpg"
import cashewsImg from "../../assets/production/cashewsImg.jpg"
import walnutsImg from "../../assets/production/walnutsImg.jpg"
import pistachiosImg from "../../assets/production/pistachiosImg.jpg"
import raisinsImg from "../../assets/production/raisinsImg.jpg"
import datesImg from "../../assets/production/datesImg.jpg"
import bg from "../../assets/production/bg.jpg"
import { useEffect, useState } from "react"
import ProductDrawer from "../wet/drawer"
const DryFruits = () => {
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

  const data = [
    {
      title: "Almonds",
      prodImg: almondsImg,
    },
    {
      title: "Cashews",
      prodImg: cashewsImg,
    },
    {
      title: "Walnuts",
      prodImg: walnutsImg,
    },
    {
      title: "Pistachios",
      prodImg: pistachiosImg,
    },
    {
      title: "Raisins",
      prodImg: raisinsImg,
    },
    {
      title: "Dates",
      prodImg: datesImg,
    }
  ];

  return (
    <>
      <div className="container max-w-7xl h-full w-full mx-auto flex flex-col justify-between">
        <div className="uppercase flex justify-center items-center h-[130px] text-4xl rounded-3xl mt-5 text-white font-bold bg-[url('/assets/bg.jpg')]" style={{ backgroundImage: `url(${bg})` }}>Dried Products</div>
        <div className="flex flex-wrap justify-center items-center gap-5 my-5">
          {data && Array.from(data)?.map((item, idx) => (
            <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => setOpen(true)} key={idx}>
              <img src={item?.prodImg} alt="Dry Product Image" className="rounded-tr-4xl rounded-bl-3xl rounded-bt-2xl rounded-tl-xl rounded-br-[50px] mix-blend-multiply object-cover h-full w-full" />
              <span className="absolute z-20 bottom-5 group-hover:bottom-[45%] left-[25%] items-center justify-center text-white font-bold text-2xl transition-all duration-500">{item?.title}</span>
            </div>
          ))}
        </div>
      </div>
      <ProductDrawer open={open} onClose={() => setOpen(false)} title={"КЛУБНИКА"} description={"Клубника — одна из самых любимых ягод. Её едят свежей, добавляют в десерты, делают варенье или используют в выпечке. Она придаёт блюдам уникальный аромат и насыщенный вкус."} prodImg={datesImg} />
    </>
  );
};

export default DryFruits;
