<!-- src/layouts/HomePageHeader.vue -->
<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-[#1c1e24]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
      
      <a href="/">
        <div class="flex items-center gap-3 cursor-pointer">
          <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <i class="fa-solid fa-graduation-cap text-white text-lg"></i>
          </div>
          <span class="text-xl font-bold text-white tracking-wide">EduPlatform</span>
        </div>
      </a>

      <nav class="hidden lg:flex items-center gap-8">
        <a href="/khoa-hoc" class="text-[14px] font-medium text-gray-300 hover:text-white transition-colors">Khóa học</a>

        <div class="group relative cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-gray-300 hover:text-white transition-colors">
          Mẫu giáo <i class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
        </div>

        <div class="group relative cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-gray-300 hover:text-white transition-colors">
          Trung học <i class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
        </div>

        <div class="group relative cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-gray-300 hover:text-white transition-colors">
          Đại học <i class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
        </div>

        <div class="group relative cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-gray-300 hover:text-white transition-colors">
          Khóa học <i class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
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

        <div v-if="isAuthenticated" class="relative group">
          <button class="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors">
            <div class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-[13px] shadow-lg">
              {{ user?.name?.charAt(0).toUpperCase() || 'U' }}
            </div>
            <span class="text-[14px] font-medium hidden sm:block max-w-[120px] truncate">
              {{ user?.name }}
            </span>
            <i class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
          </button>

          <div class="absolute right-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
            <div class="bg-[#1c1e24]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2 flex flex-col">
              
              <div class="px-4 py-3 border-b border-white/5 mb-1">
                <p class="text-[13px] text-white font-bold truncate">{{ user?.name }}</p>
                <p class="text-[11px] text-gray-500 truncate">{{ user?.email }}</p>
              </div>

              <a href="/thong-tin-tai-khoan" class="px-4 py-2.5 text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-regular fa-user text-gray-400 w-4 text-center"></i> Hồ sơ cá nhân
              </a>
              <a href="/khoa-hoc-cua-toi" class="px-4 py-2.5 text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-solid fa-book-open text-gray-400 w-4 text-center"></i> Khóa học của tôi
              </a>
              <a href="/cai-dat-nguoi-dung" class="px-4 py-2.5 text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-solid fa-gear text-gray-400 w-4 text-center"></i> Cài đặt
              </a>
              
              <div class="h-px bg-white/5 my-1"></div>
              
              <button @click="handleLogout" class="w-full text-left px-4 py-2.5 text-[13px] font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors flex items-center gap-3">
                <i class="fa-solid fa-arrow-right-from-bracket w-4 text-center"></i> Đăng xuất
              </button>
            </div>
          </div>
        </div>

        <div v-else>
          <a href="/dang-nhap" class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
            <span class="text-[14px] font-medium hidden sm:block">Đăng nhập</span>
            <i class="fa-regular fa-circle-user text-xl group-hover:text-blue-400 transition-colors"></i>
          </a>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const { user, isAuthenticated, logout } = useAuth()
const router = useRouter()

const handleLogout = () => {
  logout()
  // Chuyển hướng người dùng về trang đăng nhập bằng route tiếng Việt
  router.push('/dang-nhap')
}
</script>