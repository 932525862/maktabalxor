import { Link } from "react-router-dom";
import CustomLink from "../custom-link";
import logo from "../../assets/logo/png/001.png";
import { CiLocationOn } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-20 bg-[#f3f3f3]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 place-content-center">
          <div className="flex flex-col items-center">
            <div className="max-w-[200px] mb-10">
              <img src={logo} alt="milmax logo" />
            </div>
            <div className="flex flex-col justify-center md:justify-between gap-5 md:flex-wrap">
              <div className="w-max">
                <h5 className="w-max font-medium text-[18px] mb-[10px] text-center">
                  We are on social media:
                </h5>
                <div className="flex items-center justify-center gap-x-4 text-[24px]">
                  <Link to="/" className="transition hover:scale-110">
                    <RiFacebookCircleLine />
                  </Link>
                  <Link to="/" className="transition hover:scale-110">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
              <div className="w-max">
                <h5 className="w-max font-medium text-[18px] mb-[10px]">
                  We are in messengers:
                </h5>
                <div className="flex justify-center items-center gap-x-4 text-[24px]">
                  <Link to="/" className="transition hover:scale-110">
                    <FaWhatsapp />
                  </Link>
                  <Link to="/" className="transition hover:scale-110">
                    <RiTelegramLine />
                  </Link>
                  <Link to="/" className="transition hover:scale-110">
                    <IoChatbubblesOutline />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[18px] text-center font-medium text-black mb-[10px]">
              Menu
            </h4>
            <ul className="text-[16px] font-normal flex justify-center items-center flex-col text-center gap-5 flex-wrap">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">About Us</CustomLink>
              </li>
              <li>
                <CustomLink to="/news">News</CustomLink>
              </li>
              <li>
                <CustomLink to="/production">Products</CustomLink>
              </li>
              <li>
                <CustomLink to="/contact">Contact</CustomLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] text-center font-medium text-black mb-[10px]">
              Products
            </h4>
            <ul className="text-[16px] font-normal flex justify-between items-center flex-col gap-y-[10px]">
              <li>
                <CustomLink to="/production">Dry product</CustomLink>
              </li>
              <li>
                <CustomLink to="/production">Frozen product</CustomLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] text-center font-medium text-black mb-[10px]">
              Contacts
            </h4>
            <ul className="text-[16px] font-normal flex justify-center items-center flex-col gap-y-[10px]">
              <li>
                <address className="not-italic flex items-start gap-x-2">
                  <span className="flex items-end text-xl">
                    <CiLocationOn />
                  </span>
                  Uzbekistan, Bukhara city, Piridasgir street, 5A
                </address>
              </li>
              <li>
                <Link
                  to="tel:998934729500"
                  className="flex items-center gap-x-2"
                >
                  <span className="flex">
                    <SlPhone />
                  </span>{" "}
                  998 93-472-95-00
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+998 99-754-77-33"
                  className="flex items-center gap-x-2"
                >
                  <span>
                    <SlPhone />
                  </span>{" "}
                  +998 99-754-77-33
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:sales@milmax.uz"
                  className="flex items-center gap-x-2"
                >
                  <span>
                    <IoMailOutline />
                  </span>{" "}
                  sales@milmax.uz
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
