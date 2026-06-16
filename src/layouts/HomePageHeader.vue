<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)]/80 backdrop-blur-xl transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">

      <a href="/">
        <div class="flex items-center gap-3 cursor-pointer">
          <div
            class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <i class="fa-solid fa-graduation-cap text-[var(--text-primary)] text-lg"></i>
          </div>
          <span class="text-xl font-bold text-[var(--text-primary)] tracking-wide">EduPlatform</span>
        </div>
      </a>

      <nav class="hidden lg:flex items-center gap-8">
        <a href="/"
          class="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Trang
          chủ</a>
        <a href="/khoa-hoc"
          class="text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Khóa
          học</a>
      </nav>

      <div class="flex items-center gap-6">

        <button @click="toggleDark" class="text-[var(--text-secondary)] hover:text-orange-400 transition-colors p-2"
          aria-label="Toggle Theme">
          <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" class="text-lg"></i>
        </button>

        <button
          class="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group">
          <span class="text-[14px] font-medium">Giỏ hàng (0)</span>
          <div class="relative">
            <i class="fa-solid fa-bag-shopping text-lg group-hover:text-orange-400 transition-colors"></i>
            <span
              class="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 border border-[var(--bg-card)] rounded-full"></span>
          </div>
        </button>

        <div v-if="isAuthenticated" class="relative group">
          <button
            class="flex items-center gap-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-[var(--text-primary)] font-bold text-[13px] shadow-lg">
              {{ user?.name?.charAt(0).toUpperCase() || 'U' }}
            </div>
            <span class="text-[14px] font-medium hidden sm:block max-w-[120px] truncate">
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
                class="px-4 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-regular fa-user text-[var(--text-secondary)] w-4"></i> Hồ sơ cá nhân
              </a>
              <a href="/khoa-hoc-cua-toi"
                class="px-4 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-solid fa-book text-[var(--text-secondary)] w-4"></i> Khóa học của tôi
              </a>
              <a href="/cai-dat-nguoi-dung"
                class="px-4 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors flex items-center gap-3">
                <i class="fa-solid fa-gear text-[var(--text-secondary)] w-4"></i> Cài đặt người dùng
              </a>
              <button @click="handleLogout"
                class="w-full text-left px-4 py-2.5 text-[13px] font-medium text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-3">
                <i class="fa-solid fa-arrow-right-from-bracket w-4"></i> Đăng xuất
              </button>
            </div>
          </div>
        </div>

        <div v-else>
          <a href="/dang-nhap"
            class="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group">
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
import { useColorMode } from '@/composables/useColorMode' // Import composable mới
import { useRouter } from 'vue-router'

const { user, isAuthenticated, logout } = useAuth()
const { isDark, toggleDark } = useColorMode() // Sử dụng hook
const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/dang-nhap')
}
</script>