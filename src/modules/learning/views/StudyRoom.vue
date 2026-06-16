<template>
  <LearningLayout>
    <div class="relative bg-[var(--bg-app)] h-[calc(100vh-60px)] font-sans text-[var(--text-primary)] overflow-hidden z-0">
      
      <div class="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-[-1]"></div>

      <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr_340px] gap-6 p-4 lg:p-6 h-full relative z-10">
        
        <aside class="h-[400px] lg:h-full overflow-hidden">
          <TableOfContents />
        </aside>

        <main class="flex flex-col gap-6 overflow-y-auto hide-scrollbar pb-10">
          <SlideViewer />
          <AttachmentList />
        </main>

        <aside class="h-[400px] lg:h-full overflow-hidden">
          <ChatBox />
        </aside>

      </div>
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
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>