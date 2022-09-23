import PokemoLettering from '../../../assets/img/pokedex__title.png'

export const Bar = () => {
      return (
            <div className='bar'>
                  <img src={ PokemoLettering } className="bar__image"/>
                  <div className='bar__ball'></div>
                  <div className='bar__black'></div> 
            </div>
      )
}
