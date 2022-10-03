import { useRef } from 'react'
import { Quote } from 'components'

function Quotes() {
  const slider = useRef(null)

  const scrollTo = num => {
    if (slider.current)
      slider.current.scrollLeft += num
  }
  return (
    <div className='Container__quote'>
      <button
        className='Btn__flecha'
        onClick={() => scrollTo(-460)}
      ><i className='fas fa-chevron-left'></i></button>
      <div ref={slider} className='Cards'>
        <Quote />
        <Quote />
        <Quote />
      </div>  
      <button
        className='Btn__flecha'
        onClick={() => scrollTo(460)}
      ><i className='fas fa-chevron-right'></i></button>
    </div>
  )
   
}

export default Quotes
