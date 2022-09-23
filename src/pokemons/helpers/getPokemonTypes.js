export const getPokemonTypes = ( pokemonTypes = [] ) => {
      return pokemonTypes?.filter( pokemonType => pokemonType.name !== 'unknown')
}
