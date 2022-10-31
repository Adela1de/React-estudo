import IPokemon from "./pokemon";

export default interface IPokemonQuery { 
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
}