import { createBrowserRouter } from "react-router-dom";
import PokemonHome from "../pages/PokemonHome";
import AllPokemonsPage from "../pages/pokemonpage/allPokemonsPage";
import FirstGenPokemonPage from "../pages/pokemonpage/firstGenPokemonPage";
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
    {
      path: "/todos_os_pokemons",
      element: <AllPokemonsPage/>,
      children: [],
    },
]);

export default router;