import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../store/slices/username.slice';

import { Bar } from '../../ui';

import { useForm } from '../../hooks';

import PokemonLettering from '../../../assets/img/pokedex__title.png';

export const LoginPage = () => {
     
      const [error, setError] = useState(false);
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const { usernameText, onInputChange, onResetForm } = useForm({
            usernameText: ''
      })

      const onSetUserName = (event) => {

            event.preventDefault();

            if ( usernameText.trim().length <= 1 ) {
                  setError( true );

                  setTimeout(() => {
                        setError( false ); 
                  }, 3000 );

                  return;
            }

            setError( false );

            localStorage.setItem('username', usernameText );
            dispatch( setUserName( usernameText ) )

            navigate('/',
                  {
                        replace: true
                  }
            )

            onResetForm();
      }

      return (
            <div className='login'>

                  <img 
                        className='login__image'
                        src={PokemonLettering} 
                        alt="Pokemon lettering" 
                  />

                  <div className='login__text'>
                        <h1 className='login__title'>¡Hola entrenador!</h1>
                        <p>Para poder comenzar, dame tu nombre</p>
                  </div>

                  <form
                        onSubmit={ onSetUserName } 
                        className='form'
                  >
                        <input
                              className='form__input'
                              name='usernameText'
                              value={ usernameText }
                              onChange={ onInputChange }
                              autoComplete='off'
                              placeholder='Tu nombre' 
                              type="text" 
                        />
                        <button className='btn animation'>Comenzar</button>
                        {
                              error && <p className='animate__animated animate__fadeInDown alert'>Hay campos vacíos</p>
                        }
                  </form>

                  <div className="bar--login">
                        <Bar />
                  </div>
            </div>
      )
}
