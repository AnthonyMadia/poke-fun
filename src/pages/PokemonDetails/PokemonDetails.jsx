import { useState, useEffect } from 'react'

const PokemonDetails = (props) => {

    const [pokemonDetails, setPokemonDetails] = useState([])

    useEffect(() => {
        // this is where out API call will go!
    }, [])

    return ( 
        <>
            <div>
                <h3>Pokemon details</h3>
            </div>
        </>
     );
}
 
export default PokemonDetails;
