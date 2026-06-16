<template>
  <section class="flex flex-col items-center">
    <div class="text-center max-w-2xl mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Video, âm thanh chất lượng cao & lớp học trực tiếp</h2>
      <p class="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
        Trải nghiệm học tập mượt mà với chất lượng âm thanh và hình ảnh sắc nét. Tương tác trực tiếp cùng giảng viên chuyên gia qua các lớp học trực tuyến.
      </p>
      <button class="px-6 py-2.5 bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all">
        Khám phá ngay
      </button>
    </div>

    <div class="relative w-full max-w-4xl aspect-[21/9] bg-[var(--bg-card)] rounded-[32px] border border-[var(--border-color)] shadow-2xl p-2 mb-8 group cursor-pointer">
      <div class="w-full h-full rounded-[24px] overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Lớp học qua video" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div class="w-20 h-20 bg-blue-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl shadow-[0_0_30px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-play ml-1"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-6">
      <div class="flex items-center gap-3 bg-[var(--bg-card)]/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-[var(--border-color)] hover:border-blue-500/30 transition-all">
        <div class="w-10 h-10 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center text-lg"><i class="fa-solid fa-volume-high"></i></div>
        <span class="font-bold text-[var(--text-primary)]">Lớp học qua âm thanh</span>
      </div>
      <div class="flex items-center gap-3 bg-[var(--bg-card)]/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-[var(--border-color)] hover:border-purple-500/30 transition-all">
        <div class="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg"><i class="fa-solid fa-video"></i></div>
        <span class="font-bold text-[var(--text-primary)]">Lớp học trực tiếp</span>
      </div>
      <div class="flex items-center gap-3 bg-[var(--bg-card)]/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-[var(--border-color)] hover:border-emerald-500/30 transition-all">
        <div class="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg"><i class="fa-solid fa-circle-play"></i></div>
        <span class="font-bold text-[var(--text-primary)]">Lớp học ghi hình sẵn</span>
      </div>
    </div>
  </section>
</template>