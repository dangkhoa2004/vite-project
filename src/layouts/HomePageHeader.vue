<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-[#1c1e24]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
      <a href="/">
        <div class="flex items-center gap-3 cursor-pointer">
          <div
            class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <i class="fa-solid fa-graduation-cap text-white text-lg"></i>
          </div>
          <span class="text-xl font-bold text-white tracking-wide">EduPlatform</span>
        </div>
      </a>
      <nav class="hidden lg:flex items-center gap-8">
        <a href="/khoa-hoc" class="text-[14px] font-medium text-gray-300 hover:text-white transition-colors">Khóa
          học</a>

        <div
          class="group relative cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-gray-300 hover:text-white transition-colors">
          Mẫu giáo <i
            class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
        </div>

        <div
          class="group relative cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-gray-300 hover:text-white transition-colors">
          Trung học <i
            class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
        </div>

        <div
          class="group relative cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-gray-300 hover:text-white transition-colors">
          Đại học <i
            class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
        </div>

        <div
          class="group relative cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-gray-300 hover:text-white transition-colors">
          Khóa học <i
            class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
        </div>
      </nav>

      <div class="flex items-center gap-6">
        <button class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
          <span class="text-[14px] font-medium">Giỏ hàng (0)</span>
          <div class="relative">
            <i class="fa-solid fa-bag-shopping text-lg group-hover:text-orange-400 transition-colors"></i>
            <span class="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 border border-[#1c1e24] rounded-full"></span>
          </div>
        </button>

        <button class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
          <span class="text-[14px] font-medium hidden sm:block">Tài khoản của tôi</span>
          <i class="fa-regular fa-circle-user text-xl group-hover:text-blue-400 transition-colors"></i>
        </button>
      </div>

    </div>
  </header>
</template>

<script setup>
// Component logic
</script>