<template>
  <div class="toc-wrapper">
    <h3 class="toc-title">Nội dung khóa học</h3>
    <ul class="lesson-list">
      <li 
        v-for="lesson in store.lessons" 
        :key="lesson.id"
        :class="['lesson-item', { active: store.currentLesson.id === lesson.id }]"
        @click="store.changeLesson(lesson.id)"
      >
        <span class="icon">📄</span>
        <span class="text">{{ lesson.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useLearningStore } from '@/stores/learning.store'
const store = useLearningStore()
</script>

<style scoped>
.toc-wrapper {
  background-color: #1f2937;
  border-radius: 8px;
  height: 100%;
  overflow-y: auto;
  border: 1px solid #374151;
}

.toc-title {
  padding: 15px;
  margin: 0;
  font-size: 16px;
  border-bottom: 1px solid #374151;
  color: #f3f4f6;
}

.lesson-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lesson-item {
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-bottom: 1px solid #374151;
  color: #9ca3af;
  transition: all 0.2s;
}

.lesson-item:hover { background-color: #374151; }
.lesson-item.active {
  background-color: #374151;
  color: #60a5fa;
  font-weight: 600;
  border-left: 4px solid #3b82f6;
}
</style>