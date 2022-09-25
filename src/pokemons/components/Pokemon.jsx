import { Skills, Stats, Types } from "../../ui";
import { getPokemonInfo } from "../helpers";

export const Pokemon = ( {data} ) => {

      const pokemon = getPokemonInfo( data );

      return (
            <>
                  <div className="pokemon__container animate__animated animate__fadeInLeft">
                        <div className="pokemon__info shadow">
                        
                              <figure className={`${ pokemon.type?.[0] }`}>
                                    <img 
                                          className="pokemon__image"
                                          src={pokemon.image} 
                                          alt='Pokemon image' />
                              </figure>

                              <div className="pokemon__text">
                                    <div className="pokemon__general">

                                          <p className={`text-${pokemon.type?.[0]} pokemon__id`}>#{ pokemon.id }</p>
                                          <h2 className={`text-${pokemon.type?.[0]} pokemon__title`}>{ pokemon.name }</h2>
                                          <hr />

                                          <div className="pokemon__measures">
                                                <div className="pokemon__measure">
                                                      <h3>Peso</h3>
                                                      <p>{ pokemon.height }</p>
                                                </div>
                                                <div className="pokemon__measure">
                                                      <h3>Altura</h3>
                                                      <p>{ pokemon.height }</p>
                                                </div>
                                          </div>      

                                          <div className="pokemon__content">
                                               <div className="pokemon__types">
                                                      <h3>Tipo</h3>   
                                                      <Types types={ pokemon.type }/>
                                                </div> 

                                                <div className="pokemon__abilities">
                                                      <h3>Habilidades</h3>
                                                      <Skills skills={ pokemon.abilities }/>
                                                </div>  
                                          </div>
                                    </div>

                                    <div className="pokemon__stats">
                                          <h2>Stats</h2>
                                          <hr />
                                          <Stats { ...pokemon } />
                                    </div>
                              </div>
                        </div>

                        <div className="pokemon__gallery shadow">

                              <figure className={`background-${pokemon.type?.[0]} pokemon__galleryImgBox`}>
                                    <img 
                                          src={ pokemon.image4 } 
                                          alt='Pokemon image'
                                    />
                              </figure>

                              <div className="pokemon__subgallery">
                                    <figure className={`background-${pokemon.type?.[0]} pokemon__galleryImgBox`}>
                                          <img 
                                                src={ pokemon.image2 } 
                                                alt='Pokemon image'
                                          />
                                    </figure>

                                    <figure className={`background-${pokemon.type?.[0]} pokemon__galleryImgBox`}>
                                          <img 
                                                src={ pokemon.image3 } 
                                                alt='Pokemon image'
                                          />
                                    </figure>
                              </div>
                        </div>
                  </div>

                  <div className="pokemon__movements shadow">
                        <h2>Movements</h2>
                        <hr />
                                                
                        <div className="pokemon__movementsContainer">
                              {
                                    pokemon.movements?.map( movement => (
                                          <p className="pokemon__movement" key={movement}>{ movement }</p>
                                    ))
                              }
                        </div>

                  </div>
            </>
      )
}
