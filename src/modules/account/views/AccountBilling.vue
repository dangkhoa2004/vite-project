<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-28">
        <main class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="mb-10">
                <h1 class="text-3xl font-extrabold tracking-tight mb-2">Quản lý Tài chính</h1>
                <p class="text-sm text-[var(--text-secondary)]">Lịch sử mua khóa học, thông tin xuất hóa đơn và phương thức thanh toán.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
                <aside class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] overflow-hidden sticky top-28 shadow-xl">
                    <SettingsNav />
                </aside>

                <div class="space-y-8">
                    <div class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-6 md:p-8 shadow-sm">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <h2 class="text-lg font-bold flex items-center gap-2"><i class="fa-solid fa-clock-rotate-left text-emerald-500"></i> Lịch sử giao dịch</h2>
                            <div class="relative">
                                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] text-[11px]"></i>
                                <input type="text" placeholder="Tìm mã đơn..." class="h-9 pl-8 pr-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-app)] text-[12px] outline-none focus:border-blue-500 w-48" />
                            </div>
                        </div>

                        <div class="overflow-x-auto rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)]">
                            <table class="w-full text-left whitespace-nowrap">
                                <thead class="bg-[var(--bg-card)]/50 border-b border-[var(--border-color)] text-[11px] uppercase text-[var(--text-secondary)] font-bold">
                                    <tr>
                                        <th class="px-5 py-4">Mã đơn</th>
                                        <th class="px-5 py-4">Sản phẩm</th>
                                        <th class="px-5 py-4">Số tiền</th>
                                        <th class="px-5 py-4">Trạng thái</th>
                                        <th class="px-5 py-4 text-center">Thao tác</th>
                                    </tr>
                                </thead>
                                
                                <tbody class="divide-y divide-[var(--border-color)] text-[13px]">
                                    <tr v-if="isLoadingOrders">
                                        <td colspan="5" class="px-5 py-8 text-center text-[var(--text-secondary)]">
                                            <i class="fa-solid fa-spinner fa-spin mr-2"></i> Đang tải dữ liệu giao dịch...
                                        </td>
                                    </tr>

                                    <tr v-else-if="transactions.length > 0" v-for="tx in transactions" :key="tx.id" class="hover:bg-[var(--bg-card)]/40 transition-colors">
                                        <td class="px-5 py-4">
                                            <span class="font-mono text-[var(--text-secondary)] text-[11px]">{{ tx.id }}</span>
                                            <p class="text-[10px] text-[var(--text-secondary)] mt-0.5">{{ tx.date }}</p>
                                        </td>
                                        <td class="px-5 py-4">
                                            <p class="font-bold text-[var(--text-primary)] max-w-xs truncate" :title="tx.course">{{ tx.course }}</p>
                                            <p class="text-[10px] text-blue-500 mt-0.5"><i class="fa-solid" :class="tx.methodIcon"></i> {{ tx.method }}</p>
                                        </td>
                                        <td class="px-5 py-4 font-bold text-[var(--text-primary)]">{{ tx.amount }}</td>
                                        <td class="px-5 py-4">
                                            <span :class="['px-2.5 py-1 rounded-md text-[10px] font-bold border', 
                                                tx.status === 'Thành công' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 
                                                tx.status === 'Đang xử lý' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 
                                                'bg-red-500/10 text-red-500 border-red-500/20']">
                                                {{ tx.status }}
                                            </span>
                                        </td>
                                        <td class="px-5 py-4 text-center relative group">
                                            <button class="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-blue-500 hover:bg-blue-500 hover:text-white transition-colors tooltip mr-1" title="Tải biên lai PDF">
                                                <i class="fa-solid fa-file-pdf"></i>
                                            </button>
                                            
                                            <button @click="openMenuId = openMenuId === tx.id ? null : tx.id" class="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                            </button>

                                            <div v-if="openMenuId === tx.id" class="absolute right-8 top-10 w-40 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-xl z-10 py-1 flex flex-col text-left overflow-hidden">
                                                <button class="px-4 py-2 text-[12px] text-[var(--text-secondary)] hover:bg-[var(--border-color)]/50 hover:text-[var(--text-primary)] w-full text-left transition-colors"><i class="fa-solid fa-circle-exclamation w-4 text-center text-orange-500"></i> Báo cáo lỗi</button>
                                                <button class="px-4 py-2 text-[12px] text-red-500 hover:bg-red-500/10 w-full text-left transition-colors"><i class="fa-solid fa-rotate-left w-4 text-center"></i> Yêu cầu hoàn tiền</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr v-else>
                                        <td colspan="5" class="px-5 py-8 text-center text-[var(--text-secondary)] text-sm">
                                            <i class="fa-regular fa-folder-open text-2xl mb-2 block"></i>
                                            Bạn chưa có lịch sử giao dịch nào.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import SettingsNav from '../components/SettingsNav.vue'
import { useProfile } from '../composables/useProfile'

// Lấy các state và hàm từ useProfile
const { transactions, isLoadingOrders, loadTransactions } = useProfile() 

const openMenuId = ref(null)

// Tự động gọi dữ liệu khi tải trang
onMounted(async () => {
    await loadTransactions()
})
</script>