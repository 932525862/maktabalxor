import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <ul className="flex gap-x-5 text-[#1d1d1d]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/catalog">Catalog</Link>
        </li>
        <li>
            <Link to="/production">Production</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
