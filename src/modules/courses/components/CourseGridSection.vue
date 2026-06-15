<template>
  <section class="flex flex-col items-center">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-white mb-4">Bài học chất lượng cho học viên</h2>
      <p class="text-sm text-gray-400 mb-8 max-w-xl mx-auto">
        Lộ trình học tập được thiết kế chuẩn mực cho từng cấp độ, giúp bạn đi từ cơ bản đến chuyên sâu.
      </p>
      
      <div class="flex justify-center gap-4">
        <button class="px-6 py-2 rounded-full text-sm font-medium bg-transparent text-gray-400 hover:text-white transition-colors">Mẫu giáo</button>
        <button class="px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/20">Trung học</button>
        <button class="px-6 py-2 rounded-full text-sm font-medium bg-transparent text-gray-400 hover:text-white transition-colors">Đại học</button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
      <div v-for="i in 8" :key="i" class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] p-6 border border-white/5 hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center text-center group">
        
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
          {{ i }}
        </div>
        
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Tiêu chuẩn {{ ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám'][i-1] }}</h3>
        <p class="text-xs text-gray-500 mb-6 flex-1 leading-relaxed">
          Tài liệu chuẩn hóa giúp học viên tiếp thu kiến thức nền tảng một cách dễ dàng và hiệu quả nhất.
        </p>
        
        <button class="w-full py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors group-hover:border-blue-500/50 group-hover:text-blue-400">
          Chi tiết lớp học
        </button>
      </div>
    </div>

    <button class="px-8 py-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all shadow-[0_4px_20px_rgba(37,99,235,0.2)]">
      Xem thêm các lớp học
    </button>
  </section>
</template>