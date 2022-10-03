import React from 'react'

function Quote() {
  return (
    <div className='Card'>
      <div className='Articulo'>
        <div className='Cita'>
          <i className='fas fa-quote-left Comilla'></i>
          <p className='Articulo__parrafo'>
            La captura de un evento que sale de un portal
            en un componente padre permite el desarrollo de abstracciones
            más flexibles que no dependen intrínsecamente de los portales.
          </p>
        </div>
        <p className='Articulo__character'>Hola mundo</p>
      </div>
    </div>
  )
}

export default Quote;