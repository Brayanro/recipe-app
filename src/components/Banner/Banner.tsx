import bannerImage from "../../assets/banner.webp";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner__content">
        <h1 className="banner__title">Recetas</h1>
        <p className="banner__subtitle">para todos</p>
      </div>
    </div>
  );
};
