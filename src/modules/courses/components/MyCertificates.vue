<template>
  <UserDashboardLayout 
    title="Chứng chỉ của tôi" 
    subtitle="Tất cả những chứng nhận em đã đạt được trên hành trình học tập."
  >
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="cert in certificates" :key="cert.id" class="group relative bg-gradient-to-br from-[#1c1e24] to-black rounded-[24px] border border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
        
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full"></div>

        <div class="relative p-6 z-10 flex flex-col h-full">
          <div class="flex justify-between items-start mb-6">
            <div class="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <i class="fa-solid fa-medal text-2xl text-emerald-400"></i>
            </div>
            <span class="px-3 py-1 bg-white/5 text-[var(--text-secondary)] text-[11px] rounded-full border border-[var(--border-color)]">
              Cấp ngày: {{ cert.date }}
            </span>
          </div>

          <h3 class="text-[16px] font-bold text-[var(--text-primary)] mb-2">{{ cert.courseName }}</h3>
          <p class="text-[12px] text-[var(--text-secondary)] mb-6">ID Chứng chỉ: <span class="font-mono text-gray-300">{{ cert.credentialId }}</span></p>

          <div class="mt-auto flex gap-3">
            <button class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-[var(--text-primary)] text-[13px] font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2">
              <i class="fa-solid fa-download"></i> Tải PDF
            </button>
            <button class="w-12 h-12 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl transition-all flex items-center justify-center border border-[var(--border-color)]" title="Chia sẻ lên LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

  </UserDashboardLayout>
</template>

<script setup>
import UserDashboardLayout from '@/layouts/UserDashboardLayout.vue'
import { ref } from 'vue'

// Dữ liệu chứng chỉ mẫu
const certificates = ref([
  {
    id: 1,
    courseName: 'Làm chủ Cơ sở dữ liệu quan hệ PostgreSQL tối ưu',
    date: '10/05/2026',
    credentialId: 'EDU-PG-99214X'
  },
  {
    id: 2,
    courseName: 'Lập trình JavaScript nền tảng vững chắc',
    date: '15/02/2026',
    credentialId: 'EDU-JS-44219A'
  }
])
</script>