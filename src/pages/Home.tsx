import { Banner } from "../components/Banner/Banner";
import { CategoryCards } from "../components/CategoryCards/CategoryCards";
import { NewRecipes } from "../components/NewRecipes/NewRecipes";
import { Sponsorship } from "../components/Sponsorship/Sponsorship";

export const Home = () => {
  return (
    <>
      <Banner />
      <CategoryCards />
      <NewRecipes />
      <Sponsorship />
    </>
  );
};
