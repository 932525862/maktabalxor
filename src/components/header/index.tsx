import { Link } from "react-router-dom";
import Navbar from "../navbar";
import logo from "../../assets//logo/png/001.png";
import { Select } from "antd";

const Header = () => {

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <header className="py-4 mb-[2px] shadow">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between gap-x-20">
            <Link to="/" className="w-[150px]">
              <img src={logo} alt="milmax brand logo" />
            </Link>

            <Navbar />
          </div>

          <div>
            <Select
              defaultValue="ru"
              style={{ width: 100 }}
              onChange={handleChange}
              options={[
                { value: "ru", label: "Russian" },
                { value: "en", label: "English" },
                { value: "uz", label: "Uzbek" },
                { value: "ar", label: "Arabic" },
              ]}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
