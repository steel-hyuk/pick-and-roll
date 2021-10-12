import React from 'react'
import axios from 'axios'

const Redirect = (props) => {
  let code = new URL(window.location.href).searchParams.get('code')
  axios.get(`http://localhost:80/users/signup/oauth/kakao?code=${code}`)
    .then((res) => {
      console.log('카카오톡 로그인 확인 중')
    })
    .catch(err => {
      console.log(err.message)
    })
  return <h1>Redirect KAKAO</h1>
}

export default Redirect
