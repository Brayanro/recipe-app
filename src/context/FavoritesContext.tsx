import { useEffect, useState, type ReactNode } from "react";
import type { Recipe } from "../types/definitions";
import { FavoritesContext } from "./favoritesContext";

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe: Recipe) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === recipe.id)) return prev;
      return [...prev, recipe];
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((recipe) => recipe.id === id);
  };

  const toggleFavorite = (recipe: Recipe) => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
