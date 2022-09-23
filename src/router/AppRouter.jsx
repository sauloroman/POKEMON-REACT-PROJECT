import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { PokemonsRoutes } from "../pokemons/routes"

export const AppRouter = () => {
      return (
            <>
                  <Routes>
                        <Route path="login" element={<LoginPage />}/>
                        <Route path="/*" element={ <PokemonsRoutes />} />
                  </Routes>
            </>
      )
}
