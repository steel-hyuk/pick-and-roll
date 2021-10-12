import React from 'react'
import axios from 'axios'

const Redirect = (props) => {
  let code = new URL(window.location.href).searchParams.get('code')
  console.log('여기서 확인이 되는가??', code)
  axios.get(`http://localhost:80/users/signup/oauth/kakao?code=${code}`)
    .then((res) => {
      console.log('gagaga')
    })
    .catch(err => {
      console.log(err.message)
    })
  return <h1>Redirect KAKAO</h1>
}

export default Redirect
