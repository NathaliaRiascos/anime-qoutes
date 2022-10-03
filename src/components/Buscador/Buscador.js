import React from  'react'
import { useForm } from 'hooks/useForm'

function Buscador() {
  const {
    values,
    handleChange,
    handleSubmit
  } = useForm({anime: ''})

  const { anime } = values
  
  return (
    <form
      className='Container__form'
      onSubmit={ handleSubmit }
    >
      <input 
        tpye='text'
        placeholder='Search quotes of your favorite anime'
        value={ anime }
        name='anime'
        onChange={ handleChange }
        className='Input__buscar'
      />
      <button
        type='submit'
        className='Btn__buscar'
      ><i className='fas fa-search'></i></button>
    </form>
  )
  
}

export default Buscador