import { Link } from "react-router-dom";
import CustomLink from "../custom-link";
import logo from "../../assets/logo/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-20 bg-[#f3f3f3]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo va ijtimoiy tarmoqlar */}
          <div className="flex flex-col items-center">
            <div className="mb-10 w-[200px]">
              <img src={logo} alt="milmax logo" className="max-w-[200px]" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center">
                <h5 className="font-medium text-[18px] mb-3 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe voluptas
                </h5>

              </div>

            </div>
          </div>

          {/* Menyu */}
          <div className="flex flex-col items-center">
            <h4 className="text-[18px] font-medium text-black mb-4 text-center">
              {t("footer.menu")}
            </h4>
            <ul className="flex flex-col items-center gap-3 text-[16px]">
              <li>
                <CustomLink to="/">{t("footer.home")}</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">{t("footer.about")}</CustomLink>
              </li>
              <li>
                <CustomLink to="/news">{t("footer.news")}</CustomLink>
              </li>
              <li>
                <CustomLink to="/production">{t("footer.products")}</CustomLink>
              </li>
              <li>
                <CustomLink to="/contact">{t("footer.contacts")}</CustomLink>
              </li>
            </ul>
          </div>

          {/* Mahsulotlar */}
          <div className="flex flex-col items-center">
            <h4 className="text-[18px] font-medium text-black mb-4 text-center">
              Filiallar
            </h4>
            <ul className="flex flex-col items-center gap-3 text-[16px]">
              <li>
                <CustomLink to="/branches/oltiariq">
                  Oltiariq filiali
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/branches/oltiariq">
                  Oltiariq filiali
                </CustomLink>
              </li>
            </ul>
          </div>

          {/* Kontaktlar */}
          <div className="flex flex-col items-center">
            <h4 className="text-[18px] font-medium text-black mb-4 text-center">
              {t("footer.contacts")}
            </h4>
            <ul className="flex flex-col items-center gap-3 text-[16px]">
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <CiLocationOn />
                </span>
                <address className="not-italic text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, quod!
                </address>
              </li>
              <li>
                <Link
                  to="tel:998900000000"
                  className="flex items-center gap-2"
                >
                  <span>
                    <SlPhone />
                  </span>
                  +998 90-000-00-00
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+998 90-000-00-00"
                  className="flex items-center gap-2"
                >
                  <span>
                    <SlPhone />
                  </span>
                  +998 90-000-00-00
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:al-xorazmiyschool@gmail.com"
                  className="flex items-center gap-2"
                >
                  <span>
                    <IoMailOutline />
                  </span>
                  al-xorazmiyschool@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
