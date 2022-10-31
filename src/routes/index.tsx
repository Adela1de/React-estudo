import { createBrowserRouter } from "react-router-dom";
import PokemonHome from "../pages/PokemonHome";
import FirstGenPokemonPage from "../pages/pokemonpage/firstGenPokemonPage";
import PokemonPage from "../pages/pokemonpage/firstGenPokemonPage";
import { FirstGenPokemonPageContainer } from "../pages/pokemonpage/firstGenPokemonPage/style";
import SecondGenPokemonPage from "../pages/pokemonpage/secondGenPokemonPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <PokemonHome/>,
      children: [],
    },
    {
      path: "/primeira_geracao",
      element: <FirstGenPokemonPage/>,
      children: [],
    },
    {
      path: "/segunda_geracao",
      element: <SecondGenPokemonPage/>,
      children: [],
    },
]);

export default router;