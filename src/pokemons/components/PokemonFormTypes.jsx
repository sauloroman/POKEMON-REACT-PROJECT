import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSearchType } from "../../store/slices/search.slice";

import { useFetch, useForm } from "../../hooks"
import { getPokemonTypes } from "../helpers";

export const PokemonFormTypes = () => {

      const dispatch = useDispatch();
      const searchType = useSelector( store => store.search.type );

      const { data } = useFetch('https://pokeapi.co/api/v2/type');
      const pokemonTypes = useMemo( () => getPokemonTypes( data?.results ), [ data ] );

      const { selectedType, onInputChange } = useForm({
            selectedType: searchType
      })

      useEffect( () => {
            dispatch( setSearchType( localStorage.getItem('searchType') ) )
      }, [] );

      useEffect( () => {
            localStorage.setItem('searchType', selectedType );
            dispatch( setSearchType( selectedType ) )
      }, [ selectedType ] )

      return (
            <form className="form">
                  <select 
                  className="form__select"
                  name="selectedType"
                  value={ selectedType }
                  onChange={ onInputChange }
            >
                  <option value="">Todos los pokemons</option>
                  {
                        pokemonTypes.map( pokemonType => (
                              <option 
                                    key={ pokemonType.name }>{pokemonType.name}</option>
                        ))
                  }
                  </select>
            </form>

      )
}
