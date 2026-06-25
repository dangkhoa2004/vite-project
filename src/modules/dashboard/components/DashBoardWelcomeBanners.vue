<template>
    <div
        class="bg-[var(--bg-card)]/60 backdrop-blur-md border border-[var(--border-color)] rounded-[32px] p-8 shadow-sm flex flex-col sm:flex-row justify-between gap-8 hover:shadow-lg transition-all duration-300 hover:border-blue-500/20 group">
        <div class="flex flex-col justify-center max-w-[280px]">
            <div>
                <span
                    class="inline-block px-3 py-1 rounded-md bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-3">Dành
                    cho lập trình viên</span>
                <h3
                    class="text-[var(--text-primary)] text-2xl font-extrabold mb-3 group-hover:text-blue-500 transition-colors">
                    Edu UI Dashboard</h3>
                <p class="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">Hệ thống thành phần giao diện,
                    typography và card phức tạp được thiết kế chuẩn mực.</p>
            </div>
            <a href="#"
                class="text-[var(--text-primary)] font-bold text-sm flex items-center gap-2 hover:gap-3 hover:text-blue-500 transition-all w-fit">
                Đọc tài liệu <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
        </div>
        <div
            class="w-full sm:w-5/12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[24px] flex items-center justify-center p-8 shadow-inner min-h-[220px] relative overflow-hidden cursor-pointer">
            <div
                class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay">
            </div>
            <div
                class="text-white text-4xl font-extrabold flex items-center gap-3 relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                <i class="fa-solid fa-rocket"></i> VUE
            </div>
        </div>
    </div>
</template>