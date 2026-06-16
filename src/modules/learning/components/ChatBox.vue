<template>
  <div class="flex flex-col h-full bg-[var(--bg-card)] backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] overflow-hidden">
    
    <div class="py-2 px-2 border-b border-[var(--border-color)]">
      <div class="flex bg-[var(--bg-app)] rounded-[16px] p-1 border border-[var(--border-color)]">
        <button class="flex-1 py-2 text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          <i class="fa-regular fa-comments mr-1.5"></i> Thảo luận
        </button>
        <button class="flex-1 py-2 text-[13px] font-semibold text-[var(--text-primary)] bg-[var(--bg-card)] rounded-[12px] shadow-sm">
          <i class="fa-solid fa-circle-question mr-1.5"></i> Hỏi đáp (Q&A)
        </button>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-5 flex flex-col gap-6 custom-scrollbar relative">
      <div v-for="msg in store.messages" :key="msg.id" class="flex gap-3 group">
        <div class="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full flex items-center justify-center text-[14px] font-bold shrink-0 shadow-lg shadow-emerald-500/20">
          {{ msg.user.charAt(0) }}
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1.5 flex-wrap">
            <span class="text-[14px] font-bold text-[var(--text-primary)]">{{ msg.user }}</span>
            <span class="text-[10px] text-[var(--text-secondary)] bg-[var(--bg-app)] px-2 py-0.5 rounded-full border border-[var(--border-color)]">{{ msg.time }}</span>
            
            <button 
              v-if="msg.taggedPage" 
              @click="jumpToContextPage(msg.taggedPage)"
              class="text-[10px] font-bold text-blue-500 bg-blue-500/10 hover:bg-blue-500/20 px-2 py-0.5 rounded-md border border-blue-500/20 transition-colors cursor-pointer"
            >
              <i class="fa-solid fa-link mr-1"></i>Trang {{ msg.taggedPage }}
            </button>
          </div>

          <div class="text-[13px] text-[var(--text-primary)] leading-relaxed bg-[var(--bg-app)] p-3 rounded-[0_16px_16px_16px] border border-[var(--border-color)] group-hover:border-blue-500/30 transition-colors">
            {{ msg.text }}
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 bg-[var(--bg-app)] border-t border-[var(--border-color)]">
      
      <div class="mb-2 flex items-center gap-2 px-2">
        <span class="text-[11px] text-[var(--text-secondary)]">Đang hỏi về:</span>
        <span class="text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
          Slide hiện tại (Trang {{ store.currentSlidePage || 1 }})
        </span>
      </div>

      <div class="flex items-center bg-[var(--bg-card)] rounded-[20px] p-1.5 border border-[var(--border-color)] focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all shadow-inner">
        
        <input 
          v-model="newMessage" 
          @keyup.enter="sendMessage"
          type="text" 
          placeholder="Viết câu hỏi của bạn..." 
          class="flex-1 bg-transparent border-none text-[var(--text-primary)] text-[13px] focus:outline-none placeholder-[var(--text-secondary)] w-full px-3 py-1"
        />
        
        <button 
          @click="sendMessage"
          class="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white border-none rounded-full cursor-pointer transition-all shadow-md shadow-blue-500/30 mr-1"
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
    // Thêm tin nhắn kèm theo thông tin trang slide hiện tại
    store.addMessage({
      text: newMessage.value,
      user: 'Học viên',
      time: 'Vừa xong',
      taggedPage: store.currentSlidePage || 1 // Gắn tag tự động
    })
    newMessage.value = ''
  }
}

// Báo cho SlideViewer nhảy tới trang khi click vào tag
const jumpToContextPage = (pageNumber) => {
  // Thay đổi state trong store để SlideViewer reactivity nhận được và đổi ảnh
  if(store.currentSlidePage !== pageNumber) {
     store.currentSlidePage = pageNumber
     // Trigger event hoặc watch bên SlideViewer để update UI
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 4px; }
</style>