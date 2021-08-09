import React from 'react'
import './App.css';
import fondo from 'images/fondo.png'
import Buscador from 'components/Buscador'
import Quotes from 'components/Quotes'
import { AnimeContext } from 'context/AnimeContext'

function App() {
  return (
    <div className='Contenedor'>
      <img className='Img-fondo' src={fondo}/>
      <AnimeContext>
        <div className='Contenido'>
          <h1 className='title'>Anime Quotes</h1>
          <Buscador />
          <Quotes />
        </div>
      </AnimeContext>
    </div>
  );
}

export default App;
