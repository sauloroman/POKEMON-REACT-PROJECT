import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux"

import { Pagination, Spinner } from "../../ui";
import { useFetch } from "../../hooks";
import { getCorrectUrl } from "../helpers";
import { getCorrectPokemons } from "../helpers/getCorrectPokemons";
import { PokemonCard } from "./PokemonCard";


export const PokemonList = () => {

      const [pokemons, setPokemons] = useState([]);
      const [visiblePokemons, setVisiblePokemons] = useState([]);

      const search = useSelector( store => store.search );
      const amountPokemons = useSelector( store => store.amountPokemons );

      const url = useMemo( () => getCorrectUrl( search.type ), [search.type]);

      const { data, isLoading } = useFetch( url );

      useEffect( () => {
            setPokemons( getCorrectPokemons( data ) );
      }, [ data ] )

      return (
            <>
                  {
                        !isLoading ? 
                        (
                             <>     

                                    <div className="pokemon__list-info animate__animated animate__fadeIn shadow">
                                          <h2>Información</h2>
                                         <div className="pokemon__list-text">
                                                <p>Pokemons por página: <span>{amountPokemons}</span></p>
                                                <p>Total de pokemons: <span>{pokemons?.length}</span> </p>
                                                <p>Tipo: <span>{ !search.type ? 'Todos' : search.type }</span></p>
                                         </div>
                                    </div>

                                    <ul className="pokemon-grid animation animate__animated animate__fadeDown">
                                          {visiblePokemons?.map( pokemon => (
                                                <PokemonCard 
                                                      key = { pokemon.name }
                                                      url = { pokemon.url }
                                                />
                                          ))}
                                    </ul>
                                    
                                    {
                                          pokemons && <Pagination 
                                                      setVisiblePokemons={ setVisiblePokemons } 
                                                      pokemons = { pokemons }/>
                                    }
                        
                             </>
                        )
                        : (
                              <Spinner />
                        )
                        
                  }

            </>
      )
}
