import { Banner } from "./components/Banner/Banner";
import { CategoryCards } from "./components/CategoryCards/CategoryCards";
import { Navbar } from "./components/Navbar/Navbar";
import { NewRecipes } from "./components/NewRecipes/NewRecipes";
import { Sponsorship } from "./components/Sponsorship/Sponsorship";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Banner />
      <CategoryCards />
      <NewRecipes />
      <Sponsorship />
    </main>
  );
}

export default App;
