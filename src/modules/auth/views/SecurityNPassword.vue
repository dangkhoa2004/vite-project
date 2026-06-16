<!-- /src/modules/auth/views/SecurityNPassword.vue -->
<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[#0f1115] text-gray-200 font-sans relative overflow-hidden pb-20 pt-28">

        <!-- Hiệu ứng ánh sáng nền -->
        <div
            class="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">

            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-white tracking-tight mb-2">Bảo mật & Mật khẩu</h1>
                <p class="text-sm text-gray-400">Bảo vệ tài khoản của em bằng mật khẩu mạnh và các lớp bảo mật bổ sung.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">

                <!-- SIDEBAR ĐIỀU HƯỚNG -->
                <aside
                    class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 overflow-hidden sticky top-28 shadow-xl">
                    <div class="p-6 border-b border-white/5 flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            K
                        </div>
                        <div>
                            <h3 class="text-[15px] font-bold text-white truncate w-32">Cao Đăng Khoa</h3>
                            <p class="text-[12px] text-gray-500">Học viên</p>
                        </div>
                    </div>

                    <SettingNavInformation />
                </aside>

                <!-- NỘI DUNG CHÍNH -->
                <div class="flex flex-col gap-6">

                    <!-- Block 1: Đổi mật khẩu -->
                    <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-8 shadow-xl">
                        <div class="flex items-center gap-3 mb-6">
                            <div
                                class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-key"></i>
                            </div>
                            <h2 class="text-lg font-bold text-white">Đổi mật khẩu</h2>
                        </div>

                        <form @submit.prevent="handleChangePassword" class="space-y-5 max-w-lg">

                            <div class="flex flex-col gap-1.5">
                                <label class="text-[13px] font-medium text-gray-300 ml-1">Mật khẩu hiện tại</label>
                                <div class="relative group">
                                    <input :type="showOld ? 'text' : 'password'" v-model="passwords.old"
                                        class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 pr-11 text-white text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-gray-600 tracking-wider"
                                        placeholder="••••••••" required />
                                    <button type="button" @click="showOld = !showOld"
                                        class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors">
                                        <i :class="showOld ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label class="text-[13px] font-medium text-gray-300 ml-1">Mật khẩu mới</label>
                                <div class="relative group">
                                    <input :type="showNew ? 'text' : 'password'" v-model="passwords.new"
                                        class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 pr-11 text-white text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-gray-600 tracking-wider"
                                        placeholder="Tối thiểu 8 ký tự" required />
                                    <button type="button" @click="showNew = !showNew"
                                        class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors">
                                        <i :class="showNew ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label class="text-[13px] font-medium text-gray-300 ml-1">Xác nhận mật khẩu mới</label>
                                <div class="relative group">
                                    <input :type="showConfirm ? 'text' : 'password'" v-model="passwords.confirm"
                                        class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 pr-11 text-white text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-gray-600 tracking-wider"
                                        placeholder="Nhập lại mật khẩu mới" required />
                                    <button type="button" @click="showConfirm = !showConfirm"
                                        class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors">
                                        <i :class="showConfirm ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
                                    </button>
                                </div>
                            </div>

                            <button type="submit" :disabled="isSaving"
                                class="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[13px] font-bold rounded-xl transition-all shadow-md disabled:opacity-70 flex items-center gap-2">
                                <i v-if="isSaving" class="fa-solid fa-circle-notch fa-spin"></i>
                                <i v-else class="fa-solid fa-lock"></i>
                                {{ isSaving ? 'Đang cập nhật...' : 'Cập nhật mật khẩu' }}
                            </button>
                        </form>
                    </div>

                    <!-- Block 2: Xác thực 2 bước (2FA) -->
                    <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-8 shadow-xl">
                        <div class="flex items-center justify-between">
                            <div class="flex items-start gap-4">
                                <div
                                    class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg mt-1">
                                    <i class="fa-solid fa-shield-cat"></i>
                                </div>
                                <div>
                                    <h2 class="text-lg font-bold text-white mb-1">Xác thực 2 bước (2FA)</h2>
                                    <p class="text-[13px] text-gray-400 max-w-md">Tăng cường bảo mật bằng cách yêu cầu
                                        mã xác nhận từ ứng dụng Authenticator mỗi khi đăng nhập.</p>
                                </div>
                            </div>
                            <button
                                class="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-[13px] font-bold rounded-xl border border-white/10 transition-all flex items-center gap-2">
                                Bật 2FA
                            </button>
                        </div>
                    </div>

                    <!-- Block 3: Thiết bị đăng nhập -->
                    <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-8 shadow-xl">
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-lg">
                                    <i class="fa-solid fa-laptop-mobile"></i>
                                </div>
                                <h2 class="text-lg font-bold text-white">Thiết bị đang đăng nhập</h2>
                            </div>
                            <button
                                class="text-[12px] text-red-400 hover:text-red-300 font-medium transition-colors">Đăng
                                xuất tất cả thiết bị khác</button>
                        </div>

                        <div class="space-y-4">
                            <!-- Thiết bị 1 (Hiện tại) -->
                            <div class="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                <div
                                    class="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg shrink-0">
                                    <i class="fa-solid fa-desktop"></i>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h4 class="text-[14px] font-bold text-gray-200">Windows PC - Chrome</h4>
                                    <p class="text-[12px] text-gray-500">Hà Nội, Việt Nam • Đang hoạt động (Thiết bị
                                        này)</p>
                                </div>
                                <span
                                    class="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[11px] font-bold rounded-lg border border-emerald-500/20">Active</span>
                            </div>

                            <!-- Thiết bị 2 -->
                            <div class="flex items-center gap-4 p-4 bg-black/20 rounded-2xl border border-white/5">
                                <div
                                    class="w-10 h-10 rounded-full bg-white/5 text-gray-400 flex items-center justify-center text-lg shrink-0">
                                    <i class="fa-solid fa-mobile-screen"></i>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h4 class="text-[14px] font-bold text-gray-200">iPhone 14 Pro - Safari</h4>
                                    <p class="text-[12px] text-gray-500">Hà Nội, Việt Nam • Hoạt động 2 giờ trước</p>
                                </div>
                                <button
                                    class="w-8 h-8 rounded-full bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors flex items-center justify-center">
                                    <i class="fa-solid fa-xmark text-[14px]"></i>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import SettingNavInformation from '../components/SettingNavInformation.vue'
import { hydrateOnMediaQuery, ref } from 'vue'

const isSaving = ref(false)
const showOld = ref(false)
const showNew = ref(false)
const showConfirm = ref(false)

const passwords = ref({
    old: '',
    new: '',
    confirm: ''
})

const handleChangePassword = async () => {
    if (passwords.value.new !== passwords.value.confirm) {
        alert('Mật khẩu xác nhận không khớp!')
        return
    }

    isSaving.value = true
    try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        alert('Đổi mật khẩu thành công!')
        passwords.value = { old: '', new: '', confirm: '' }
    } catch (error) {
        console.error(error)
    } finally {
        isSaving.value = false
    }
}
</script>