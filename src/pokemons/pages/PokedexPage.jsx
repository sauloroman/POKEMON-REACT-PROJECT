import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setUserName } from "../../store/slices/username.slice";
import { Bar, ChooseForm } from "../../ui"
import { PokemonList } from "../components";

export const PokedexPage = () => {

      const dispatch = useDispatch();

      // GLOBAL STATES
      const username = useSelector( store => store.username );

      useEffect( () => {
            dispatch( setUserName( localStorage.getItem('username') ))
      }, [] );

      return (
            <div className="pokedex">
                  <div className="bar--app">
                        <Bar />
                  </div>

                  <div className="container">
                        <header className="pokedex__header">
                              <p className="pokedex__welcome">Bienvenido { username }, <span>aquí podrás encontrar tu pokemon favorito</span></p>
                              <ChooseForm />    
                        </header>

                        <PokemonList />

                  </div>

            </div>
      )
}
