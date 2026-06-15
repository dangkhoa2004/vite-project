import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.domain.com/v1',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// Interceptor: Tự động gắn token vào header trước khi gửi
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptor: Xử lý lỗi toàn cục (ví dụ: Token hết hạn)
apiClient.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient