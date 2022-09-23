import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks'
import { setSearchName } from '../../store/slices/search.slice';

export const PokemonFormName = () => {

      const dispatch = useDispatch();

      const { nameSearched, onInputChange } = useForm({
            nameSearched: ''
      })

      const onSearchNamePokemon = e => {
            
            e.preventDefault();

            dispatch( setSearchName( nameSearched ) )

      }

      return (
            <form 
                  onSubmit={ onSearchNamePokemon }
                  className="form">
                  <input 
                        placeholder="Busca pokemon por nombre"
                        className="form__input"
                        name="nameSearched"
                        value={ nameSearched }
                        onChange={ onInputChange }
                  />
                  <button className="btn">Buscar</button>
            </form>     
      )
}
