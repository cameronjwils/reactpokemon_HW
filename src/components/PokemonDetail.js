import React from 'react';

const PokemonDetail = ({pokemon}) => {
  
    return (
        <>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
    )

};

export default PokemonDetail;