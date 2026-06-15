<template>
  <div class="flex flex-col items-center w-full relative">
    
    <div class="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
      <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
      <span class="text-[11px] font-bold text-white tracking-wider uppercase">Live</span>
      <span class="text-[11px] text-gray-300 ml-1 border-l border-white/20 pl-2">12:32:04</span>
    </div>

    <div class="w-full bg-[#1c1e24] rounded-[24px] overflow-hidden flex justify-center items-center aspect-video shadow-2xl border border-white/5 relative group">
      <img src="https://via.placeholder.com/1280x720/1c1e24/3b82f6?text=Interactive+Slide+Viewer" alt="Slide" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
    
    <div class="flex justify-between items-center px-4 py-3 bg-[#1c1e24]/70 backdrop-blur-xl rounded-[20px] -mt-10 z-10 w-[95%] xl:w-[85%] shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10">
      
      <div class="flex gap-2">
        <button class="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-[14px] transition-all border border-white/5">
          <i class="fa-solid fa-microphone"></i>
        </button>
        <button class="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-[14px] transition-all border border-white/5">
          <i class="fa-solid fa-video"></i>
        </button>
        <button class="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-[14px] transition-all border border-white/5">
          <i class="fa-solid fa-desktop"></i>
        </button>
      </div>
      
      <div class="flex items-center gap-4 bg-black/40 px-3 py-1.5 rounded-[16px] border border-white/5 shadow-inner">
        <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white rounded-xl transition-all">
          <i class="fa-solid fa-chevron-left text-[13px]"></i>
        </button>
        <span class="text-[13px] font-semibold text-gray-300 w-[80px] text-center">Trang 1/15</span>
        <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white rounded-xl transition-all">
          <i class="fa-solid fa-chevron-right text-[13px]"></i>
        </button>
      </div>

      <div class="flex gap-3 items-center">
        <div class="hidden sm:flex gap-1 bg-white/5 p-1 rounded-[14px] border border-white/5 text-gray-300">
          <button class="w-8 h-8 text-[15px] hover:text-yellow-400 hover:scale-125 transition-all duration-200"><i class="fa-solid fa-hands-clapping"></i></button>
          <button class="w-8 h-8 text-[15px] hover:text-red-500 hover:scale-125 transition-all duration-200"><i class="fa-solid fa-heart"></i></button>
          <button class="w-8 h-8 text-[15px] hover:text-blue-400 hover:scale-125 transition-all duration-200"><i class="fa-solid fa-thumbs-up"></i></button>
        </div>
        
        <button class="px-5 py-2.5 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-[13px] font-bold rounded-[14px] transition-all shadow-[0_4px_15px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.5)] hover:-translate-y-0.5">
          <i class="fa-solid fa-phone-slash mr-2"></i>End Class
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useLearningStore } from '@/stores/learning.store'
const store = useLearningStore()
</script>