<template>
  <div class="min-h-screen flex items-center justify-center bg-[var(--bg-app)] p-6 transition-colors duration-300">
    <div class="text-center">
      <h1 class="text-[120px] font-black text-[var(--text-primary)] opacity-10 select-none">
        404
      </h1>

      <div class="mt-[-80px]">
        <h2 class="text-3xl font-bold text-[var(--text-primary)] mb-4">
          Trang không tồn tại
        </h2>
        <p class="text-[var(--text-secondary)] mb-8 max-w-sm mx-auto">
          Xin lỗi, trang bạn đang tìm kiếm có thể đã bị xóa hoặc đường dẫn không đúng.
        </p>

        <button @click="goBack"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20">
          <i class="fa-solid fa-arrow-left"></i>
          Quay lại trang trước
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1) // Điều hướng về trang trước đó trong lịch sử duyệt web
}
</script>