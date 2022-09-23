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

                  setState( 
                        {
                              data,
                              isLoading: false,
                              hasError: false
                        }
                  )

            } catch ( err ) {

                  setState(
                        {
                              data: null,
                              isLoading: false,
                              hasError: err
                        }
                  )

            }

      }

      useEffect( () => {
            getFetch();
      }, [url] )

      return {
            data: state.data,
            isLoading: state.isLoading,
            hasError: state.hasError
      }

}
