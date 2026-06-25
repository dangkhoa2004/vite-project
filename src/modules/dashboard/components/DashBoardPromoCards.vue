<template>
    <div
        class="bg-[var(--bg-card)] rounded-[32px] shadow-sm relative overflow-hidden min-h-[280px] group border border-[var(--border-color)] hover:shadow-xl transition-all duration-300">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent"></div>
        <div class="absolute inset-0 p-8 flex flex-col justify-end">
            <div>
                <span
                    class="inline-block px-3 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest mb-3">Tầm
                    nhìn</span>
                <h3 class="text-white text-2xl font-extrabold mb-3">Cùng phát triển bứt phá</h3>
                <p class="text-white/80 text-sm max-w-md leading-relaxed mb-6">Tạo ra giá trị là một cuộc chơi tổng
                    dương.
                    Thành công thuộc về những người biết nắm bắt cơ hội học hỏi đầu tiên.</p>
            </div>
            <a href="#"
                class="text-black font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all w-fit bg-white px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/20">
                Tìm hiểu thêm <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
        </div>
    </div>
</template>