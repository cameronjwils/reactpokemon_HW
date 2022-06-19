import React, {useState, useEffect} from 'react';
import PokemonSelect from '../components/PokemonSelect';
import PokemonDetail from '../components/PokemonDetail';


const Container = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => setPokemon(data.results))
      }, []);


    const handlePokemonSelect = (url) => {
      fetch(url)
      .then(res => res.json())
      .then(data => setSelectedPokemon(data))
    }

    return (
        <>
       <h1>Pokemon</h1>
        <PokemonSelect allPokemon={pokemon} onPokemonSelect={handlePokemonSelect} />
        { selectedPokemon ? <PokemonDetail pokemon={selectedPokemon} /> : null }
        </>
    )
  
}

export default Container;