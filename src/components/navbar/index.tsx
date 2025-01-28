import { Drawer } from "antd";
import { Link } from "react-router-dom";

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
