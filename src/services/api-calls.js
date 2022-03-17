const baseUrl = "https://pokeapi.co/api/v2"

export function getPokedexList() {
    return fetch(`${baseUrl}/pokedex`)
}

export function getPokemonList() {
    return fetch(`${baseUrl}/pokemon`)
    .then(res => res.json())
}