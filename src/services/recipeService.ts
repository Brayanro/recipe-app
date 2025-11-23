import axios from "axios";
import type { Recipe, SpoonacularResponse } from "../types/definitions";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

export const getRecipes = async (params: Record<string, string | number>): Promise<Recipe[]> => {
  try {
    const response = await api.get<SpoonacularResponse>("/complexSearch", {
      params: {
        addRecipeInformation: true,
        number: 20,
        ...params,
      },
    });

    return response.data.results.map((item) => {
      const titleParts = item.title.split(" ");
      const titleMain = titleParts[0];
      const titleSub = titleParts.slice(1).join(" ");

      let difficulty: "Easy" | "Medium" | "Hard" = "Easy";
      if (item.readyInMinutes > 45) difficulty = "Hard";
      else if (item.readyInMinutes > 20) difficulty = "Medium";

      return {
        id: item.id,
        titleMain: titleMain || item.title,
        titleSub: titleSub || "",
        image: item.image,
        rating: Math.round((item.spoonacularScore / 100) * 5 * 10) / 10,
        portion: item.servings,
        time: item.readyInMinutes,
        difficulty,
      };
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
