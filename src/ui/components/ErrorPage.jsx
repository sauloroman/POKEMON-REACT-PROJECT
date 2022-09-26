import shadowImage from '../../../assets/img/shadow.png'
import image404 from '../../../assets/img/pokebola.png'
import { Return } from './Return'

export const ErrorPage = () => {

      return (
            <div className="error__page shadow">
                  <h2>UPS!</h2>

                  <div className="error__imageBox">
                        <div className='error__imageContainer'>
                              <p>4</p>
                              <img src={image404} alt="404 Image" />
                              <p>4</p>
                        </div>
                        <div className='error__imageShadow'>
                              <img src={shadowImage} alt="Shadow image" />
                        </div>
                  </div>

                  <p className='error__text'>Pokemon no encontrado</p>

                  <div className="animate__animated animate__bounce animate__infinite">
                        <Return>&larr; Volver a Pokedex</Return>
                  </div>
                
            </div>
      )
}
