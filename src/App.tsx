import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar/Navbar";
import { Cakes } from "./pages/Cakes";
import { FastFood } from "./pages/FastFood";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { KidsMenu } from "./pages/KidsMenu";
import { MainDishes } from "./pages/MainDishes";
import { Soups } from "./pages/Soups";
import { Vegetarians } from "./pages/Vegetarians";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vegetarians" element={<Vegetarians />} />
        <Route path="/main-dishes" element={<MainDishes />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/fast-food" element={<FastFood />} />
        <Route path="/kids-menu" element={<KidsMenu />} />
        <Route path="/soups" element={<Soups />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
