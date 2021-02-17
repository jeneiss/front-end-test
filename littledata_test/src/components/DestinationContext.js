import React, { useState } from 'react'
const DestinationContext = React.createContext()

function DestinationContextProvider({ children }) {
  const [toDestination, setToDestination] = useState(false)

  return (
    <DestinationContext.Provider value={{toDestination:toDestination, setToDestination: setToDestination}}>
      {children}
    </DestinationContext.Provider>
  )
}

export { DestinationContextProvider, DestinationContext }
