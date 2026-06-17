<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    
    <Transition name="slide-up">
      <div v-if="isOpen" class="w-80 sm:w-96 bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border-color)] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] mb-4 overflow-hidden flex flex-col">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center text-white">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <i class="fa-solid fa-robot text-sm"></i>
            </div>
            <div>
              <h4 class="text-[13px] font-bold leading-tight">EduAI Assistant</h4>
              <p class="text-[10px] text-white/80">Trợ lý học tập thông minh</p>
            </div>
          </div>
          <button @click="isOpen = false" class="text-white/70 hover:text-white transition-colors">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div class="h-72 p-4 overflow-y-auto bg-[var(--bg-app)]/50 space-y-4 text-[13px]">
          <div v-for="(msg, idx) in messages" :key="idx" :class="['flex gap-2 max-w-[85%]', msg.role === 'ai' ? '' : 'ml-auto flex-row-reverse']">
            <div v-if="msg.role === 'ai'" class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 text-[10px]"><i class="fa-solid fa-bolt"></i></div>
            <div :class="['p-3 rounded-2xl', msg.role === 'ai' ? 'bg-[var(--bg-card)] border border-[var(--border-color)] rounded-tl-sm' : 'bg-blue-600 text-white rounded-tr-sm']">
              {{ msg.text }}
            </div>
          </div>
          
          <div v-if="isTyping" class="flex gap-2 max-w-[85%]">
            <div class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 text-[10px]"><i class="fa-solid fa-bolt"></i></div>
            <div class="p-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl rounded-tl-sm flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
              <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
            </div>
          </div>
        </div>

        <div class="p-3 border-t border-[var(--border-color)] bg-[var(--bg-card)] flex gap-2">
          <input v-model="inputText" @keyup.enter="sendMessage" placeholder="Hỏi EduAI..." 
            class="flex-1 bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl px-3 text-[13px] outline-none focus:border-blue-500" />
          <button @click="sendMessage" class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors">
            <i class="fa-solid fa-paper-plane text-[11px]"></i>
          </button>
        </div>
      </div>
    </Transition>

    <button @click="isOpen = !isOpen" class="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl shadow-[0_10px_25px_rgba(147,51,234,0.4)] hover:scale-110 transition-transform relative group">
      <i :class="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-robot'"></i>
      <span v-if="!isOpen" class="absolute -top-1 -right-1 flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[var(--bg-app)]"></span>
      </span>
      
      <div v-if="!isOpen" class="absolute right-full mr-4 bg-[var(--bg-card)] text-[var(--text-primary)] text-[12px] font-bold px-3 py-1.5 rounded-lg border border-[var(--border-color)] shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Trải nghiệm thử EduAI
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const inputText = ref('');
const isTyping = ref(false);
const messages = ref([
  { role: 'ai', text: 'Chào bạn, mình là EduAI. Bạn có thắc mắc gì về việc học lập trình không? (VD: Học Vue 3 mất bao lâu?)' }
]);

const sendMessage = () => {
  if (!inputText.value.trim()) return;
  
  const userText = inputText.value;
  messages.value.push({ role: 'user', text: userText });
  inputText.value = '';
  isTyping.value = true;

  setTimeout(() => {
    isTyping.value = false;
    let reply = 'Đó là một câu hỏi hay! Mình đang trong quá trình Beta nên kho dữ liệu chưa đầy đủ. Hãy đăng ký hàng đợi để trải nghiệm phiên bản hoàn chỉnh nhất nhé!';
    
    if (userText.toLowerCase().includes('vue') || userText.toLowerCase().includes('bao lâu')) {
      reply = 'Dựa trên dữ liệu, nếu bạn học 2 giờ/ngày, bạn sẽ mất khoảng 4-6 tuần để nắm vững Vue 3 Composition API và có thể tự làm được dự án thực tế.';
    }
    
    messages.value.push({ role: 'ai', text: reply });
  }, 1000);
};
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(20px) scale(0.95); opacity: 0; transform-origin: bottom right; }
</style>