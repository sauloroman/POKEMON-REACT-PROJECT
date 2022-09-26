import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"

import { Footer } from "../../ui"
import { PokedexPage, PokemonPage, SettingsPage } from "../pages"

import { setAmount } from "../../store/slices/amountPokemons.slice";
import { setPage } from "../../store/slices/page.slice";
import { setSearchType } from "../../store/slices/search.slice";

export const PokemonsRoutes = () => {

      const dispatch = useDispatch();

      useEffect( () => {
            
            dispatch( setAmount( JSON.parse (localStorage.getItem('amountPokemons')) || 20 ))
            
            dispatch( setPage( JSON.parse( localStorage.getItem('page') )) )
            
            dispatch( setSearchType( localStorage.getItem('searchType') || '') )

      }, [] );

      return (
            <div>

                  <Routes>
                        <Route path="pokedex" element={<PokedexPage />} />
                        <Route path="pokemon/:id" element={<PokemonPage />} />
                        <Route path="settings" element={<SettingsPage />}/>
                        <Route path="/" element={<Navigate to="/pokedex" />} />
                        <Route path="/*" element={<Navigate to="/pokedex" />} />
                  </Routes>

                  <Footer />

            </div>
      )
}
