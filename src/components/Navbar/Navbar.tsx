import icHome from "../../assets/ic_home.webp";
import { menuItems } from "../../utils/data";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo-text-recipe">Recipe</span>
        <span className="navbar__logo-text-app">App</span>
      </div>
      <ul className="navbar__menu">
        {menuItems.map((item) => (
          <li key={item} className="navbar__menu-item">
            {item}
          </li>
        ))}
      </ul>
      <div className="navbar__mobile-icon">
        <img src={icHome} alt="Home" />
      </div>
    </nav>
  );
};
