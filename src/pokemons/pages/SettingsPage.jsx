import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../../store/slices/theme.slice"
import { setAmount } from "../../store/slices/amountPokemons.slice"

import { Bar, Return } from "../../ui"

import { chooseColor } from "../../ui/helpers"

import PokemonEnd from '../../../assets/img/pokemonEnd.gif'
import PokemonEndDark from '../../../assets/img/pokemonEndDark.gif'


export const SettingsPage = () => {

      const dispatch = useDispatch();

      const theme = useSelector( store => store.theme );
      
      const [selectedTheme, setSelectedTheme] = useState( localStorage.getItem('theme') || 'theme-light');
      const [selectedAmountPokemons, setSelectedAmountPokemons] = useState( JSON.parse ( localStorage.getItem('amountPokemons')) || 20 );

      useEffect( () => {
            localStorage.setItem( 'theme', selectedTheme );
            dispatch( setTheme( selectedTheme ))
            chooseColor( selectedTheme );
      }, [ selectedTheme ] )

      useEffect( () => {
            localStorage.setItem( 'amountPokemons', JSON.stringify (selectedAmountPokemons) );
            dispatch( setAmount( selectedAmountPokemons ))
      }, [ selectedAmountPokemons ] )


      return (
            <div className="settings">
                  <div className="bar--app">
                        <Bar />
                  </div> 

                  <div className="container">
                        
                        <Return>&larr; Regresar</Return>

                        <div className="settings__container shadow">
                                    
                              <header className="settings__header">
                                    <i className='bx bxs-cog settings__icon'></i>
                                    <h2>Configuración</h2>
                                    <hr />
                              </header>

                              <form className="form">
                                    <div className="form__field">
                                          <div className="form__text">
                                                <i className='bx bxs-color form__icon' ></i>
                                                <h3>Tema</h3>
                                          </div>
                                          
                                          <div className="form__options">
                                                <div className="form__inputOption">
                                                      <input 
                                                            checked={ theme === 'theme-light'}
                                                            id="theme-light"
                                                            type="radio" 
                                                            name="theme" 
                                                            value='theme-light'
                                                            onChange={ e => setSelectedTheme( e.target.value ) }
                                                      />
                                                      <label htmlFor="theme-light">Light</label>
                                                </div>
                                                <div className="form__inputOption">
                                                      <input 
                                                            checked={ theme === 'theme-dark'}  
                                                            id="theme-dark"
                                                            type="radio" 
                                                            name="theme" 
                                                            value='theme-dark'
                                                            onChange={ e => setSelectedTheme( e.target.value ) }
                                                      />
                                                      <label htmlFor="theme-dark">Dark</label>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="form__field">
                                          <div className="form__text">
                                                <i className='bx bxs-grid form__icon'></i>
                                                <h3>Pokemons por página</h3>
                                          </div>
                                          
                                          <select 
                                                value={ selectedAmountPokemons }
                                                onChange={ e => setSelectedAmountPokemons( Number(e.target.value) )}
                                                className="form__select">
                                                <option value="">Selecciona una cantidad</option>
                                                <option value="4">4</option>
                                                <option value="8">8</option>
                                                <option value="12">12</option>
                                                <option value="16">16</option>
                                                <option value="20">20</option>
                                          </select>
                                    </div>
                              </form>

                              <div className="settings__image-1">
                                    <img 
                                          src={ PokemonEnd } 
                                          alt="Ghost Pokemon smiling" />
                              </div>
                              <div className="settings__image-2">
                                    <img 
                                          src={ PokemonEndDark } 
                                          alt="Ghost Pokemon smiling" />
                              </div>

                        </div>

                  </div>
            </div>
      )
}
