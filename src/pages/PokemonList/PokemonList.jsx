import { useEffect, useState } from 'react'
import { getPokemonList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

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
          <div key={pokemon.name}>
            <Link
              to="/pokemon"
              state={{ pokemon }}
            >
              {pokemon?.name}
            </Link><br />
          </div>
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