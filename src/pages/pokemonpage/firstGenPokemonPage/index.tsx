import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";
import PokemonBox from "../../../components/pokemonBox";
import { useGetFirstGenPokemonsQuery } from "../../../services/pokemon";
import { FirstGenPokemonPageContainer, FirstGenPokemonPageHeader } from "./style";

export default function FirstGenPokemonPage() {
    const [nomePokemon, setNomePokemon] = useState('');
    const {data} = useGetFirstGenPokemonsQuery();
    const navigate = useNavigate();

    return (
        <div>
            <FirstGenPokemonPageHeader>
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
            </FirstGenPokemonPageHeader>
            <Virtuoso
                style={{height : 400}}
                data={data?.results}
                itemContent={(index) => {
                    const pokemon = data?.results[index]?.name;
                    return(
                        <FirstGenPokemonPageContainer key={pokemon}>                               
                            <PokemonBox name={pokemon ?? ''}/>
                        </FirstGenPokemonPageContainer>
                    )
                }}
            />
        </div>
    );
}