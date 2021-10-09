import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.REACT_APP_URL || 'http://localhost:80'
export default axios.create({
  baseURL: url
})