import React from 'react'
import './App.css';
import { Buscador, Quotes } from 'components'
import { AnimeProvider } from 'context/AnimeContext'

function App() {

  return (
    <div className='Contenedor'>
      <AnimeProvider>
        <div className='Contenido'>
          <h1 className='Contenido__title'>Anime Quotes</h1>
          <Buscador />
          <Quotes />
        </div>
      </AnimeProvider>
    </div>
  );
}

export default App;
