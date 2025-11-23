import { categories } from "../../utils/data";
import "./CategoryCards.scss";

export const CategoryCards = () => {
  return (
    <div className="category-cards">
      <div className="category-cards__grid">
        {categories.map((category) => (
          <div key={category.title} className="category-cards__card">
            <div className="category-cards__card-icon">
              <img src={category.icon} alt={category.title} />
            </div>
            <p className="category-cards__card-title">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
