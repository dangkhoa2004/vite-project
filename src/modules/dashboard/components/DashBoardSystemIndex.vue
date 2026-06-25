<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div v-for="stat in stats" :key="stat.title"
            class="bg-[var(--bg-card)]/60 backdrop-blur-md border border-[var(--border-color)] rounded-[24px] p-6 flex justify-between items-center shadow-sm hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] transition-all duration-300 cursor-pointer group">
            <div>
                <p class="text-[var(--text-secondary)] text-xs font-bold mb-2 uppercase tracking-wider">{{ stat.title }}
                </p>
                <h3 class="text-[var(--text-primary)] text-2xl font-extrabold flex items-center gap-2">
                    {{ stat.value }}
                    <span
                        :class="stat.trend > 0 ? 'text-emerald-500 bg-emerald-500/10' : 'text-rose-500 bg-rose-500/10'"
                        class="text-[11px] px-2 py-0.5 rounded-md font-bold">
                        {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
                    </span>
                </h3>
            </div>
            <div
                class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-[0_4px_15px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform duration-300">
                <i :class="stat.icon" class="text-2xl"></i>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const stats = ref([
    { title: "Doanh thu hôm nay", value: "$53,000", trend: 55, icon: "fa-solid fa-wallet" },
    { title: "Người dùng", value: "2,300", trend: 5, icon: "fa-solid fa-users-viewfinder" },
    { title: "Khách hàng mới", value: "+3,052", trend: -14, icon: "fa-solid fa-user-plus" },
    { title: "Tổng doanh số", value: "$173,000", trend: 8, icon: "fa-solid fa-chart-line" },
])</script>