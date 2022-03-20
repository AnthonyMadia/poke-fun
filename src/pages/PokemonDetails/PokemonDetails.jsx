import { useState, useEffect } from 'react'
import { getDetails } from '../../services/api-calls'

const PokemonDetails = ({ pokemon }) => {
   console.log(pokemon)
    const [pokemonDetails, setPokemonDetails] = useState([])

    useEffect(() => {
        // this is where out API call will go!
        // getDetails(pokemon.url)
        // .then(details => console.log(details))
    }, [])

    return ( 
        <>
            <div>
                <h3>Pokemon details</h3>
                <h4>add getDetails api call</h4>
            </div>
        </>
     );
}
 
export default PokemonDetails;
