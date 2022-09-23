import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PokemonApp } from './PokemonApp'
import './css/general.css'
import './css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonApp />
    </BrowserRouter>
  </React.StrictMode>
)
