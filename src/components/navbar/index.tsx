import { Drawer } from "antd";
import { Link } from "react-router-dom";
import CustomLink from "../custom-link";
import { useTranslation } from "react-i18next";
import { MdClose } from "react-icons/md"

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
            <a href="#production">{t("navbar.product")}</a>
          </li>
          <li>
            <CustomLink to="/contact">{t("navbar.contact")}</CustomLink>
          </li>
        </ul>
      </div>

      <Drawer closeIcon={<MdClose className="text-2xl text-gray-600" />} onClose={onClose} open={open}>
        <ul className="flex flex-col gap-x-5 gap-y-10">
          <li onClick={onClose} className="!text-center">
            <Link className="!text-[22px] !font-semibold !text-black hover:!text-[#7f103a] !text-center" to="/">{t("navbar.home")}</Link>
          </li>
          <li onClick={onClose} className="!text-center">
            <Link className="!text-[22px] !font-semibold !text-black hover:!text-[#7f103a] !text-center" to="/about">{t("navbar.about")}</Link>
          </li>
          <li onClick={onClose} className="!text-center">
            <Link className="!text-[22px] !font-semibold !text-black hover:!text-[#7f103a] !text-center" to="/news">{t("navbar.news")}</Link>
          </li>
          <li onClick={onClose} className="!text-center">
            <a
              className="!text-[22px] !font-semibold !text-black hover:!text-[#7f103a] !text-center"
              href="/#production"
            >
              {t("navbar.product")}
            </a>
          </li>
          <li onClick={onClose} className="!text-center">
            <Link className="!text-[22px] !font-semibold !text-black hover:!text-[#7f103a] !text-center" to="/contact">{t("navbar.contact")}</Link>
          </li>
        </ul>
      </Drawer >
    </>
  );
};

export default Navbar;
