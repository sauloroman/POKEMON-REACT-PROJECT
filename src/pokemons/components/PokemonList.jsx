import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux"

import { Spinner } from "../../ui";
import { useFetch } from "../../hooks";
import { getCorrectUrl } from "../helpers";
import { getCorrectPokemons } from "../helpers/getCorrectPokemons";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {

      const [pokemons, setPokemons] = useState([]);

      const search = useSelector( store => store.search );

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
                              <ul className="pokemon-grid animation animate__animated animate__fadeDown">
                                    {pokemons?.map( pokemon => (
                                          <PokemonCard 
                                                key = { pokemon.name }
                                                url = { pokemon.url }
                                          />
                                    ))}
                              </ul>
                              
                        ) 
                        : (
                              <Spinner />
                        )
                        
                  }

            </>
      )
}
