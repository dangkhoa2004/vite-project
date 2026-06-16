<template>
    <HomePageHeader />

    <div
        class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans pb-24 pt-28 px-4 overflow-hidden relative">
        <div class="absolute top-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none">
        </div>

        <div class="max-w-6xl mx-auto relative z-10">

            <div class="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 shadow-sm">
                    <i class="fa-solid fa-wand-magic-sparkles text-blue-400 text-[11px]"></i>
                    <span class="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">Không gian trải nghiệm
                        công nghệ mới</span>
                </div>
                <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                    Cá Nhân Hóa Tương Lai Học Tập Với <span
                        class="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">EduAI</span>
                </h1>
                <p class="text-[14px] text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
                    Khám phá hệ sinh thái trợ giúp học tập thông minh thế hệ mới. Hệ thống tự động phân tích lỗ hổng
                    kiến thức, tối ưu hóa thời gian và đồng hành cùng bạn 24/7 như một gia sư chuyên gia riêng biệt.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                <div v-for="(feat, index) in aiFeatures" :key="index"
                    class="group bg-[var(--bg-card)]/60 backdrop-blur-md p-6 rounded-[20px] border border-[var(--border-color)] hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.06)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div
                            :class="['w-12 h-12 rounded-xl flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm', feat.iconBg]">
                            <i :class="[feat.icon, feat.iconColor, 'text-lg']"></i>
                        </div>
                        <h3
                            class="text-[16px] font-bold mb-2.5 text-[var(--text-primary)] group-hover:text-blue-400 transition-colors">
                            {{ feat.title }}
                        </h3>
                        <p class="text-[12px] text-[var(--text-secondary)] leading-relaxed">
                            {{ feat.description }}
                        </p>
                    </div>
                    <div class="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                        <span
                            class="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {{ feat.status }}
                        </span>
                        <span
                            class="text-[11px] font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors flex items-center gap-1">
                            Chi tiết <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div
                class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[20px] border border-[var(--border-color)] overflow-hidden mb-20 shadow-xl">
                <div
                    class="border-b border-[var(--border-color)] p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)]/40">
                    <div>
                        <h2 class="text-lg font-bold flex items-center gap-2">
                            <i class="fa-solid fa-flask text-purple-400 text-sm"></i> Phòng thử nghiệm EduAI (Beta)
                        </h2>
                        <p class="text-[12px] text-[var(--text-secondary)] mt-0.5">Trải nghiệm trước cơ chế hoạt động
                            của thuật toán cá nhân hóa</p>
                    </div>
                    <div class="flex bg-[var(--bg-app)] border border-[var(--border-color)] p-1 rounded-xl">
                        <button @click="activeTab = 'roadmap'"
                            :class="['px-4 py-2 text-[12px] font-bold rounded-lg transition-all', activeTab === 'roadmap' ? 'bg-blue-600 text-white shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]']">
                            <i class="fa-solid fa-route mr-1.5"></i> Tạo Lộ Trình
                        </button>
                        <button @click="activeTab = 'chat'"
                            :class="['px-4 py-2 text-[12px] font-bold rounded-lg transition-all', activeTab === 'chat' ? 'bg-blue-600 text-white shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]']">
                            <i class="fa-regular fa-comments mr-1.5"></i> Trợ Lý 24/7
                        </button>
                    </div>
                </div>

                <div class="p-6 min-h-[320px] flex flex-col justify-between bg-[var(--bg-app)]/30">
                    <div v-if="activeTab === 'roadmap'" class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        <div class="lg:col-span-5 space-y-4">
                            <div>
                                <label
                                    class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-1.5">Mục
                                    tiêu lập trình của bạn:</label>
                                <select v-model="roadmapForm.target"
                                    class="w-full h-10 px-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500 text-[var(--text-primary)] transition-all">
                                    <option value="frontend">Trở thành Frontend Developer (Vue.js/Tailwind)</option>
                                    <option value="backend">Trở thành Backend Engineer (PostgreSQL/Node.js)</option>
                                    <option value="fullstack">Chuyên sâu Kiến trúc Fullstack</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-1.5">Thời
                                    gian rảnh mỗi ngày:</label>
                                <div class="grid grid-cols-3 gap-2">
                                    <button v-for="time in ['1-2 giờ', '3-4 giờ', 'Trên 5 giờ']" :key="time"
                                        @click="roadmapForm.timeSlot = time"
                                        :class="['h-9 rounded-xl border text-[12px] font-medium transition-all', roadmapForm.timeSlot === time ? 'border-blue-500 bg-blue-500/10 text-blue-400 font-bold' : 'border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]']">
                                        {{ time }}
                                    </button>
                                </div>
                            </div>
                            <button @click="simulateRoadmap" :disabled="isSimulating"
                                class="w-full h-10 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white text-[12px] font-bold rounded-xl transition-all shadow-md shadow-blue-500/10 flex items-center justify-center gap-2">
                                <i v-if="isSimulating" class="fa-solid fa-spinner animate-spin"></i>
                                <i v-else class="fa-solid fa-wand-magic-sparkles"></i>
                                Phân tích & Khởi tạo lộ trình AI
                            </button>
                        </div>

                        <div
                            class="lg:col-span-7 border border-[var(--border-color)] bg-[var(--bg-card)]/40 p-5 rounded-2xl min-h-[220px] flex flex-col justify-center">
                            <div v-if="!roadmapResult && !isSimulating" class="text-center py-8">
                                <i class="fa-solid fa-diagram-project text-3xl text-[var(--border-color)] mb-3"></i>
                                <p class="text-[12px] text-[var(--text-secondary)]">Điền thông tin bên trái để AI tính
                                    toán cấu trúc bài học tối ưu dành riêng cho bạn.</p>
                            </div>
                            <div v-else-if="isSimulating" class="space-y-3 py-4">
                                <div class="h-3 bg-[var(--border-color)] rounded animate-pulse w-3/4"></div>
                                <div class="h-3 bg-[var(--border-color)] rounded animate-pulse w-1/2"></div>
                                <div class="h-3 bg-[var(--border-color)] rounded animate-pulse w-5/6"></div>
                            </div>
                            <div v-else class="space-y-4 animate-fade-in">
                                <h4
                                    class="text-[13px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Lộ trình đề xuất riêng
                                    biệt:
                                </h4>
                                <div
                                    class="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[var(--border-color)]">
                                    <div v-for="(step, sIdx) in roadmapResult" :key="sIdx"
                                        class="flex gap-4 items-start relative z-10">
                                        <div
                                            class="w-6 h-6 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 font-bold text-[11px] flex items-center justify-center shrink-0 bg-[var(--bg-app)]">
                                            {{ sIdx + 1 }}
                                        </div>
                                        <div>
                                            <h5 class="text-[13px] font-bold text-[var(--text-primary)]">{{ step.title
                                                }}</h5>
                                            <p class="text-[11px] text-[var(--text-secondary)] mt-0.5">{{ step.detail }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="activeTab === 'chat'" class="flex flex-col gap-4">
                        <div
                            class="border border-[var(--border-color)] rounded-2xl bg-[var(--bg-card)]/40 p-4 h-48 overflow-y-auto space-y-3 text-[13px]">
                            <div v-for="(msg, mIdx) in chatHistory" :key="mIdx"
                                :class="['flex gap-3 max-w-[85%] rounded-xl p-3', msg.role === 'ai' ? 'bg-blue-500/5 text-[var(--text-primary)] border border-blue-500/10' : 'bg-[var(--bg-app)] text-[var(--text-primary)] border border-[var(--border-color)] ml-auto']">
                                <div v-if="msg.role === 'ai'"
                                    class="w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                                    AI</div>
                                <div class="leading-relaxed whitespace-pre-line">{{ msg.text }}</div>
                            </div>
                            <div v-if="isTyping"
                                class="flex items-center gap-1.5 text-[var(--text-secondary)] text-[11px] pl-2">
                                <i class="fa-solid fa-circle-notch animate-spin text-purple-400"></i> Trợ lý đang phân
                                tích mã nguồn...
                            </div>
                        </div>

                        <div class="flex gap-2">
                            <input v-model="chatInput" @keyup.enter="sendMockMessage"
                                placeholder="Đặt câu hỏi về code, lỗi cú pháp hoặc khái niệm (Ví dụ: Tại sao Vue 3 dùng Composition API?)..."
                                class="flex-1 h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] text-[var(--text-primary)] outline-none focus:border-blue-500 transition-all placeholder:text-[var(--text-secondary)]" />
                            <button @click="sendMockMessage"
                                class="w-11 h-11 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-all shadow-md">
                                <i class="fa-solid fa-paper-plane text-xs"></i>
                            </button>
                        </div>
                        <div class="flex flex-wrap gap-1.5">
                            <span @click="fillQuickQuestion('Sửa lỗi đè z-index trong Tailwind?')"
                                class="text-[10px] text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)] px-2.5 py-1 rounded-full cursor-pointer hover:border-blue-500/40 hover:text-[var(--text-primary)] transition-all">
                                💡 Sửa lỗi đè z-index trong Tailwind?
                            </span>
                            <span @click="fillQuickQuestion('Phân biệt Computed và Watcher trong Vue 3')"
                                class="text-[10px] text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)] px-2.5 py-1 rounded-full cursor-pointer hover:border-blue-500/40 hover:text-[var(--text-primary)] transition-all">
                                💡 Phân biệt Computed và Watcher?
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-20">
                <div class="text-center max-w-xl mx-auto mb-12">
                    <h2 class="text-2xl font-bold">Lộ Trình Triển Khai Công Nghệ</h2>
                    <p class="text-[12px] text-[var(--text-secondary)] mt-1.5">Kế hoạch nghiên cứu và cập nhật định kỳ
                        trong năm nay</p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-3 gap-8 relative before:absolute before:hidden md:before:block before:top-1/2 before:left-4 before:right-4 before:h-0.5 before:bg-[var(--border-color)] before:-translate-y-1/2">
                    <div v-for="(milestone, idx) in timeline" :key="idx"
                        class="bg-[var(--bg-card)]/50 backdrop-blur-md p-5 rounded-[20px] border border-[var(--border-color)] relative z-10 hover:border-orange-500/30 transition-all">
                        <div
                            class="absolute -top-3 left-6 px-3 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white bg-orange-500 rounded-md shadow-sm">
                            {{ milestone.quarter }}
                        </div>
                        <div class="pt-2">
                            <h4 class="text-[14px] font-bold text-[var(--text-primary)] mb-1.5 flex items-center gap-2">
                                <i class="fa-regular fa-circle-dot text-orange-400 text-xs"></i> {{ milestone.title }}
                            </h4>
                            <p class="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                                {{ milestone.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="bg-gradient-to-br from-blue-900/30 via-indigo-950/20 to-transparent p-8 md:p-12 rounded-[28px] border border-blue-500/20 text-center relative overflow-hidden">
                <div class="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
                <h2 class="text-xl md:text-2xl font-bold mb-3">Bạn muốn trở thành những người đầu tiên thử nghiệm?</h2>
                <p class="text-[12px] text-gray-300 max-w-lg mx-auto mb-6 leading-relaxed">
                    Số lượng tài khoản trải nghiệm các đặc quyền AI giới hạn cho 500 học viên đăng ký sớm nhất để đảm
                    bảo hiệu năng máy chủ. Đăng ký nhận lời mời ngay!
                </p>

                <div v-if="isSubscribed"
                    class="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-4 py-2.5 rounded-xl inline-flex items-center gap-2 border border-emerald-500/20 animate-fade-in">
                    <i class="fa-solid fa-circle-check"></i> Chúc mừng bạn đã ghi danh thành công vào hàng đợi Beta!
                </div>
                <div v-else class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <input type="email" v-model="emailInput" placeholder="Nhập email nhận thư mời của bạn..."
                        class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] text-[var(--text-primary)] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-[var(--text-secondary)]" />
                    <button @click="handleSubscribe"
                        class="w-full sm:w-auto px-6 h-11 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-bold rounded-xl transition-all shadow-md shrink-0 whitespace-nowrap">
                        Đăng ký hàng đợi
                    </button>
                </div>
            </div>

        </div>
    </div>

    <HomePageFooter />
