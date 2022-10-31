import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import PokemonBox from "../../../components/pokemonBox";
import { useGetSecondGenPokemonsQuery } from "../../../services/pokemon";
import { SecondGenPokemonPageContainer, SecondGenPokemonPageHeader } from "./style";

export default function SecondGenPokemonPage() {
    const [nomePokemon, setNomePokemon] = useState('');
    const {data} = useGetSecondGenPokemonsQuery();
    const navigate = useNavigate();

    return (
        <div>
            <SecondGenPokemonPageHeader>
                <button onClick={() => navigate("/")}>Voltar à home</button>
                <label htmlFor="fname">Filtro por nome:  </label>
                <DebounceInput
                    minLength={2}
                    debounceTimeout={400}
                    type="text" 
                    id="fname" 
                    onChange={ ( {target: {value}} ) => {
                        setNomePokemon(value ?? '');
                    }}
                    name="name"
                    value={nomePokemon}
                />
            </SecondGenPokemonPageHeader>
            { 
                data?.results
                ?.filter((pokemon) => pokemon.name.includes(nomePokemon))
                ?.map((pokemon) => (
                    <SecondGenPokemonPageContainer key={pokemon?.name}>                               
                        <PokemonBox name={pokemon?.name}/>
                    </SecondGenPokemonPageContainer>
                ))
            }
        </div>
    );
}