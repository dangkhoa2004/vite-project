<template>
  <router-view />

  <Transition name="fade">
    <div 
      v-if="isLoading" 
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f1115]/80 backdrop-blur-xl"
    >
      <div class="bg-[#1c1e24]/90 p-8 rounded-[24px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center">
        <div class="relative w-16 h-16 flex items-center justify-center mb-4">
          <div class="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          <div class="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <i class="fa-solid fa-graduation-cap text-blue-400 text-xl animate-pulse"></i>
        </div>
        
        <h3 class="text-white font-bold tracking-wider text-sm">{{ loadingText }}</h3>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useGlobalLoader } from '@/composables/useGlobalLoader'

const { isLoading, loadingText } = useGlobalLoader()
</script>

<style>
/* Hiệu ứng mờ dần khi bật/tắt Loader */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, backdrop-filter 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}
</style>