export const getCorrectUrl = ( search ) => {

      if ( search ){
            return `https://pokeapi.co/api/v2/type/${search}`
      } else {
            return 'https://pokeapi.co/api/v2/pokemon/?limit=400'
      }
}
