<template>
  <HomePageHeader />

  <div class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-24 transition-colors duration-300">
    
    <div class="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

    <main class="relative z-10 max-w-6xl mx-auto px-6">
      
      <div class="mb-8">
        <h1 class="text-2xl md:text-3xl font-extrabold mb-2">Trung tâm Thông báo</h1>
        <p class="text-[14px] text-[var(--text-secondary)]">Quản lý tất cả các cập nhật, nhắc nhở và cài đặt nhận tin của bạn.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <aside class="lg:col-span-1 space-y-2">
          <div class="bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-4 shadow-sm sticky top-28">
            <nav class="space-y-1.5">
              <button @click="activeMenu = 'inbox'" 
                :class="['w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[13px] font-bold transition-all',
                activeMenu === 'inbox' ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-sm' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-app)] hover:text-[var(--text-primary)] border border-transparent']">
                <div class="flex items-center gap-3">
                  <i class="fa-solid fa-inbox w-4 text-center"></i> Hộp thư đến
                </div>
                <span v-if="unreadTotal > 0" class="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">{{ unreadTotal }}</span>
              </button>

              <button @click="activeMenu = 'settings'" 
                :class="['w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[13px] font-bold transition-all',
                activeMenu === 'settings' ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-sm' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-app)] hover:text-[var(--text-primary)] border border-transparent']">
                <div class="flex items-center gap-3">
                  <i class="fa-solid fa-sliders w-4 text-center"></i> Cài đặt thông báo
                </div>
              </button>
            </nav>
          </div>
        </aside>

        <div class="lg:col-span-3">
          
          <Transition name="fade" mode="out-in">
            <div v-if="activeMenu === 'inbox'" class="bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[24px] shadow-sm overflow-hidden min-h-[600px] flex flex-col">
              
              <div class="p-5 border-b border-[var(--border-color)] bg-[var(--bg-app)]/30 flex flex-col md:flex-row justify-between gap-4">
                <div class="flex gap-2 overflow-x-auto custom-scrollbar pb-2 md:pb-0">
                  <button v-for="filter in filters" :key="filter.id" @click="activeFilter = filter.id"
                    :class="['px-4 py-2 rounded-xl text-[12px] font-bold transition-all whitespace-nowrap',
                    activeFilter === filter.id ? 'bg-[var(--bg-app)] text-blue-500 border border-[var(--border-color)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-app)]']">
                    {{ filter.name }}
                  </button>
                </div>
                
                <button @click="markAllAsRead" class="shrink-0 px-4 py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white border border-blue-500/20 rounded-xl text-[12px] font-bold transition-all flex items-center gap-2">
                  <i class="fa-solid fa-check-double"></i> Đánh dấu tất cả đã đọc
                </button>
              </div>

              <div class="flex-1 overflow-y-auto">
                <div v-if="filteredNotifications.length === 0" class="flex flex-col items-center justify-center h-full py-20 text-[var(--text-secondary)]">
                  <i class="fa-regular fa-bell-slash text-4xl mb-3 opacity-50"></i>
                  <p class="text-[13px]">Tuyệt vời! Bạn không có thông báo nào bị bỏ lỡ.</p>
                </div>

                <div class="divide-y divide-[var(--border-color)]">
                  <a v-for="notif in filteredNotifications" :key="notif.id" :href="notif.link" @click="markAsRead(notif.id)"
                    :class="['block p-5 transition-colors relative hover:bg-[var(--bg-app)] group', !notif.read ? 'bg-blue-500/5' : 'bg-transparent']">
                    
                    <div class="flex gap-4 items-start">
                      <div class="w-2 flex justify-center pt-3">
                        <span v-if="!notif.read" class="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                      </div>

                      <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-[var(--border-color)] bg-[var(--bg-app)] shadow-sm group-hover:scale-110 transition-transform', notif.iconBg]">
                        <i :class="[notif.icon, notif.iconColor, 'text-[18px]']"></i>
                      </div>

                      <div class="flex-1 min-w-0 pr-4">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                          <h4 class="text-[14px] font-bold text-[var(--text-primary)] truncate pr-4">{{ notif.title }}</h4>
                          <span class="text-[11px] font-medium text-[var(--text-secondary)] shrink-0 whitespace-nowrap">{{ notif.time }}</span>
                        </div>
                        <p class="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-2">{{ notif.message }}</p>
                        
                        <div class="flex gap-2">
                          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)]">
                            {{ getCategoryName(notif.type) }}
                          </span>
                          <span v-if="notif.actionText" class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20">
                            {{ notif.actionText }} <i class="fa-solid fa-arrow-right ml-0.5 text-[8px]"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Transition>

          <Transition name="fade" mode="out-in">
            <div v-if="activeMenu === 'settings'" class="space-y-6">
              <div class="bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[24px] shadow-sm p-6 md:p-8">
                
                <div class="mb-8 border-b border-[var(--border-color)] pb-4">
                  <h2 class="text-xl font-bold mb-2">Tùy chọn nhận thông báo</h2>
                  <p class="text-[13px] text-[var(--text-secondary)]">Bạn có quyền kiểm soát hoàn toàn những gì được gửi đến mình. Thay đổi sẽ được lưu tự động.</p>
                </div>

                <div class="space-y-6">
                  <div class="overflow-x-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-app)]">
                    <table class="w-full text-left border-collapse">
                      <thead>
                        <tr class="bg-[var(--bg-card)] text-[11px] uppercase font-extrabold tracking-wider text-[var(--text-secondary)] border-b border-[var(--border-color)]">
                          <th class="px-6 py-4">Loại thông báo</th>
                          <th class="px-6 py-4 text-center w-28">Website<br><span class="text-[9px] font-normal">(In-app)</span></th>
                          <th class="px-6 py-4 text-center w-28">Email<br><span class="text-[9px] font-normal">(Gửi thư)</span></th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-[var(--border-color)]">
                        <tr v-for="(setting, index) in settingsData" :key="index" class="hover:bg-[var(--bg-card)]/50 transition-colors">
                          <td class="px-6 py-4">
                            <p class="text-[13px] font-bold text-[var(--text-primary)] mb-0.5">{{ setting.title }}</p>
                            <p class="text-[11px] text-[var(--text-secondary)]">{{ setting.desc }}</p>
                          </td>
                          <td class="px-6 py-4">
                            <div class="flex justify-center">
                              <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" v-model="setting.inApp" class="sr-only peer">
                                <div class="w-9 h-5 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                              </label>
                            </div>
                          </td>
                          <td class="px-6 py-4">
                            <div class="flex justify-center">
                              <label class="relative inline-flex items-center cursor-pointer" :class="{'opacity-50 cursor-not-allowed': setting.emailLocked}">
                                <input type="checkbox" v-model="setting.email" :disabled="setting.emailLocked" class="sr-only peer">
                                <div class="w-9 h-5 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                              </label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl flex gap-4 mt-6">
                    <i class="fa-solid fa-circle-info text-blue-500 mt-0.5"></i>
                    <p class="text-[12px] text-[var(--text-secondary)]">Các thông báo mang tính hệ thống quan trọng (như Cảnh báo đăng nhập lạ, Hóa đơn thanh toán) sẽ luôn được gửi qua Email để đảm bảo an toàn tài khoản và không thể tắt.</p>
                  </div>

                </div>
              </div>
            </div>
          </Transition>

        </div>
      </div>
    </main>
  </div>

  <HomePageFooter />
