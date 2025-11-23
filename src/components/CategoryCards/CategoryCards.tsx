import { Link, useLocation } from "react-router";
import { categories } from "../../utils/data";
import "./CategoryCards.scss";

export const CategoryCards = () => {
  const location = useLocation();

  return (
    <div className="category-cards">
      <div className="category-cards__grid">
        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.path}
            className={`category-cards__card ${
              location.pathname === category.path
                ? "category-cards__card--active"
                : ""
            }`}
          >
            <div className="category-cards__card-icon">
              <img src={category.icon} alt={category.title} />
            </div>
            <p className="category-cards__card-title">{category.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
