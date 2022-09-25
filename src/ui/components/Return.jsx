import { useNavigate } from "react-router-dom"

export const Return = ({ children }) => {

      const navigate = useNavigate();

      const onBackPage = () => {
            navigate( -1 );
      }

      return (
            <div className="btnBox">
                  <button 
                        onClick={ onBackPage }
                        className="btn animation btn--return">{children}</button>
            </div>
      )
}
