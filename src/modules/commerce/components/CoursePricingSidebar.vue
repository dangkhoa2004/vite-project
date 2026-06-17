<template>
  <div class="sticky top-28 bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] shadow-xl p-6">
      <div class="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-4">
          <span class="text-[var(--text-secondary)] font-medium">Giá:</span>
          <span class="text-2xl font-extrabold text-[var(--text-primary)]">{{ price }}</span>
      </div>

      <ul class="space-y-4 mb-8 text-[14px]">
          <li class="flex justify-between items-center pb-3 border-b border-[var(--border-color)]">
              <span class="text-[var(--text-secondary)]"><i class="fa-solid fa-user-tie w-5"></i> Giảng viên</span>
              <a :href="`/giang-vien/${instructor.id}`" class="font-bold text-blue-400 hover:text-blue-500 transition-colors">
                  {{ instructor.name }}
              </a>
          </li>
          <li class="flex justify-between items-center pb-3 border-b border-[var(--border-color)]">
              <span class="text-[var(--text-secondary)]"><i class="fa-solid fa-star w-5"></i> Đánh giá</span>
              <div class="text-yellow-500 text-[12px]">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
              </div>
          </li>
          <li class="flex justify-between items-center pb-3 border-b border-[var(--border-color)]">
              <span class="text-[var(--text-secondary)]"><i class="fa-regular fa-clock w-5"></i> Thời lượng</span>
              <span class="font-medium text-[var(--text-primary)]">10 Ngày</span>
          </li>
          <li class="flex justify-between items-center pb-3 border-b border-[var(--border-color)]">
              <span class="text-[var(--text-secondary)]"><i class="fa-solid fa-book-open w-5"></i> Bài học</span>
              <span class="font-medium text-[var(--text-primary)]">30 Bài</span>
          </li>
          <li class="flex justify-between items-center pb-3 border-b border-[var(--border-color)]">
              <span class="text-[var(--text-secondary)]"><i class="fa-solid fa-certificate w-5"></i> Chứng chỉ</span>
              <span class="font-medium text-emerald-500">Có</span>
          </li>
          <li class="flex justify-between items-center">
              <span class="text-[var(--text-secondary)]"><i class="fa-solid fa-infinity w-5"></i> Truy cập</span>
              <span class="font-medium text-[var(--text-primary)]">Trọn đời</span>
          </li>
      </ul>

      <button class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 mb-3">
          Đăng ký học ngay
      </button>
      <button class="w-full py-3 bg-[var(--bg-app)] hover:bg-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-xl border border-[var(--border-color)] transition-all flex items-center justify-center gap-2">
          <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
      </button>

      <p class="text-center text-[12px] text-[var(--text-secondary)] mt-4">Cam kết hoàn tiền trong 7 ngày nếu không hài lòng.</p>
  </div>
</template>

<script setup>
defineProps({
    instructor: { type: Object, required: true },
    price: { type: String, default: '499.000đ' }
})
</script>