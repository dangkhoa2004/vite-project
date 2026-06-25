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
        <button class="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2"
          aria-label="Search">
          <i class="fa-solid fa-magnifying-glass text-lg"></i>
        </button>
        <a href="/gio-hang"
          class="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group p-2">
          <div class="relative">
            <i class="fa-solid fa-bag-shopping text-lg group-hover:text-orange-400 transition-colors"></i>
            <span
              class="absolute -top-1.5 -right-2 w-4 h-4 flex items-center justify-center bg-orange-500 border border-[var(--bg-card)] rounded-full text-[9px] font-bold text-white">3</span>
          </div>
        </a>
        <button @click="toggleDark" class="text-[var(--text-secondary)] hover:text-orange-400 transition-colors p-2"
          aria-label="Toggle Theme">
          <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" class="text-lg"></i>
        </button>

        <div class="w-px h-6 bg-[var(--border-color)] mx-1 hidden sm:block"></div>

        <div v-if="isAuthenticated" class="relative group">
          <button
            class="group flex items-center gap-2.5 pl-1.5 pr-3 py-1.5 rounded-full bg-transparent hover:bg-[var(--bg-card)]/80 hover:backdrop-blur-md border border-transparent hover:border-[var(--border-color)] transition-all cursor-pointer ml-1">
            <img v-if="user?.avatar" :src="user.avatar" alt="Avatar"
              class="w-9 h-9 rounded-full object-cover shadow-sm ring-2 ring-transparent group-hover:ring-blue-500/50 transition-all duration-300" />
            <div v-else
              class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-[13px] shadow-sm ring-2 ring-transparent group-hover:ring-blue-500/50 transition-all duration-300">
              {{ user?.fullName?.charAt(0).toUpperCase() || 'U' }}
            </div>
            <span
              class="text-[13px] font-bold text-[var(--text-primary)] hidden sm:block max-w-[160px] truncate group-hover:text-blue-500 transition-colors">
              {{ user?.fullName || 'Đang tải...' }}
            </span>
            <i
              class="fa-solid fa-chevron-down text-[10px] text-[var(--text-secondary)] opacity-70 group-hover:text-blue-500 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300"></i>
          </button>

          <div
            class="absolute right-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
            <div
              class="bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2 flex flex-col">

              <div class="px-4 py-3 border-b border-[var(--border-color)] mb-1">
                <p class="text-[13px] text-[var(--text-primary)] font-bold truncate">
                  {{ user?.fullName || 'Người dùng' }}</p>
                <p class="text-[11px] text-[var(--text-secondary)] truncate">{{ user?.email || 'email@example.com' }}
                </p>
              </div>

              <a href="/tai-khoan/thong-tin"
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
        <div class="w-px h-6 bg-[var(--border-color)] mx-1 hidden sm:block"></div>
        <a v-if="isAdmin || isTeacher || isStudent" href="/bang-dieu-khien"
          class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border-color)] hover:border-blue-500/50 hover:bg-[var(--bg-app)] transition-all shadow-sm group max-w-[200px] cursor-pointer">

          <div
            class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-transform group-hover:scale-110"
            :class="{
              'bg-rose-500/10 text-rose-500': isAdmin,
              'bg-blue-500/10 text-blue-500': isTeacher && !isAdmin,
              'bg-emerald-500/10 text-emerald-500': isStudent && !isAdmin && !isTeacher
            }">
            <i class="fa-solid" :class="{
              'fa-shield-halved': isAdmin,
              'fa-chalkboard-user': isTeacher && !isAdmin,
              'fa-user-graduate': isStudent && !isAdmin && !isTeacher
            }"></i>
          </div>

          <span
            class="text-[13px] font-bold text-[var(--text-primary)] truncate group-hover:text-blue-500 transition-colors pr-1">
            <span v-if="isAdmin">Quản Trị Viên</span>
            <span v-else-if="isTeacher">Giảng Viên</span>
            <span v-else-if="isStudent">Học Viên</span>
          </span>
        </a>
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
import { ref, computed, onMounted } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useColorMode } from '@/composables/useColorMode'
import { useRouter } from 'vue-router'

// Lấy thêm checkSession từ composable
const { user, userRoleName, isAdmin, isTeacher, isStudent, isAuthenticated, logout, checkSession } = useAuth()
const { isDark, toggleDark } = useColorMode()
const router = useRouter()
onMounted(async () => {
  await checkSession() // Sẽ tự động kiểm tra token và gọi API lấy profile nếu cần
})

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
  // ... (mock data khác giữ nguyên)
])

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true)
}

// --- Logout ---
const handleLogout = () => {
  logout()
  // Lưu ý: hàm logout() trong useAuth đã bao gồm window.location.href = '/login', 
  // nên không cần phải router.push() ở đây nữa để tránh xung đột
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