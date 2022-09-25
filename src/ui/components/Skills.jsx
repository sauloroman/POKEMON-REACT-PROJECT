export const Skills = ({ skills }) => {

      return (
            <>
                  {
                        skills?.map ( skill => (
                              <p 
                                    className='skill'
                                    key={ skill }>{ skill }</p>
                        ))
                  }
            </>
      )
}
