import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { setSearchType } from "../../store/slices/search.slice";

import { useFetch, useForm } from "../../hooks"
import { getPokemonTypes } from "../helpers";
import { setPage } from "../../store/slices/page.slice";

export const PokemonFormTypes = () => {

      const dispatch = useDispatch();

      const { data } = useFetch('https://pokeapi.co/api/v2/type');
      const pokemonTypes = useMemo( () => getPokemonTypes( data?.results ), [ data ] );

      const { selectedType, onInputChange } = useForm({
            selectedType: localStorage.getItem('searchType') || ''
      })

      useEffect( () => {
            dispatch( setSearchType( selectedType ) )
            localStorage.setItem('searchType', selectedType )
            dispatch( setPage(1) );
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
