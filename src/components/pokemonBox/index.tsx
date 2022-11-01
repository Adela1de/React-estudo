import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { ContainerSpan, PokemonBoxContainer, PokemonBoxContainerImg } from "./style";

interface IProps {
    name: string;
}

export default function PokemonBox({
    name,
}: IProps) {
    const {
        isError,
        isFetching,        
        data,
    } = useGetPokemonByNameQuery(name);

    if(isFetching) { 
        return (
            <div>
                <h1>
                    Carregando...
                </h1>
            </div>
        );
    }

    if(isError) { 
        return (
            <div>
                <h1>
                    Algo deu errado
                </h1>
            </div>
        );
    }

    return (
        <PokemonBoxContainer>
            <PokemonBoxContainerImg
                src={data?.sprites?.front_default}
            />
            <ContainerSpan>
                <span>{data?.name}</span>
            </ContainerSpan>
        </PokemonBoxContainer>
    );
}

