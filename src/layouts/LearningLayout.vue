<template>
  <div class="h-screen flex flex-col bg-[var(--bg-app)] text-gray-200 font-sans overflow-hidden">

    <header
      class="h-[70px] shrink-0 bg-[#1c1e24]/80 backdrop-blur-xl border-b border-[var(--border-color)] flex items-center justify-between px-4 sm:px-6 z-50 shadow-sm">

      <div class="flex items-center gap-4 sm:gap-6">
        <button @click="$router.push('/khoa-hoc-cua-toi')"
          class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all border border-[var(--border-color)] group shadow-sm"
          title="Quay lại danh sách khóa học">
          <i class="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
        </button>

        <div class="flex items-center gap-3">
          <div
            class="hidden sm:flex w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 items-center justify-center border border-blue-500/20">
            <i class="fa-solid fa-book-open-reader text-[14px]"></i>
          </div>
          <div class="flex flex-col">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Phòng học trực
              tuyến</span>
            <h2
              class="text-[14px] sm:text-[15px] font-bold text-[var(--text-primary)] leading-none truncate max-w-[200px] sm:max-w-[400px]">
              Xây dựng Frontend với Vue 3
            </h2>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-5">
        <div
          class="hidden md:flex items-center gap-3 bg-black/20 px-4 py-1.5 rounded-full border border-[var(--border-color)] shadow-inner">
          <span class="text-[11px] text-[var(--text-secondary)] font-medium">Tiến độ:</span>
          <div class="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[60%] rounded-full"></div>
          </div>
          <span class="text-[12px] font-bold text-[var(--text-primary)]">60%</span>
        </div>
      </div>

    </header>

    <main class="flex-1 overflow-hidden relative">
      <div
        class="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none z-0">
      </div>

      <div class="relative z-10 h-full">
        <slot></slot>
      </div>
    </main>

  </div>
</template>

<script setup>
// Layout wrapper không cần logic quá phức tạp, chỉ chứa khung chuẩn cho phòng học
</script>

<style scoped>
/* Toàn bộ CSS thuần đã được loại bỏ và thay bằng Utility Classes của Tailwind */
</style>