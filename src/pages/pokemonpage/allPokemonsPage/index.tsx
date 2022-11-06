import { useMemo, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";
import PokemonBox from "../../../components/pokemonBox";
import { useGetAllPokemonsQuery } from "../../../services/pokemon";
import { AllPokemonsPageContainer, AllPokemonsPageHeader } from "./style";


export default function AllPokemonsPage() {
    const navigate = useNavigate();
    const {data} = useGetAllPokemonsQuery();
    const [nomePokemon, setNomePokemon] = useState('');
    const valorFiltrado = useMemo(() => data?.results.filter(({name}) => name.includes(nomePokemon)), [data?.results, nomePokemon])
    
    
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
            <Virtuoso
                style={{
                    height: 1000,
                    display:'flex',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    flexDirection:'row'
                }}
                data={valorFiltrado}
                itemContent={(index) => {
                    const pokemon = valorFiltrado?.[index].name;
                    return(
                        <AllPokemonsPageContainer key={pokemon}>                               
                            <PokemonBox name={pokemon ?? ''}/>
                        </AllPokemonsPageContainer>
                    )
                }}
            />
        </div>
    )
}