<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0f1115] relative overflow-hidden font-sans p-4 py-12">
    
    <div class="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

    <div class="relative z-10 w-full max-w-[460px] bg-[#1c1e24]/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      
      <div class="text-center mb-8">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
          <i class="fa-solid fa-user-plus text-white text-xl"></i>
        </div>
        <h2 class="text-2xl font-bold text-white mb-2 tracking-wide">Tạo tài khoản mới</h2>
        <p class="text-sm text-gray-400">Bắt đầu hành trình chinh phục công nghệ ngay hôm nay</p>
      </div>

      <div class="flex flex-col gap-3 mb-6">
        <button type="button" class="group flex items-center justify-center gap-3 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl text-white text-sm font-medium transition-all duration-200">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5 group-hover:scale-110 transition-transform" />
          Đăng ký bằng Google
        </button>
        <button type="button" class="group flex items-center justify-center gap-3 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl text-white text-sm font-medium transition-all duration-200">
          <i class="fa-brands fa-github text-[20px] group-hover:scale-110 transition-transform"></i>
          Đăng ký bằng GitHub
        </button>
      </div>

      <div class="flex items-center gap-4 mb-6">
        <div class="h-px bg-white/10 flex-1"></div>
        <span class="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Hoặc đăng ký bằng Email</span>
        <div class="h-px bg-white/10 flex-1"></div>
      </div>

      <form @submit.prevent="handleRegister" class="flex flex-col gap-4">
        
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-[13px] font-medium text-gray-300 ml-1">Họ và tên</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i class="fa-regular fa-user text-gray-500 group-focus-within:text-blue-400 transition-colors"></i>
            </div>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              placeholder="Nhập họ và tên của bạn..." 
              class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600"
              required 
            />
          </div>
        </div>

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
              placeholder="vi-du@gmail.com" 
              class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600"
              required 
            />
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="password" class="text-[13px] font-medium text-gray-300 ml-1">Mật khẩu</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i class="fa-solid fa-lock text-gray-500 group-focus-within:text-blue-400 transition-colors"></i>
            </div>
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="password" 
              placeholder="Tối thiểu 6 ký tự" 
              class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600 tracking-wider"
              required 
            />
            <button 
              type="button" 
              @click="showPassword = !showPassword" 
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
            >
              <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="confirmPassword" class="text-[13px] font-medium text-gray-300 ml-1">Xác nhận mật khẩu</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i class="fa-solid fa-lock-open text-gray-500 group-focus-within:text-blue-400 transition-colors"></i>
            </div>
            <input 
              :type="showConfirmPassword ? 'text' : 'password'" 
              id="confirmPassword" 
              v-model="confirmPassword" 
              placeholder="Nhập lại mật khẩu..." 
              class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600 tracking-wider"
              required 
            />
            <button 
              type="button" 
              @click="showConfirmPassword = !showConfirmPassword" 
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
            >
              <i :class="showConfirmPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
            </button>
          </div>
        </div>

        <div class="flex items-start gap-2 mt-2 ml-1">
          <input 
            type="checkbox" 
            id="terms" 
            v-model="acceptTerms" 
            class="mt-1 accent-blue-500 rounded border-white/10 bg-black/20 cursor-pointer"
            required
          />
          <label for="terms" class="text-[12px] text-gray-400 leading-normal cursor-pointer select-none">
            Tôi đồng ý với <a href="#" class="text-blue-400 hover:underline">Điều khoản dịch vụ</a> và <a href="#" class="text-blue-400 hover:underline">Chính sách bảo mật</a> của hệ thống.
          </label>
        </div>

        <div v-if="errorMessage" class="text-red-400 text-[12px] text-center bg-red-500/10 py-2.5 rounded-lg border border-red-500/20 flex items-center justify-center gap-2">
          <i class="fa-solid fa-circle-exclamation"></i> {{ errorMessage }}
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full py-3.5 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[14px] font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <i v-if="isLoading" class="fa-solid fa-circle-notch fa-spin"></i>
          <span v-else><i class="fa-solid fa-user-check mr-1.5"></i></span>
          {{ isLoading ? 'Đang khởi tạo...' : 'Đăng ký tài khoản' }}
        </button>
      </form>

      <p class="text-center text-[13px] text-gray-400 mt-8 mb-0">
        Đã có tài khoản? 
        <button @click="goToLogin" class="text-blue-400 hover:text-blue-300 font-bold transition-colors ml-1 focus:outline-none">
          Đăng nhập ngay
        </button>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Các trạng thái của Form
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

// Trạng thái hiển thị mật khẩu
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleRegister = async () => {
  // Kiểm tra tính hợp lệ cơ bản tại client
  if (password.value.length < 6) {
    errorMessage.value = 'Mật khẩu phải chứa ít nhất 6 ký tự!'
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Mật khẩu xác nhận không trùng khớp!'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    // Giả lập kết nối API Đăng ký trong 1.5 giây
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Giả lập xử lý logic thành công
        resolve(true)
      }, 1500)
    })

    // Sau khi đăng ký thành công, chuyển tuyến về trang đăng nhập
    router.push('/dang-nhap')
  } catch (error) {
    errorMessage.value = 'Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại!'
  } finally {
    isLoading.value = false
  }
}

const goToLogin = () => {
  router.push('/dang-nhap')
}
</script>

<style scoped>
/* Không sử dụng CSS thuần, mọi thứ được quản lý bởi cấu trúc tiện ích của Tailwind CSS */
</style>