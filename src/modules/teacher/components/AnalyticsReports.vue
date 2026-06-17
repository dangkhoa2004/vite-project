<template>
    <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-br from-blue-600/10 via-[var(--bg-app)] to-[var(--bg-app)] border border-[var(--border-color)] p-6 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div class="flex justify-between items-start mb-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-xl shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                        <i class="fa-solid fa-wallet"></i>
                    </div>
                    <span class="px-2.5 py-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[10px] font-bold text-[var(--text-secondary)] rounded-md">Tháng này</span>
                </div>
                <div>
                    <p class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Doanh thu tạm tính</p>
                    <p class="text-3xl font-extrabold text-[var(--text-primary)]">12.450k</p>
                    <div class="mt-3 inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                        <i class="fa-solid fa-arrow-trend-up text-emerald-500 text-[10px]"></i>
                        <span class="text-[11px] font-bold text-emerald-500">+15.2%</span>
                        <span class="text-[10px] text-[var(--text-secondary)]">vs tháng trước</span>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-purple-600/10 via-[var(--bg-app)] to-[var(--bg-app)] border border-[var(--border-color)] p-6 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(168,85,247,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div class="flex justify-between items-start mb-4">
                    <div class="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center text-xl shadow-[0_4px_12px_rgba(168,85,247,0.3)]">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <span class="px-2.5 py-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[10px] font-bold text-[var(--text-secondary)] rounded-md">Toàn thời gian</span>
                </div>
                <div>
                    <p class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Tổng học viên mới</p>
                    <p class="text-3xl font-extrabold text-[var(--text-primary)]">342</p>
                    <div class="mt-3 inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                        <i class="fa-solid fa-arrow-trend-up text-emerald-500 text-[10px]"></i>
                        <span class="text-[11px] font-bold text-emerald-500">+24</span>
                        <span class="text-[10px] text-[var(--text-secondary)]">tài khoản mới tuần này</span>
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-br from-orange-600/10 via-[var(--bg-app)] to-[var(--bg-app)] border border-[var(--border-color)] p-6 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(249,115,22,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div class="flex justify-between items-start mb-4">
                    <div class="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center text-xl shadow-[0_4px_12px_rgba(249,115,22,0.3)]">
                        <i class="fa-solid fa-chart-pie"></i>
                    </div>
                    <span class="px-2.5 py-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[10px] font-bold text-[var(--text-secondary)] rounded-md">Trung bình</span>
                </div>
                <div>
                    <p class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Hoàn thành khóa học</p>
                    <p class="text-3xl font-extrabold text-[var(--text-primary)]">45%</p>
                    <div class="mt-3 inline-flex items-center gap-1.5 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-md">
                        <i class="fa-solid fa-arrow-trend-down text-red-500 text-[10px]"></i>
                        <span class="text-[11px] font-bold text-red-500">-2.4%</span>
                        <span class="text-[10px] text-[var(--text-secondary)]">vs tháng trước</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="border border-[var(--border-color)] bg-[var(--bg-app)] rounded-2xl p-7 shadow-sm relative overflow-hidden">
            <div class="absolute right-0 top-0 w-48 h-48 bg-red-500/5 rounded-bl-[100px] pointer-events-none"></div>
            
            <div class="flex items-start gap-4 mb-8 relative z-10">
                <div class="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                </div>
                <div>
                    <h3 class="text-[16px] font-bold text-[var(--text-primary)]">Cảnh báo điểm nghẽn học tập (Drop-off)</h3>
                    <p class="text-[12px] text-[var(--text-secondary)] mt-1">Những bài học có tỷ lệ sinh viên xem đến giữa chừng rồi thoát cao nhất. Hãy xem xét tinh chỉnh lại độ dài video hoặc cách giải thích.</p>
                </div>
            </div>
            
            <div class="space-y-6 relative z-10">
                <div v-for="(item, idx) in dropoffStats" :key="idx" class="relative group">
                    <div class="flex justify-between items-end mb-2">
                        <span class="text-[13px] font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">{{ item.lesson }}</span>
                        <div class="flex flex-col items-end">
                            <span class="text-red-500 font-extrabold text-[16px]">{{ item.rate }}%</span>
                            <span class="text-[10px] uppercase font-bold text-[var(--text-secondary)]">rời bỏ</span>
                        </div>
                    </div>
                    <div class="w-full h-3 bg-[var(--bg-card)] rounded-full overflow-hidden border border-[var(--border-color)] shadow-inner">
                        <div class="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full transition-all duration-1000 ease-out" :style="{ width: item.rate + '%' }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const dropoffStats = [
    { lesson: 'Chương 3 - Bài 4: Xử lý Middleware trong Vue Router', rate: 42 },
    { lesson: 'Chương 2 - Bài tập: Build To-do App', rate: 28 },
    { lesson: 'Chương 4 - Bài 1: Cấu hình Pinia Store', rate: 15 },
];
</script>