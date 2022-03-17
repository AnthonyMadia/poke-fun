const baseUrl = "https://pokeapi.co"

export function getPokedexList() {
    return fetch(`${baseUrl}/api/v2/pokedex`)
}

export function getPokemonList() {
    return fetch(`${baseUrl}/api/v2/pokemon`)
    .then(res => res.json())
}