</template>

<script setup>
import { ref, computed } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import HomePageFooter from '@/layouts/HomePageFooter.vue'

// Quản lý Tab/Menu
const activeMenu = ref('inbox')
const activeFilter = ref('all')

const filters = [
  { id: 'all', name: 'Tất cả' },
  { id: 'unread', name: 'Chưa đọc' },
  { id: 'learning', name: 'Học tập & Nhắc nhở' },
  { id: 'interaction', name: 'Tương tác (Q&A)' },
  { id: 'marketing', name: 'Khuyến mãi' }
]

// Mock Data: Danh sách thông báo
const notifications = ref([
  {
    id: 1, type: 'learning', read: false, link: '#',
    title: 'Khóa học Vue 3 vừa cập nhật bài mới',
    message: 'Giảng viên Thanh Sơn vừa thêm bài giảng "Tối ưu hóa SSR với Nuxt 3" vào chương 5. Vào xem ngay!',
    time: '30 phút trước', actionText: 'Học tiếp',
    icon: 'fa-solid fa-book-open', iconColor: 'text-blue-500', iconBg: 'text-blue-500/10'
  },
  {
    id: 2, type: 'interaction', read: false, link: '#',
    title: 'Giảng viên đã trả lời câu hỏi của bạn',
    message: 'Thầy Thanh Sơn vừa trả lời thắc mắc của bạn trong bài "Lifecycle Hooks".',
    time: '2 giờ trước', actionText: 'Xem câu trả lời',
    icon: 'fa-solid fa-reply', iconColor: 'text-purple-500', iconBg: 'text-purple-500/10'
  },
  {
    id: 3, type: 'reminder', read: true, link: '#',
    title: 'Đừng để đứt chuỗi học tập!',
    message: 'Bạn đang có chuỗi học 5 ngày liên tiếp. Hoàn thành 1 bài học bất kỳ hôm nay để duy trì ngọn lửa nhé!',
    time: 'Hôm qua', actionText: 'Duy trì chuỗi',
    icon: 'fa-solid fa-fire', iconColor: 'text-orange-500', iconBg: 'text-orange-500/10'
  },
  {
    id: 4, type: 'system', read: true, link: '#',
    title: 'Xác nhận thanh toán thành công',
    message: 'Biên lai cho hóa đơn mua khóa "DevOps Căn bản" đã được gửi về email của bạn.',
    time: '2 ngày trước', actionText: 'Xem hóa đơn',
    icon: 'fa-solid fa-file-invoice-dollar', iconColor: 'text-emerald-500', iconBg: 'text-emerald-500/10'
  },
  {
    id: 5, type: 'marketing', read: true, link: '#',
    title: 'Giảm giá 30% khóa học trong Wishlist!',
    message: 'Khóa học "PostgreSQL Nâng cao" bạn yêu thích đang được giảm giá. Ưu đãi kết thúc sau 24h.',
    time: 'Tuần trước', actionText: 'Xem khuyến mãi',
    icon: 'fa-solid fa-tags', iconColor: 'text-rose-500', iconBg: 'text-rose-500/10'
  }
])

