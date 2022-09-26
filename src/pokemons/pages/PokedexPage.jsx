import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useModal } from "../../hooks";
import { setPage } from "../../store/slices/page.slice";
import { setSearchType } from "../../store/slices/search.slice";

import { Bar, ChooseForm, Modal } from "../../ui"
import { PokemonList } from "../components";

export const PokedexPage = () => {

      const dispatch = useDispatch();
      const { modal, onShowModal } = useModal();
      
      // GLOBAL STATES
      const username = useSelector( store => store.username )

      useEffect( () => {
            dispatch( setPage( JSON.parse(localStorage.getItem('page') ) || 1 ) )
            dispatch( setSearchType( localStorage.getItem('searchType') || '' ) )
      }, [] )

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
