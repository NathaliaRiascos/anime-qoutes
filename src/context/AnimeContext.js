import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AnimeContext = React.createContext({})

export function AnimeProvider({children}) {
  const [quotes, saveQuotes] = useState([])

  return <AnimeContext.Provider value={{quotes, saveQuotes}}>
    {children}
  </AnimeContext.Provider>
}

AnimeProvider.propTypes = {
  children: PropTypes.element
}
export default AnimeContext