const getCategoryName = (type) => {
  const map = {
    learning: 'Học tập',
    interaction: 'Tương tác',
    reminder: 'Nhắc nhở',
    system: 'Hệ thống',
    marketing: 'Khuyến mãi'
  }
  return map[type] || 'Khác'
}

// Logic Lọc & Xử lý trạng thái
const unreadTotal = computed(() => notifications.value.filter(n => !n.read).length)

const filteredNotifications = computed(() => {
  let result = notifications.value
  if (activeFilter.value === 'unread') return result.filter(n => !n.read)
  if (activeFilter.value === 'learning') return result.filter(n => n.type === 'learning' || n.type === 'reminder')
  if (activeFilter.value === 'interaction') return result.filter(n => n.type === 'interaction')
  if (activeFilter.value === 'marketing') return result.filter(n => n.type === 'marketing')
  return result // 'all'
})

const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true)
}

const markAsRead = (id) => {
  const notif = notifications.value.find(n => n.id === id)
  if (notif) notif.read = true
}

// Mock Data: Cài đặt thông báo
const settingsData = ref([
  { title: 'Học tập & Cập nhật', desc: 'Nhận thông báo khi khóa học có video, tài liệu mới.', inApp: true, email: true, emailLocked: false },
  { title: 'Tương tác (Q&A)', desc: 'Thông báo khi có người trả lời hoặc thích bình luận của bạn.', inApp: true, email: false, emailLocked: false },
  { title: 'Nhắc nhở & Động lực', desc: 'Nhắc nhở nộp bài tập, duy trì chuỗi học tập hàng ngày.', inApp: true, email: false, emailLocked: false },
  { title: 'Giao dịch & Hệ thống', desc: 'Hóa đơn thanh toán, cảnh báo bảo mật tài khoản.', inApp: true, email: true, emailLocked: true },
  { title: 'Khuyến mãi & Marketing', desc: 'Thông tin giảm giá khóa học, sự kiện nền tảng.', inApp: false, email: false, emailLocked: false }
])
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.custom-scrollbar::-webkit-scrollbar { height: 4px; width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 4px; }
</style>