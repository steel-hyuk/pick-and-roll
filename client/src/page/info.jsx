import React, { useEffect } from 'react'
import axios from 'axios'

const Info = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)
  return <h1>Info</h1>
}
export default Info
