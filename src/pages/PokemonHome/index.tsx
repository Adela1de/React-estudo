import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonHomeContainer } from './style';

export default function PokemonHome() {
    const navigate = useNavigate();

    return (
        <PokemonHomeContainer>
            <h1>Bem vindo ao pokemon</h1>
            <button onClick={() => navigate("/primeira_geracao")}>1º Geração</button>
            <button onClick={() => navigate("/segunda_geracao")}>2º Geração</button>
        </PokemonHomeContainer>
    )
}