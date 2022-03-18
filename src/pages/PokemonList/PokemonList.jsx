import { useEffect, useState } from 'react'
import { getPokemonList } from '../../services/api-calls'
import { Link } from 'react-router-dom'
import PokemonDisplay from '../../PokemonDisplay/PokemonDisplay'

const PokemonList = (props) => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(()=> {
    // API call, then adjust state
    getPokemonList()
    .then(poke => setPokemonList(poke.results))
  }, [])
  
  return (
    <>
      <h3>Pokemon List - Gotta catch em all</h3>
      
      {pokemonList?.length ?
      <>
        {pokemonList.map((pokemon) => (
          // this is where second component will go where pokemon is the prop
          <PokemonDisplay pokemon={pokemon}/>
          
        ))}
      </>
      :
      <>
        <h1>LOADDDDDDIIIINGNNNGNGNGNG POKEMONNNNNNNNN</h1>
      </>
      }
    </>
  );
}
 
export default PokemonList;