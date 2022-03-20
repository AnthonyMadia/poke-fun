import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDetails } from '../../services/api-calls'
import '../../App.css'

const PokemonDisplay = ({ pokemon }) => {
    // console.log(pokemon)
    const [pokeDisplay, setPokeDisplay] = useState([])


    useEffect(() => {
        //api call and adjust state
        getDetails(pokemon.url)
        .then(display => setPokeDisplay(display))
        
    }, [])


    return ( 
      <div className='poke-display'>
            <Link
              key={pokemon.name}
              to="/pokemon"
              pokemon={pokemon} 
            >
              
              <div id='classDiv'>
              <img 
                src={pokeDisplay?.sprites?.front_default} 
                alt="alt" 
                style={{ width: "96px", height: "96px" }}
              />
                <h3>{pokemon?.name}</h3>
              </div>                 
            </Link><br />
          </div>
     );
}
 
export default PokemonDisplay;