import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../store/slices/username.slice';

import { Bar, Error } from '../../ui';


import { useForm } from '../../hooks';

import PokemonLettering from '../../../assets/img/pokedex__title.png';
import pokemonGifLogin from '../../../assets/img/pokemonGifLogin.gif'
import pokemonGifLoginDark from '../../../assets/img/pokemonGifLoginDark.gif'

export const LoginPage = () => {
      
      const navigate = useNavigate();
      const dispatch = useDispatch();
      
      const { usernameText, onInputChange, onResetForm, error, onDetectEmptyFields } = useForm({
            usernameText: ''
      })
      
      const onSetUserName = (e) => {
            
            e.preventDefault();
            
            if ( onDetectEmptyFields() ) return;
            
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
                        className='login__image animate__animated animate__fadeInDown'
                        src={PokemonLettering} 
                        alt="Pokemon lettering" 
                  />

                  <div className='login__text'>
                        <h1 className='login__title animate__animated animate__fadeInLeft'>¡Hola entrenador!</h1>
                        <p className='animate__animated animate__fadeInRight'>Para poder comenzar, dame tu nombre</p>
                  </div>

                  <form
                        onSubmit={ onSetUserName } 
                        className='form login__form animate__animated animate__fadeInUp'
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
                              error && <Error>El campo está vacío</Error>
                        }
                  </form>

                  <div className='login__gif-1'>
                        <img src={pokemonGifLogin} alt="Pokemon peleando" />
                  </div>
                  <div className='login__gif-2'>
                        <img src={pokemonGifLoginDark} alt="Pokemon peleando" />
                  </div>

                  <div className="bar--login">
                        <Bar />
                  </div>
            </div>
      )
}
