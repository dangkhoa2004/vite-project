<template>
  <LearningLayout>
    <div class="study-room-grid">
      
      <aside class="sidebar-left">
        <TableOfContents />
      </aside>

      <main class="main-content">
        <SlideViewer />
        <AttachmentList />
      </main>

      <aside class="sidebar-right">
        <ChatBox />
      </aside>

    </div>
  </LearningLayout>
</template>

<script setup>
import LearningLayout from '@/layouts/LearningLayout.vue'
import TableOfContents from '@/modules/learning/components/TableOfContents.vue'
import SlideViewer from '@/modules/learning/components/SlideViewer.vue'
import AttachmentList from '@/modules/learning/components/AttachmentList.vue'
import ChatBox from '@/modules/learning/components/ChatBox.vue'
</script>

<style scoped>
.study-room-grid {
  display: grid;
  /* Chia 3 cột: Mục lục 260px - Ở giữa tự co giãn - Chat 320px */
  grid-template-columns: 260px 1fr 320px;
  gap: 20px;
  padding: 20px;
  height: calc(100vh - 60px); 
}

.sidebar-left { height: 100%; overflow: hidden; }
.sidebar-right { height: 100%; overflow: hidden; }

.main-content {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* Responsive: Thu lại thành 1 cột trên màn hình điện thoại */
@media (max-width: 1024px) {
  .study-room-grid {
    grid-template-columns: 1fr;
    height: auto;
  }
  
  .sidebar-left, .sidebar-right {
    height: 400px; /* Cố định chiều cao trên mobile */
  }
}
</style>