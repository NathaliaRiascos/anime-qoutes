import React from 'react'
import PropTypes from 'prop-types'

function Quote({data}) {

  return (
    <div className='Card'>
      <div className='Articulo'>
        <div className='Cita'>
          <i className='fas fa-quote-left Comilla'></i>
          <p className='Articulo__parrafo'>
            {data?.quote}
          </p>
        </div>
        <p className='Articulo__character'>{ data?.character }</p>
      </div>
    </div>
  )
}

Quote.propTypes = {
  data: PropTypes.object
}

export default Quote;