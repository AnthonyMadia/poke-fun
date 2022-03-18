import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSprite } from '../services/api-calls'
import { useLocation } from 'react-router-dom'


const PokemonDisplay = ({ pokemon }) => {

    const [pokeDisplay, setPokeDisplay] = useState([])


    useEffect(() => {
        //api call and adjust state
    })

    return ( 
        <div >
            <Link
              key={pokemon.name}
              to="/pokemon"
              state={{ pokemon }}
            >
              <div id='classDiv'>
                {console.log(pokemon.url)}
                <img 
                  src={`${pokemon?.sprites?.front_shiny}`} 
                  alt="alt" 
                  style={{ width: "96px", height: "96px" }}
                  />
                {pokemon?.name}
                {pokemon?.sprites}
              </div> 
            </Link><br />
          </div>
     );
}
 
export default PokemonDisplay;