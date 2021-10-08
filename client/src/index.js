import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthContextProvider } from './context/authContext'
import { UserContextProvider } from './context/userContext'
import { SearchValueContextProvider } from './context/searchValueContext'

ReactDOM.render(
  <React.StrictMode>
    <SearchValueContextProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AuthContextProvider>
    </SearchValueContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
