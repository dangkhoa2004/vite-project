<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)]/80 backdrop-blur-xl transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between gap-4">

      <a href="/" class="shrink-0">
        <div class="flex items-center gap-3 cursor-pointer">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
            <i class="fa-solid fa-graduation-cap text-[var(--text-primary)] text-lg"></i>
          </div>
          <span class="hidden sm:block text-xl font-bold text-[var(--text-primary)] tracking-wide">EduPlatform</span>
        </div>
      </a>

      <nav class="hidden lg:flex items-center gap-8">
        <a href="/"
          class="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Trang
          chủ</a>
        <a href="/khoa-hoc"
          class="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Khóa
          học</a>
        <a href="/kham-pha"
          class="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Khám
          phá</a>
      </nav>

      <div class="flex items-center gap-2 sm:gap-4 flex-1 justify-end">

        <div class="hidden md:block relative w-full max-w-xs mr-2">
          <input type="text" v-model="searchQuery" placeholder="Tìm kiếm khóa học, tài liệu..."
            class="w-full h-10 pl-10 pr-4 rounded-full bg-[var(--bg-app)] border border-[var(--border-color)] text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-[var(--text-secondary)]"
            @keyup.enter="handleSearch">
          <i
            class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] text-[13px]"></i>
        </div>

        <button class="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2"
          aria-label="Search">
          <i class="fa-solid fa-magnifying-glass text-lg"></i>
        </button>

        <button @click="toggleDark" class="text-[var(--text-secondary)] hover:text-orange-400 transition-colors p-2"
          aria-label="Toggle Theme">
          <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" class="text-lg"></i>
        </button>

        <button class="relative text-[var(--text-secondary)] hover:text-blue-500 transition-colors p-2 group"
          aria-label="Notifications">
          <i class="fa-regular fa-bell text-lg group-hover:animate-bounce-short"></i>
          <span
            class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border border-[var(--bg-card)] rounded-full"></span>
        </button>

        <a href="/gio-hang"
          class="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group p-2">
          <div class="relative">
            <i class="fa-solid fa-bag-shopping text-lg group-hover:text-orange-400 transition-colors"></i>
            <span
              class="absolute -top-1.5 -right-2 w-4 h-4 flex items-center justify-center bg-orange-500 border border-[var(--bg-card)] rounded-full text-[9px] font-bold text-white">
              3
            </span>
          </div>
        </a>

        <div class="w-px h-6 bg-[var(--border-color)] mx-1 hidden sm:block"></div>

        <div v-if="isAuthenticated" class="relative group">
          <button
            class="flex items-center gap-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ml-1">
            <div
              class="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-[13px] shadow-md border-2 border-transparent group-hover:border-blue-400 transition-all">
              {{ user?.name?.charAt(0).toUpperCase() || 'U' }}
            </div>
            <span class="text-[14px] font-medium hidden sm:block max-w-[100px] truncate">
              {{ user?.name }}
            </span>
            <i class="fa-solid fa-chevron-down text-[10px] opacity-70 group-hover:rotate-180 transition-transform"></i>
          </button>

          <div
            class="absolute right-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
            <div
              class="bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2 flex flex-col">

              <div class="px-4 py-3 border-b border-[var(--border-color)] mb-1">
                <p class="text-[13px] text-[var(--text-primary)] font-bold truncate">{{ user?.name }}</p>
                <p class="text-[11px] text-[var(--text-secondary)] truncate">{{ user?.email }}</p>
              </div>

              <a href="/thong-tin-tai-khoan"
                class="px-4 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-regular fa-user text-[var(--text-secondary)] w-4"></i> Hồ sơ cá nhân
              </a>
              <a href="/khoa-hoc-cua-toi"
                class="px-4 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-solid fa-book text-[var(--text-secondary)] w-4"></i> Khóa học của tôi
              </a>
              <a href="/cai-dat-nguoi-dung"
                class="px-4 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-solid fa-gear text-[var(--text-secondary)] w-4"></i> Cài đặt
              </a>
              <button @click="handleLogout"
                class="w-full text-left px-4 py-2.5 text-[13px] font-medium text-red-500 hover:bg-red-500/10 transition-colors flex items-center gap-3 mt-1 border-t border-[var(--border-color)] pt-3">
                <i class="fa-solid fa-arrow-right-from-bracket w-4"></i> Đăng xuất
              </button>
            </div>
          </div>
        </div>

        <div v-else>
          <a href="/dang-nhap"
            class="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all font-medium text-[13px]">
            Đăng nhập
          </a>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useColorMode } from '@/composables/useColorMode'
import { useRouter } from 'vue-router'

const { user, isAuthenticated, logout } = useAuth()
const { isDark, toggleDark } = useColorMode()
const router = useRouter()

// State cho ô tìm kiếm
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // Chuyển hướng sang trang tìm kiếm kèm query parameter
    router.push({ path: '/tim-kiem', query: { q: searchQuery.value } })
  }
}

const handleLogout = () => {
  logout()
  router.push('/dang-nhap')
}
</script>