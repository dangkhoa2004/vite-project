<template>
  <section class="w-full">
    <div class="relative bg-gradient-to-br from-[#1c1e24] to-[#121418] rounded-[40px] border border-white/10 p-10 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
      
      <div class="absolute right-0 top-0 w-[40%] h-full bg-blue-600/5 blur-[80px] pointer-events-none"></div>

      <div class="relative z-10 flex-1 max-w-lg">
        <span class="inline-block px-4 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          Cấp độ Đại học
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Đừng lãng phí thời gian. <br/>
          Hãy phát triển kỹ năng.
        </h2>
        <p class="text-sm text-white leading-relaxed mb-8">
          Hàng ngàn giờ học video chất lượng cao từ các chuyên gia hàng đầu. Bắt đầu hành trình nâng cao năng lực của bạn ngay hôm nay.
        </p>
        <button class="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)]">
          Đăng ký ngay
        </button>
      </div>

      <div class="relative z-10 flex-1 flex justify-center md:justify-end">
        <div class="relative w-full max-w-[400px]">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Làm việc trên laptop" class="w-full h-auto rounded-[24px] border border-white/10 shadow-2xl relative z-10" />
          
          <div class="absolute -left-6 top-1/4 z-20 w-12 h-12 bg-[#1c1e24] rounded-xl border border-white/10 flex items-center justify-center text-orange-400 text-xl shadow-lg">
            <i class="fa-brands fa-html5"></i>
          </div>
          <div class="absolute -right-6 bottom-1/4 z-20 w-12 h-12 bg-[#1c1e24] rounded-xl border border-white/10 flex items-center justify-center text-blue-400 text-xl shadow-lg">
            <i class="fa-brands fa-react"></i>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>