</template>

<script setup>
import { ref } from 'vue';
import HomePageHeader from '@/layouts/HomePageHeader.vue';
import HomePageFooter from '@/layouts/HomePageFooter.vue';

// 1. Dữ liệu các tính năng AI sắp phát triển
const aiFeatures = ref([
    {
        title: 'Lộ Trình Tự Động (AI Roadmap)',
        description: 'Hệ thống quét mục tiêu nghề nghiệp và trình độ hiện tại, tự động xây dựng cây bài học tối giản loại bỏ kiến thức thừa.',
        icon: 'fa-solid fa-route',
        iconColor: 'text-blue-400',
        iconBg: 'bg-blue-500/10 border-blue-500/20',
        status: 'Sắp ra mắt'
    },
    {
        title: 'Gia Sư Ảo Đồng Hành 24/7',
        description: 'Tích hợp mô hình LLM chuyên sâu mã nguồn, sẵn sàng gỡ lỗi code (debug), tóm tắt lý thuyết và giải thích chi tiết lỗi cú pháp.',
        icon: 'fa-solid fa-brain',
        iconColor: 'text-purple-400',
        iconBg: 'bg-purple-500/10 border-purple-500/20',
        status: 'Thử nghiệm Beta'
    },
    {
        title: 'Đánh Giá Lỗ Hổng Kiến Thức',
        description: 'Dựa vào kết quả các bài trắc nghiệm và bài tập thực hành, AI chỉ ra chính xác lỗ hổng lý thuyết và đề xuất bài học bù.',
        icon: 'fa-solid fa-chart-pie',
        iconColor: 'text-emerald-400',
        iconBg: 'bg-emerald-500/10 border-emerald-500/20',
        status: 'Đang phát triển'
    },
    {
        title: 'Bài Tập Thích Ứng (Adaptive)',
        description: 'Hệ thống câu hỏi tự động thay đổi độ khó theo thời gian thực dựa vào tốc độ trả lời và phản xạ làm bài của học viên.',
        icon: 'fa-solid fa-sliders',
        iconColor: 'text-orange-400',
        iconBg: 'bg-orange-500/10 border-orange-500/20',
        status: 'Sắp ra mắt'
    }
]);

