import loadingImg from "./assets/logo/png/SVG.svg";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[200px]"><img src={loadingImg} alt="wilmax loading image" /></div>
    </div>
  );
};

export default Loading;
