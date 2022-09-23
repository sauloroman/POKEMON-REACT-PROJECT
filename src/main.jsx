import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { PokemonApp } from './PokemonApp';

import './css/general.css'
import './css/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <PokemonApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);