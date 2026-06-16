<template>
  <div class="flex flex-col gap-4 p-6 bg-[var(--bg-card)] backdrop-blur-xl rounded-[24px] border border-[var(--border-color)]">
    <div class="flex justify-between items-end">
      <div>
        <h3 class="m-0 text-[16px] font-bold text-[var(--text-primary)] tracking-wide">Tài liệu tham khảo</h3>
        <p class="text-[12px] text-[var(--text-secondary)] mt-1 mb-0">Các tệp đính kèm cho bài học này</p>
      </div>
      <button class="text-[12px] text-blue-500 hover:text-blue-400 font-medium transition-colors">
        Tải xuống tất cả <i class="fa-solid fa-download ml-1"></i>
      </button>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      <a 
        v-for="file in store.attachments" 
        :key="file.id" 
        href="#" 
        class="group flex items-center p-3 bg-[var(--bg-app)] hover:opacity-80 rounded-[16px] border border-[var(--border-color)] hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 no-underline"
      >
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-[18px] mr-3 group-hover:scale-110 transition-transform">
          <i class="fa-solid fa-file-pdf"></i>
        </div>
        
        <div class="flex-1 min-w-0">
          <div class="text-[13px] font-bold text-[var(--text-primary)] truncate group-hover:text-blue-500 transition-colors">
            {{ file.name }}
          </div>
          <div class="text-[11px] text-[var(--text-secondary)] mt-0.5">2.4 MB • PDF</div>
        </div>

        <div class="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <i class="fa-solid fa-download text-[12px]"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useLearningStore } from '@/stores/learning.store'
const store = useLearningStore()
</script>