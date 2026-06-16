<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div class="flex flex-col items-start z-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-6 tracking-wide uppercase">
        Không bao giờ ngừng học hỏi
      </div>
      
      <h1 class="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-6 leading-[1.1] tracking-tight">
        Phát triển kỹ năng <br/>
        qua các khóa học trực tuyến <br/>
        cùng <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">EduPlatform</span>
      </h1>
      
      <p class="text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-lg">
        Nền tảng học trực tuyến cung cấp các khóa học chất lượng cao, giúp bạn nâng cao kỹ năng lập trình dễ dàng và linh hoạt ở bất cứ đâu.
      </p>

      <div class="flex items-center w-full max-w-md bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-full p-1.5 border border-[var(--border-color)] shadow-lg shadow-blue-500/5">
        <div class="px-4 text-[var(--text-secondary)] border-r border-[var(--border-color)] flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-sm"></i>
          <span class="text-sm">Danh mục</span>
        </div>
        <input 
          type="text" 
          placeholder="Tìm kiếm khóa học..." 
          class="flex-1 bg-transparent border-none text-[var(--text-primary)] text-sm px-4 focus:outline-none placeholder-[var(--text-secondary)]"
        />
        <button class="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-[var(--text-primary)] font-semibold rounded-full transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)]">
          Tìm kiếm
        </button>
      </div>
    </div>

    <div class="relative w-full h-[500px] flex justify-center items-center">
      <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-[40px] transform rotate-3 scale-95 blur-sm z-0"></div>
      
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
        alt="Học viên đang học" 
        class="relative z-10 w-full h-full object-cover rounded-[32px] border border-[var(--border-color)] shadow-2xl"
      />

      <div class="absolute top-10 -left-6 z-20 w-14 h-14 bg-[var(--bg-card)]/90 backdrop-blur-md rounded-2xl border border-[var(--border-color)] flex items-center justify-center text-blue-400 text-2xl shadow-xl animate-bounce" style="animation-duration: 3s;">
        <i class="fa-solid fa-book-open"></i>
      </div>
      <div class="absolute bottom-20 -right-6 z-20 w-16 h-16 bg-[var(--bg-card)]/90 backdrop-blur-md rounded-2xl border border-[var(--border-color)] flex items-center justify-center text-yellow-400 text-3xl shadow-xl animate-bounce" style="animation-duration: 4s; animation-delay: 1s;">
        <i class="fa-solid fa-lightbulb"></i>
      </div>
    </div>
  </section>
</template>