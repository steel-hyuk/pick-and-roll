import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { AuthContextProvider } from './context/authContext'
import { UserContextProvider } from './context/userContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
