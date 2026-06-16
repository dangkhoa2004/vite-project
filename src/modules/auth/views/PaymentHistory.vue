<template>
    <HomePageHeader />
    <div
        class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-28 transition-colors duration-300">

        <div
            class="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Lịch sử thanh toán
                </h1>
                <p class="text-sm text-[var(--text-secondary)]">Quản lý hóa đơn và theo dõi các giao dịch mua khóa học
                    của em.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">

                <aside
                    class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] overflow-hidden sticky top-28 shadow-xl">
                    <div class="p-6 border-b border-[var(--border-color)] flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-[var(--text-primary)] font-bold text-lg shadow-lg">
                            K</div>
                        <div>
                            <h3 class="text-[15px] font-bold text-[var(--text-primary)] truncate w-32">Cao Đăng Khoa
                            </h3>
                            <p class="text-[12px] text-[var(--text-secondary)]">Học viên</p>
                        </div>
                    </div>
                    <SettingNavInformation />
                </aside>

                <div class="flex flex-col gap-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div v-for="(stat, index) in stats" :key="index"
                            class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-6 shadow-lg flex items-center gap-5">
                            <div
                                :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-2xl', stat.bgClass]">
                                <i :class="stat.icon"></i>
                            </div>
                            <div>
                                <p class="text-[13px] text-[var(--text-secondary)] font-medium mb-1">{{ stat.label }}
                                </p>
                                <h3 class="text-2xl font-extrabold text-[var(--text-primary)]">{{ stat.value }}</h3>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-xl mt-2">
                        <h2 class="text-lg font-bold text-[var(--text-primary)] mb-6">Lịch sử giao dịch</h2>
                        <div class="flex flex-col gap-4">
                            <div v-for="item in transactions" :key="item.id"
                                class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-[var(--bg-app)]/50 rounded-2xl border border-[var(--border-color)] transition-colors">
                                <div class="flex items-center gap-4">
                                    <div
                                        class="w-12 h-12 rounded-xl bg-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] text-lg shrink-0">
                                        <i class="fa-solid fa-file-invoice-dollar"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-[14px] font-bold text-[var(--text-primary)] mb-1">{{
                                            item.courseName }}</h4>
                                        <div class="flex items-center gap-3 text-[12px] text-[var(--text-secondary)]">
                                            <span>{{ item.date }}</span>
                                            <span class="w-1 h-1 bg-[var(--text-secondary)] rounded-full"></span>
                                            <span>Mã: #{{ item.id }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 sm:pl-4 sm:border-l border-[var(--border-color)] mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0">
                                    <div class="flex flex-col items-start sm:items-end">
                                        <span class="text-[15px] font-extrabold text-[var(--text-primary)]">{{
                                            formatPrice(item.amount) }}</span>
                                        <span
                                            class="text-[11px] font-bold text-emerald-500 flex items-center gap-1 mt-1">
                                            <i class="fa-solid fa-circle-check"></i> Thành công
                                        </span>
                                    </div>
                                    <button
                                        class="w-10 h-10 rounded-full bg-[var(--border-color)] hover:bg-blue-500 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center justify-center">
                                        <i class="fa-solid fa-download text-[14px]"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <HomePageFooter />
</template>

<script setup>
import { ref } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import HomePageFooter from '@/layouts/HomePageFooter.vue'
import SettingNavInformation from '../components/SettingNavInformation.vue'

const stats = [
    { label: 'Tổng chi tiêu', value: '1.049.000đ', icon: 'fa-solid fa-wallet', bgClass: 'bg-emerald-500/10 text-emerald-500' },
    { label: 'Đã giao dịch', value: '2 Khóa học', icon: 'fa-solid fa-cart-shopping', bgClass: 'bg-blue-500/10 text-blue-500' }
]

const transactions = ref([
    { id: 'TRX-98231', courseName: 'Frontend hiện đại hoàn chỉnh với Vue 3 & TypeScript', date: '16/06/2026', amount: 599000 },
    { id: 'TRX-54321', courseName: 'Làm chủ Cơ sở dữ liệu quan hệ PostgreSQL tối ưu', date: '10/05/2026', amount: 450000 }
])

const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
</script>