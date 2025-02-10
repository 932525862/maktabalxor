import { Link } from "react-router-dom";
import Navbar from "../navbar";
import logo from "../../assets/logo/logo.png";
import { Select } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/locales";
import uzImg from "../../assets/flags/uz.png";
import ruImg from "../../assets/flags/ru.png";
import enImg from "../../assets/flags/en.png";
import arImg from "../../assets/flags/sa.png";

const Header = () => {

  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false);
  const { changeLanguage } = useLanguage();

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
    changeLanguage(value);
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage || "en");
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <header className="py-4 shadow fixed top-0 h-[75px] px-5 bg-white w-full z-50">
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
              style={{ width: 100 }}
              onChange={handleChange}
              options={[
                {
                  value: "en",
                  label: (
                    <span className="flex items-center justify-center">
                      <img src={enImg} alt="English" width="25px" style={{ marginRight: 8 }} />
                      En
                    </span>
                  ),
                },
                {
                  value: "uz",
                  label: (
                    <span className="flex items-center justify-center">
                      <img src={uzImg} alt="Uzbek" width="25px" style={{ marginRight: 8 }} />
                      Uz
                    </span>
                  ),
                },
                {
                  value: "ru",
                  label: (
                    <span className="flex items-center justify-center">
                      <img src={ruImg} alt="Russian" width="25px" style={{ marginRight: 8 }} />
                      Ru
                    </span>
                  ),
                },
                {
                  value: "ar",
                  label: (
                    <span className="flex items-center justify-center">
                      <img src={arImg} alt="Arabic" width="25px" style={{ marginRight: 8 }} />
                      Ar
                    </span>
                  ),
                },
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
