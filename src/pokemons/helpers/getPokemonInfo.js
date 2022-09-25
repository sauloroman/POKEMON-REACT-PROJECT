export const getPokemonInfo = ( data ) => {
      return {
            id: data?.id,
            image: data?.sprites.other['official-artwork'].front_default,
            image2: data?.sprites.front_default,
            image3: data?.sprites.back_default,
            image4: data?.sprites.other.dream_world.front_default,
            name: data?.name[0].toUpperCase() + data?.name.slice(1, data?.name.length).toLowerCase(),
            type: data?.types.map( type => type.type.name ),
            hp: data?.stats[0].base_stat,
            attack: data?.stats[1].base_stat,
            defense: data?.stats[2].base_stat,
            special_attack: data?.stats[3].base_stat,
            special_defense: data?.stats[4].base_stat,
            speed: data?.stats[5].base_stat,
            height: data?.height,
            weight: data?.weight,
            abilities: data?.abilities.map( ability => ability.ability.name ),
            movements: data?.moves.map( move => move.move.name ).slice( 0, 30 )
      }

}
