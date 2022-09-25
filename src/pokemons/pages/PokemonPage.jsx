import { useParams } from "react-router-dom"

import { Pokemon } from "../components";
import { Bar, ErrorPage, Return, Spinner} from "../../ui";

import { useFetch } from "../../hooks";


export const PokemonPage = () => {

      const { id } = useParams();
      const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

      return (
            <div className="pokemon">
                  <div className="bar--app">
                        <Bar />
                  </div>    

                  <div className="container">

                        {
                              !hasError 
                              ? (
                                    !isLoading
                                    ? (
                                          <>
                                                <Return>&larr; Regresar</Return>
                                                <Pokemon data={data}/>
                                          </>
                                    )
                                    : (
                                          <Spinner />
                                    ) 
                              ) : (
                                    <ErrorPage />
                              )
                        }

                  </div>              

            </div>
      )
}
