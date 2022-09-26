import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../../store/slices/page.slice";

export const Pagination = ({ setVisiblePokemons, pokemons }) => {

      const dispatch = useDispatch();

      const amountPokemons = useSelector( store => store.amountPokemons );
      const page = useSelector( store => store.page );

      const getVisiblePokemons = () => {
            const lowerBound = amountPokemons * (page - 1);
            const upperBound = lowerBound + amountPokemons;
            setVisiblePokemons( pokemons?.slice( lowerBound, upperBound ) );
      }

      const onPreviousPage = () => {
            dispatch( setPage( page - 1 ) )
      }

      const onNextPge = () => {
            dispatch( setPage( page + 1 ) )
      }

      useEffect( () => {
            getVisiblePokemons();
      }, [ pokemons ] );

      useEffect( () => {
            dispatch( setPage( page ) )
            localStorage.setItem('page', JSON.stringify( page ))
            getVisiblePokemons();
      }, [ page ] )

      return (
           <>
                  <ul className="pagination">  
                        <button   
                              disabled={ (page === 1) }
                              onClick={ onPreviousPage }
                              className={`${ (page === 1) ? 'disabled' : null } pagination__control animation btn`}>
                              <i className='bx bx-chevron-left pagination__icon'></i>
                        </button> 
                        
                        <li>{ page }</li>
                        
                        <button 
                              disabled={ (page === Math.ceil( pokemons.length / amountPokemons ) ) }
                              onClick={ onNextPge }
                              className={`${page === Math.ceil( pokemons.length / amountPokemons ) ? 'disabled' : null } pagination__control animation btn`}>
                              <i className='bx bx-chevron-right pagination__icon'></i>
                        </button>
                  </ul>

                  <h2 className="pagination__amount">Página { page } de {Math.ceil( pokemons.length / amountPokemons )}</h2>
           </>
      )
}
