<!-- //system/views/UserSettings.vue -->
<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[var(--bg-app)] text-gray-200 font-sans relative overflow-hidden pb-20 pt-28">
        <div
            class="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>
        <div
            class="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>
        <main class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Cài đặt hệ thống</h1>
                <p class="text-sm text-[var(--text-secondary)]">Tùy chỉnh giao diện, thông báo và trải nghiệm học tập
                    của em.</p>
            </div>
            <div class="gap-8 items-start">
                <div class="flex flex-col gap-6">
                    <useColorMode v-model:theme="settings.theme" v-model:lang="settings.language" />
                    <useLearningExperience v-model:autoPlay="settings.autoPlay"
                        v-model:quality="settings.videoQuality" />
                    <useNotifications v-model:emailReminders="settings.emailReminders"
                        v-model:newCourseAlerts="settings.newCourseAlerts" />
                    <useDangerZone />
                    <div class="flex justify-end mt-2">
                        <button @click="saveSettings" :disabled="isSaving"
                            class="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-[var(--text-primary)] text-[14px] font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] disabled:opacity-70 flex items-center gap-2">
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
import useColorMode from '../components/useColorMode.vue'
import useLearningExperience from '../components/useLearningExperience.vue'
import useNotifications from '../components/useNotifications.vue'
import useDangerZone from '../components/useDangerZone.vue'
import { reactive, ref } from 'vue'
import HomePageHeader from '../../../layouts/HomePageHeader.vue'

const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
const settings = reactive({
    theme: storedTheme === 'light' ? 'light' : 'dark',
    language: 'vi',
    autoPlay: true,
    videoQuality: 'auto',
    emailReminders: true,
    newCourseAlerts: false
})

const isSaving = ref(false)

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