// 2. State quản lý phòng thử nghiệm tương tác
const activeTab = ref('roadmap');
const isSimulating = ref(false);
const roadmapForm = ref({ target: 'frontend', timeSlot: '3-4 giờ' });
const roadmapResult = ref(null);

// Giả lập tính toán lộ trình AI
const simulateRoadmap = () => {
    isSimulating.value = true;
    roadmapResult.value = null;

    setTimeout(() => {
        isSimulating.value = false;
        if (roadmapForm.value.target === 'frontend') {
            roadmapResult.value = [
                { title: 'Chặng 1: Nền tảng giao diện vững chắc', detail: 'Tập trung sâu vào CSS Tailwind nâng cao & Bố cục Grid tương thích thiết bị di động.' },
                { title: 'Chặng 2: Tư duy Reactive với Vue 3', detail: 'Làm chủ Composition API, Quản lý State bằng Pinia hiệu năng cao thay vì Vuex cũ.' },
                { title: 'Chặng 3: Tối ưu ứng dụng thực tế', detail: 'Triển khai SSR, tối ưu hóa Lazy Loading Component giảm dung lượng tải trang.' }
            ];
        } else if (roadmapForm.value.target === 'backend') {
            roadmapResult.value = [
                { title: 'Chặng 1: Thiết kế Cơ sở dữ liệu', detail: 'Học chuẩn hóa dữ liệu PostgreSQL, lập chỉ mục (Indexing) tăng tốc câu lệnh truy vấn.' },
                { title: 'Chặng 2: API Architecture', detail: 'Xây dựng RESTful API chuẩn hóa bảo mật với JWT, phân quyền Middleware.' },
                { title: 'Chặng 3: Docker hóa môi trường', detail: 'Đóng gói ứng dụng vào Container phục vụ triển khai CI/CD tự động.' }
            ];
        } else {
            roadmapResult.value = [
                { title: 'Chặng 1: Core stack Fullstack', detail: 'Đồng bộ cấu trúc dữ liệu JSON từ Frontend Vue 3 đến hệ thống cơ sở dữ liệu.' },
                { title: 'Chặng 2: Đồng bộ hóa trạng thái ứng dụng', detail: 'Xử lý Realtime WebSockets kết nối client - server tức thì.' }
            ];
        }
    }, 1500);
};

