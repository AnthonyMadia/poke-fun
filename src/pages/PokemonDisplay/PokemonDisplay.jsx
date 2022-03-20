import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSprite } from '../../services/api-calls'



const PokemonDisplay = ({ pokemon }) => {
    // console.log(pokemon.url)
    const [pokeDisplay, setPokeDisplay] = useState([])


    useEffect(() => {
        //api call and adjust state
        getSprite(pokemon.url)
        .then(display => setPokeDisplay(display))
        
    }, [])


    return ( 
      <div>
            <Link
              key={pokemon.name}
              to="/pokemon"
              state={{ pokemon }} 
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