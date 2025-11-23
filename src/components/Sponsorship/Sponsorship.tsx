import productsImage from "../../assets/products.webp";
import "./Sponsorship.scss";

export const Sponsorship = () => {
  return (
    <section className="sponsorship">
      <h2 className="sponsorship__title">Con el Patrocinio de</h2>
      <div className="sponsorship__image">
        <img src={productsImage} alt="Sponsorship Products" />
      </div>
    </section>
  );
};
