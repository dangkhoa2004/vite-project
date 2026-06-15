<template>
  <div class="login-container">
    <div class="login-card">
      <div class="text-center mb-6">
        <h2 class="title">Chào mừng trở lại!</h2>
        <p class="subtitle">Đăng nhập để tiếp tục học tập</p>
      </div>

      <form @submit.prevent="handleLogin" class="form">
        <div class="input-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="Ví dụ: caodangkhoa.dev@gmail.com" 
            required 
          />
        </div>

        <div class="input-group">
          <label for="password">Mật khẩu</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Nhập mật khẩu..." 
            required 
          />
        </div>

        <div v-if="errorMessage" class="error-msg">
          {{ errorMessage }}
        </div>

        <BaseButton 
          type="submit" 
          variant="primary" 
          class="w-full mt-4" 
          :isLoading="isLoading"
        >
          Đăng nhập
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import BaseButton from '@/components/BaseButton.vue' // Đừng quên import component dùng chung

const router = useRouter()
const route = useRoute()
const { login } = useAuth()

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    // Gọi hàm login từ useAuth composable
    await login(email.value, password.value)
    
    // Đăng nhập thành công, chuyển hướng
    // Nếu có redirect trong query (do guard đẩy về), thì quay lại đó. Nếu không thì về Home.
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  } catch (error) {
    errorMessage.value = 'Sai email hoặc mật khẩu. Vui lòng thử lại!'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 20px;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.text-center { text-align: center; }
.mb-6 { margin-bottom: 24px; }
.title { font-size: 24px; color: #111827; margin-bottom: 8px; }
.subtitle { color: #6b7280; font-size: 14px; }

.form { display: flex; flex-direction: column; gap: 16px; }

.input-group { display: flex; flex-direction: column; gap: 6px; }
.input-group label { font-size: 14px; font-weight: 500; color: #374151; }
.input-group input {
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}
.input-group input:focus { border-color: #3b82f6; box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2); }

.error-msg {
  color: #ef4444;
  font-size: 13px;
  text-align: center;
}

.w-full { width: 100%; }
.mt-4 { margin-top: 16px; }
</style>