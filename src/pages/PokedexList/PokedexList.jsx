import { useState, useEffect } from 'react'
import { getPokedexList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const PokedexList = (props) => {

    const [pokedexes, setPokedexes] = useState([])

    useEffect(() => {
        getPokedexList()
        .then(pokedexData => setPokedexes(pokedexData.results))
    }, [])

    return ( 
        <>
            <div>
                <h3>This is the Pokedex List!</h3>
                <div className="poke-display">
                    {pokedexes?.map((pokedexTitle, idx) => (
                        <Link to='pokedex' state={{pokedexTitle}} key={pokedexTitle.idx}>
                            <div id='classDiv'>
                                {/* <img 
                                    style={{ width: "100px", height: "100px" }}
                                    src={`${pokedexTitle.name}`}
                                    alt="yes" 
                                /> */}
                                {pokedexTitle?.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
     );
}

export default PokedexList;
