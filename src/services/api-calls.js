const baseUrl = "https://pokeapi.co/api/v2"

export function getPokedexList() {
    return fetch(`${baseUrl}/pokedex`)
    .then(res => res.json())
}

export function getPokemonList() {
    return fetch(`${baseUrl}/pokemon`)
    .then(res => res.json())
}

// api call to the images url
export function getSprite(pokeUrl) {
    return fetch(`${baseUrl}/pokemon${pokeUrl}`)
    .then(res => res.json())
}