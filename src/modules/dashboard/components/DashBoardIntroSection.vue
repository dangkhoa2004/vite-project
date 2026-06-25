<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <div
            class="bg-[var(--bg-card)]/60 backdrop-blur-md border border-[var(--border-color)] rounded-[32px] p-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:border-blue-500/20">
            <div
                class="w-full h-[260px] bg-gradient-to-br from-[#1c1e24] to-[#121418] rounded-[24px] mb-8 relative flex items-end justify-between p-6 overflow-hidden shadow-inner border border-white/5">
                <div
                    class="w-4 bg-white rounded-t-xl h-[40%] group-hover:h-[50%] transition-all duration-500 hover:bg-white/20 cursor-pointer">
                </div>
                <div
                    class="w-4 bg-white rounded-t-xl h-[60%] group-hover:h-[70%] transition-all duration-500 delay-75 hover:bg-white/20 cursor-pointer">
                </div>
                <div
                    class="w-4 bg-white rounded-t-xl h-[30%] group-hover:h-[40%] transition-all duration-500 delay-100 hover:bg-white/20 cursor-pointer">
                </div>
                <div
                    class="w-4 bg-white rounded-t-xl h-[80%] group-hover:h-[90%] transition-all duration-500 delay-150 hover:bg-white/20 cursor-pointer">
                </div>
                <div
                    class="w-4 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xl h-[50%] group-hover:h-[85%] transition-all duration-500 delay-200 shadow-[0_0_20px_rgba(34,211,238,0.4)] relative group/bar cursor-pointer">
                    <div
                        class="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                        Đỉnh!</div>
                </div>
                <div
                    class="w-4 bg-white rounded-t-xl h-[90%] group-hover:h-[60%] transition-all duration-500 delay-75 hover:bg-white/20 cursor-pointer">
                </div>
                <div
                    class="w-4 bg-white rounded-t-xl h-[70%] group-hover:h-[80%] transition-all duration-500 delay-100 hover:bg-white/20 cursor-pointer">
                </div>
                <div
                    class="w-4 bg-white rounded-t-xl h-[45%] group-hover:h-[30%] transition-all duration-500 delay-150 hover:bg-white/20 cursor-pointer">
                </div>
            </div>

            <div class="px-2">
                <h3 class="text-[var(--text-primary)] text-xl font-extrabold mb-1">Người dùng kích hoạt</h3>
                <p class="text-[var(--text-secondary)] text-sm mb-8"><span
                        class="text-emerald-500 font-bold">(+23%)</span>
                    so với tuần trước</p>
                <div class="grid grid-cols-4 gap-6">
                    <div v-for="item in activeStats" :key="item.label">
                        <div class="flex items-center gap-2 mb-2">
                            <div
                                class="w-7 h-7 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                                <i :class="item.icon" class="text-[11px]"></i>
                            </div>
                            <span class="text-[var(--text-secondary)] text-xs font-bold">{{ item.label }}</span>
                        </div>
                        <p class="text-[var(--text-primary)] text-xl font-extrabold mb-3">{{ item.value }}</p>
                        <div
                            class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] h-1.5 rounded-full overflow-hidden">
                            <div class="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                                :style="`width: ${item.progress}%`"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="bg-[var(--bg-card)]/60 backdrop-blur-md border border-[var(--border-color)] rounded-[32px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group hover:border-blue-500/20">
            <div class="flex justify-between items-center mb-8">
                <div>
                    <h3 class="text-[var(--text-primary)] text-xl font-extrabold mb-1">Công việc nhóm</h3>
                    <p class="text-[var(--text-secondary)] text-sm">Nhiệm vụ cần xử lý tuần này</p>
                </div>
                <button
                    class="text-blue-500 font-bold text-sm bg-blue-500/10 px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                    Xem tất cả
                </button>
            </div>

            <div class="flex-1 space-y-3">
                <div
                    class="flex items-start gap-4 p-4 rounded-2xl hover:bg-[var(--bg-app)] transition-colors border border-transparent hover:border-blue-500/20 group/item">
                    <input type="checkbox"
                        class="mt-1 w-4 h-4 text-blue-500 bg-[var(--bg-app)] border-[var(--border-color)] rounded focus:ring-blue-500 cursor-pointer">
                    <div class="flex-1">
                        <p
                            class="text-[var(--text-primary)] font-bold text-sm group-hover/item:text-blue-500 transition-colors">
                            Cập nhật nội dung Landing Page</p>
                        <p class="text-[var(--text-secondary)] text-xs mt-1.5">Hạn chót hôm nay • Team Marketing</p>
                    </div>
                    <span
                        class="px-2.5 py-1 bg-rose-500/10 text-rose-500 text-[10px] font-bold rounded-lg uppercase tracking-wider">Khẩn</span>
                </div>

                <div
                    class="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-app)]/50 border border-[var(--border-color)]">
                    <input type="checkbox" checked
                        class="mt-1 w-4 h-4 text-blue-500 bg-blue-500 border-blue-500 rounded focus:ring-blue-500 cursor-pointer">
                    <div class="flex-1">
                        <p class="text-[var(--text-secondary)] font-bold text-sm line-through decoration-2 opacity-70">
                            Sửa lỗi
                            điều hướng trên Mobile</p>
                        <p class="text-[var(--text-secondary)] text-xs mt-1.5 opacity-70">Đã xong • Team Kỹ thuật</p>
                    </div>
                </div>

                <div
                    class="flex items-start gap-4 p-4 rounded-2xl hover:bg-[var(--bg-app)] transition-colors border border-transparent hover:border-blue-500/20 group/item">
                    <input type="checkbox"
                        class="mt-1 w-4 h-4 text-blue-500 bg-[var(--bg-app)] border-[var(--border-color)] rounded focus:ring-blue-500 cursor-pointer">
                    <div class="flex-1">
                        <p
                            class="text-[var(--text-primary)] font-bold text-sm group-hover/item:text-blue-500 transition-colors">
                            Chuẩn bị báo cáo tài chính Q3</p>
                        <div
                            class="w-full bg-[var(--bg-app)] border border-[var(--border-color)] h-1.5 rounded-full mt-3 overflow-hidden">
                            <div class="bg-blue-500 h-full rounded-full" style="width: 40%"></div>
                        </div>
                        <p class="text-[var(--text-secondary)] text-xs mt-2">Hoàn thành 40%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const activeStats = ref([
    { label: 'Tài khoản', value: '32,984', progress: 60, icon: 'fa-solid fa-users' },
    { label: 'Lượt nhấp', value: '2.42m', progress: 80, icon: 'fa-solid fa-mouse-pointer' },
    { label: 'Giao dịch', value: '2,400$', progress: 30, icon: 'fa-solid fa-cart-shopping' },
    { label: 'Khóa học', value: '320', progress: 50, icon: 'fa-solid fa-layer-group' },
])
</script>