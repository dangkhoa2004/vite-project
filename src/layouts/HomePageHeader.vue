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
        <!-- Cart -->
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
        <!-- Theme Toggle -->
        <button @click="toggleDark" class="text-[var(--text-secondary)] hover:text-orange-400 transition-colors p-2"
          aria-label="Toggle Theme">
          <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" class="text-lg"></i>
        </button>

        <div class="w-px h-6 bg-[var(--border-color)] mx-1 hidden sm:block"></div>
        <!-- User Menu -->
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
        <div v-if="isAuthenticated" class="relative group">
          <button class="relative text-[var(--text-secondary)] hover:text-blue-500 transition-colors p-2"
            aria-label="Notifications">
            <i class="fa-regular fa-bell text-lg group-hover:animate-bounce-short"></i>
            <span v-if="unreadCount > 0"
              class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border border-[var(--bg-card)] rounded-full"></span>
          </button>

          <div
            class="absolute right-[-60px] sm:right-0 top-full pt-4 w-80 sm:w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
            <div
              class="bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden">

              <div
                class="px-4 py-3 border-b border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-app)]/30">
                <h3 class="text-[14px] font-bold text-[var(--text-primary)]">Thông báo</h3>
                <button @click="markAllAsRead"
                  class="text-[11px] font-semibold text-blue-500 hover:text-blue-400 transition-colors">
                  Đánh dấu đã đọc
                </button>
              </div>

              <div class="max-h-[340px] overflow-y-auto custom-scrollbar">
                <div v-if="notifications.length === 0" class="p-6 text-center text-[var(--text-secondary)] text-[12px]">
                  Bạn không có thông báo nào.
                </div>

                <a v-for="notif in notifications" :key="notif.id" :href="notif.link"
                  :class="['flex gap-3 p-4 border-b border-[var(--border-color)] hover:bg-[var(--bg-app)] transition-colors relative', !notif.read ? 'bg-blue-500/5' : '']">

                  <div v-if="!notif.read"
                    class="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>

                  <div
                    :class="['w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-[var(--border-color)]', notif.iconBg]">
                    <i :class="[notif.icon, notif.iconColor, 'text-[14px]']"></i>
                  </div>

                  <div class="flex-1 min-w-0">
                    <p class="text-[13px] font-bold text-[var(--text-primary)] mb-0.5 truncate">{{ notif.title }}</p>
                    <p class="text-[12px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-1.5">{{
                      notif.message }}</p>
                    <span class="text-[10px] font-medium text-[var(--text-secondary)] flex items-center gap-1.5">
                      <i class="fa-regular fa-clock"></i> {{ notif.time }}
                    </span>
                  </div>
                </a>
              </div>

              <div class="p-2 bg-[var(--bg-app)]/30 border-t border-[var(--border-color)]">
                <a href="/thong-bao"
                  class="block w-full py-2.5 text-center text-[12px] font-bold text-blue-500 hover:bg-blue-500/10 rounded-xl transition-colors">
                  Xem tất cả thông báo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useColorMode } from '@/composables/useColorMode'
import { useRouter } from 'vue-router'

const { user, isAuthenticated, logout } = useAuth()
const { isDark, toggleDark } = useColorMode()
const router = useRouter()

// --- State cho ô tìm kiếm ---
const searchQuery = ref('')
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/tim-kiem', query: { q: searchQuery.value } })
  }
}

// --- Logic Notification (Mock Data) ---
const notifications = ref([
  {
    id: 1,
    title: 'Giảng viên đã trả lời bạn',
    message: 'Thầy Thanh Sơn vừa trả lời câu hỏi của bạn trong bài "Lifecycle Hooks Vue 3".',
    time: '15 phút trước',
    read: false,
    icon: 'fa-solid fa-reply',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    link: '#'
  },
  {
    id: 2,
    title: 'Hệ thống AI Assistant ra mắt',
    message: 'Tính năng Trợ lý ảo EduAI đã được cập nhật. Bạn có 1 suất trải nghiệm sớm!',
    time: '2 giờ trước',
    read: false,
    icon: 'fa-solid fa-wand-magic-sparkles',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    link: '/kham-pha'
  },
  {
    id: 3,
    title: 'Chương trình học mới',
    message: 'Chương 4 "Vue Router Chuyên sâu" vừa được thêm vào khóa học của bạn.',
    time: '1 ngày trước',
    read: true,
    icon: 'fa-solid fa-book-open',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    link: '#'
  },
  {
    id: 4,
    title: 'Nhắc nhở nộp bài tập',
    message: 'Bài tập tự luận "Build To-do App" của bạn sắp hết hạn sau 24h nữa.',
    time: '2 ngày trước',
    read: true,
    icon: 'fa-solid fa-clock',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
    link: '#'
  }
])

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true)
}

// --- Logout ---
const handleLogout = () => {
  logout()
  router.push('/dang-nhap')
}
</script>

<style scoped>
/* Custom Scrollbar cho phần nội dung dropdown */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 10px;
}
</style>