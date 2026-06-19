<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-28 px-4 md:px-8">
        <div class="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div class="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <main class="relative z-10 max-w-6xl mx-auto">
            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Cài đặt hệ thống</h1>
                <p class="text-sm text-[var(--text-secondary)]">Tùy chỉnh giao diện, thông báo và trải nghiệm học tập của bạn.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <aside class="lg:col-span-4 space-y-2 sticky top-28">
                    <nav class="bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-4 shadow-sm flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1 custom-scrollbar">
                        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                            :class="['w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold transition-all shrink-0 lg:shrink text-left',
                            activeTab === tab.id ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-sm' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-app)] hover:text-[var(--text-primary)] border border-transparent']">
                            <i :class="[tab.icon, 'w-5 text-center text-[15px]']"></i>
                            <span class="hidden sm:inline-block">{{ tab.name }}</span>
                        </button>
                    </nav>

                    <div class="mt-6">
                        <button @click="saveSettings" :disabled="isSaving"
                            class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[14px] font-bold rounded-2xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] disabled:opacity-70 flex items-center justify-center gap-2">
                            <i v-if="isSaving" class="fa-solid fa-circle-notch fa-spin"></i>
                            <i v-else class="fa-solid fa-check"></i>
                            {{ isSaving ? 'Đang lưu...' : 'Lưu tất cả cài đặt' }}
                        </button>
                    </div>
                </aside>

                <div class="lg:col-span-8">
                    <Transition name="fade-slide" mode="out-in">
                        <keep-alive>
                            <component :is="currentTabComponent" 
                                v-bind="getTabProps(activeTab)"
                                v-on="getTabEvents(activeTab)" />
                        </keep-alive>
                    </Transition>
                </div>

            </div>
        </main>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'

// Import Components
import useColorMode from '../components/ColorMode.vue'
import useLearningExperience from '../components/LearningExperience.vue'
import useNotifications from '../components/Notifications.vue'

const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
const settings = reactive({
    theme: storedTheme === 'light' ? 'light' : 'dark',
    language: 'vi',
    autoPlay: true,
    videoQuality: 'auto',
    playbackSpeed: '1',
    autoSubtitles: true,
    emailReminders: true,
    newCourseAlerts: false
})

const activeTab = ref('colorMode')

const tabs = [
    { id: 'colorMode', name: 'Giao diện & Ngôn ngữ', icon: 'fa-solid fa-palette', component: useColorMode },
    { id: 'learning', name: 'Trải nghiệm học tập', icon: 'fa-solid fa-laptop-file', component: useLearningExperience },
    { id: 'notifications', name: 'Tùy chỉnh thông báo', icon: 'fa-regular fa-bell', component: useNotifications }
]

const currentTabComponent = computed(() => tabs.find(t => t.id === activeTab.value)?.component)

// Truyền props động dựa vào tab đang mở
const getTabProps = (tabId) => {
    if (tabId === 'colorMode') return { theme: settings.theme, lang: settings.language }
    if (tabId === 'learning') return { autoPlay: settings.autoPlay, quality: settings.videoQuality, speed: settings.playbackSpeed, subtitles: settings.autoSubtitles }
    if (tabId === 'notifications') return { emailReminders: settings.emailReminders, newCourseAlerts: settings.newCourseAlerts }
    return {}
}

const getTabEvents = (tabId) => {
    if (tabId === 'colorMode') return { 'update:theme': (v) => settings.theme = v, 'update:lang': (v) => settings.language = v }
    if (tabId === 'learning') return { 'update:autoPlay': (v) => settings.autoPlay = v, 'update:quality': (v) => settings.videoQuality = v, 'update:speed': (v) => settings.playbackSpeed = v, 'update:subtitles': (v) => settings.autoSubtitles = v }
    if (tabId === 'notifications') return { 'update:emailReminders': (v) => settings.emailReminders = v, 'update:newCourseAlerts': (v) => settings.newCourseAlerts = v }
    return {}
}

const isSaving = ref(false)
const saveSettings = async () => {
    isSaving.value = true
    try {
        await new Promise(resolve => setTimeout(resolve, 800))
        alert('Đã lưu các tùy chọn cài đặt thành công!')
    } finally {
        isSaving.value = false
    }
}
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateY(10px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-10px); }
.custom-scrollbar::-webkit-scrollbar { height: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: var(--border-color); border-radius: 10px; }
</style>