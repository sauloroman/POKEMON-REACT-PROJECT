export const getPokemonInfo = ( data ) => {

      return {
            image: data?.sprites.other.home?.front_default,
            name: data?.name[0].toUpperCase() + data?.name.slice(1, data?.name.length).toLowerCase(),
            type: data?.types.map( type => type.type.name ),
            hp: data?.stats[0].base_stat,
            attack: data?.stats[1].base_stat,
            defense: data?.stats[2].base_stat,
            special_attack: data?.stats[3].base_stat,
            special_defense: data?.stats[4].base_stat,
            speed: data?.stats[5].base_stat,
      }

}
