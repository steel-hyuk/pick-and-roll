import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { NavLink as NavLinkLogo } from 'react-router-dom'
import { NavLink as NavLinkElement } from 'react-router-dom'

import LoginModal from './modal/loginModal'
import SearchBoxModal from './modal/searchBoxModal'
import api from '../api'
import { AuthContext } from '../context/authContext'
import { UserContext } from '../context/userContext'

const NavbarComponent = ({ handleLogin }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [openLogin, setOpenLogin] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)

  const logout = async () => {
    await api.post('/users/logout').then((res) => {
      setIsLoggedIn(false)
      setUserInfo({})
      setOpenLogin(false)
    })
  }

  return (
    <Nav>
      {!isLoggedIn ? (
        <BeforeLoginView>
          <Logo className="logo" to="/">
            Pick & Roll
          </Logo>
          <MenuLinks>
            <NavElement to="/Recipe">레시피</NavElement>
            <ChangeClick onClick={() => setShowSearchBox(true)}>
              검색
            </ChangeClick>
            <SearchBoxModal
              showSearchBox={showSearchBox}
              setShowSearchBox={setShowSearchBox}
            />
            <ChangeClick to="/" onClick={() => setOpenLogin(true)}>
              로그인
            </ChangeClick>
            {openLogin ? (
              <LoginModal
                handleLogin={handleLogin}
                openLogin={openLogin}
                setOpenLogin={setOpenLogin}
              />
            ) : null}
          </MenuLinks>
        </BeforeLoginView>
      ) : (
        <AfterLoginView>
          <Logo to="/">Pick & Roll</Logo>
          <MenuLinks>
            <NavElement to="/recipe">레시피</NavElement>
            <ChangeClick onClick={() => setShowSearchBox(true)}>
              검색
            </ChangeClick>
            <SearchBoxModal
              showSearchBox={showSearchBox}
              setShowSearchBox={setShowSearchBox}
            />
            <NavElement to="/write">새 글 작성</NavElement>
            <NavElement to={`/mypage/${userInfo.email}`}>
              {userInfo.nickname}님
            </NavElement>
            <NavElement to="/" onClick={logout}>로그아웃</NavElement>
          </MenuLinks>
        </AfterLoginView>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: white;
  margin: 0px;
  box-shadow: 0px 1px 10px 1px rgb(243, 200, 18);
`

const MenuLinks = styled.div`
  display: flex;
  @media (max-width: 750px) {
    display: none;
  }
`

const BeforeLoginView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  @media (max-width: 750px) {
    height: 43px;
  }
`

const AfterLoginView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  @media (max-width: 750px) {
    height: 43px;
  }
`

const Logo = styled(NavLinkLogo)`
  text-decoration: none;
  font-size: 40px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: rgb(243, 200, 18);
  margin-left: 16px;
  @media (max-width: 1200px) {
    margin-left: 2px;
    font-size: 30px;
  }
`

const ChangeClick = styled.div`
  text-align: end;
  margin: 10px 15px;
  font-size: 15px;
  padding: 10px 15px;
  font-family: 'Noto Sans KR', sans-serif;
  text-decoration: none;
  color: rgb(243, 200, 18);
  :hover {
    cursor: pointer;
    background-color: rgb(243, 200, 18);
    color: white;
    border-radius: 10%;
    font-weight: bold;
  }
`

const NavElement = styled(NavLinkElement)`
  text-align: end;
  margin: 10px 15px;
  font-size: 15px;
  padding: 10px 15px;
  font-family: 'Noto Sans KR', sans-serif;
  text-decoration: none;
  color: rgb(243, 200, 18);
  :hover {
    cursor: pointer;
    background-color: rgb(243, 200, 18);
    color: white;
    border-radius: 10%;
    font-weight: bold;
  }
`

const TestBtn = styled.button`
  border: solid, 1px, gray;
  text-decoration: none;
  background-color: rgb(235, 235, 235);
  height: 25px;
  margin-top: 8px;
  color: rgb(243, 200, 18);
  border: 1px solid transparent;
  padding: 5px 12px;
  .testbtn:hover {
    cursor: pointer;
  }
`

export default NavbarComponent
