import { StatBar } from "./StatBar"

export const Stats = ({ hp, attack, defense, speed}) => {
      return (
            <ul className="pokemons__stats-list">
                  <li className="pokemons__stat">
                        <header>
                              <h3>Hp</h3>
                              <p>{ hp } / 200 </p>
                        </header>
                        <StatBar stat={hp}/>
                  </li>
                  <li className="pokemons__stat">
                        <header>
                              <h3>Ataque</h3>
                               <p>{ attack } / 200 </p>
                        </header>
                        <StatBar stat={attack}/>
                  </li>
                  <li className="pokemons__stat">
                        <header>
                              <h3>Defensa</h3>
                              <p>{ defense } / 200 </p>
                        </header>
                        <StatBar stat={defense}/>
                  </li>
                  <li className="pokemons__stat">
                        <header>
                              <h3>Velocidad</h3>
                              <p>{ speed } / 200 </p>
                        </header>
                        <StatBar stat={speed}/>
                  </li>
             </ul>
      )
}
