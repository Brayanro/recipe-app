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
  "Home",
  "Vegetarianos",
  "Platos Principales",
  "Tortas",
  "Comida Rápida",
  "Menú Niños",
  "Sopas",
];

export const categories = [
  { title: "Vegetarianos", icon: icVegetarianos },
  { title: "Principales", icon: icPrincipales },
  { title: "Tortas", icon: icTortas },
  { title: "Rápida", icon: icRapida },
  { title: "Menú Niños", icon: icMenuNinos },
  { title: "Sopas", icon: icSopas },
];

export const recipes = [
    {
      id: 1,
      image: icOjingeo,
      titleMain: "Ojingeo",
      titleSub: "Muchim",
      rating: "5.0",
      portion: "4 raciones",
      time: "10 minutos",
      difficulty: "fácil",
    },
    {
      id: 2,
      image: icCola,
      titleMain: "Cola",
      titleSub: "Chicken",
      rating: "5.0",
      portion: "4 raciones",
      time: "10 minutos",
      difficulty: "fácil",
    },
    {
      id: 3,
      image: icCarrot,
      titleMain: "Roasted",
      titleSub: "Carrot",
      rating: "4.5",
      portion: "4 raciones",
      time: "10 minutos",
      difficulty: "fácil",
    },
    {
      id: 4,
      image: icCherries,
      titleMain: "Sweet",
      titleSub: "Cherries",
      rating: "4.0",
      portion: "4 raciones",
      time: "10 minutos",
      difficulty: "fácil",
    },
  ];