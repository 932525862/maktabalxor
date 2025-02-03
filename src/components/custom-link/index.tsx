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
        `${isActive ? "text-[#7f103a]" : ""} transition-all hover:text-[#7f103a] ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
