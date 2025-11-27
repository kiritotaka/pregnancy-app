import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // Thay đổi URL này thành URL API của bạn
})

export default api
