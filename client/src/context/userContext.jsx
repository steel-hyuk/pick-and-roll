import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState({})

  return (
    <div>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        {props.children}
      </UserContext.Provider>
    </div>
  )
}