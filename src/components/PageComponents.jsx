// NavbarLinks.js
import { Link } from "react-router-dom";

const NavbarLinks = ({ links }) => {
  return (
    <ul className="flex space-x-8 bg-red font-semibold text-lg mr-10">
      {links.map((link) => (
        <li
          key={link.path}
          className="hover:cursor-pointer transition duration-300 hover:scale-110"
        >
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
