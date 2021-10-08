import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AuthContext } from './context/authContext'
import { UserContext } from './context/userContext'
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
  
  return (
    <div>
      <Router>
        <NavbarComponent></NavbarComponent>
        <Switch>
          <Route exact path="/" component={Info} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/mypage/:id"
            render={() => <Mypage userInfo={userInfo} />}
          />
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
