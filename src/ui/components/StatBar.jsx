export const StatBar = ({ stat }) => {

      const getPercentage = ( stat * 100 ) / 200;

      return (
            <div className="bar-power" style={{ width: `${getPercentage}%`}}></div>
      )
}
