import Quote from '../Quote'

export default function Quotes() {

  
  return (
    <div className='container-quote'>
      <button
        className='btn-flecha'
      ><i className='fas fa-chevron-left'></i></button>
      <Quote />
      <button
        className='btn-flecha'
      ><i className='fas fa-chevron-right'></i></button>
    </div>
  )
   
}
