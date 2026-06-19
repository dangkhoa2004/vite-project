import axios from 'axios';
import router from '@/router'
// Định nghĩa Base URL tập trung tại đây như bạn yêu cầu
const API_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_URL, // Tất cả các request sẽ tự động nối vào đường dẫn này
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// Interceptor: Tự động gắn token vào header trước khi gửi
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor: Xử lý response & lỗi toàn cục
apiClient.interceptors.response.use(
  // Tự động bóc lớp `data` của thư viện Axios. 
  // Lúc này response sẽ chính là cục JSON {request_from, data, message, status} mà backend Go trả ra
  response => response.data, 
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token');
      router.push('/dang-nhap');
    }
    return Promise.reject(error);
  }
);

export default apiClient;