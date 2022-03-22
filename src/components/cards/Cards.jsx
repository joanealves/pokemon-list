import React from 'react';

import * as S from '../../presentation/styles/global.styles'

import { Wrapper } from './Cards.styles'
 
const Cards = ({pokemonsData}) => {
    return (
        <S.FlexWrapper wrap gap="16px">
            {pokemonsData.map(pokemon => {
                return (
                    <Wrapper width="120px" key={pokemon.name}>
                       <S.Text fontBold textTtitle> {pokemon.name}</S.Text>
                       <S.FlexWrapper mt={20} gap="6px">
                           {pokemon.types.map(item => {
                               return (

                                   <p>{item.type.name}</p>
                               )
                           })}
                       </S.FlexWrapper>
                    </Wrapper>
                )
            })}
            
        </S.FlexWrapper>
    );
}

export default Cards;