// State khu vực Chat ảo
const chatInput = ref('');
const isTyping = ref(false);
const chatHistory = ref([
    { role: 'ai', text: 'Xin chào! Mình là EduAI Companion. Bạn đang gặp khó khăn gì trong việc tối ưu giao diện CSS hay logic code JavaScript không?' }
]);

const sendMockMessage = () => {
    if (!chatInput.value.trim()) return;

    // Đẩy tin nhắn của user vào history
    chatHistory.value.push({ role: 'user', text: chatInput.value });
    const userText = chatInput.value;
    chatInput.value = '';
    isTyping.value = true;

    setTimeout(() => {
        isTyping.value = false;
        let reply = 'Cảm ơn câu hỏi của bạn. Thuật toán đang phân tích chủ đề này. Đối với nền tảng Vue 3 và Tailwind CSS, bạn nên chú ý cấu trúc phân nhóm component gọn gàng để tối ưu.';

        if (userText.includes('Tailwind') || userText.includes('z-index')) {
            reply = 'Lỗi đè z-index thường do chưa thiết lập thuộc tính `position` đúng cách. Hãy đảm bảo thẻ cha có class `relative`, `absolute` hoặc `fixed`, sau đó áp dụng các class layer như `z-10`, `z-20` từ Tailwind nhé!';
        } else if (userText.includes('Vue 3') || userText.includes('Computed')) {
            reply = 'Trong Vue 3:\n- `computed` dùng để tính toán giá trị phụ thuộc và có cơ chế lưu bộ nhớ đệm (caching). Chỉ chạy lại khi dữ liệu phụ thuộc thay đổi.\n- `watch` dùng khi bạn muốn thực hiện một hiệu ứng phụ (side-effect) như gọi API khi biến thay đổi.';
        }

        chatHistory.value.push({ role: 'ai', text: reply });
    }, 1200);
};

