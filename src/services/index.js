export async function getAllPokemon() {
    let result = ''
    await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => result = data)
      
      return result;
}
export async function getPokemon(url) {
    let result = ''
    await fetch(url)
      .then(response => response.json())
      .then(data => result = data)
      
      return result;
}