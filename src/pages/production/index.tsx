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

        <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => setOpen(true)}>
          <img src={strawImg} alt="Dry Product Image" className="rounded-tr-4xl rounded-tl-xl rounded-br-[50px] rounded-bl-3xl rounded-bt-2xl mix-blend-multiply object-cover h-full w-full" />
          <span className="absolute hidden group-hover:flex inset-0 items-center justify-center text-white font-bold text-2xl">Strawberry</span>
        </div>

        <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => setOpen(true)}>
          <img src={brocolli} alt="Dry Product Image" className="rounded-tr-4xl rounded-bl-3xl rounded-bt-2xl rounded-tl-xl rounded-br-[50px] mix-blend-multiply object-cover h-full w-full" />
          <span className="absolute hidden group-hover:flex inset-0 items-center justify-center text-white font-bold text-2xl">Brocolli</span>
        </div>

        <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => setOpen(true)}>
          <img src={carrot} alt="Dry Product Image" className="rounded-tr-4xl rounded-bl-3xl rounded-bt-2xl rounded-tl-xl rounded-br-[50px] mix-blend-multiply object-cover h-full w-full" />
          <span className="absolute hidden group-hover:flex inset-0 items-center justify-center text-white font-bold text-2xl">Carrot</span>
        </div>

        <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => setOpen(true)}>
          <img src={cherry} alt="Dry Product Image" className="rounded-tr-4xl rounded-bl-3xl rounded-bt-2xl rounded-tl-xl rounded-br-[50px] mix-blend-multiply object-cover h-full w-full" />
          <span className="absolute hidden group-hover:flex inset-0 items-center justify-center text-white font-bold text-2xl">Cherry</span>
        </div>

        <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => setOpen(true)}>
          <img src={brocolli} alt="Dry Product Image" className="rounded-tr-4xl rounded-bl-3xl rounded-bt-2xl rounded-tl-xl rounded-br-[50px] mix-blend-multiply object-cover h-full w-full" />
          <span className="absolute hidden group-hover:flex inset-0 items-center justify-center text-white font-bold text-2xl">Brocolli</span>
        </div>

        <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => setOpen(true)}>
          <img src={strawImg} alt="Dry Product Image" className="rounded-tr-4xl rounded-tl-xl rounded-br-[50px] rounded-bl-3xl rounded-bt-2xl mix-blend-multiply object-cover h-full w-full" />
          <span className="absolute hidden group-hover:flex inset-0 items-center justify-center text-white font-bold text-2xl">Strawberry</span>
        </div>
        <div className="flex group cursor-pointer items-center justify-center w-[250px] h-[250px] p-3 hover:scale-105 transition-all duration-500 ease-in-out hover:grayscale-50 relative" onClick={() => setOpen(true)}>
          <img src={cherry} alt="Dry Product Image" className="rounded-tr-4xl rounded-tl-xl rounded-br-[50px] rounded-bl-3xl rounded-bt-2xl mix-blend-multiply object-cover h-full w-full" />
          <span className="absolute hidden group-hover:flex inset-0 items-center justify-center text-white font-bold text-2xl">Cherry</span>
        </div>
      </div>
    </div>
    <ProductDrawer open={open} onClose={() => setOpen(false)} title={"КЛУБНИКА"} description={"Клубника — одна из самых любимых ягод. Её едят свежей, добавляют в десерты, делают варенье или используют в выпечке. Она придаёт блюдам уникальный аромат и насыщенный вкус."} prodImg={strawImg} />
  </>;
};

export default ProductionPage;
