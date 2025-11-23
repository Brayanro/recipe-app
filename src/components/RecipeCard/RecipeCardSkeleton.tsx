import "./RecipeCardSkeleton.scss";

export const RecipeCardSkeleton = () => {
  return (
    <div className="recipe-card-skeleton">
      <div className="recipe-card-skeleton__image" />
      <div className="recipe-card-skeleton__default">
        <div className="recipe-card-skeleton__content">
          <div className="recipe-card-skeleton__title" />
          <div className="recipe-card-skeleton__subtitle" />
        </div>
        <div className="recipe-card-skeleton__footer">
          <div className="recipe-card-skeleton__rating" />
          <div className="recipe-card-skeleton__favorite" />
        </div>
      </div>
    </div>
  );
};
