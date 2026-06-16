<template>
  <div class="flex flex-col h-full bg-[#1c1e24]/80 backdrop-blur-xl rounded-[24px] shadow-2xl border border-[var(--border-color)] overflow-hidden">
    
    <div class="pt-2 px-2 border-b border-[var(--border-color)]">
      <div class="flex bg-black/20 rounded-[16px] p-1">
        <button class="flex-1 py-2 text-[13px] font-semibold text-[var(--text-primary)] bg-white/10 rounded-[12px] shadow-sm">
          <i class="fa-regular fa-comments mr-1.5"></i> Thảo luận
        </button>
        <button class="flex-1 py-2 text-[13px] font-semibold text-gray-500 hover:text-gray-300 transition-colors">
          <i class="fa-solid fa-circle-question mr-1.5"></i> Hỏi đáp (Q&A)
        </button>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-5 flex flex-col gap-6 custom-scrollbar relative">
      <div v-for="msg in store.messages" :key="msg.id" class="flex gap-3 group">
        <div class="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 text-[var(--text-primary)] rounded-full flex items-center justify-center text-[14px] font-bold shrink-0 shadow-lg shadow-blue-500/20">
          {{ msg.user.charAt(0) }}
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-[14px] font-bold text-gray-100">{{ msg.user }}</span>
            <span class="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{{ msg.time }}</span>
          </div>
          <div class="text-[13px] text-gray-300 leading-relaxed bg-white/5 p-3 rounded-[0_16px_16px_16px] border border-[var(--border-color)] group-hover:border-white/10 transition-colors">
            {{ msg.text }}
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 bg-black/20 border-t border-[var(--border-color)]">
      <div class="flex items-center bg-[#2a2d35] rounded-[20px] p-1.5 border border-[var(--border-color)] focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-inner">
        
        <button class="w-8 h-8 flex items-center justify-center text-[var(--text-secondary)] hover:text-blue-400 hover:bg-white/5 rounded-full transition-colors ml-1">
          <i class="fa-solid fa-paperclip text-[14px]"></i>
        </button>

        <input 
          v-model="newMessage" 
          @keyup.enter="sendMessage"
          type="text" 
          placeholder="Nhập nội dung..." 
          class="flex-1 bg-transparent border-none text-gray-200 text-[13px] focus:outline-none placeholder-gray-500 w-full px-2"
        />
        
        <button 
          @click="sendMessage"
          class="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-[var(--text-primary)] border-none rounded-full cursor-pointer transition-all shadow-md shadow-blue-500/30 mr-1"
        >
          <i class="fa-solid fa-paper-plane text-[12px] -ml-0.5 mt-0.5"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLearningStore } from '@/stores/learning.store'

const store = useLearningStore()
const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    store.addMessage(newMessage.value)
    newMessage.value = ''
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }
</style>