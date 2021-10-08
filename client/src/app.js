import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContext } from './context/authContext'
import { UserContext } from './context/userContext'
import GlogbalStyle from './globalStyle/globalStyle'
import Info from './page/info'
import Mypage from './page/mypage'
import Posts from './page/posts'
import Recipe from './page/recipe'
import Search from './page/search'
import Signup from './page/signup'
import Write from './page/write'
import NavbarComponent from './component/navbarComponent'

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const { userInfo, setUserInfo } = useContext(UserContext)

  const isAuthenticated = (info) => {
    setIsLoggedIn(true)
    let { id, email, name, description, createdAt } = info.data
    let user = { id, email, name, description, createdAt }
    setUserInfo(user)
  }

  const handleLogin = (info) => {
    isAuthenticated(info)
  }

  return (
    <div>
      <GlogbalStyle />
      <Router>
        <NavbarComponent handleLogin={handleLogin} />
        <Switch>
          <Route exact path="/" component={Info} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mypage/:id" render={() => <Mypage userInfo={userInfo} />} />
          <Route exact path="/write" component={Write} />
          <Route exact path="/recipe" component={Recipe} />
          <Route exact path="/search/:id" component={Search} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
