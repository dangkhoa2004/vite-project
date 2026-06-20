<template>
  <div
    class="min-h-screen flex items-center justify-center bg-[var(--bg-app)] relative overflow-hidden font-sans p-4 transition-colors duration-300">
    <div
      class="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0">
    </div>
    <div
      class="absolute bottom-[-10%] left-[10%] w-[35vw] h-[35vw] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none z-0">
    </div>

    <div
      class="relative z-10 w-full max-w-[420px] bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[24px] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500">
      <div class="text-center mb-8">
        <div
          class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
          <i class="fa-solid fa-graduation-cap text-[var(--text-primary)] text-xl"></i>
        </div>
        <h2 class="text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-wide">Chào mừng trở lại!</h2>
        <p class="text-sm text-[var(--text-secondary)]">Đăng nhập để tiếp tục lộ trình học tập</p>
      </div>

      <div class="flex flex-col gap-3 mb-6">
        <button type="button"
          class="group flex items-center justify-center gap-3 w-full py-2.5 bg-[var(--bg-app)] hover:bg-[var(--border-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-primary)] text-sm font-medium transition-all duration-200">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
          Tiếp tục với Google
        </button>
        <button type="button"
          class="group flex items-center justify-center gap-3 w-full py-2.5 bg-[var(--bg-app)] hover:bg-[var(--border-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-primary)] text-sm font-medium transition-all duration-200">
          <i class="fa-brands fa-github text-lg"></i>
          Tiếp tục với Github
        </button>
      </div>

      <div class="flex items-center gap-4 mb-6">
        <div class="h-px bg-[var(--border-color)] flex-1"></div>
        <span class="text-[11px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">Hoặc bằng Email</span>
        <div class="h-px bg-[var(--border-color)] flex-1"></div>
      </div>

      <div v-if="errorMessage"
        class="mb-5 p-3 bg-red-500/10 border border-red-500/50 rounded-xl flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-500 mt-0.5"></i>
        <p class="text-[13px] text-red-500 font-medium">{{ errorMessage }}</p>
      </div>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-[13px] font-medium text-[var(--text-secondary)] ml-1">Email</label>
          <div class="relative group">
            <input type="email" id="email" v-model="email" placeholder="caodangkhoa.dev@gmail.com"
              class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl py-3.5 pl-4 pr-4 text-[var(--text-primary)] text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-[var(--text-secondary)]"
              required />
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <div class="flex justify-between items-center ml-1">
            <label for="password" class="text-[13px] font-medium text-[var(--text-secondary)]">Mật khẩu</label>
            <a href="/quen-mat-khau" class="text-[12px] text-blue-400 hover:text-blue-300">Quên mật khẩu?</a>
          </div>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" placeholder="••••••••"
              class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl py-3.5 pl-4 pr-11 text-[var(--text-primary)] text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-[var(--text-secondary)]"
              required />
            <button type="button" @click="togglePassword"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
            </button>
          </div>
        </div>

        <button type="submit" :disabled="authStore.isLoading"
          class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[14px] font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
          <i v-if="authStore.isLoading" class="fa-solid fa-spinner fa-spin"></i>
          {{ authStore.isLoading ? 'Đang xử lý...' : 'Đăng nhập' }}
        </button>
      </form>

      <p class="text-center text-[13px] text-[var(--text-secondary)] mt-8">
        Chưa có tài khoản? <router-link to="/dang-ky" class="text-blue-400 font-bold hover:underline">Đăng ký
          ngay</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.js'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore() // Khởi tạo store

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = async () => {
  errorMessage.value = ''
  const success = await authStore.login({
    email: email.value,
    password: password.value
  })

  if (success) {
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  } else {
    errorMessage.value = authStore.error || 'Đăng nhập thất bại. Vui lòng thử lại!'
  }
}
</script>