import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { AuthContextProvider } from './context/authContext'
import { UserContextProvider } from './context/userContext'
import { SearchValueContextProvider } from './context/searchValueContext'
import {AccessTokenContextProvider} from './context/accessTokenContext'

ReactDOM.render(
  <React.StrictMode>
  <AuthContextProvider>
    <AccessTokenContextProvider>
      <UserContextProvider>
        <SearchValueContextProvider>
            <App />
        </SearchValueContextProvider>
      </UserContextProvider>
    </AccessTokenContextProvider>
  </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
