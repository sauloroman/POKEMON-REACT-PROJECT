export const getCorrectPokemons = ( data ) => {

      if ( data?.results ){
            return data?.results;
      } else {
            return data?.pokemon.map( pokemon => pokemon.pokemon )
      }

}
