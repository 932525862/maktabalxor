import { Drawer } from "antd";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "../custom-link";

type PropsNavbar = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const Navbar = ({ open, setOpen }: PropsNavbar) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="hidden md:flex">
        <ul className="flex gap-x-5 text-[#1d1d1d]">
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

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <ul className="flex flex-col gap-x-5 text-[#1d1d1d]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/production">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
