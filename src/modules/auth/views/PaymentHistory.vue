<!-- //PaymentHistory.vue -->
<!-- /src/modules/system/views/PaymentHistory.vue -->
<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[#0f1115] text-gray-200 font-sans relative overflow-hidden pb-20 pt-28">

        <!-- Hiệu ứng ánh sáng nền -->
        <div
            class="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none z-0">
        </div>

        <main class="relative z-10 max-w-7xl mx-auto px-6">

            <div class="mb-10">
                <h1 class="text-3xl font-extrabold text-white tracking-tight mb-2">Lịch sử thanh toán</h1>
                <p class="text-sm text-gray-400">Quản lý hóa đơn và theo dõi các giao dịch mua khóa học của em.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">

                <!-- SIDEBAR ĐIỀU HƯỚNG -->
                <aside
                    class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 overflow-hidden sticky top-28 shadow-xl">
                    <div class="p-6 border-b border-white/5 flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            K
                        </div>
                        <div>
                            <h3 class="text-[15px] font-bold text-white truncate w-32">Cao Đăng Khoa</h3>
                            <p class="text-[12px] text-gray-500">Học viên</p>
                        </div>
                    </div>

                    <SettingNavInformation />
                </aside>

                <!-- NỘI DUNG CHÍNH -->
                <div class="flex flex-col gap-6">

                    <!-- Thống kê tài chính nhanh -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div
                            class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-6 shadow-lg flex items-center gap-5">
                            <div
                                class="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-wallet"></i>
                            </div>
                            <div>
                                <p class="text-[13px] text-gray-400 font-medium mb-1">Tổng chi tiêu</p>
                                <h3 class="text-2xl font-extrabold text-white">1.049.000đ</h3>
                            </div>
                        </div>

                        <div
                            class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-6 shadow-lg flex items-center gap-5">
                            <div
                                class="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div>
                                <p class="text-[13px] text-gray-400 font-medium mb-1">Đã giao dịch</p>
                                <h3 class="text-2xl font-extrabold text-white">2 Khóa học</h3>
                            </div>
                        </div>
                    </div>

                    <!-- Danh sách giao dịch -->
                    <div
                        class="bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] border border-white/5 p-8 shadow-xl mt-2">
                        <h2 class="text-lg font-bold text-white mb-6">Lịch sử giao dịch</h2>

                        <div class="flex flex-col gap-4">

                            <!-- Transaction Item 1 -->
                            <div v-for="item in transactions" :key="item.id"
                                class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-black/20 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">

                                <div class="flex items-center gap-4">
                                    <div
                                        class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 text-lg shrink-0">
                                        <i class="fa-solid fa-file-invoice-dollar"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-[14px] font-bold text-gray-200 mb-1 leading-tight">{{
                                            item.courseName }}</h4>
                                        <div class="flex items-center gap-3 text-[12px] text-gray-500">
                                            <span>{{ item.date }}</span>
                                            <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
                                            <span>Mã: #{{ item.id }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 sm:pl-4 sm:border-l border-white/5 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0">
                                    <div class="flex flex-col items-start sm:items-end">
                                        <span class="text-[15px] font-extrabold text-white">{{ formatPrice(item.amount)
                                            }}</span>
                                        <span
                                            class="text-[11px] font-bold text-emerald-400 flex items-center gap-1 mt-1">
                                            <i class="fa-solid fa-circle-check"></i> Thành công
                                        </span>
                                    </div>

                                    <button
                                        class="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white text-gray-300 transition-colors flex items-center justify-center"
                                        title="Tải biên lai">
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
</template>

<script setup>
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import SettingNavInformation from '../components/SettingNavInformation.vue'
import { ref } from 'vue'

const transactions = ref([
    {
        id: 'TRX-98231',
        courseName: 'Frontend hiện đại hoàn chỉnh với Vue 3 & TypeScript',
        date: '16/06/2026',
        amount: 599000,
        status: 'success'
    },
    {
        id: 'TRX-54321',
        courseName: 'Làm chủ Cơ sở dữ liệu quan hệ PostgreSQL tối ưu',
        date: '10/05/2026',
        amount: 450000,
        status: 'success'
    }
])

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
</script>