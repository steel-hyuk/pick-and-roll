import React, { useState, useContext } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { FaRegTimesCircle } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/authContext'

const LoginModal = ({ handleLogin, openLogin, setOpenLogin }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const kakaoClick = async () => {
    const scope = 'profile_nickname'
    window.Kakao.Auth.login({
      success: function (response) {
        window.Kakao.Auth.setAccessToken(response.access_token)
        console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`)
        const ACCESS_TOKEN = window.Kakao.Auth.getAccessToken()
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function ({ kakao_account }) {
            console.log(ACCESS_TOKEN)
            console.log(kakao_account)
            const { email, profile } = kakao_account
            console.log(email)
            console.log(profile.nickname)
            axios
              .get('https://localhost:4000/users/kakao', {
                email,
                name: profile.nickname,
              })
              .then((res) => {
                console.log(res)
              })
              .catch((error) => {
                console.error(error)
                alert('카카오 로그인 에러?')
              })
          },
        })
      },
    })
  }

  // (axios) 로그인 요청
  const logIn = async (event) => {
    if (email === '' || password === '') {
      Swal.fire({
        text: '이메일과 비밀번호를 모두 입력해주세요!',
        icon: 'warning',
        confirmButtonColor: '#d2d2d2',
        confirmButtonText: '확인',
      })
    } else {
      setIsLoggedIn(!isLoggedIn)
      event.preventDefault()
    }
  }

  return openLogin ? (
    <Modal>
      <Left onClick={() => setOpenLogin(false)}></Left>
      <Form>
        <LoginWrapper>
          <Login>Login</Login>
          <LoginC>
            <InputC>
              <Input
                type="text"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </InputC>
            <InputC>
              <Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    logIn(event)
                  }
                }}
              />
            </InputC>
            <LoginBtn onClick={logIn}>Login</LoginBtn>
            <SignUpBtn onClick={() => setOpenLogin(false)}>
              <p>회원가입을 원하시나요?</p>
              <div
                className="makeaccount"
                onClick={() => {
                  history.push('/signup')
                }}
              >
                Sign Up
              </div>
            </SignUpBtn>
            <SocialLoginBtn onClick={kakaoClick}>kakao</SocialLoginBtn>
            <CancelBtn onClick={() => setOpenLogin(false)}>
              <FaRegTimesCircle />
            </CancelBtn>
          </LoginC>
        </LoginWrapper>
      </Form>
      <Right onClick={() => setOpenLogin(false)}></Right>
    </Modal>
  ) : null
}

const Modal = styled.div`
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(72, 72, 66, 0.5);
  display: flex;
`

const Left = styled.div`
  width: 35%;
`

const Right = styled.div`
  width: 35%;
`

const Form = styled.div`
  width: auto;
  padding-top: 200px;
  margin-bottom: 180px;
  display: flex;
  flex-direction: column;
`

const LoginWrapper = styled.div`
  width: 450px;
  height: 500px;
  background: white;
  border-radius: 30px;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
`

const LoginC = styled.div`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 25px 0px;
`

const Login = styled.div`
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
  margin-top: 30px;
`

const InputC = styled.div`
  margin-top: 15px;
  text-align: center;
`

const Input = styled.input`
  width: 200px;
  height: 15px;
  align-items: center;
  padding: 15px 50px 10px 10px;
  border-radius: 8px;
  border: 2px solid #d2d2d2;
  :focus {
    border: 2px solid rgb(243, 200, 18);
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
`

const LoginBtn = styled.div`
  width: 250px;
  text-align: center;
  padding: 15px 0px;
  background-color: #d2d2d2;
  margin-top: 30px;
  width: 265px;
  height: 15px;
  border-radius: 15px;
  color: white;
  :hover {
    font-weight: bold;
    background-color: rgb(243, 200, 18);
  }
`

const SocialLoginBtn = styled.div`
  width: 250px;
  text-align: center;
  padding: 15px 0px;
  background-color: #17a717;
  margin-top: 30px;
  width: 265px;
  height: 15px;
  border-radius: 15px;
  color: white;
  :hover {
    font-weight: bold;
  }
`

const SignUpBtn = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3f3f3f;
  font-size: 13px;
  .makeaccount {
    margin: 0 10px;
    font-size: 15px;
    line-height: 2;
    text-align: left;
    color: rgb(237, 199, 32);
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }
`

const CancelBtn = styled.div`
  margin-top: 25px;
  color: #b8b8b8;
  font-size: 20px;
  :hover {
    color: rgb(237, 199, 32);
  }
`

export default LoginModal
