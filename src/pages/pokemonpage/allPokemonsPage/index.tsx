import { ListItem } from "@mui/material";
import React from "react";
import { useMemo, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import { VirtuosoGrid } from "react-virtuoso";
import PokemonBox from "../../../components/pokemonBox";
import { useGetAllPokemonsQuery } from "../../../services/pokemon";
import { AllPokemonsPageContainer, AllPokemonsPageHeader, ItemWrapper, ListContainer } from "./style";


export default function AllPokemonsPage() {
    const navigate = useNavigate();
    const {data} = useGetAllPokemonsQuery();
    const [nomePokemon, setNomePokemon] = useState('');
    const valorFiltrado = useMemo(() => data?.results.filter(({name}) => name.includes(nomePokemon)), [data?.results, nomePokemon]);
    

    return (
        <div>
            <AllPokemonsPageHeader>
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
            </AllPokemonsPageHeader>
            <VirtuosoGrid
                style={{
                    height:1000,
                }}
                totalCount={10000}
                overscan={200}
                components={{
                    Item: AllPokemonsPageContainer,
                    List: ListContainer,
                    ScrollSeekPlaceholder:(() => {
                        return (
                        <AllPokemonsPageContainer>
                            <PokemonBox name={'Carregando'}></PokemonBox>    
                        </AllPokemonsPageContainer>
                        )
                    }),
                }}
                itemContent={(index) => {
                    const pokemon = valorFiltrado?.[index].name;
                    return (
                        <ItemWrapper>
                            <PokemonBox name={pokemon ?? ''}></PokemonBox>
                        </ItemWrapper>
                    )
                }}
                scrollSeekConfiguration={{
                    enter: velocity => Math.abs(velocity) > 200,
                    exit: velocity => Math.abs(velocity) < 30,
                    change: (_, range) => console.log({ range }),
                }}
            />
        </div>
    )
}