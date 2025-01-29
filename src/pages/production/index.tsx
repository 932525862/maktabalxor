import brocolli from "../../assets/production/brocolli.jpg"
import carrot from "../../assets/production/carrot.jpg"
import cherry from "../../assets/production/cherry.jpg"
import strawImg from "../../assets/production/straw.jpg"
import bg from "../../assets/production/bg.jpg"
import { useState } from "react"
import ProductDrawer from "./drawer"

const ProductionPage = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return <>
    <div className="container max-w-7xl h-full w-full mx-auto flex flex-col justify-between">
      <div className="uppercase flex justify-center items-center h-24 text-4xl rounded-3xl mt-5 text-white font-bold bg-[url('/assets/bg.jpg')]" style={{ backgroundImage: `url(${bg})` }}>Frozen Products</div>
      <div className="flex flex-wrap justify-center items-center gap-5 my-5">

        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50" onClick={() => setOpen(true)}>
          <img src={strawImg} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>

        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50" onClick={() => setOpen(true)}>
          <img src={brocolli} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50" onClick={() => setOpen(true)}>
          <img src={carrot} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50" onClick={() => setOpen(true)}>
          <img src={cherry} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50" onClick={() => setOpen(true)}>
          <img src={brocolli} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50" onClick={() => setOpen(true)}>
          <img src={strawImg} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50" onClick={() => setOpen(true)}>
          <img src={cherry} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
      </div>
    </div>
    <ProductDrawer open={open} onClose={() => setOpen(false)} title={"КЛУБНИКА"} prodName={"КЛУБНИКА"} description={"Клубника — одна из самых любимых ягод. Её едят свежей, добавляют в десерты, делают варенье или используют в выпечке. Она придаёт блюдам уникальный аромат и насыщенный вкус."} prodImg={strawImg} />
  </>;
};

export default ProductionPage;
