import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url) => {
      
      const [state, setState] = useState(
            {
                  data: null,
                  isLoading: true,
                  hasError: null
            }
      )     

      const getFetch = async () => {

            setState(
                  {
                        ...state,
                        isLoading: true
                  }
            )

            try {

                  const res = await fetch( url );
                  const data = await res.json();

                  return  {
                        data,
                        isLoading: false,
                        hasError: false
                  }
                  

            } catch ( err ) {

                  return {
                        data: null,
                        isLoading: false,
                        hasError: err
                  }
            }

      }

      useEffect( () => {
            getFetch()
                  .then( dataObj => setState( dataObj ))
                  .catch( errObj => setState( errObj ))
      }, [url] )

      return {
            data: state.data,
            isLoading: state.isLoading,
            hasError: state.hasError
      }

}
