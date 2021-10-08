import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'

import { AuthContext } from '../context/authContext'
import { UserContext } from '../context/userContext'

const NavbarComponent = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const { userInfo, setUserInfo } = useContext(UserContext)

  return (
    <nav>
      {!isLoggedIn ? (
        <div>
          <NavLink className="logo" to="/">
            Pick & Roll
          </NavLink>
          <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>test</button>
            <NavLink to="/Recipe">레시피</NavLink>
            <div>검색</div>
            <div to="/">로그인</div>
          </div>
        </div>
      ) : (
        <div>
          <NavLink to="/">Pick & Roll</NavLink>
          <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>test</button>{' '}
            <br />
            <NavLink to="/recipe">레시피</NavLink> <br />
            <div>검색</div> <br />
            <NavLink to="/write">새 글 작성</NavLink> <br />
            <NavLink to="/mypage">사용자</NavLink>
            <br />
            <NavLink to="/">로그아웃</NavLink>
          </div>
          <div></div>
        </div>
      )}
    </nav>
  )
}

export default NavbarComponent
