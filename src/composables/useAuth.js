// src/composables/useAuth.js
import { ref, readonly } from 'vue'

// Khởi tạo state toàn cục đơn giản ngoài component
const user = ref(JSON.parse(localStorage.getItem('user')) || null)
const isAuthenticated = ref(!!user.value)

export function useAuth() {
  const login = async (email, password) => {
    // Giả lập gọi API
    // const res = await authService.login(email, password)
    
    const mockUser = { id: 1, name: 'Người Dùng Học Tập', email }
    localStorage.setItem('user', JSON.stringify(mockUser))
    localStorage.setItem('access_token', 'mock_token_123')
    
    user.value = mockUser
    isAuthenticated.value = true
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('access_token')
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    login,
    logout
  }
}