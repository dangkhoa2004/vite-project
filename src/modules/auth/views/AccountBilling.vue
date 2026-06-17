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
                    <SettingNavInformation />
                </aside>

                <div class="space-y-8">
                    
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        
                        <div class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-6 shadow-sm flex flex-col">
                            <div class="flex justify-between items-center mb-5">
                                <h2 class="text-[15px] font-bold flex items-center gap-2"><i class="fa-regular fa-credit-card text-blue-500"></i> Thẻ thanh toán</h2>
                                <button class="text-[11px] font-bold text-blue-500 hover:underline">+ Thêm thẻ</button>
                            </div>
                            <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-white relative overflow-hidden shadow-lg border border-gray-700 mt-auto">
                                <i class="fa-brands fa-cc-visa absolute -right-2 -bottom-2 text-6xl opacity-10"></i>
                                <div class="flex justify-between items-start mb-6 relative z-10">
                                    <i class="fa-brands fa-cc-visa text-3xl"></i>
                                    <button class="text-[10px] text-gray-400 hover:text-red-400 transition-colors tooltip" title="Xóa thẻ"><i class="fa-solid fa-trash"></i></button>
                                </div>
                                <div class="relative z-10">
                                    <p class="text-[14px] font-mono tracking-widest mb-1">•••• •••• •••• 4242</p>
                                    <div class="flex justify-between text-[10px] text-gray-400 uppercase">
                                        <span>Cao Dang Khoa</span>
                                        <span>Exp: 12/26</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-6 shadow-sm">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-[15px] font-bold flex items-center gap-2"><i class="fa-solid fa-building text-orange-500"></i> Thông tin xuất hóa đơn (VAT)</h2>
                                <button class="text-[11px] font-bold text-blue-500 hover:underline">Chỉnh sửa</button>
                            </div>
                            <p class="text-[11px] text-[var(--text-secondary)] mb-4">Hệ thống sẽ dùng thông tin này để xuất hóa đơn đỏ (VAT) gửi về email cho công ty của bạn.</p>
                            
                            <div class="space-y-2 bg-[var(--bg-app)] p-4 rounded-xl border border-[var(--border-color)]">
                                <div class="flex items-start justify-between border-b border-[var(--border-color)]/50 pb-2">
                                    <span class="text-[11px] text-[var(--text-secondary)] shrink-0 w-24">Công ty:</span>
                                    <span class="text-[12px] font-bold text-[var(--text-primary)] text-right">Công ty CP Công Nghệ EduTech</span>
                                </div>
                                <div class="flex items-start justify-between border-b border-[var(--border-color)]/50 pb-2">
                                    <span class="text-[11px] text-[var(--text-secondary)] shrink-0 w-24">Mã số thuế:</span>
                                    <span class="text-[12px] font-mono font-medium text-[var(--text-primary)]">0109999888</span>
                                </div>
                                <div class="flex items-start justify-between">
                                    <span class="text-[11px] text-[var(--text-secondary)] shrink-0 w-24">Địa chỉ:</span>
                                    <span class="text-[12px] text-[var(--text-primary)] text-right">Tòa nhà Keangnam, Nam Từ Liêm, Hà Nội</span>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                    
                                    <tr v-for="tx in transactions" :key="tx.id" class="hover:bg-[var(--bg-card)]/40 transition-colors">
                                        <td class="px-5 py-4">
                                            <span class="font-mono text-[var(--text-secondary)] text-[11px]">{{ tx.id }}</span>
                                            <p class="text-[10px] text-[var(--text-secondary)] mt-0.5">{{ tx.date }}</p>
                                        </td>
                                        <td class="px-5 py-4">
                                            <p class="font-bold text-[var(--text-primary)] max-w-xs truncate" :title="tx.course">{{ tx.course }}</p>
                                            <p class="text-[10px] text-blue-500 mt-0.5"><i class="fa-brands" :class="tx.methodIcon"></i> {{ tx.method }}</p>
                                        </td>
                                        <td class="px-5 py-4 font-bold">{{ tx.amount }}</td>
                                        <td class="px-5 py-4">
                                            <span :class="['px-2.5 py-1 rounded-md text-[10px] font-bold border', 
                                                tx.status === 'Thành công' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-orange-500/10 text-orange-500 border-orange-500/20']">
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
import { ref } from 'vue'
import HomePageHeader from '@/layouts/HomePageHeader.vue'
import SettingNavInformation from '../components/SettingNavInformation.vue'

const openMenuId = ref(null)

const transactions = ref([
    { id: '#ED-98213', date: '17/06/2026', course: 'Làm chủ Backend thực chiến với PHP & Supabase', amount: '850.000₫', status: 'Thành công', method: 'Visa •••• 4242', methodIcon: 'fa-cc-visa' },
    { id: '#ED-91045', date: '02/05/2026', course: 'Frontend hiện đại với Vue 3', amount: '599.000₫', status: 'Thành công', method: 'Momo Pay', methodIcon: 'fa-google-pay' },
    { id: '#ED-88402', date: '15/01/2026', course: 'Cơ sở dữ liệu PostgreSQL & Tối ưu hóa truy vấn', amount: '450.000₫', status: 'Đang xử lý', method: 'Chuyển khoản NH', methodIcon: 'fa-building-columns' }
])
</script>