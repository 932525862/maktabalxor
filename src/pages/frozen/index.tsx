import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Frozen = () => {
    const { t } = useTranslation();
    return (
      <div className="flex flex-col items-center justify-start min-h-screen p-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 mt-40">
        Frozen IQF Fruits and Vegetables 
        </h1>
        <div className="bg-white shadow-md rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg md:text-xl font-semibold text-gray-600 mb-6">
          Coming soon
          </p>
          <Link to="/production">
          <button className="bg-[#7f103a] text-white text-base md:text-lg font-medium px-8 py-3 rounded-lg hover:bg-[#F53] transition">
          Go back 
          </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Frozen;
  