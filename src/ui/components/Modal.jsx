import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setSearchName, setSearchType } from "../../store/slices/search.slice";
import { setUserName } from "../../store/slices/username.slice";

import pokemonEnd2 from '../../../assets/img/pokemonEnd2.gif'

export const Modal = ({ onShowModal }) => {

      const navigate = useNavigate();
      const dispatch = useDispatch();

      const username = useSelector( store => store.username );

      const onLogout = () => {

            localStorage.removeItem('username');
            localStorage.removeItem('searchType');

            dispatch( setUserName('') );
            dispatch( setSearchName('') );
            dispatch( setSearchType('') );

            navigate('/login')
      }

      return (
            <div className="modal animate__animated animate__fadeIn">
                  <div className="modal__pop animate__animated animate__flipInX">

                       <header className="modal__header">
                              <h2 className="modal__title">¿Desea reiniciar la aplicación, { username }?</h2>
                              <i 
                                    onClick={ onShowModal }
                                    className='bx bx-x modal__icon'></i>
                       </header>

                        <div className="modal__buttons">
                              <button 
                                    onClick={ onLogout }
                                    className="btn animation">Sí</button>
                              <button 
                                    onClick={ onShowModal }
                                    className="btn btn--white animation">No</button>
                        </div>

                        <div className="modal__image">
                              <img src={pokemonEnd2} alt="Pokemon image End" />
                              <small>
                                    <p>Reiniciar la aplicación implica cambiar el nombre del usuario.</p> <br />
                                    <p>No se podrá ingresar a menos que propocione algún nombre.</p> 
                              </small>
                        </div>
                  </div>
            </div>
      )
}
