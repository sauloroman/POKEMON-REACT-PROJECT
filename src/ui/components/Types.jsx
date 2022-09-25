export const Types = ({ types }) => {
      return (
            types?.map( type => (
                  <p 
                        className={`${type} type-pokemon`} 
                        key={ type }>
                        { type[0].toUpperCase() + type.slice(1, type.length).toLowerCase() }
                  </p>
            ))
      )
}
