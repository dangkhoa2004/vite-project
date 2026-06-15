<template>
  <div class="chat-wrapper">
    <div class="chat-header">
      <div class="chat-title-group">
        <h3>Thảo luận</h3>
        <span class="context-badge">{{ store.currentLesson.title }}</span>
      </div>
      <div class="participant-count">
        <span class="dot"></span> {{ store.activeLearners }}
      </div>
    </div>

    <div class="chat-messages">
      <div v-for="msg in store.messages" :key="msg.id" class="message">
        <span class="user">{{ msg.user }}:</span>
        <span class="text">{{ msg.text }}</span>
        <span class="time">{{ msg.time }}</span>
      </div>
      
      <div v-if="store.messages.length === 0" class="empty-chat">
        Chưa có thảo luận nào cho bài học này. Hãy là người đầu tiên!
      </div>
    </div>

    <div class="chat-input">
      <input 
        v-model="newMessage" 
        @keyup.enter="sendMessage"
        type="text" 
        placeholder="Nhập nội dung thảo luận..." 
      />
      <button @click="sendMessage">Gửi</button>
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
    // Gọi action addMessage trong store, nó sẽ tự động lấy ID bài học hiện tại để gán vào
    store.addMessage(newMessage.value)
    newMessage.value = ''
  }
}
</script>

<style scoped>
.chat-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1f2937;
  border-radius: 8px;
  border: 1px solid #374151;
}

.chat-header {
  padding: 15px;
  border-bottom: 1px solid #374151;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.chat-title-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.chat-title-group h3 {
  margin: 0;
  font-size: 16px;
  color: #f3f4f6;
}

.context-badge {
  font-size: 11px;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 3px 6px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

.participant-count {
  font-size: 13px;
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 2px;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  font-size: 14px;
  line-height: 1.4;
}

.user {
  font-weight: bold;
  color: #60a5fa;
  margin-right: 5px;
}

.text {
  color: #d1d5db;
}

.time {
  font-size: 11px;
  color: #9ca3af;
  margin-left: 8px;
}

.empty-chat {
  text-align: center;
  color: #6b7280;
  font-size: 13px;
  margin-top: 20px;
  font-style: italic;
}

.chat-input {
  padding: 15px;
  border-top: 1px solid #374151;
  display: flex;
  gap: 10px;
}

.chat-input input {
  flex: 1;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background-color: #374151;
  color: white;
  outline: none;
}

.chat-input input:focus {
  border-color: #3b82f6;
}

.chat-input button {
  padding: 8px 15px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.chat-input button:hover {
  background-color: #2563eb;
}

/* Tùy chỉnh thanh cuộn cho khu vực chat gọn gàng hơn */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}
.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}
.chat-messages::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>