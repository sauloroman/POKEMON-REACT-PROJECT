import { Route, Routes } from "react-router-dom"
import { PokedexPage, PokemonPage } from "../pages"

export const PokemonsRoutes = () => {
      return (
            <div>

                  <Routes>
                        <Route path="pokedex" element={<PokedexPage />} />
                        <Route path="pokemon/:id" element={<PokemonPage />} />
                  </Routes>

            </div>
      )
}
