<template>
    <header class="flex flex-col mb-10 gap-2">
        <div class="text-[var(--text-secondary)] text-sm font-medium flex items-center gap-2">
            <i class="fa-solid fa-house text-[10px] opacity-70"></i>
            <span class="opacity-70">Pages</span>
            <span class="mx-1 text-xs opacity-50">/</span>
            <span class="text-[var(--text-primary)] font-bold">Dashboard</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">Trang tổng quan</h2>
    </header>

    <div class="flex flex-wrap gap-4 mb-10">
        <button
            class="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold rounded-xl shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <i class="fa-solid fa-plus"></i> Dự án mới
        </button>
        <button
            class="px-6 py-2.5 bg-[var(--bg-card)]/80 backdrop-blur-md text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-bold rounded-xl hover:bg-[var(--bg-app)] hover:border-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-sm group">
            <i
                class="fa-solid fa-file-export text-[var(--text-secondary)] group-hover:text-blue-500 transition-colors"></i>
            Xuất báo cáo
        </button>
        <button
            class="px-6 py-2.5 bg-[var(--bg-card)]/80 backdrop-blur-md text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-bold rounded-xl hover:bg-[var(--bg-app)] hover:border-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-sm group">
            <i class="fa-solid fa-users text-[var(--text-secondary)] group-hover:text-blue-500 transition-colors"></i>
            Quản lý nhóm
        </button>
    </div>
</template>