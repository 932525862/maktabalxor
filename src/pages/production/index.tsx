import brocolli from "../../assets/production/brocolli.jpg"
import carrot from "../../assets/production/carrot.jpg"
import cherry from "../../assets/production/cherry.jpg"
import strawImg from "../../assets/production/straw.jpg"
import bg from "../../assets/production/bg.jpg"
import { Drawer } from "antd"
import { useState } from "react"

const ProductionPage = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  }

  const name = "Strawberry Page";

  return <>
    <div className="container max-w-7xl h-full w-full mx-auto flex flex-col justify-between">
      <div className="uppercase flex justify-center items-center h-30 text-4xl rounded-3xl mt-5 text-white font-bold bg-[url('/assets/bg.jpg')]" style={{ backgroundImage: `url(${bg})` }}>Frozen Products</div>
      <div className="flex flex-wrap justify-center items-center gap-5 my-5">

        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50" onClick={() => setOpen(true)}>
          <img src={strawImg} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>

        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50">
          <img src={brocolli} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50">
          <img src={carrot} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50">
          <img src={cherry} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50">
          <img src={brocolli} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50">
          <img src={strawImg} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
        <div className="flex items-center justify-center w-56 h-56 p-3 hover:scale-110 transition-all duration-300 ease-in-out hover:grayscale-50">
          <img src={cherry} alt="Dry Product Image" className="rounded-full object-cover h-full w-full" style={{ mixBlendMode: "multiply" }} />
        </div>
      </div>
    </div>
    <Drawer closeIcon={<div className="text-5xl text-black">
      X
    </div>} title={
      <div className="text-center text-4xl h-full my-5">{name}</div>
    } size="large" width={"70%"} onClose={onClose} open={open}>
      <div className="flex items-center justify-between w-full h-full">
        <div className="w-[400px] h-[400px] flex items-center justify-center flex-1">
          <img src={strawImg} alt="Dry Product Image" className="rounded-r-4xl object-cover w-full h-full" />
        </div>
        <div className="flex-1 p-5 flex flex-col justify-center items-center">
          <div className="text-gray-500 text-4xl font-bold">Dried Fruits</div>
          <div className="text-black text-3xl mt-5">Strawberry</div>
          <div className="text-xl text-center mt-5">Apricot kernels resemble small almonds and have an almond-like taste. There are two types of apricot kernels, based on taste, bitter and sweet. Both bitter and sweet apricot kernels naturally contain amygdalin.
          </div>
          <div className="text-xl text-center mt-5 text-green-500">The product does not contain genetically modified organisms (GMO)</div>
        </div>
      </div>
    </Drawer>
  </>;
};

export default ProductionPage;
