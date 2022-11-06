import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Pokemon from '../types/pokemon';
import IPokemonQuery from '../types/pokemonQuery';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getFirstGenPokemons: builder.query<IPokemonQuery, void>({
      query: () => `pokemon?limit=151`,
    }),
    getSecondGenPokemons: builder.query<IPokemonQuery, void>({
      query: () => `pokemon?limit=100&offset=151`
    }),
    getAllPokemons: builder.query<IPokemonQuery, void>({
      query: () => `pokemon?limit=890`
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery, 
  useGetFirstGenPokemonsQuery,
  useGetSecondGenPokemonsQuery,
  useGetAllPokemonsQuery,
} = pokemonApi;