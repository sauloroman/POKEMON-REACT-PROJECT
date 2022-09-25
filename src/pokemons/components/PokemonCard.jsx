import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks"
import { Types } from "../../ui";
import { getPokemonInfo } from "../helpers";

export const PokemonCard = ({ url }) => {

      const navigate = useNavigate()
      const { data } = useFetch( url );
      const pokemon = getPokemonInfo( data );

      const onGoPokemonPage = () => {
            navigate(`/pokemon/${pokemon.name.toLowerCase()}`)
      }

      return (    
            <div 
                  onClick={ onGoPokemonPage }
                  className={`pokemon__card background-${pokemon.type?.[0]} animation`} >
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
