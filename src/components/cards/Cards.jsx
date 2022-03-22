import React, { useState } from 'react';

import * as S from '../../presentation/styles/global.styles'

import { Wrapper, ContainerType } from './Cards.styles'

const Cards = ({ pokemonsData,setIsOpenModal, setPokemonInfoModal }) => {
    const handleClick = (pokemon) => {
        setPokemonInfoModal(pokemon)
        setIsOpenModal(true)
    }
    return (
        <S.FlexWrapper wrap gap="16px">
            {pokemonsData.map(pokemon => {
                return (
                    <Wrapper
                        key={`key-${pokemon.name}-${pokemon.id}`}
                        onClick={() => handleClick(pokemon)}
                    >
                        <S.Text > Nome</S.Text>
                        <S.Text fontBold textTtitle> {pokemon.name}</S.Text>
                        <ContainerType>
                        <S.Text > Tipo</S.Text>
                        <S.FlexWrapper gap="6px">
                            {pokemon.types.map(item => {
                                return (
                                    <p>{item.type.name}</p>
                                )
                            })}
                        </S.FlexWrapper>
                        </ContainerType>
                    </Wrapper>
                )
            })}
        </S.FlexWrapper>
    );
}

export default Cards;
