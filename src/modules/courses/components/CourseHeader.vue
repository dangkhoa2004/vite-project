<template>
  <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 border-b border-[var(--border-color)] pb-8">
    <div>
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold mb-4 tracking-wide uppercase">
        <i class="fa-solid fa-bolt"></i> Không ngừng học hỏi
      </div>
      <h1 class="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Khóa học của tôi</h1>
      <p class="text-sm text-[var(--text-secondary)]">Tiếp tục hành trình học tập và theo dõi tiến độ của bạn.</p>
    </div>

    <div class="flex gap-4">
      <div class="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] p-4 flex items-center gap-4 shadow-sm min-w-[150px]">
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-lg">
          <i class="fa-solid fa-book-open-reader"></i>
        </div>
        <div>
          <p class="text-[11px] text-[var(--text-secondary)] font-medium uppercase tracking-wider">Đang học</p>
          <p class="text-xl font-bold text-[var(--text-primary)]">{{ learningCount }}</p>
        </div>
      </div>

      <div class="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] p-4 flex items-center gap-4 shadow-sm min-w-[150px]">
        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-lg">
          <i class="fa-solid fa-award"></i>
        </div>
        <div>
          <p class="text-[11px] text-[var(--text-secondary)] font-medium uppercase tracking-wider">Hoàn thành</p>
          <p class="text-xl font-bold text-[var(--text-primary)]">{{ completedCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  learningCount: { type: Number, default: 0 },
  completedCount: { type: Number, default: 0 }
})
</script>