<template>
    <HomePageHeader />
    <div
        class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-28 transition-colors duration-300">

        <div
            class="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Cài đặt tài khoản
                </h1>
                <p class="text-sm text-[var(--text-secondary)]">Quản lý thông tin cá nhân và bảo mật của em tại đây.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
                <aside
                    class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] overflow-hidden sticky top-28 shadow-xl">
                    <div class="p-6 border-b border-[var(--border-color)] flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-[var(--text-primary)] font-bold text-lg shadow-lg">
                            {{ userInfo.name.charAt(0) }}
                        </div>
                        <div>
                            <h3 class="text-[15px] font-bold text-[var(--text-primary)] truncate w-32">{{ userInfo.name
                                }}</h3>
                            <p class="text-[12px] text-[var(--text-secondary)]">Học viên</p>
                        </div>
                    </div>
                    <SettingNavInformation />
                </aside>

                <div
                    class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-xl">
                    <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-6 mb-8">
                        <div>
                            <h2 class="text-xl font-bold text-[var(--text-primary)] mb-1">Hồ sơ cá nhân</h2>
                            <p class="text-[13px] text-[var(--text-secondary)]">Cập nhật hình ảnh và thông tin chi tiết
                                của em.</p>
                        </div>
                        <button
                            class="px-5 py-2 bg-[var(--bg-app)] hover:bg-[var(--border-color)] text-[var(--text-primary)] text-[13px] font-medium rounded-xl border border-[var(--border-color)] transition-all">
                            Xem hồ sơ public
                        </button>
                    </div>

                    <form @submit.prevent="handleSaveProfile" class="flex flex-col gap-8">
                        <div class="flex items-center gap-6">
                            <div class="relative group cursor-pointer">
                                <div
                                    class="w-24 h-24 rounded-full border-2 border-[var(--border-color)] overflow-hidden bg-[var(--bg-app)] flex items-center justify-center">
                                    <img v-if="userInfo.avatar" :src="userInfo.avatar"
                                        class="w-full h-full object-cover" />
                                    <span v-else class="text-3xl font-bold text-[var(--text-secondary)]">{{
                                        userInfo.name.charAt(0) }}</span>
                                </div>
                                <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    accept="image/*" @change="handleAvatarUpload" />
                            </div>
                            <div>
                                <h4 class="text-[14px] font-bold text-[var(--text-primary)] mb-1">Ảnh đại diện</h4>
                                <p class="text-[12px] text-[var(--text-secondary)] mb-3">Tối đa 2MB (JPG, PNG).</p>
                                <div class="flex gap-3">
                                    <button type="button"
                                        class="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-[var(--text-primary)] text-[12px] rounded-lg">Tải
                                        ảnh lên</button>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-for="field in ['name', 'role', 'phone']" :key="field" class="flex flex-col gap-1.5">
                                <label class="text-[13px] font-medium text-[var(--text-secondary)] ml-1 capitalize">{{
                                    field === 'name' ? 'Họ và tên' : field === 'role' ? 'Vai trò' : 'Số điện thoại'
                                    }}</label>
                                <input v-model="userInfo[field]" :type="field === 'phone' ? 'tel' : 'text'"
                                    class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl py-3 px-4 text-[var(--text-primary)] text-[13px] focus:outline-none focus:border-blue-500 transition-all placeholder-[var(--text-secondary)]" />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label class="text-[13px] font-medium text-[var(--text-secondary)] ml-1">Email</label>
                                <input v-model="userInfo.email" disabled
                                    class="w-full bg-[var(--border-color)]/30 border border-[var(--border-color)] rounded-xl py-3 px-4 text-[var(--text-secondary)] text-[13px] cursor-not-allowed" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="text-[13px] font-medium text-[var(--text-secondary)] ml-1">Giới thiệu bản
                                thân</label>
                            <textarea v-model="userInfo.bio" rows="4"
                                class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl p-4 text-[var(--text-primary)] text-[13px] focus:outline-none focus:border-blue-500 transition-all custom-scrollbar"></textarea>
                        </div>

                        <div class="flex items-center justify-end gap-4 pt-6 border-t border-[var(--border-color)]">
                            <button type="submit"
                                class="px-8 py-2.5 bg-blue-600 hover:bg-blue-500 text-[var(--text-primary)] text-[13px] font-bold rounded-xl transition-all">
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