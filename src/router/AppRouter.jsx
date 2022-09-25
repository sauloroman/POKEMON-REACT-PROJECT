import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { PokemonsRoutes } from "../pokemons/routes"
import { Footer, SettingsPage } from "../ui"

export const AppRouter = () => {
      return (
            <>
                  <Routes>
                        <Route path="login" element={<LoginPage />}/>
                        <Route path="settings" element={<SettingsPage/>}></Route>
                        <Route path="/*" element={ <PokemonsRoutes />} />
                  </Routes>

                  <Footer />
            </>
      )
}
