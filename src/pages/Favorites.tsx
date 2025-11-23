import { useContext } from "react";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { RecipeCard } from "../components/RecipeCard/RecipeCard";
import {
  FavoritesContext,
  type FavoritesContextType,
} from "../context/favoritesContext";
import "./Pages.scss";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext) as FavoritesContextType;

  return (
    <section className="page-container">
      <PageTitle title="Favoritos" />
      {favorites.length === 0 ? (
        <div className="page-container__error">
          <p>Aún no tienes recetas favoritas.</p>
        </div>
      ) : (
        <div className="page-container__grid">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
};
