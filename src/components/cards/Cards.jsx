import React from 'react';

const Cards = ({pokemonsData}) => {
    return (
        <div>
            {pokemonsData.map(pokemon => {
                return (
                    <div key={pokemon.name}>
                        {pokemon.name}
                    </div>
                )
            })}
            
        </div>
    );
}

export default Cards;
