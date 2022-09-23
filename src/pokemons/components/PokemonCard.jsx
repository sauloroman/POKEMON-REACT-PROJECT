import { useFetch } from "../../hooks"
import { getPokemonInfo } from "../helpers";

const Types = ({ types }) => {
      return (
            types?.map( type => (
                  <p key={ type }>{ type[0].toUpperCase() + type.slice(1, type.length).toLowerCase() }</p>
            ))
      )
}

export const PokemonCard = ({ url }) => {

      const { data } = useFetch( url );
      const pokemon = getPokemonInfo( data );

      return (
            <div className={`pokemon__card background-${pokemon.type?.[0]} animation`} >
                  <div className={`${ pokemon.type?.[0] } pokemon__card-imageBox`}>
                        <img
                              className="pokemon__card-image" 
                              src={ pokemon.image } 
                              alt={pokemon.name} 
                        />
                  </div>

                  <div className="pokemon__card-info">
                        <h3 className={`text-${pokemon.type?.[0]}`}>{ pokemon.name }</h3>
                        
                        <div className="pokemon__card-types">
                              <div className="pokemon__card-type">
                                    <Types types = {pokemon.type}/>
                              </div>
                              <p className="pokemon__card-info-type">Tipo</p>
                        </div>

                        <div className="pokemon__card-stats">
                              <div className="pokemon__card-stat">
                                    <h4>Hp</h4>
                                    <p>{ pokemon.hp }</p>
                              </div>
                              <div className="pokemon__card-stat">
                                    <h4>Ataque</h4>
                                    <p>{ pokemon.attack }</p>
                              </div>
                              <div className="pokemon__card-stat">
                                    <h4>Defensa</h4>
                                    <p>{ pokemon.defense }</p>
                              </div>
                              <div className="pokemon__card-stat">
                                    <h4>Velocidad</h4>
                                    <p>{ pokemon.speed }</p>
                              </div>
                        </div>

                  </div>
            </div>
      )
}
