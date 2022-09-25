export const Footer = () => {
      return (
            <footer className="footer">
                  <div className="footer__author">
                        <p>Saulo Román Santillán Nava</p>
                        <p>Derechos Reservados &copy;</p>
                  </div>
                  <div className="footer__icons">
                        <a href="https://www.linkedin.com/in/saulo-roman-santillan-nava/" className="footer__icon">
                              <i className='bx bxl-linkedin-square'></i>
                        </a>
                        <a href="https://sauloromansantillannava.netlify.app/"
                        className="footer__icon">
                              <i className='bx bxl-github' ></i>
                        </a>
                        <a href="https://github.com/sauloroman"
                        className="footer__icon">
                              <i className='bx bx-world' ></i>
                        </a>
                  </div>
                  <small className="footer__ref">Este proyecto fue desarrollado gracias a Academlo</small>
            </footer>
      )
}
