<template>
  <div class="compact-attachments">
    <span class="label">Tài liệu bài học:</span>
    <div class="file-tags">
      <a 
        v-for="file in store.attachments" 
        :key="file.id" 
        href="#" 
        class="file-tag"
      >
        <span class="icon">📎</span> {{ file.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { useLearningStore } from '@/stores/learning.store'
const store = useLearningStore()
</script>

<style scoped>
.compact-attachments {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 15px;
  background-color: #1f2937;
  border-radius: 8px;
  border: 1px solid #374151;
  margin-top: 15px;
}

.label { font-size: 14px; font-weight: 600; color: #9ca3af; }

.file-tags { display: flex; gap: 10px; flex-wrap: wrap; }

.file-tag {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #60a5fa;
  background-color: #111827;
  padding: 4px 10px;
  border-radius: 4px;
  text-decoration: none;
  border: 1px solid #374151;
  transition: all 0.2s;
}

.file-tag:hover { background-color: #374151; color: #93c5fd; }
</style>