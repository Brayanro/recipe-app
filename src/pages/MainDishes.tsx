import { useQuery } from "@tanstack/react-query";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { RecipeCard } from "../components/RecipeCard/RecipeCard";
import { RecipeCardSkeleton } from "../components/RecipeCard/RecipeCardSkeleton";
import { getRecipes } from "../services/recipeService";
import "./Pages.scss";

export const MainDishes = () => {
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["main-dishes"],
    queryFn: () => getRecipes({ type: "main course" }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <section className="page-container">
        <PageTitle title="Platos Principales" />
        <div className="page-container__grid">
          {[...Array(8)].map((_, i) => (
            <RecipeCardSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page-container">
        <PageTitle title="Platos Principales" />
        <div className="page-container__error">
          <p>
            Hubo un error al cargar las recetas. Por favor intenta de nuevo.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-container">
      <PageTitle title="Platos Principales" />
      <div className="page-container__grid">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};
