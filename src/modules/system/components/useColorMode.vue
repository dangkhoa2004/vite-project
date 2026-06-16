<template>
    <div
        class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-xl">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-palette"></i>
            </div>
            <h2 class="text-lg font-bold text-[var(--text-primary)]">Giao diện & Ngôn ngữ</h2>
        </div>

        <div class="space-y-6">
            <div>
                <label class="block text-[13px] font-medium text-[var(--text-secondary)] mb-3">Chế độ
                    hiển thị</label>
                <div class="grid grid-cols-3 gap-4">
                    <button @click="theme = 'light'"
                        :class="['py-3 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', theme === 'light' ? 'bg-blue-500/10 border-blue-500 text-blue-400 shadow-inner' : 'bg-white/5 border-[var(--border-color)] text-[var(--text-secondary)] hover:border-white/20']">
                        <i class="fa-regular fa-sun text-xl"></i>
                        <span class="text-[12px] font-medium">Sáng</span>
                    </button>
                    <button @click="theme = 'dark'"
                        :class="['py-3 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', theme === 'dark' ? 'bg-blue-500/10 border-blue-500 text-blue-400 shadow-inner' : 'bg-white/5 border-[var(--border-color)] text-[var(--text-secondary)] hover:border-white/20']">
                        <i class="fa-regular fa-moon text-xl"></i>
                        <span class="text-[12px] font-medium">Tối (Khuyên dùng)</span>
                    </button>
                    <button @click="theme = 'system'"
                        :class="['py-3 px-4 rounded-xl border flex flex-col items-center gap-2 transition-all', theme === 'system' ? 'bg-blue-500/10 border-blue-500 text-blue-400 shadow-inner' : 'bg-white/5 border-[var(--border-color)] text-[var(--text-secondary)] hover:border-white/20']">
                        <i class="fa-solid fa-desktop text-xl"></i>
                        <span class="text-[12px] font-medium">Theo hệ thống</span>
                    </button>
                </div>
            </div>

            <DropDownUI v-model="language"
                :options="[{ label: 'Tiếng Việt', value: 'vi' }, { label: 'English', value: 'en' }]"
                label="Ngôn ngữ hệ thống" />

        </div>
    </div>
</template>

<script setup>
import DropDownUI from '@/components/DropDownUI.vue'
import { useColorMode } from '@/composables/useColorMode'
import { computed, ref, onMounted, onUnmounted } from 'vue'
const { isDark, toggleDark, setDarkMode } = useColorMode() // Sử dụng hook
const props = defineProps({
    theme: { type: String, default: 'dark' },
    lang: { type: String, default: 'vi' }
})

const emit = defineEmits(['update:theme', 'update:lang'])

const theme = computed({
    get: () => props.theme,
    set: value => {
        emit('update:theme', value)
        if (value === 'dark') {
            setDarkMode(true)
        } else if (value === 'light') {
            setDarkMode(false)
        } else if (value === 'system') {
            const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
            setDarkMode(prefersDark)
        }
    }
})

const langOptions = [
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'en', label: 'English (US)' },
    { value: 'jp', label: '日本語 (Japanese)' }
]

const currentLangLabel = computed(() => {
    const option = langOptions.find(o => o.value === language.value)
    return option ? option.label : 'Tiếng Việt'
})

const language = computed({
    get: () => props.lang,
    set: value => emit('update:lang', value)
})

const isLangDropdownOpen = ref(false)
const langDropdownRef = ref(null)

const selectLanguage = (value) => {
    language.value = value
    isLangDropdownOpen.value = false
}

const handleClickOutside = (event) => {
    if (langDropdownRef.value && !langDropdownRef.value.contains(event.target)) {
        isLangDropdownOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>