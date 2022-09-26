import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
      const username = useSelector( store => store.username );
      return ( !username )
            ? children
            : <Navigate to='/pokedex' />

}
