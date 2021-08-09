import { useState } from 'react'
import Imagen from 'images/fondo.png'
import Modal from '../Modal'

const Quote = () => {

  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <div className='card'>
      <button
        className='btn-modal'
        onClick={toggle}
      >
        <img loading='lazy' className='image-character'  src={Imagen} alt=''/>
      </button>
      <div className='articulo'>
        <div className='cita'>
          <i className='fas fa-quote-left comilla'></i>
          <p className='articulo-parrafo'>
            La captura de un evento que sale de un portal
            en un componente padre permite el desarrollo de abstracciones
            más flexibles que no dependen intrínsecamente de los portales.
          </p>
        </div>
        <p className='articulo-character'>Hola mundo</p>
      </div>
      <Modal 
        active={active} 
        toggle={toggle} 
        titulo={'Hola mundo'}
      >
        <img  loading='lazy' className='img-modal'  src={Imagen} alt=''/>
      </Modal>
    </div>
  )
}

export default Quote;