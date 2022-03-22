import React from 'react';
import { useSelector } from 'react-redux'

import { selectPokemonSliceData } from '../list/state/PokemonSlice'

import * as S from '../../presentation/styles/global.styles'

const View = () => {
    const { infoPokemon } = useSelector(selectPokemonSliceData)
    return (
        <div >
            <div>
                <h1>{infoPokemon.name}</h1>
                <img
                    src={infoPokemon.sprites.front_default}
                    alt={infoPokemon.name}
                />
                <S.Text>Habilidades</S.Text>
                <div>
                    {infoPokemon.abilities.map((item) => (
                        <p>{item.ability.name}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default View;
