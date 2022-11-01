import { useMemo, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";
import PokemonBox from "../../../components/pokemonBox";
import { useGetSecondGenPokemonsQuery } from "../../../services/pokemon";
import { SecondGenPokemonPageContainer, SecondGenPokemonPageHeader } from "./style";

export default function SecondGenPokemonPage() {
    const [nomePokemon, setNomePokemon] = useState('');
    const {data} = useGetSecondGenPokemonsQuery();
    const navigate = useNavigate();
    const valorFiltrado = useMemo(() => data?.results.filter(({name}) => name.includes(nomePokemon)), [data?.results, nomePokemon]);

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
            <Virtuoso
                style={{height : 400}}
                data={valorFiltrado}
                itemContent={(index) => {
                    const pokemon = valorFiltrado?.[index].name;
                    return (
                        <SecondGenPokemonPageContainer key={pokemon}>
                            <PokemonBox name={pokemon ?? ''}/>
                        </SecondGenPokemonPageContainer>
                    )
                }}
            />
        </div>
    );
}
