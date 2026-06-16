<template>
    <div
        class="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between bg-[#1c1e24]/40 backdrop-blur-xl p-3 rounded-[24px] border border-white/5">

        <div
            class="flex bg-black/20 p-1 rounded-xl border border-white/5 w-full xl:w-auto overflow-x-auto custom-scrollbar shrink-0">
            <button @click="$emit('update:activeTab', 'learning')"
                :class="['px-4 sm:px-5 py-2 text-[13px] font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-2',
                    activeTab === 'learning' ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]' : 'text-gray-400 hover:text-white']">
                <i class="fa-solid fa-fire text-[12px]"></i> Đang học ({{ learningCount }})
            </button>
            <button @click="$emit('update:activeTab', 'completed')"
                :class="['px-4 sm:px-5 py-2 text-[13px] font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-2',
                    activeTab === 'completed' ? 'bg-emerald-600 text-white shadow-[0_4px_12px_rgba(16,185,129,0.3)]' : 'text-gray-400 hover:text-white']">
                <i class="fa-solid fa-circle-check text-[12px]"></i> Hoàn thành ({{ completedCount }})
            </button>
            <button @click="$emit('update:activeTab', 'certificates')"
                :class="['px-4 sm:px-5 py-2 text-[13px] font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-2',
                    activeTab === 'certificates' ? 'bg-purple-600 text-white shadow-[0_4px_12px_rgba(147,51,234,0.3)]' : 'text-gray-400 hover:text-white']">
                <i class="fa-solid fa-certificate text-[12px]"></i> Chứng chỉ ({{ completedCount }})
            </button>
            <button @click="$emit('update:activeTab', 'roadmap')"
                :class="['px-4 sm:px-5 py-2 text-[13px] font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-2',
                    activeTab === 'roadmap' ? 'bg-green-600 text-white shadow-[0_4px_12px_rgba(16,185,129,0.3)]' : 'text-gray-400 hover:text-white']">
                <i class="fa-solid fa-road text-[12px]"></i> Lộ trình học ({{ roadmapCount }})
            </button>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 w-full xl:w-auto items-center flex-1 justify-end">
            <div class="relative w-full sm:w-[200px]" ref="dropdownRef">
                <button @click="isDropdownOpen = !isDropdownOpen"
                    class="w-full flex items-center justify-between bg-[#0f1115]/80 border border-white/10 rounded-xl pl-4 pr-3 py-2.5 text-[13px] font-semibold text-gray-300 hover:text-white hover:border-white/20 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] focus:outline-none focus:border-blue-500/50 text-left">
                    <span class="block truncate flex-1 mr-2">{{ currentSortLabel }}</span>
                    <i
                        :class="['fa-solid fa-chevron-down text-[10px] text-gray-500 transition-transform duration-300 shrink-0', isDropdownOpen ? 'rotate-180' : '']"></i>
                </button>
                <Transition name="dropdown-fade">
                    <div v-if="isDropdownOpen"
                        class="absolute right-0 top-full mt-2 w-full bg-[#1c1e24] border border-white/10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden z-50 py-1.5 backdrop-blur-xl">
                        <ul>
                            <li v-for="option in sortOptions" :key="option.value" @click="selectSort(option.value)"
                                :class="['px-4 py-2.5 text-[13px] cursor-pointer transition-colors flex items-center justify-between',
                                    sortBy === option.value ? 'text-blue-400 bg-blue-500/10 font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                ]">
                                {{ option.label }}
                                <i v-if="sortBy === option.value" class="fa-solid fa-check text-[12px]"></i>
                            </li>
                        </ul>
                    </div>
                </Transition>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps(['activeTab', 'searchQuery', 'sortBy', 'learningCount', 'completedCount', 'roadmapCount'])
const emit = defineEmits(['update:activeTab', 'update:searchQuery', 'update:sortBy'])

const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

const sortOptions = [
    { value: 'recent', label: 'Học gần đây nhất' },
    { value: 'progress', label: 'Tiến độ: Cao → Thấp' },
    { value: 'newest', label: 'Mới thêm vào' }
]

const currentSortLabel = computed(() => {
    const option = sortOptions.find(opt => opt.value === props.sortBy)
    return option ? option.label : 'Sắp xếp'
})

const selectSort = (value) => {
    emit('update:sortBy', value)
    isDropdownOpen.value = false
}

const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isDropdownOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>