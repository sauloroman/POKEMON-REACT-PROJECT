import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

      const username = useSelector( store => store.username );
      console.log( username )

      return ( username )
            ? children
            : <Navigate to="/login" />

}
