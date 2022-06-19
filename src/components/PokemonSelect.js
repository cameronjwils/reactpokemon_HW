import React from 'react';

const PokemonSelect = ({allPokemon, onPokemonSelect}) => {

    const options = allPokemon.map((pokemon, index) => {
      return <option key={index} value={index}>{pokemon.name}</option>
    })

    const handleChange = (event) => {
      const chosenPokemon = allPokemon[event.target.value]
      onPokemonSelect(chosenPokemon.url);
    } 

  return (
    <select onChange={handleChange}>
        <option selected disabled value="">Choose a pokemon</option>
        {options}
    </select>
  )
}

export default PokemonSelect;