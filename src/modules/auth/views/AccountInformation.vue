<!-- /src/modules/auth/views/AccountInformation.vue -->
<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[#0f1115] text-gray-200 font-sans relative overflow-hidden pb-20 pt-28">

        <div
            class="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">

            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-white tracking-tight mb-2">Cài đặt tài khoản</h1>
                <p class="text-sm text-gray-400">Quản lý thông tin cá nhân và bảo mật của em tại đây.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">

                <aside
                    class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 overflow-hidden sticky top-28 shadow-xl">
                    <div class="p-6 border-b border-white/5 flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {{ userInfo.name.charAt(0) }}
                        </div>
                        <div>
                            <h3 class="text-[15px] font-bold text-white truncate w-32">{{ userInfo.name }}</h3>
                            <p class="text-[12px] text-gray-500">Học viên</p>
                        </div>
                    </div>

                    <SettingNavInformation />
                </aside>

                <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-8 shadow-xl">

                    <div class="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
                        <div>
                            <h2 class="text-xl font-bold text-white mb-1">Hồ sơ cá nhân</h2>
                            <p class="text-[13px] text-gray-400">Cập nhật hình ảnh và thông tin chi tiết của em.</p>
                        </div>
                        <button
                            class="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-[13px] font-medium rounded-xl border border-white/10 transition-all">
                            Xem hồ sơ public
                        </button>
                    </div>

                    <form @submit.prevent="handleSaveProfile" class="flex flex-col gap-8">

                        <div class="flex items-center gap-6">
                            <div class="relative group cursor-pointer">
                                <div
                                    class="w-24 h-24 rounded-full border-2 border-white/10 overflow-hidden bg-black/40 flex items-center justify-center">
                                    <img v-if="userInfo.avatar" :src="userInfo.avatar" alt="Avatar"
                                        class="w-full h-full object-cover" />
                                    <span v-else class="text-3xl font-bold text-gray-500">{{ userInfo.name.charAt(0)
                                    }}</span>
                                </div>
                                <div
                                    class="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i class="fa-solid fa-camera text-white text-xl"></i>
                                </div>
                                <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    accept="image/*" @change="handleAvatarUpload" />
                            </div>
                            <div>
                                <h4 class="text-[14px] font-bold text-gray-200 mb-1">Ảnh đại diện</h4>
                                <p class="text-[12px] text-gray-500 mb-3">Nên sử dụng ảnh vuông, dung lượng tối đa 2MB
                                    (JPG, PNG).</p>
                                <div class="flex gap-3">
                                    <button type="button"
                                        class="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-medium rounded-lg transition-colors shadow-md">
                                        Tải ảnh lên
                                    </button>
                                    <button type="button"
                                        class="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 text-[12px] font-medium rounded-lg transition-colors border border-white/5">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div class="flex flex-col gap-1.5">
                                <label for="name" class="text-[13px] font-medium text-gray-300 ml-1">Họ và tên</label>
                                <div class="relative group focus-within:text-blue-400">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i
                                            class="fa-regular fa-user text-gray-500 group-focus-within:text-blue-400 transition-colors"></i>
                                    </div>
                                    <input type="text" id="name" v-model="userInfo.name"
                                        class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600" />
                                </div>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="role" class="text-[13px] font-medium text-gray-300 ml-1">Vai trò / Chuyên
                                    môn</label>
                                <div class="relative group focus-within:text-blue-400">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i
                                            class="fa-solid fa-code text-gray-500 group-focus-within:text-blue-400 transition-colors"></i>
                                    </div>
                                    <input type="text" id="role" v-model="userInfo.role"
                                        placeholder="VD: Fullstack Developer..."
                                        class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600" />
                                </div>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="email" class="text-[13px] font-medium text-gray-300 ml-1">Địa chỉ
                                    Email</label>
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i class="fa-regular fa-envelope text-gray-500"></i>
                                    </div>
                                    <input type="email" id="email" v-model="userInfo.email" disabled
                                        class="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-gray-400 text-[13px] cursor-not-allowed" />
                                    <div class="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        <i class="fa-solid fa-circle-check text-emerald-500 text-[14px]"
                                            title="Đã xác thực"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="phone" class="text-[13px] font-medium text-gray-300 ml-1">Số điện
                                    thoại</label>
                                <div class="relative group focus-within:text-blue-400">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i
                                            class="fa-solid fa-phone text-gray-500 group-focus-within:text-blue-400 transition-colors text-[13px]"></i>
                                    </div>
                                    <input type="text" id="phone" v-model="userInfo.phone"
                                        placeholder="Nhập số điện thoại..."
                                        class="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600" />
                                </div>
                            </div>

                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label for="bio" class="text-[13px] font-medium text-gray-300 ml-1">Giới thiệu bản
                                thân</label>
                            <textarea id="bio" v-model="userInfo.bio" rows="4"
                                placeholder="Viết một vài dòng giới thiệu về kinh nghiệm và mục tiêu học tập của em..."
                                class="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white text-[13px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-gray-600 custom-scrollbar"></textarea>
                            <span class="text-right text-[11px] text-gray-500 mt-1">{{ userInfo.bio.length }}/500 ký
                                tự</span>
                        </div>

                        <div class="flex items-center justify-end gap-4 pt-6 border-t border-white/5">
                            <button type="button"
                                class="px-6 py-2.5 bg-transparent hover:bg-white/5 text-gray-300 text-[13px] font-medium rounded-xl transition-colors">
                                Hủy bỏ
                            </button>
                            <button type="submit" :disabled="isSaving"
                                class="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[13px] font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] disabled:opacity-70 flex items-center gap-2">
                                <i v-if="isSaving" class="fa-solid fa-circle-notch fa-spin"></i>
                                <i v-else class="fa-solid fa-floppy-disk text-[14px]"></i>
                                {{ isSaving ? 'Đang lưu...' : 'Lưu thay đổi' }}
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import SettingNavInformation from '../components/SettingNavInformation.vue'

// Trạng thái xử lý form
const isSaving = ref(false)

// Data giả lập liên kết với thông tin cá nhân của em
const userInfo = ref({
    name: 'Cao Đăng Khoa',
    email: 'caodangkhoa.dev@gmail.com',
    phone: '0388.375.154',
    role: 'Fullstack Developer',
    bio: 'Sinh viên chuyên ngành Công nghệ thông tin tại Đại học Thành Đô. Có kinh nghiệm làm việc với hệ sinh thái Node.js, ReactJS và PostgreSQL.',
    avatar: ''
})

// Xử lý upload ảnh đại diện (mô phỏng)
const handleAvatarUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        // Tạo URL blob để preview ảnh ngay lập tức
        userInfo.value.avatar = URL.createObjectURL(file)
    }
}

// Xử lý lưu hồ sơ
const handleSaveProfile = async () => {
    isSaving.value = true
    try {
        // Giả lập gọi API update profile
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Ở đây em có thể gọi thư viện Toastify hoặc thông báo thành công
        alert('Đã cập nhật hồ sơ thành công!')
    } catch (error) {
        console.error(error)
    } finally {
        isSaving.value = false
    }
}
</script>

<style scoped>
/* Tuỳ chỉnh thanh cuộn cho Textarea */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
}
</style>