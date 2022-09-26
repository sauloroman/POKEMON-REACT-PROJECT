export const chooseColor = ( theme ) => {

      document.querySelector('body').className = '';

      if ( theme === 'theme-light') {
            document.querySelector('body').classList.add('theme-light');
      } else {
            document.querySelector('body').classList.add('theme-dark');
      }
}
