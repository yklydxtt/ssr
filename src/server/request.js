import axios from 'axios';
export default (req) => {
  return axios.create({
    baseURL: 'http://47.95.113.63/ssr/',
    headers:{
      cookie:req.get('cookie')||''
    }
  })
}