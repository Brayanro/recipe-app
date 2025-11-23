import React, { useContext } from "react";
import icDifficulty from "../../assets/dificultad.svg";
import icHeart from "../../assets/ic_heart.svg";
import icHeartOutline from "../../assets/ic_heart_outline.svg";
import icStar from "../../assets/ic_star.svg";
import icPortion from "../../assets/portion.svg";
import icTime from "../../assets/tiempo.svg";
import {
  FavoritesContext,
  type FavoritesContextType,
} from "../../context/favoritesContext";
import type { Recipe } from "../../types/definitions";
import "./RecipeCard.scss";

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { isFavorite, toggleFavorite } = useContext(
    FavoritesContext
  ) as FavoritesContextType;

  return (
    <article className="recipe-card">
      <div className="recipe-card__image">
        <img
          src={recipe.image}
          alt={`${recipe.titleMain} ${recipe.titleSub}`}
        />
      </div>
      <div className="recipe-card__default">
        <div className="recipe-card__content">
          <span className="recipe-card__title-main" title={recipe.titleMain}>
            {recipe.titleMain}
          </span>
          <span className="recipe-card__title-sub" title={recipe.titleSub}>
            {recipe.titleSub}
          </span>
        </div>
        <div className="recipe-card__footer">
          <div className="recipe-card__rating">
            <img src={icStar} alt="Star" />
            <span>{recipe.rating}</span>
          </div>
        </div>
      </div>
      <div
        className="recipe-card__favorite"
        onClick={() => toggleFavorite(recipe)}
      >
        <img
          src={isFavorite(recipe.id) ? icHeart : icHeartOutline}
          alt="Favorite"
        />
      </div>
      <div className="recipe-card__hover">
        <div className="recipe-card__hover-item">
          <img src={icPortion} alt="Portion" className="icon-portion" />
          <span className="label">Tamaño de la porción</span>
          <span className="value">{recipe.portion} raciones</span>
        </div>
        <div className="recipe-card__hover-item">
          <img src={icTime} alt="Time" className="icon-time" />
          <span className="label">Tiempo de preparación</span>
          <span className="value">{recipe.time} minutos</span>
        </div>
        <div className="recipe-card__hover-item">
          <img
            src={icDifficulty}
            alt="Difficulty"
            className="icon-difficulty"
          />
          <span className="label">Dificultad</span>
          <span className="value">
            {recipe.difficulty === "Easy"
              ? "Fácil"
              : recipe.difficulty === "Medium"
              ? "Media"
              : "Difícil"}
          </span>
        </div>
      </div>
    </article>
  );
};