const fillQuickQuestion = (qText) => {
    chatInput.value = qText;
};

// 3. Dữ liệu lịch trình phát triển (Timeline)
const timeline = ref([
    { quarter: 'Quý 3 / 2026', title: 'Phát hành Beta Gia sư ảo', description: 'Mở cổng thử nghiệm tích hợp chatbot ngay trong giao diện học tập của các khóa học lập trình mũi nhọn.' },
    { quarter: 'Quý 4 / 2026', title: 'Thuật toán Adaptive Test', description: 'Triển khai hệ thống đo lường kiểm tra thích ứng, tự biến đổi ngân hàng đề theo năng lực thực tế học viên.' },
    { quarter: 'Quý 1 / 2027', title: 'Hệ sinh thái Toàn diện', description: 'Liên kết toàn bộ dữ liệu học tập để xuất bản báo cáo chứng nhận kỹ năng kèm phân tích chuyên sâu cho nhà tuyển dụng.' }
]);

// 4. Form đăng ký nhận tin sớm (Early Access Queue)
const emailInput = ref('');
const isSubscribed = ref(false);

const handleSubscribe = () => {
    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        alert('Vui lòng nhập đúng định dạng địa chỉ email nhé!');
        return;
    }
    isSubscribed.value = true;
    emailInput.value = '';
};
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(12px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>