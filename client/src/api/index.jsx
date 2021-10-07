import axios from 'axios'

export default axios.create({
  baseURL: 'http://ec2-3-36-65-123.ap-northeast-2.compute.amazonaws.com'
})