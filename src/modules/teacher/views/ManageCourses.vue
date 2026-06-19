<template>
    <HomePageHeader />
    <div
        class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans flex flex-col md:flex-row py-24 px-6 gap-8 relative overflow-hidden">

        <div
            class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none">
        </div>

        <aside class="w-full md:w-72 shrink-0 space-y-2 relative z-10">
            <div
                class="bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] p-5 sticky top-28 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div class="mb-8 px-2">
                    <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-secondary)] mb-2">Quản
                        lý khóa học</p>
                    <h2 class="text-[15px] font-extrabold text-[var(--text-primary)] leading-tight mb-2">Vue.js 3
                        Masterclass & Tailwind</h2>
                    <span
                        class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold rounded-md uppercase tracking-wider">
                        <i class="fa-solid fa-circle text-[6px]"></i> Đã xuất bản
                    </span>
                </div>

                <nav class="space-y-1.5">
                    <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                        :class="['w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13px] font-bold transition-all text-left group',
                            activeTab === tab.id
                                ? 'bg-gradient-to-r from-blue-600/10 to-indigo-600/5 text-blue-500 border border-blue-500/20 shadow-sm'
                                : 'text-[var(--text-secondary)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-color)]']">
                        <i
                            :class="[tab.icon, 'w-5 text-center text-[15px] group-hover:scale-110 transition-transform duration-300', activeTab === tab.id ? 'text-blue-500' : '']"></i>
                        {{ tab.name }}
                    </button>
                </nav>
            </div>
        </aside>

        <main
            class="flex-1 bg-[var(--bg-card)]/80 backdrop-blur-xl rounded-[24px] border border-[var(--border-color)] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative z-10 flex flex-col min-h-[700px]">

            <header
                class="px-8 py-6 border-b border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-app)]/30 rounded-t-[24px]">
                <div>
                    <h1 class="text-2xl font-extrabold">{{ currentTab.name }}</h1>
                    <p class="text-[13px] text-[var(--text-secondary)] mt-1.5">{{ currentTab.desc }}</p>
                </div>
                <div class="flex gap-3 shrink-0">
                    <button
                        class="px-5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/30 hover:shadow-sm transition-all">
                        Xem trước
                    </button>
                    <button
                        class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold transition-all shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)]">
                        Lưu thay đổi
                    </button>
                </div>
            </header>

            <div class="p-8 h-full overflow-y-auto custom-scrollbar flex-1 relative">
                <Transition name="fade-slide" mode="out-in">
                    <component :is="currentTabComponent" />
                </Transition>
            </div>
        </main>
    </div>
    <HomePageFooter />
</template>

<script setup>
import { ref, computed } from 'vue';
import HomePageHeader from '@/layouts/HomePageHeader.vue';
import HomePageFooter from '@/layouts/HomePageFooter.vue';

// Import các sub-components
import CourseBuilder from '../components/CourseBuilder.vue';
import LandingPage from '../components/LandingPage.vue';
import PricingPromotions from '../components/PricingPromotions.vue';
import StudentEngagement from '../components/StudentEngagement.vue';
import AnalyticsReports from '../components/AnalyticsReports.vue';

const activeTab = ref('builder');

const tabs = [
    { id: 'builder', name: 'Chương trình học', icon: 'fa-solid fa-cubes', desc: 'Kéo thả để thiết kế cấu trúc khóa học và upload tài liệu.', component: CourseBuilder },
    { id: 'landing', name: 'Trang giới thiệu', icon: 'fa-solid fa-pager', desc: 'Tối ưu hóa trang bán khóa học (SEO) và ảnh bìa để thu hút học viên.', component: LandingPage },
    { id: 'pricing', name: 'Giá & Khuyến mãi', icon: 'fa-solid fa-tags', desc: 'Kiểm soát doanh thu, thiết lập giá và tự tạo mã Coupon riêng.', component: PricingPromotions },
    { id: 'engagement', name: 'Tương tác học viên', icon: 'fa-solid fa-comments', desc: 'Trả lời Q&A, gửi thông báo và chấm điểm tự luận cho học viên.', component: StudentEngagement },
    { id: 'analytics', name: 'Phân tích & Báo cáo', icon: 'fa-solid fa-chart-pie', desc: 'Theo dõi dòng tiền thu nhập và đo lường hành vi học tập của sinh viên.', component: AnalyticsReports },
];

const currentTab = computed(() => tabs.find(t => t.id === activeTab.value));
const currentTabComponent = computed(() => currentTab.value.component);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 10px;
}
</style>