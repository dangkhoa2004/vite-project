<template>
  <div class="slide-container">
    <div class="slide-header">
      <h2>{{ store.currentLesson.title }}</h2>
    </div>
    <div class="slide-content">
      <img src="https://via.placeholder.com/800x450/111827/60a5fa?text=Trình+chiếu+Slide" alt="Slide" class="slide-img" />
    </div>
    <div class="slide-controls">
      <button class="ctrl-btn">← Slide trước</button>
      <span>Trang 1 / 15</span>
      <button class="ctrl-btn">Slide tiếp →</button>
    </div>
  </div>
</template>

<script setup>
import { useLearningStore } from '@/stores/learning.store'
const store = useLearningStore()
</script>

<style scoped>
.slide-container {
  display: flex;
  flex-direction: column;
  background-color: #1f2937;
  border-radius: 8px;
  border: 1px solid #374151;
  overflow: hidden;
}

.slide-header { padding: 15px; border-bottom: 1px solid #374151; }
.slide-header h2 { margin: 0; font-size: 18px; color: #f3f4f6; }

.slide-content {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16/9;
}

.slide-img { max-width: 100%; max-height: 100%; object-fit: contain; }

.slide-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #111827;
  color: #9ca3af;
  font-size: 14px;
}

.ctrl-btn {
  background: none; border: none; color: #60a5fa; cursor: pointer; font-weight: 600;
}
.ctrl-btn:hover { color: #93c5fd; }
</style>