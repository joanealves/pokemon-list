import React from 'react';

const Cards = ({pokemonsData}) => {
    return (
        <div>
            {pokemonsData.map(pokemon => {
                return (
                    <div key={pokemon.name}>
                       <p> {pokemon.name}</p>
                       <div>
                           {pokemon.types.map(item => {
                               return (

                                   <p>{item.type.name}</p>
                               )
                           })}
                       </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Cards;
