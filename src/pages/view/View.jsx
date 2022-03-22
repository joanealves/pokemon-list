import React from 'react';
import { useSelector } from 'react-redux'

import { selectPokemonSliceData } from '../list/state/PokemonSlice'

import * as S from '../../presentation/styles/global.styles'

const View = () => {
    const { infoPokemon } = useSelector(selectPokemonSliceData)
    console.log(infoPokemon)
    return (
        <div >
            {infoPokemon?.length > 0 ? (
                <S.FlexWrapper wrap gap="50px" padding>
                    {infoPokemon?.map((pokemons) => (
                        <div>
                            <h1>{pokemons.name}</h1>
                            <img
                                src={pokemons.sprites.front_default}
                                alt={pokemons.name}
                            />
                            <S.Text>Habilidades</S.Text>
                            <div>
                                {pokemons.abilities.map((item) => (
                                    <p>{item.ability.name}</p>
                                ))}
                            </div>
                        </div>

                    ))}
                </S.FlexWrapper>

            ) : ( 
            <S.FlexWrapper wrap gap="50px" padding>

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
            </S.FlexWrapper>

            )}

        </div>
    );
}

export default View;
