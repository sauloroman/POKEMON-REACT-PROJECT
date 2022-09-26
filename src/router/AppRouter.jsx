import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages"
import { PokemonsRoutes } from "../pokemons/routes"
import { setTheme } from "../store/slices/theme.slice"
import { setUserName } from "../store/slices/username.slice"
import { chooseColor } from "../ui"
import { PublicRoute, PrivateRoute } from "./"


export const AppRouter = () => {

      const dispatch = useDispatch();

      useEffect( () => {
            dispatch( setTheme( localStorage.getItem('theme') || 'theme-light'));
            
            chooseColor( localStorage.getItem('theme') || 'theme-light' );

            dispatch( setUserName( localStorage.getItem('username') ))
      }, [] )

      return (
            <>
                  <Routes>

                        <Route path="login" element={
                              <PublicRoute>
                                    <LoginPage />
                              </PublicRoute>
                        }/>


                        <Route path="/*" element={
                              <PrivateRoute>
                                    <PokemonsRoutes />
                              </PrivateRoute>
                        } />

                        {/* <Route path="login" element={<LoginPage />}/> */}
                        {/* <Route path="/*" element={ <PokemonsRoutes />} /> */}
                  </Routes>
            </>
      )
}
