export interface Recipe {
  id: number;
  titleMain: string;
  titleSub: string;
  image: string;
  rating: number;
  portion: number;
  time: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface SpoonacularRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  spoonacularScore: number;
}

export interface SpoonacularResponse {
  results: SpoonacularRecipe[];
  offset: number;
  number: number;
  totalResults: number;
}
