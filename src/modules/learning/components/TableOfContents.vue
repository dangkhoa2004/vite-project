<template>
  <div class="bg-[var(--bg-card)] backdrop-blur-xl rounded-[24px] h-full flex flex-col border border-[var(--border-color)]">
    <div class="p-5 flex justify-between items-center border-b border-[var(--border-color)]">
      <h3 class="m-0 text-sm font-bold text-[var(--text-primary)] tracking-wide">Nội dung khóa học</h3>
      <span class="text-[11px] font-medium bg-blue-500/10 text-blue-500 px-2.5 py-1 rounded-full border border-blue-500/20">2/15 Hoàn thành</span>
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
            : 'bg-transparent border-transparent hover:bg-[var(--bg-app)] hover:border-[var(--border-color)]'
        ]"
      >
        <div class="flex items-start gap-3">
          <div :class="['w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors border', store.currentLesson.id === lesson.id ? 'bg-white/20 text-white border-transparent' : 'bg-[var(--bg-app)] text-[var(--text-secondary)] border-[var(--border-color)] group-hover:text-[var(--text-primary)]']">
            <i :class="index < 2 ? 'fa-solid fa-check text-[12px]' : 'fa-solid fa-play text-[10px] ml-0.5'"></i>
          </div>
          
          <div class="flex-1 min-w-0">
            <div :class="['text-[13px] font-medium truncate mb-1', store.currentLesson.id === lesson.id ? 'text-white' : 'text-[var(--text-primary)]']">
              {{ lesson.title }}
            </div>
            <div class="flex items-center gap-2">
              <span :class="['text-[11px]', store.currentLesson.id === lesson.id ? 'text-blue-100' : 'text-[var(--text-secondary)]']">
                <i class="fa-regular fa-clock mr-1"></i>12:45
              </span>
              
              <div v-if="index < 2" class="flex-1 h-1 bg-[var(--bg-app)] rounded-full overflow-hidden">
                <div class="h-full bg-emerald-500 w-full"></div>
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
.custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 4px; }
</style>