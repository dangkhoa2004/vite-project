<template>
  <div class="relative bg-[var(--bg-card)] rounded-[32px] border border-[var(--border-color)] p-12 text-center overflow-hidden mb-10 shadow-2xl transition-colors duration-300">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4 leading-tight">
            Đăng ký để nhận thông báo <br />về các khóa học mới nhất
          </h2>
          <p class="text-sm text-[var(--text-secondary)] mb-8">
            Hơn 20K+ học viên đang học tập mỗi ngày cùng EduPlatform. Hãy tham gia cùng chúng tôi.
          </p>

          <div class="flex items-center w-full max-w-md mx-auto bg-[var(--bg-app)] backdrop-blur-xl rounded-full p-1.5 border border-[var(--border-color)] focus-within:border-blue-500/50 transition-colors shadow-lg">
              <input type="email" placeholder="Nhập địa chỉ email của bạn..." 
                     class="flex-1 bg-transparent border-none text-[var(--text-primary)] text-sm px-5 focus:outline-none placeholder-[var(--text-secondary)]" />
              <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-[var(--text-primary)] font-bold rounded-full transition-all shadow-md">
                  Đăng ký ngay
              </button>
          </div>
      </div>
  </div>
</template>