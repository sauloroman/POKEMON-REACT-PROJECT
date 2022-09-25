import { useState } from "react"
import { PokemonFormName, PokemonFormTypes } from "../../pokemons/components";
import PokeBall from '../../../assets/img/pokebola.png'
import { useNavigate } from "react-router-dom";

export const ChooseForm = () => {
      
      const navigate = useNavigate();
      const [typeSearch, setTypeSearch] = useState( true );

      const onSettingsPage = () => {
            navigate('/settings');
      }

      return (
            <>
                  <header className="choose__header">
                        <div className="choose__search">
                              <button 
                                    onClick={ () => setTypeSearch( !typeSearch ) }
                                    className={`${ typeSearch ? '' : 'active-btn'} animation btn-switch`}></button>
                              <p>Busqueda</p>
                        </div>

                        <div className="choose__imgBox">
                              <img 
                                    onClick={ onSettingsPage }
                                    title="Configuración"
                                    className="rotate"
                                    src={PokeBall} 
                                    alt='Pokeball' />
                              <p>Configuracion</p>
                        </div>
                  </header>
                  {
                        ( typeSearch )
                              ? (
                                    <PokemonFormTypes />
                              )
                              : (
                                    <PokemonFormName />
                              )
                  }
            </>
      )
}
