import React, { createContext, useState } from 'react'

export const AccessTokenContext = createContext()

export const AccessTokenContextProvider = (props) => {
  const [accessToken, setAccessToken] = useState('')

  return (
    <div>
      <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
        {props.children}
      </AccessTokenContext.Provider>
    </div>
  )
}