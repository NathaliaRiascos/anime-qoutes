import React from 'react'
import './App.css';
// import fondo from 'images/fondo.png'
import { Buscador, Quotes } from 'components'
import { AnimeContext } from 'context/AnimeContext'

function App() {
  return (
    <div className='Contenedor'>
      {/* <div className='Contenedor__img'></div> */}
      <AnimeContext>
        <div className='Contenido'>
          <h1 className='Contenido__title'>Anime Quotes</h1>
          <Buscador />
          <Quotes />
        </div>
      </AnimeContext>
    </div>
  );
}

export default App;
