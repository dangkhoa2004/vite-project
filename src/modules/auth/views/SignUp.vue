<template>
  <div
    class="min-h-screen flex items-center justify-center bg-[var(--bg-app)] relative overflow-hidden font-sans p-4 py-12 transition-colors duration-300">

    <div
      class="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0">
    </div>
    <div
      class="absolute bottom-[-10%] left-[10%] w-[35vw] h-[35vw] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none z-0">
    </div>

    <div
      class="relative z-10 w-full max-w-[460px] bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[24px] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500">

      <div class="text-center mb-8">
        <div
          class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
          <i class="fa-solid fa-user-plus text-[var(--text-primary)] text-xl"></i>
        </div>
        <h2 class="text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-wide">Tạo tài khoản mới</h2>
        <p class="text-sm text-[var(--text-secondary)]">Bắt đầu hành trình chinh phục công nghệ ngay hôm nay</p>
      </div>

      <div class="flex flex-col gap-3 mb-6">
        <button type="button"
          class="group flex items-center justify-center gap-3 w-full py-2.5 bg-[var(--bg-app)] hover:bg-[var(--border-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-primary)] text-sm font-medium transition-all duration-200">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
          Đăng ký bằng Google
        </button>
        <button type="button"
          class="group flex items-center justify-center gap-3 w-full py-2.5 bg-[var(--bg-app)] hover:bg-[var(--border-color)] border border-[var(--border-color)] rounded-xl text-[var(--text-primary)] text-sm font-medium transition-all duration-200">
          <i class="fa-brands fa-github text-lg"></i>
          Đăng ký bằng Github
        </button>
      </div>

      <div class="flex items-center gap-4 mb-6">
        <div class="h-px bg-[var(--border-color)] flex-1"></div>
        <span class="text-[11px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">Hoặc đăng ký bằng
          Email</span>
        <div class="h-px bg-[var(--border-color)] flex-1"></div>
      </div>

      <form @submit.prevent="handleRegister" class="flex flex-col gap-4">

        <div v-for="field in ['name', 'email']" :key="field" class="flex flex-col gap-1.5">
          <label :for="field" class="text-[13px] font-medium text-[var(--text-secondary)] ml-1 capitalize">{{ field ===
            'name' ? 'Họ và tên' : 'Email' }}</label>
          <input :type="field === 'email' ? 'email' : 'text'" :id="field" v-model="formData[field]"
            :placeholder="field === 'name' ? 'Nhập họ và tên...' : 'vi-du@gmail.com'"
            class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl py-3.5 px-4 text-[var(--text-primary)] text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-[var(--text-secondary)]"
            required />
        </div>

        <div v-for="field in ['password', 'confirmPassword']" :key="field" class="flex flex-col gap-1.5">
          <label :for="field" class="text-[13px] font-medium text-[var(--text-secondary)] ml-1 capitalize">{{ field ===
            'password' ? 'Mật khẩu' : 'Xác nhận mật khẩu' }}</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" :id="field" v-model="formData[field]"
              placeholder="Tối thiểu 6 ký tự"
              class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl py-3.5 px-4 text-[var(--text-primary)] text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-[var(--text-secondary)]"
              required />
          </div>
        </div>

        <button type="submit" :disabled="isLoading"
          class="w-full py-3.5 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-[var(--text-primary)] text-[14px] font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
          {{ isLoading ? 'Đang khởi tạo...' : 'Đăng ký tài khoản' }}
        </button>
      </form>

      <p class="text-center text-[13px] text-[var(--text-secondary)] mt-8">
        Đã có tài khoản? <a href="/dang-nhap" class="text-blue-400 font-bold hover:underline">Đăng nhập ngay</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = reactive({ name: '', email: '', password: '', confirmPassword: '' })
const isLoading = ref(false)
const showPassword = ref(false)

const handleRegister = async () => {
  if (formData.password !== formData.confirmPassword) return alert('Mật khẩu không khớp!')
  isLoading.value = true
  await new Promise(r => setTimeout(r, 1500))
  isLoading.value = false
  router.push('/dang-nhap')
}
</script>