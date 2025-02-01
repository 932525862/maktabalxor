import { Link } from "react-router-dom";
import Navbar from "../navbar";
import logo from "../../assets//logo/png/001.png";
import { Select } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {

  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Media query ni aniqlash
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Media query holatiga qarab state ni o'zgartirish
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    // Tinglovchini qo'shish
    mediaQuery.addEventListener("change", handleMediaChange);

    // Komponent unmount bo'lganda tozalash
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage || "en");
    }else{
      i18n.changeLanguage("en")
  }, [i18n]);

  return (
    <header className="py-4 shadow">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between gap-x-20">
            <Link to="/" className="w-[100px] sm:w-[150px]">
              <img src={logo} alt="milmax brand logo" />
            </Link>

            <Navbar open={open} setOpen={setOpen} />
          </div>

          <div className="flex items-center gap-x-5">
            <Select
              value={i18n.language}
              style={{ width: 60 }}
              onChange={handleChange}
              options={[
                { value: "ru", label: "Ru" },
                { value: "en", label: "En" },
                { value: "uz", label: "Uz" },
                { value: "ar", label: "Ar" },
              ]}
            />

            <button className="block md:hidden" onClick={() => setOpen(true)}>
              <AlignRightOutlined />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
