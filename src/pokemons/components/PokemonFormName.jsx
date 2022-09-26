import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks'
import { setSearchName } from '../../store/slices/search.slice';
import { Error } from '../../ui/components'

export const PokemonFormName = () => {

      const navigate = useNavigate();

      const dispatch = useDispatch();

      const { nameSearched, onInputChange, error, onDetectEmptyFields } = useForm({
            nameSearched: ''
      })


      const onSearchNamePokemon = e => {
            
            e.preventDefault();

            if ( onDetectEmptyFields() ) return;

            dispatch( setSearchName( nameSearched.toLowerCase() ) ) 

            navigate(`/pokemon/${ nameSearched.toLowerCase() }`)

      }

      return (
            <form 
                  onSubmit={ onSearchNamePokemon }
                  className="form">
                  <input 
                        placeholder="Busca pokemon por nombre"
                        className="form__input"
                        autoComplete='off'
                        name="nameSearched"
                        value={ nameSearched }
                        onChange={ onInputChange }
                  />
                  <button className="btn">Buscar</button>
                  {
                        error && <Error>No es nombre válido</Error>
                  }
            </form>     
      )
}
