const baseUrl = "https://pokeapi.co"

export function getPokedexList() {
    return fetch(`${baseUrl}/api/v2/pokedex`)
}