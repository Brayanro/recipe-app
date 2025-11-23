import { Link, useLocation } from "react-router";
import icFavorites from "../../assets/ic_favorites.svg";
import icHome from "../../assets/ic_home.webp";
import { menuItems } from "../../utils/data";
import "./Navbar.scss";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <span className="navbar__logo-text-recipe">Recipe</span>
        <span className="navbar__logo-text-app">App</span>
      </Link>
      <ul className="navbar__menu">
        {menuItems.map((item) => (
          <li key={item.title} className="navbar__menu-item">
            <Link
              to={item.path}
              className={`navbar__menu-link ${
                location.pathname === item.path
                  ? "navbar__menu-link--active"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navbar__mobile-icons">
        <Link to="/" className="navbar__mobile-icon">
          <img src={icHome} alt="Home" />
        </Link>
        <Link to="/favorites" className="navbar__mobile-icon">
          <img src={icFavorites} alt="Favorites" />
        </Link>
      </div>
    </nav>
  );
};
