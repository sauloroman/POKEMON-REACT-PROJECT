import PokemonLettering from '../../../assets/img/pokedex__title.png';
import { useForm } from '../../hooks';

export const LoginPage = () => {

      const { username, onInputChange, onResetForm } = useForm({
            username: ''
      })

      return (
            <div className='login'>
                  <img 
                        className='login__image'
                        src={PokemonLettering} 
                        alt="Pokemon lettering" 
                  />

                  <div>
                        <h1>¡Hola entrenador!</h1>
                        <p>Para poder comenzar, dame tu nombre</p>
                  </div>

                  <form>
                        <input
                              value={ username }
                              onChange={ onInputChange }
                              autoComplete='off'
                              placeholder='Tu nombre' 
                              type="text" 
                        />
                        <button className='btn animation'>Comenzar</button>
                  </form>

                  <div className='bar bar--login'>
                        <div className='bar__ball'></div>
                        <div className='bar__black'></div> 
                  </div>

            </div>
      )
}
