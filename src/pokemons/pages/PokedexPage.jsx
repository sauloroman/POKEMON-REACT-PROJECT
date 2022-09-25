import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useModal } from "../../hooks";

import { setUserName } from "../../store/slices/username.slice";
import { Bar, ChooseForm, Modal } from "../../ui"
import { PokemonList } from "../components";

export const PokedexPage = () => {

      const dispatch = useDispatch();
      const { modal, onShowModal } = useModal();

      // GLOBAL STATES
      const username = useSelector( store => store.username );

      useEffect( () => {
            dispatch( setUserName( localStorage.getItem('username') ));
      }, [] );

      return (
            <div className="pokedex">

                  { modal && <Modal onShowModal = {onShowModal}/>}

                  <div className="bar--app">
                        <Bar />
                  </div>

                  <div className="container">

                        <div className="btnBox">
                              <button 
                                    onClick={ onShowModal }
                                    className="btn animation btn--reset">&larr; Reiniciar Aplicación
                              </button>
                        </div>

                        <header className="pokedex__header">
                              <p className="pokedex__welcome">Bienvenido { username }, <span>aquí podrás encontrar tu pokemon favorito</span></p>
                              <ChooseForm />    
                        </header>

                        <PokemonList />

                  </div>

            </div>
      )
}
