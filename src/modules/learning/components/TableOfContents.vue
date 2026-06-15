<template>
  <div class="bg-[#1c1e24]/80 backdrop-blur-xl rounded-[24px] h-full flex flex-col shadow-2xl border border-white/5">
    <div class="p-5 flex justify-between items-center border-b border-white/5">
      <h3 class="m-0 text-sm font-bold text-white tracking-wide">Nội dung khóa học</h3>
      <span class="text-[11px] font-medium bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded-full">2/15 Hoàn thành</span>
    </div>
    
    <ul class="flex-1 overflow-y-auto p-3 m-0 flex flex-col gap-2 custom-scrollbar">
      <li 
        v-for="(lesson, index) in store.lessons" 
        :key="lesson.id"
        @click="store.changeLesson(lesson.id)"
        :class="[
          'group relative px-4 py-3 cursor-pointer rounded-[16px] transition-all duration-300 border',
          store.currentLesson.id === lesson.id 
            ? 'bg-gradient-to-r from-blue-600 to-blue-500 border-blue-400/30 shadow-[0_8px_16px_-6px_rgba(59,130,246,0.5)]' 
            : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
        ]"
      >
        <div class="flex items-start gap-3">
          <div :class="['w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors', store.currentLesson.id === lesson.id ? 'bg-white/20 text-white' : 'bg-[#2a2d35] text-gray-400 group-hover:bg-[#323640]']">
            <i :class="index < 2 ? 'fa-solid fa-check text-[12px]' : 'fa-solid fa-play text-[10px] ml-0.5'"></i>
          </div>
          
          <div class="flex-1 min-w-0">
            <div :class="['text-[13px] font-medium truncate mb-1', store.currentLesson.id === lesson.id ? 'text-white' : 'text-gray-300 group-hover:text-white']">
              {{ lesson.title }}
            </div>
            <div class="flex items-center gap-2">
              <span :class="['text-[11px]', store.currentLesson.id === lesson.id ? 'text-blue-100' : 'text-gray-500']">
                <i class="fa-regular fa-clock mr-1"></i>12:45
              </span>
              
              <div v-if="index < 2" class="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-emerald-400 w-full"></div>
              </div>
              <div v-else-if="store.currentLesson.id === lesson.id" class="flex-1 h-1 bg-black/20 rounded-full overflow-hidden">
                <div class="h-full bg-white w-1/3 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useLearningStore } from '@/stores/learning.store'
const store = useLearningStore()
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }
</style>