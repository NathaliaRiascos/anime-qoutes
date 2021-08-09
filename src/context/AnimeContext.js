import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Context = React.createContext({})

export function AnimeContext({children}) {

  const [qoutes, saveQuotes] = useState([])

  return <Context.Provider value={{qoutes, saveQuotes}}>
    {children}
  </Context.Provider>
}

AnimeContext.propTypes = {
  children: PropTypes.element
}
export default Context
