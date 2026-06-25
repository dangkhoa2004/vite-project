<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
            class="lg:col-span-2 bg-[var(--bg-card)]/60 backdrop-blur-md border border-[var(--border-color)] rounded-[32px] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex justify-between items-center mb-8">
                <div>
                    <h3 class="text-[var(--text-primary)] text-xl font-extrabold mb-1">Dự án hiện tại</h3>
                    <p class="text-[var(--text-secondary)] text-sm flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
                        <span class="text-[var(--text-primary)] font-bold">30 dự án</span> hoàn thành tháng này
                    </p>
                </div>
                <button
                    class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-[var(--bg-app)] text-[var(--text-secondary)] transition-colors">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr class="border-b border-[var(--border-color)]">
                            <th
                                class="pb-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider w-1/3">
                                Dự
                                án</th>
                            <th
                                class="pb-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                                Thành
                                viên</th>
                            <th
                                class="pb-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider text-center">
                                Ngân sách</th>
                            <th
                                class="pb-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider text-right pr-4">
                                Tiến độ</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr v-for="project in projects" :key="project.id"
                            class="border-b border-[var(--border-color)] last:border-0 hover:bg-[var(--bg-app)]/50 transition-colors group">
                            <td class="py-4 font-bold text-[var(--text-primary)] flex items-center gap-4">
                                <div
                                    class="w-10 h-10 rounded-xl bg-[var(--bg-app)] border border-[var(--border-color)] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-blue-500/30 transition-all">
                                    <i :class="project.icon" :style="`color: ${project.color}`" class="text-xl"></i>
                                </div>
                                {{ project.name }}
                            </td>
                            <td class="py-4">
                                <div class="flex -space-x-3">
                                    <img v-for="i in 4" :key="i"
                                        :src="`https://ui-avatars.com/api/?name=U${i}&background=random`"
                                        class="w-8 h-8 rounded-full border-2 border-[var(--bg-card)] hover:z-10 hover:scale-110 transition-transform cursor-pointer shadow-md" />
                                </div>
                            </td>
                            <td class="py-4 text-[var(--text-secondary)] font-bold text-center">{{ project.budget }}
                            </td>
                            <td class="py-4 pr-4">
                                <div class="flex flex-col items-end gap-1.5 w-full">
                                    <span class="text-blue-500 font-extrabold text-xs">{{ project.completion }}%</span>
                                    <div
                                        class="w-full max-w-[120px] bg-[var(--bg-app)] border border-[var(--border-color)] h-1.5 rounded-full overflow-hidden">
                                        <div class="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full relative"
                                            :style="`width: ${project.completion}%`">
                                            <div class="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div
            class="bg-[var(--bg-card)]/60 backdrop-blur-md border border-[var(--border-color)] rounded-[32px] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 class="text-[var(--text-primary)] text-xl font-extrabold mb-1">Tổng quan đơn hàng</h3>
            <p class="text-[var(--text-secondary)] text-sm mb-8"><span class="text-emerald-500 font-bold">+30%</span>
                trong tháng này</p>

            <div class="relative border-l-2 border-[var(--border-color)] ml-3 space-y-8">
                <div v-for="(order, index) in orders" :key="index" class="relative pl-6 group">
                    <div
                        class="absolute -left-[13px] top-0.5 w-6 h-6 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-color)] flex items-center justify-center group-hover:scale-125 transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] z-10">
                        <i :class="order.icon" :style="`color: ${order.color}`" class="text-[10px]"></i>
                    </div>
                    <h4
                        class="text-[var(--text-primary)] font-bold text-sm group-hover:text-blue-500 transition-colors cursor-pointer">
                        {{ order.title }}</h4>
                    <p class="text-[var(--text-secondary)] text-xs font-semibold mt-1.5 opacity-70">{{ order.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'


const projects = ref([
    { id: 1, name: 'Tối ưu UI/UX Web', budget: '$14,000', completion: 60, icon: 'fa-brands fa-figma', color: '#f24e1e' },
    { id: 2, name: 'Hệ thống Tracking', budget: '$3,000', completion: 10, icon: 'fa-brands fa-atlassian', color: '#0052cc' },
    { id: 3, name: 'Sửa lỗi Backend', budget: 'Chưa chốt', completion: 100, icon: 'fa-brands fa-node-js', color: '#16a34a' },
    { id: 4, name: 'Ra mắt Mobile App', budget: '$32,000', completion: 100, icon: 'fa-brands fa-apple', color: '#9ca3af' },
    { id: 5, name: 'Cập nhật bảng giá', budget: '$400', completion: 25, icon: 'fa-solid fa-money-check-dollar', color: '#0ea5e9' },
])

const orders = ref([
    { title: '$2400, Thay đổi giao diện', date: '22 THG 12, 7:20 PM', icon: 'fa-solid fa-bell', color: '#10b981' },
    { title: 'Đơn hàng mới #4219423', date: '21 THG 12, 11:21 PM', icon: 'fa-brands fa-html5', color: '#f43f5e' },
    { title: 'Thanh toán Server T4', date: '21 THG 12, 9:28 PM', icon: 'fa-solid fa-server', color: '#3b82f6' },
    { title: 'Thêm thẻ cho đơn #3210145', date: '20 THG 12, 3:52 PM', icon: 'fa-regular fa-credit-card', color: '#eab308' },
    { title: 'Mở khóa gói Development', date: '19 THG 12, 11:35 PM', icon: 'fa-solid fa-box-open', color: '#8b5cf6' },
])
</script>