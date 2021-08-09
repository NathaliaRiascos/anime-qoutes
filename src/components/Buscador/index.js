import React from  'react'
import { useForm } from 'hooks/useForm'

export default function Buscador() {
  const {
    values,
    handleChange,
    handleSubmit
  } = useForm({anime: ''})

  const { anime } = values
  
  return (
    <form
      className='container-form'
      onSubmit={ handleSubmit }
    >
      <input 
        tpye='text'
        placeholder='Search quotes of your favorite anime'
        value={ anime }
        name='anime'
        onChange={ handleChange }
        className='input-buscar'
      />
      <button
        type='submit'
        className='btn-buscar'
      ><i className='fas fa-search'></i></button>
    </form>
  )
  
}
