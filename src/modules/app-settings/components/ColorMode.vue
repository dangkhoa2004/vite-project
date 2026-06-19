<template>
    <div class="bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-6 md:p-8 shadow-sm">
        <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center text-lg shadow-sm border border-purple-500/20">
                <i class="fa-solid fa-palette"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-[var(--text-primary)]">Giao diện & Ngôn ngữ</h2>
                <p class="text-[12px] text-[var(--text-secondary)] mt-0.5">Tùy chỉnh giao diện hiển thị cho phù hợp với môi trường.</p>
            </div>
        </div>

        <div class="space-y-8">
            <div>
                <label class="block text-[12px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">Chế độ hiển thị</label>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button @click="theme = 'light'" :class="['py-4 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', theme === 'light' ? 'bg-blue-500/10 border-blue-500 text-blue-500 shadow-sm' : 'bg-[var(--bg-app)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]']">
                        <i class="fa-regular fa-sun text-xl mb-1"></i>
                        <span class="text-[13px] font-bold">Sáng</span>
                    </button>
                    <button @click="theme = 'dark'" :class="['py-4 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', theme === 'dark' ? 'bg-blue-500/10 border-blue-500 text-blue-500 shadow-sm' : 'bg-[var(--bg-app)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]']">
                        <i class="fa-regular fa-moon text-xl mb-1"></i>
                        <span class="text-[13px] font-bold">Tối (Khuyên dùng)</span>
                    </button>
                    <button @click="theme = 'system'" :class="['py-4 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', theme === 'system' ? 'bg-blue-500/10 border-blue-500 text-blue-500 shadow-sm' : 'bg-[var(--bg-app)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]']">
                        <i class="fa-solid fa-desktop text-xl mb-1"></i>
                        <span class="text-[13px] font-bold">Theo hệ thống</span>
                    </button>
                </div>
            </div>

            <div class="space-y-2">
                <label class="block text-[12px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Ngôn ngữ nền tảng</label>
                <div class="relative max-w-sm">
                    <select v-model="language" class="w-full h-11 px-4 pr-10 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500 font-medium appearance-none transition-colors cursor-pointer">
                        <option value="vi">Tiếng Việt (Mặc định)</option>
                        <option value="en">English (US)</option>
                    </select>
                    <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[var(--text-secondary)] pointer-events-none"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useColorMode } from '@/composables/useColorMode'

const { setDarkMode } = useColorMode()

const props = defineProps({ theme: String, lang: String })
const emit = defineEmits(['update:theme', 'update:lang'])

const theme = computed({
    get: () => props.theme,
    set: value => {
        emit('update:theme', value)
        if (value === 'dark') setDarkMode(true)
        else if (value === 'light') setDarkMode(false)
        else {
            const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
            setDarkMode(prefersDark)
        }
    }
})

const language = computed({ get: () => props.lang, set: value => emit('update:lang', value) })
</script>