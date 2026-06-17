<template>
    <HomePageHeader />
    <div class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-28">
        
        <main class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="mb-10">
                <h1 class="text-3xl font-extrabold tracking-tight mb-2">Bảo mật & Mật khẩu</h1>
                <p class="text-sm text-[var(--text-secondary)]">Bảo vệ tài khoản và quản lý các thiết bị đăng nhập.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
                
                <aside class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] overflow-hidden sticky top-28 shadow-xl">
                    <SettingNavInformation />
                </aside>

                <div class="space-y-8">
                    
                    <div class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-sm">
                        <h2 class="text-lg font-bold mb-5 flex items-center gap-2"><i class="fa-solid fa-key text-blue-500"></i> Đổi mật khẩu</h2>
                        <div class="space-y-4 max-w-md">
                            <input type="password" placeholder="Mật khẩu hiện tại" class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500" />
                            <input type="password" placeholder="Mật khẩu mới (Tối thiểu 8 ký tự)" class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500" />
                            <input type="password" placeholder="Xác nhận mật khẩu mới" class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500" />
                            <button class="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-bold rounded-xl transition-all shadow-md mt-2">Cập nhật mật khẩu</button>
                        </div>
                    </div>

                    <div class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-sm">
                        <h2 class="text-lg font-bold mb-1 flex items-center gap-2"><i class="fa-solid fa-link text-purple-500"></i> Tài khoản liên kết (SSO)</h2>
                        <p class="text-[12px] text-[var(--text-secondary)] mb-6">Liên kết mạng xã hội để đăng nhập nhanh 1 chạm mà không cần nhớ mật khẩu.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex items-center justify-between p-4 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-color)] hover:border-blue-500/30 transition-all">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <i class="fa-brands fa-google text-red-500 text-lg"></i>
                                    </div>
                                    <div>
                                        <p class="text-[13px] font-bold">Google</p>
                                        <p class="text-[10px] text-emerald-500 font-medium">Đã liên kết (khoa***@gmail.com)</p>
                                    </div>
                                </div>
                                <button class="text-[11px] text-[var(--text-secondary)] hover:text-red-500 font-medium underline underline-offset-2">Hủy</button>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-color)] opacity-60 hover:opacity-100 transition-all">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-[#24292F] rounded-full flex items-center justify-center shadow-sm">
                                        <i class="fa-brands fa-github text-white text-lg"></i>
                                    </div>
                                    <div>
                                        <p class="text-[13px] font-bold">GitHub</p>
                                        <p class="text-[10px] text-[var(--text-secondary)] font-medium">Chưa liên kết</p>
                                    </div>
                                </div>
                                <button class="text-[11px] bg-[var(--bg-card)] border border-[var(--border-color)] px-3 py-1.5 rounded-lg hover:text-blue-500 transition-colors font-bold">Kết nối</button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] p-8 shadow-sm relative overflow-hidden">
                        <div class="absolute right-0 top-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-10">
                            <div>
                                <h2 class="text-lg font-bold mb-1 flex items-center gap-2"><i class="fa-solid fa-mobile-screen-button text-emerald-500"></i> Thiết bị đăng nhập</h2>
                                <p class="text-[12px] text-[var(--text-secondary)] max-w-md">Danh sách các thiết bị đang có quyền truy cập vào tài khoản của bạn. Đăng xuất nếu thấy thiết bị lạ.</p>
                            </div>
                            <button class="px-5 py-2.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white text-[12px] font-bold rounded-xl transition-all shadow-sm border border-red-500/20 shrink-0 flex items-center gap-2">
                                <i class="fa-solid fa-power-off"></i> Đăng xuất tất cả
                            </button>
                        </div>

                        <div class="space-y-3 relative z-10">
                            <div class="flex items-start gap-4 p-4 bg-blue-500/5 border border-blue-500/30 rounded-xl">
                                <i class="fa-solid fa-laptop text-blue-500 text-2xl mt-1"></i>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between mb-0.5">
                                        <p class="text-[14px] font-bold text-blue-500">Windows PC - Chrome <span class="text-[10px] bg-blue-500 text-white px-1.5 py-0.5 rounded ml-1 font-bold">Thiết bị hiện tại</span></p>
                                    </div>
                                    <p class="text-[11px] text-[var(--text-secondary)]">IP: 192.168.1.1 &bull; Hà Nội, Việt Nam</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4 p-4 bg-[var(--bg-app)] border border-[var(--border-color)] rounded-xl">
                                <i class="fa-solid fa-mobile-screen text-[var(--text-secondary)] text-2xl mt-1 ml-1"></i>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between mb-0.5">
                                        <p class="text-[14px] font-bold text-[var(--text-primary)]">iPhone 14 Pro - Safari</p>
                                        <button class="text-[10px] text-red-500 hover:underline">Đăng xuất</button>
                                    </div>
                                    <p class="text-[11px] text-[var(--text-secondary)]">IP: 14.232.xxx.xx &bull; Hồ Chí Minh, Việt Nam</p>
                                    <p class="text-[10px] text-[var(--text-secondary)] mt-1">Hoạt động cuối: 3 ngày trước</p>
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
</script>