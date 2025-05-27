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
        `${isActive ? "text-[#166534E6]" : ""} transition-all hover:text-[#166534E6] ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
