<template>
  <div class="flex flex-col items-center w-full relative" ref="slideContainer">

    <div class="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
      <div
        class="flex items-center gap-2 bg-[var(--bg-card)] backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--border-color)] pointer-events-auto">
        <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        <span class="text-[11px] font-bold text-[var(--text-primary)] tracking-wider uppercase">Live</span>
      </div>

      <div class="relative pointer-events-auto">
        <button @click="showOutline = !showOutline"
          class="flex items-center gap-2 bg-[var(--bg-card)] hover:bg-[var(--bg-app)] px-3 py-1.5 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition-colors">
          <i class="fa-solid fa-list-ul text-[12px]"></i>
          <span class="text-[12px] font-medium hidden sm:inline">Mục lục Slide</span>
        </button>

        <div v-if="showOutline"
          class="absolute right-0 top-10 w-64 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[16px] overflow-hidden py-2 z-50">
          <div v-for="item in slideOutline" :key="item.page" @click="jumpToPage(item.page)"
            class="px-4 py-2 hover:bg-[var(--bg-app)] cursor-pointer text-[13px] text-[var(--text-primary)] flex justify-between items-center transition-colors">
            <span class="truncate pr-2">{{ item.title }}</span>
            <span class="text-[11px] text-[var(--text-secondary)]">Tr.{{ item.page }}</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full bg-[var(--bg-app)] rounded-[24px] overflow-hidden flex justify-center items-center aspect-video border border-[var(--border-color)] relative group"
      @contextmenu.prevent="onContextMenu">
      <div
        class="w-full h-full flex justify-center items-center overflow-auto transition-transform duration-300 origin-center"
        :style="{ transform: `scale(${zoomLevel})` }" @dblclick="zoomLevel === 1 ? zoomLevel = 1.5 : zoomLevel = 1">
        <img :src="currentSlideImage" alt="Slide" class="w-full h-full object-contain pointer-events-none select-none"
          draggable="false" />
      </div>

      <div
        class="absolute right-4 bottom-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button @click="zoomLevel += 0.2"
          class="w-8 h-8 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"><i
            class="fa-solid fa-plus text-[12px]"></i></button>
        <button @click="zoomLevel = Math.max(0.5, zoomLevel - 0.2)"
          class="w-8 h-8 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"><i
            class="fa-solid fa-minus text-[12px]"></i></button>
        <button @click="zoomLevel = 1"
          class="w-8 h-8 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"><i
            class="fa-solid fa-rotate-left text-[12px]"></i></button>
        <button @click="toggleFullscreen"
          class="w-8 h-8 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all mt-2"><i
            class="fa-solid fa-expand text-[12px]"></i></button>
      </div>
    </div>

    <div
      class="flex justify-between items-center px-4 py-3 bg-[var(--bg-card)] backdrop-blur-xl rounded-[20px] -mt-10 z-10 w-[95%] xl:w-[85%] border border-[var(--border-color)]">

      <div class="flex gap-2">
        <button
          class="w-10 h-10 flex items-center justify-center bg-[var(--bg-app)] hover:opacity-80 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-[14px] transition-all border border-[var(--border-color)]">
          <i class="fa-solid fa-microphone"></i>
        </button>
      </div>

      <div
        class="flex items-center gap-2 sm:gap-4 bg-[var(--bg-app)] px-3 py-1.5 rounded-[16px] border border-[var(--border-color)] ">
        <button @click="prevPage" :disabled="currentPage === 1"
          class="w-8 h-8 flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed">
          <i class="fa-solid fa-chevron-left text-[13px]"></i>
        </button>

        <div class="flex flex-col items-center justify-center w-[80px]">
          <span class="text-[13px] font-semibold text-[var(--text-primary)] leading-none">Trang {{ currentPage }}/{{
            totalPages }}</span>
          <span v-if="timeLeft > 0" class="text-[9px] text-orange-500 font-medium mt-1">Chờ {{ timeLeft }}s</span>
          <span v-else class="text-[9px] text-emerald-500 font-medium mt-1"><i class="fa-solid fa-check mr-1"></i>Đã
            xong</span>
        </div>

        <button @click="nextPage" :disabled="currentPage === totalPages || timeLeft > 0"
          :class="['w-8 h-8 flex items-center justify-center rounded-xl transition-all', (currentPage === totalPages || timeLeft > 0) ? 'text-[var(--text-secondary)] opacity-30 cursor-not-allowed' : 'text-blue-500 hover:bg-blue-500/10']">
          <i class="fa-solid fa-chevron-right text-[13px]"></i>
        </button>
      </div>

      <div class="flex gap-3 items-center">
        <button
          class="hidden sm:block px-4 py-2 bg-[var(--bg-app)] text-[var(--text-primary)] text-[13px] font-bold rounded-[14px] border border-[var(--border-color)] hover:border-[var(--text-secondary)] transition-all">
          <i class="fa-regular fa-bookmark mr-1"></i> Lưu vị trí
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLearningStore } from '@/stores/learning.store' // Giả sử store đã được setup

const store = useLearningStore()

// --- Refs ---
const slideContainer = ref(null)
const currentPage = ref(1) // Trong thực tế lấy từ store: store.currentSlidePage
const totalPages = ref(15)
const zoomLevel = ref(1)
const showOutline = ref(false)
const timeLeft = ref(0)
let timerInterval = null

// --- Mock Data ---
const slideOutline = [
  { page: 1, title: 'Giới thiệu tổng quan' },
  { page: 5, title: 'Kiến trúc Component' },
  { page: 8, title: 'Quản lý State với Pinia' },
  { page: 12, title: 'Tối ưu hóa hiệu suất' },
]

// Render ảnh thay vì PDF
const currentSlideImage = computed(() => `https://via.placeholder.com/1280x720/1c1e24/3b82f6?text=Slide+Page+${currentPage.value}`)

// --- Chức năng ---
const startTimer = () => {
  clearInterval(timerInterval)
  timeLeft.value = 5 // Ví dụ 5 giây mỗi trang (bạn đổi thành 10s theo ý muốn)
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) timeLeft.value--
    else clearInterval(timerInterval)
  }, 1000)
}

const jumpToPage = (page) => {
  currentPage.value = page
  showOutline.value = false
  zoomLevel.value = 1
  store.currentSlidePage = page // Sync với store để ChatBox nhận diện
  startTimer()
}

const nextPage = () => {
  if (currentPage.value < totalPages.value && timeLeft.value === 0) {
    jumpToPage(currentPage.value + 1)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    jumpToPage(currentPage.value - 1)
  }
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    slideContainer.value.requestFullscreen().catch(err => console.log(err))
  } else {
    document.exitFullscreen()
  }
}

const onContextMenu = (e) => {
  // Disable right click to protect images
  // Có thể thêm custom toast notification ở đây
}

onMounted(() => {
  // Auto-bookmark: Lấy vị trí đã lưu từ LocalStorage hoặc API
  const savedPage = localStorage.getItem('last_read_page')
  if (savedPage) {
    jumpToPage(parseInt(savedPage))
  } else {
    startTimer()
  }
})

onUnmounted(() => {
  clearInterval(timerInterval)
  // Lưu vị trí khi unmount
  localStorage.setItem('last_read_page', currentPage.value)
})
</script>