import { Drawer } from "antd";
import { Link } from "react-router-dom";
import CustomLink from "../custom-link";
import { useTranslation } from "react-i18next";

type PropsNavbar = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const Navbar = ({ open, setOpen }: PropsNavbar) => {
  const onClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="hidden md:flex">
        <ul className="flex gap-x-5 text-[#1d1d1d]">
          <li>
            <CustomLink to="/">{t("navbar.home")}</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">{t("navbar.about")}</CustomLink>
          </li>
          <li>
            <CustomLink to="/news">{t("navbar.news")}</CustomLink>
          </li>
          <li>
            <CustomLink to="/production">{t("navbar.product")}</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">{t("navbar.contact")}</CustomLink>
          </li>
        </ul>
      </div>

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <ul className="flex flex-col gap-x-5 text-[#1d1d1d]">
          <li>
            <Link to="/">{t("navbar.home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("navbar.about")}</Link>
          </li>
          <li>
            <Link to="/news">{t("navbar.news")}</Link>
          </li>
          <li>
            <Link to="/production">{t("navbar.product")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("navbar.contact")}</Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
