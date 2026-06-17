<template>
  <section class="flex flex-col items-center">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-[var(--text-primary)] mb-4">Bài học chất lượng cho học viên</h2>
      <p class="text-sm text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
        Lộ trình học tập được thiết kế chuẩn mực cho từng cấp độ, giúp bạn đi từ cơ bản đến chuyên sâu.
      </p>

      <div class="flex justify-center gap-4">
        <button
          class="px-6 py-2 rounded-full text-sm font-medium bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Mẫu
          giáo</button>
        <button
          class="px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/20">Trung
          học</button>
        <button
          class="px-6 py-2 rounded-full text-sm font-medium bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Đại
          học</button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
      <div v-for="item in courseStandards" :key="item.id"
        class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] p-6 border border-[var(--border-color)] hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col items-center text-center group">

        <div
          :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br', item.color]">
          <i :class="item.icon"></i>
        </div>

        <h3 class="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-blue-400 transition-colors">
          {{ item.title }}
        </h3>

        <p class="text-xs text-[var(--text-secondary)] mb-6 flex-1 leading-relaxed">
          {{ item.description }}
        </p>

        <button
          class="w-full py-2.5 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] text-sm font-medium hover:bg-[var(--bg-app)] hover:text-blue-500 hover:border-blue-500/50 transition-all group-hover:shadow-sm">
          Chi tiết lớp học
        </button>
      </div>
    </div>

    <button
      class="px-8 py-3 bg-blue-600/10 text-blue-500 font-bold border border-blue-500/20 hover:bg-blue-600 hover:text-white rounded-full transition-all shadow-[0_4px_20px_rgba(37,99,235,0.1)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
      Xem thêm các lớp học
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const courseStandards = ref([
  {
    id: 1,
    title: 'Lập trình Cơ bản',
    description: 'Xây dựng tư duy logic và làm quen với các khái niệm cốt lõi thông qua các ngôn ngữ lập trình phổ biến.',
    icon: 'fa-solid fa-laptop-code',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 2,
    title: 'Thiết kế Giao diện',
    description: 'Nắm vững UI/UX, HTML/CSS và các framework như Tailwind, Bootstrap để tạo ra các trang web tuyệt đẹp.',
    icon: 'fa-solid fa-wand-magic-sparkles',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Kiến trúc Backend',
    description: 'Làm chủ hệ thống máy chủ, API và logic xử lý nghiệp vụ với Node.js, Python hoặc Java.',
    icon: 'fa-solid fa-server',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 4,
    title: 'Cơ sở dữ liệu',
    description: 'Thiết kế, tối ưu hóa và quản lý truy vấn dữ liệu lớn với PostgreSQL, MySQL hoặc MongoDB.',
    icon: 'fa-solid fa-database',
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 5,
    title: 'DevOps & Đám mây',
    description: 'Tự động hóa quy trình triển khai CI/CD và quản lý hạ tầng đám mây trên AWS, Google Cloud.',
    icon: 'fa-solid fa-cloud-arrow-up',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 6,
    title: 'Bảo mật Hệ thống',
    description: 'Tìm hiểu các lỗ hổng bảo mật web phổ biến (OWASP) và cách phòng chống hacker tấn công.',
    icon: 'fa-solid fa-shield-halved',
    color: 'from-red-500 to-rose-600'
  },
  {
    id: 7,
    title: 'Thuật toán Tối ưu',
    description: 'Rèn luyện kỹ năng giải quyết vấn đề bằng Cấu trúc dữ liệu và Thuật toán để vượt qua phỏng vấn.',
    icon: 'fa-solid fa-network-wired',
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 8,
    title: 'Dự án Thực chiến',
    description: 'Áp dụng toàn bộ kiến thức vào xây dựng một sản phẩm hoàn chỉnh để đưa vào Portfolio của bạn.',
    icon: 'fa-solid fa-rocket',
    color: 'from-indigo-500 to-purple-600'
  }
])
</script>