<!-- //system/views/UserSettings.vue -->
<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[#0f1115] text-gray-200 font-sans relative overflow-hidden pb-20 pt-28">

        <div
            class="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">

            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-white tracking-tight mb-2">Cài đặt hệ thống</h1>
                <p class="text-sm text-gray-400">Tùy chỉnh giao diện, thông báo và trải nghiệm học tập của em.</p>
            </div>

            <div class="gap-8 items-start">


                <div class="flex flex-col gap-6">

                    <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-8 shadow-xl">
                        <div class="flex items-center gap-3 mb-6">
                            <div
                                class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-palette"></i>
                            </div>
                            <h2 class="text-lg font-bold text-white">Giao diện & Ngôn ngữ</h2>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <label class="block text-[13px] font-medium text-gray-400 mb-3">Chế độ hiển thị</label>
                                <div class="grid grid-cols-3 gap-4">
                                    <button @click="settings.theme = 'light'"
                                        :class="['py-3 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', settings.theme === 'light' ? 'bg-blue-500/10 border-blue-500 text-blue-400 shadow-inner' : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20']">
                                        <i class="fa-regular fa-sun text-xl"></i>
                                        <span class="text-[12px] font-medium">Sáng</span>
                                    </button>
                                    <button @click="settings.theme = 'dark'"
                                        :class="['py-3 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', settings.theme === 'dark' ? 'bg-blue-500/10 border-blue-500 text-blue-400 shadow-inner' : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20']">
                                        <i class="fa-regular fa-moon text-xl"></i>
                                        <span class="text-[12px] font-medium">Tối (Khuyên dùng)</span>
                                    </button>
                                    <button @click="settings.theme = 'system'"
                                        :class="['py-3 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', settings.theme === 'system' ? 'bg-blue-500/10 border-blue-500 text-blue-400 shadow-inner' : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20']">
                                        <i class="fa-solid fa-desktop text-xl"></i>
                                        <span class="text-[12px] font-medium">Theo hệ thống</span>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label class="block text-[13px] font-medium text-gray-400 mb-2">Ngôn ngữ hệ
                                    thống</label>
                                <div class="relative">
                                    <select v-model="settings.language"
                                        class="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white text-[13px] focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                        <option value="vi">Tiếng Việt</option>
                                        <option value="en">English (US)</option>
                                        <option value="jp">日本語 (Japanese)</option>
                                    </select>
                                    <i
                                        class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-[12px] pointer-events-none"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-8 shadow-xl">
                        <div class="flex items-center gap-3 mb-6">
                            <div
                                class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-laptop-file"></i>
                            </div>
                            <h2 class="text-lg font-bold text-white">Trải nghiệm học tập</h2>
                        </div>

                        <div class="flex flex-col gap-5">

                            <div
                                class="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                                <div>
                                    <h4 class="text-[14px] font-bold text-gray-200">Tự động chuyển bài học</h4>
                                    <p class="text-[12px] text-gray-500 mt-1">Tự động chuyển sang video tiếp theo khi
                                        video hiện tại kết thúc.</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="settings.autoPlay" class="sr-only peer">
                                    <div
                                        class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                                    </div>
                                </label>
                            </div>

                            <div
                                class="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                                <div>
                                    <h4 class="text-[14px] font-bold text-gray-200">Chất lượng video mặc định</h4>
                                    <p class="text-[12px] text-gray-500 mt-1">Chọn độ phân giải ưu tiên khi xem video
                                        bài giảng.</p>
                                </div>
                                <div class="relative w-32">
                                    <select v-model="settings.videoQuality"
                                        class="w-full bg-[#2a2d35] border border-white/10 rounded-lg py-2 px-3 text-white text-[12px] focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                        <option value="auto">Tự động</option>
                                        <option value="1080p">1080p HD</option>
                                        <option value="720p">720p</option>
                                        <option value="480p">480p</option>
                                    </select>
                                    <i
                                        class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] pointer-events-none"></i>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-8 shadow-xl">
                        <div class="flex items-center gap-3 mb-6">
                            <div
                                class="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-lg">
                                <i class="fa-solid fa-bell"></i>
                            </div>
                            <h2 class="text-lg font-bold text-white">Tùy chỉnh thông báo</h2>
                        </div>

                        <div class="flex flex-col gap-4">

                            <div
                                class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                <div>
                                    <h4 class="text-[14px] font-bold text-gray-200">Email nhắc nhở học tập</h4>
                                    <p class="text-[12px] text-gray-500 mt-0.5">Nhận email nhắc nhở nếu em không vào học
                                        trong 3 ngày.</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="settings.emailReminders" class="sr-only peer">
                                    <div
                                        class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                                    </div>
                                </label>
                            </div>

                            <div
                                class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                <div>
                                    <h4 class="text-[14px] font-bold text-gray-200">Thông báo khóa học mới</h4>
                                    <p class="text-[12px] text-gray-500 mt-0.5">Nhận thông báo khi có khóa học hoặc tài
                                        liệu mới được cập nhật.</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="settings.newCourseAlerts" class="sr-only peer">
                                    <div
                                        class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                                    </div>
                                </label>
                            </div>

                        </div>
                    </div>

                    <div
                        class="bg-red-500/5 backdrop-blur-md rounded-[24px] border border-red-500/20 p-8 shadow-xl mt-4">
                        <div class="flex items-center gap-3 mb-4">
                            <i class="fa-solid fa-triangle-exclamation text-red-500 text-xl"></i>
                            <h2 class="text-lg font-bold text-red-400">Vùng nguy hiểm</h2>
                        </div>
                        <p class="text-[13px] text-gray-400 mb-6">
                            Hành động này sẽ xóa vĩnh viễn tài khoản của em, bao gồm toàn bộ tiến độ học tập, chứng chỉ
                            và lịch sử giao dịch. Không thể khôi phục lại dữ liệu sau khi xóa.
                        </p>

                        <button
                            class="px-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-[13px] font-bold rounded-xl transition-all">
                            Xóa tài khoản vĩnh viễn
                        </button>
                    </div>

                    <div class="flex justify-end mt-2">
                        <button @click="saveSettings" :disabled="isSaving"
                            class="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[14px] font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] disabled:opacity-70 flex items-center gap-2">
                            <i v-if="isSaving" class="fa-solid fa-circle-notch fa-spin"></i>
                            <i v-else class="fa-solid fa-check"></i>
                            {{ isSaving ? 'Đang lưu...' : 'Lưu tất cả cài đặt' }}
                        </button>
                    </div>

                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import HomePageHeader from '../../../layouts/HomePageHeader.vue'

const isSaving = ref(false)

// State quản lý các tùy chọn cài đặt
const settings = ref({
    theme: 'dark',
    language: 'vi',
    autoPlay: true,
    videoQuality: 'auto',
    emailReminders: true,
    newCourseAlerts: false
})

const saveSettings = async () => {
    isSaving.value = true
    try {
        // Giả lập gọi API lưu settings
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert('Đã lưu các tùy chọn cài đặt thành công!')
    } catch (error) {
        console.error(error)
    } finally {
        isSaving.value = false
    }
}
</script>

<style scoped>
/* Code CSS hoàn toàn dựa vào tiện ích của Tailwind */
</style>