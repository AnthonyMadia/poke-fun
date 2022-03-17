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
          <div >
            <Link
              key={pokemon.name}
              to="/pokemon"
              state={{ pokemon }}
            >
              <div id='classDiv'>
                <img 
                  src={`${pokemon.sprite.front_default}`} 
                  alt="alt" 
                  style={{ width: "100px", height: "100px" }}
                  />
                {pokemon?.name}
              </div> 
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