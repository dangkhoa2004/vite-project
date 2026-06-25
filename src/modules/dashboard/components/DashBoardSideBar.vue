<template>
    <aside
        class="w-[260px] bg-[var(--bg-card)]/80 backdrop-blur-xl border-r border-[var(--border-color)] flex-col hidden lg:flex fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div class="px-6 py-6 flex flex-col gap-5 border-b border-[var(--border-color)]">
            <a href="/"
                class="group flex items-center gap-2.5 w-fit text-[var(--text-secondary)] hover:text-blue-500 text-xs font-bold transition-colors">
                <div
                    class="w-7 h-7 rounded-lg bg-[var(--bg-app)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all shadow-sm">
                    <i class="fa-solid fa-arrow-left text-[10px] transition-transform group-hover:-translate-x-0.5"></i>
                </div>
                TRỞ VỀ TRANG CHỦ
            </a>

            <h1 class="flex items-center gap-3 text-[var(--text-primary)] cursor-default mt-2">
                <div
                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-[0_4px_15px_rgba(37,99,235,0.3)] shrink-0 transition-transform hover:scale-105">
                    <i class="fa-solid fa-cube text-xl"></i>
                </div>
                <div class="flex flex-col">
                    <span
                        class="font-extrabold tracking-widest text-sm uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Edu
                        Platform</span>
                    <span class="text-[10px] text-[var(--text-secondary)] font-medium mt-0.5 uppercase tracking-wider">
                        Bởi <span class="font-bold text-[var(--text-primary)]">Đăng Khoa</span>
                    </span>
                </div>
            </h1>
        </div>

        <div class="flex-1 overflow-y-auto py-8 px-5 custom-scrollbar">
            <ul class="space-y-2 mb-10">
                <li>
                    <a href="#"
                        class="group flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all hover:bg-blue-500/10 hover:text-blue-500 text-[var(--text-primary)]">
                        <div
                            class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-[0_4px_10px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-house text-xs"></i>
                        </div>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="group flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all hover:bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <div
                            class="w-8 h-8 rounded-xl bg-[var(--bg-app)] border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center justify-center group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-app)] transition-colors">
                            <i class="fa-solid fa-chart-simple text-xs"></i>
                        </div>
                        Analytics
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="group flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all hover:bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <div
                            class="w-8 h-8 rounded-xl bg-[var(--bg-app)] border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center justify-center group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-app)] transition-colors">
                            <i class="fa-solid fa-credit-card text-xs"></i>
                        </div>
                        Billing
                    </a>
                </li>
            </ul>

            <h3 class="px-5 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-4">Account Pages
            </h3>
            <ul class="space-y-2">
                <li>
                    <a href="#"
                        class="group flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all hover:bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <div
                            class="w-8 h-8 rounded-xl bg-[var(--bg-app)] border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center justify-center group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-app)] transition-colors">
                            <i class="fa-solid fa-user text-xs"></i>
                        </div>
                        Profile
                    </a>
                </li>
            </ul>
        </div>

        <div class="p-5">
            <div
                class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[24px] p-6 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] relative overflow-hidden group transition-all duration-300">
                <div
                    class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all">
                </div>
                <div class="relative z-10">
                    <div
                        class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/10 shadow-inner">
                        <i class="fa-solid fa-circle-question text-lg"></i>
                    </div>
                    <h4 class="font-extrabold text-base mb-1">Cần hỗ trợ?</h4>
                    <p class="text-xs text-blue-100 mb-5 leading-relaxed">Xem tài liệu hướng dẫn chi tiết của chúng tôi.
                    </p>
                    <button
                        class="w-full bg-white text-blue-600 text-xs font-extrabold py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                        XEM TÀI LIỆU
                    </button>
                </div>
            </div>
        </div>
    </aside>
</template>