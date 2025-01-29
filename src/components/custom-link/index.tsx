import { NavLink } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-custom-orange" : ""} transition-all hover:text-custom-orange ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
