import { useState } from "react"
import { PokemonFormName, PokemonFormTypes } from "../../pokemons/components";

export const ChooseForm = () => {
      
      const [typeSearch, setTypeSearch] = useState( true );

      return (
            <>
                  <button 
                        onClick={ () => setTypeSearch( !typeSearch ) }
                        className={`${ typeSearch ? '' : 'active-btn'} animation btn-switch`}></button>

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
