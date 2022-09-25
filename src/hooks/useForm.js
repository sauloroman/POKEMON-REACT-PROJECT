import { useState } from "react"

export const useForm = ( initialState = {}) => {
      
      const [error, setError] = useState(false);
      const [formState, setFormState] = useState( initialState );

      const onInputChange = ({ target }) => {
            
            const { value, name } = target;

            setFormState(
                  {
                        ...formState,
                        [name]: value
                  }
            )

      }

      const onDetectEmptyFields = () => {
            if ( Object.values(formState).includes('') ) {
                  setError( true );

                  setTimeout( () => {
                        setError( false );
                  }, 3000 );

                  return true;
            }

            setError( false );

            return false;
      }


      const onResetForm = () => setFormState( initialState );

      return {
            ...formState,
            formState,
            onInputChange,
            onResetForm,
            error,
            onDetectEmptyFields
      }

}
