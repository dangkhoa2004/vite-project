<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0f1115] relative overflow-hidden font-sans p-4 py-12">
    
    <div class="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
    <div class="absolute bottom-[-10%] left-[10%] w-[35vw] h-[35vw] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

    <div class="relative z-10 w-full max-w-[420px] bg-[#1c1e24]/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500">
      
      <div v-if="!isSuccess">
        <div class="text-center mb-8">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
            <i class="fa-solid fa-key text-white text-xl"></i>
          </div>
          <h2 class="text-2xl font-bold text-white mb-2 tracking-wide">Quên mật khẩu?</h2>
          <p class="text-[13px] text-gray-400 leading-relaxed px-2">
            Đừng lo lắng! Hãy nhập email bạn đã đăng ký, chúng tôi sẽ gửi liên kết để đặt lại mật khẩu.
          </p>
        </div>

        <form @submit.prevent="handleForgotPassword" class="flex flex-col gap-5">
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-[13px] font-medium text-gray-300 ml-1">Địa chỉ Email</label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i class="fa-regular fa-envelope text-gray-500 group-focus-within:text-blue-400 transition-colors"></i>
              </div>
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                placeholder="caodangkhoa.dev@gmail.com" 
                class="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600"
                required 
              />
            </div>
          </div>

          <div v-if="errorMessage" class="text-red-400 text-[12px] text-center bg-red-500/10 py-2.5 rounded-lg border border-red-500/20 flex items-center justify-center gap-2">
            <i class="fa-solid fa-circle-exclamation"></i> {{ errorMessage }}
          </div>

          <button 
            type="submit" 
            :disabled="isLoading || !email"
            class="w-full py-3.5 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[14px] font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <i v-if="isLoading" class="fa-solid fa-circle-notch fa-spin"></i>
            <span v-else><i class="fa-solid fa-paper-plane mr-1.5 text-[12px]"></i></span>
            {{ isLoading ? 'Đang gửi yêu cầu...' : 'Gửi liên kết khôi phục' }}
          </button>
        </form>

        <button @click="goToLogin" class="w-full mt-6 text-center text-[13px] text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2">
          <i class="fa-solid fa-arrow-left text-[11px]"></i> Quay lại trang đăng nhập
        </button>
      </div>

      <div v-else class="text-center py-4 animate-fade-in">
        <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
          <i class="fa-regular fa-envelope-open text-white text-3xl mb-0.5"></i>
        </div>
        
        <h2 class="text-2xl font-bold text-white mb-3">Kiểm tra Email của bạn</h2>
        <p class="text-[14px] text-gray-400 leading-relaxed mb-8 px-2">
          Chúng tôi đã gửi một liên kết đặt lại mật khẩu tới <br>
          <span class="text-blue-400 font-medium">{{ email }}</span>. <br>
          Vui lòng kiểm tra cả thư mục Spam nếu không thấy.
        </p>

        <button 
          @click="goToLogin" 
          class="w-full py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[14px] font-bold rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <i class="fa-solid fa-arrow-left text-[11px]"></i> Trở về trang đăng nhập
        </button>

        <p class="text-center text-[13px] text-gray-500 mt-6 mb-0">
          Chưa nhận được email? 
          <button @click="handleResend" class="text-blue-400 hover:text-blue-300 font-medium transition-colors ml-1 focus:outline-none">
            Gửi lại
          </button>
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const handleForgotPassword = async () => {
  if (!email.value) return

  isLoading.value = true
  errorMessage.value = ''

  try {
    // Giả lập gọi API gửi email khôi phục mất 1.5s
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Nếu thành công, chuyển đổi giao diện sang trạng thái thành công
    isSuccess.value = true
  } catch (error) {
    errorMessage.value = 'Không tìm thấy tài khoản với email này.'
  } finally {
    isLoading.value = false
  }
}

const handleResend = async () => {
  // Logic gửi lại email (reset trạng thái loading ở đây nếu cần)
  isLoading.value = true
  await new Promise((resolve) => setTimeout(resolve, 1000))
  isLoading.value = false
  alert('Đã gửi lại email khôi phục!')
}

const goToLogin = () => {
  router.push('/dang-nhap')
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>