<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0f1115] relative overflow-hidden font-sans p-4">
    
    <div class="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

    <div class="relative z-10 w-full max-w-[420px] bg-[#1c1e24]/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      
      <div class="text-center mb-8">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
          <i class="fa-solid fa-graduation-cap text-white text-xl"></i>
        </div>
        <h2 class="text-2xl font-bold text-white mb-2 tracking-wide">Chào mừng trở lại!</h2>
        <p class="text-sm text-gray-400">Đăng nhập để tiếp tục lộ trình học tập</p>
      </div>

      <div class="flex flex-col gap-3 mb-6">
        <button type="button" class="group flex items-center justify-center gap-3 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl text-white text-sm font-medium transition-all duration-200">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5 group-hover:scale-110 transition-transform" />
          Tiếp tục với Google
        </button>
        <button type="button" class="group flex items-center justify-center gap-3 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl text-white text-sm font-medium transition-all duration-200">
          <i class="fa-brands fa-github text-[20px] group-hover:scale-110 transition-transform"></i>
          Tiếp tục với GitHub
        </button>
      </div>

      <div class="flex items-center gap-4 mb-6">
        <div class="h-px bg-white/10 flex-1"></div>
        <span class="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Hoặc bằng Email</span>
        <div class="h-px bg-white/10 flex-1"></div>
      </div>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
        
        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-[13px] font-medium text-gray-300 ml-1">Email</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i class="fa-regular fa-envelope text-gray-500 group-focus-within:text-blue-400 transition-colors"></i>
            </div>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              placeholder="caodangkhoa.dev@gmail.com" 
              class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600"
              required 
            />
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <div class="flex justify-between items-center ml-1">
            <label for="password" class="text-[13px] font-medium text-gray-300">Mật khẩu</label>
            <a href="/quen-mat-khau" class="text-[12px] text-blue-400 hover:text-blue-300 transition-colors">Quên mật khẩu?</a>
          </div>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i class="fa-solid fa-lock text-gray-500 group-focus-within:text-blue-400 transition-colors"></i>
            </div>
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="password" 
              placeholder="••••••••" 
              class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600 tracking-wider"
              required 
            />
            <button 
              type="button" 
              @click="togglePassword" 
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
            >
              <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
            </button>
          </div>
        </div>

        <div v-if="errorMessage" class="text-red-400 text-[12px] text-center bg-red-500/10 py-2.5 rounded-lg border border-red-500/20 flex items-center justify-center gap-2">
          <i class="fa-solid fa-circle-exclamation"></i> {{ errorMessage }}
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full py-3.5 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[14px] font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <i v-if="isLoading" class="fa-solid fa-circle-notch fa-spin"></i>
          <span v-else><i class="fa-solid fa-arrow-right-to-bracket mr-1.5"></i></span>
          {{ isLoading ? 'Đang xử lý...' : 'Đăng nhập' }}
        </button>
      </form>

      <p class="text-center text-[13px] text-gray-400 mt-8 mb-0">
        Chưa có tài khoản? 
        <a href="/dang-ky" class="text-blue-400 hover:text-blue-300 font-bold transition-colors ml-1">Đăng ký ngay</a>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const route = useRoute()

// Em giả lập useAuth tránh lỗi nếu anh chưa viết composable này
const { login } = useAuth ? useAuth() : { login: async () => new Promise(r => setTimeout(r, 1500)) }

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const showPassword = ref(false) // State quản lý ẩn/hiện mật khẩu

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    await login(email.value, password.value)
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
/* Không cần custom CSS vì đã sử dụng Tailwind 100% */
</style>