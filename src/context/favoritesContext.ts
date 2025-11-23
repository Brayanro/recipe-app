import { createContext } from "react";
import type { Recipe } from "../types/definitions";

export interface FavoritesContextType {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (recipe: Recipe) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);