import icCherries from "../assets/ic_cherries.webp";
import icCola from "../assets/ic_cola_chicken.webp";
import icMenuNinos from "../assets/ic_menu_ninos.svg";
import icOjingeo from "../assets/ic_ojingeo_muchim.webp";
import icPrincipales from "../assets/ic_principales.svg";
import icRapida from "../assets/ic_rapida.svg";
import icCarrot from "../assets/ic_roasted_carrot.webp";
import icSopas from "../assets/ic_sopas.svg";
import icTortas from "../assets/ic_tortas.svg";
import icVegetarianos from "../assets/ic_vegetarianos.svg";

export const menuItems = [
  { title: "Home", path: "/" },
  { title: "Vegetarianos", path: "/vegetarians" },
  { title: "Platos Principales", path: "/main-dishes" },
  { title: "Tortas", path: "/cakes" },
  { title: "Comida Rápida", path: "/fast-food" },
  { title: "Menú Niños", path: "/kids-menu" },
  { title: "Sopas", path: "/soups" },
  { title: "Favoritos", path: "/favorites" },
];

export const categories = [
  { title: "Vegetarianos", icon: icVegetarianos, path: "/vegetarians" },
  { title: "Principales", icon: icPrincipales, path: "/main-dishes" },
  { title: "Tortas", icon: icTortas, path: "/cakes" },
  { title: "Rápida", icon: icRapida, path: "/fast-food" },
  { title: "Menú Niños", icon: icMenuNinos, path: "/kids-menu" },
  { title: "Sopas", icon: icSopas, path: "/soups" },
];

import type { Recipe } from "../types/definitions";

export const recipes: Recipe[] = [
    {
      id: 1,
      image: icOjingeo,
      titleMain: "Ojingeo",
      titleSub: "Muchim",
      rating: 5.0,
      portion: 4,
      time: 10,
      difficulty: "Easy",
    },
    {
      id: 2,
      image: icCola,
      titleMain: "Cola",
      titleSub: "Chicken",
      rating: 5.0,
      portion: 4,
      time: 10,
      difficulty: "Easy",
    },
    {
      id: 3,
      image: icCarrot,
      titleMain: "Roasted",
      titleSub: "Carrot",
      rating: 4.5,
      portion: 4,
      time: 10,
      difficulty: "Easy",
    },
    {
      id: 4,
      image: icCherries,
      titleMain: "Sweet",
      titleSub: "Cherries",
      rating: 4.0,
      portion: 4,
      time: 10,
      difficulty: "Easy",
    },
  ];