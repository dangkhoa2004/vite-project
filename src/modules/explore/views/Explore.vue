<template>
  <HomePageHeader />

  <div class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans pb-24 pt-28 px-4 overflow-hidden relative">
    
    <div class="absolute top-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto relative z-10">

      <div class="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 shadow-sm">
          <i class="fa-solid fa-wand-magic-sparkles text-blue-500 text-[11px]"></i>
          <span class="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-500">Không gian trải nghiệm công nghệ mới</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Cá Nhân Hóa Tương Lai Học Tập Với <span class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">EduAI</span>
        </h1>
        <p class="text-[14px] text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
          Khám phá hệ sinh thái trợ giúp học tập thông minh thế hệ mới. Hệ thống tự động phân tích lỗ hổng kiến thức, tối ưu hóa thời gian và đồng hành cùng bạn 24/7.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div v-for="(feat, index) in aiFeatures" :key="index" class="group bg-[var(--bg-card)]/60 backdrop-blur-md p-6 rounded-[20px] border border-[var(--border-color)] hover:border-blue-500/30 hover:shadow-sm transition-all duration-300">
          <div :class="['w-12 h-12 rounded-xl flex items-center justify-center border mb-5 shadow-sm', feat.iconBg]">
            <i :class="[feat.icon, feat.iconColor, 'text-lg']"></i>
          </div>
          <h3 class="text-[16px] font-bold mb-2 text-[var(--text-primary)]">{{ feat.title }}</h3>
          <p class="text-[12px] text-[var(--text-secondary)] leading-relaxed">{{ feat.description }}</p>
        </div>
      </div>

      <AiPlayground />

      <div class="bg-gradient-to-br from-blue-900/30 via-indigo-950/20 to-[var(--bg-card)]/50 p-8 md:p-12 rounded-[32px] border border-blue-500/20 text-center relative overflow-hidden mt-20">
        <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <h2 class="text-xl md:text-2xl font-bold mb-3 text-[var(--text-primary)]">Trở thành những người đầu tiên thử nghiệm</h2>
        <p class="text-[13px] text-[var(--text-secondary)] max-w-lg mx-auto mb-8 leading-relaxed">
          Số lượng tài khoản Beta giới hạn 500 suất. Đăng ký ngay để ghi danh vào hàng đợi!
        </p>

        <div v-if="!isSubscribed" class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input type="email" v-model="emailInput" placeholder="Nhập email của bạn..." class="w-full h-12 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[13px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all" />
          <button @click="handleSubscribe" class="w-full sm:w-auto px-8 h-12 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold rounded-xl transition-all shadow-md whitespace-nowrap">Đăng ký ngay</button>
        </div>

        <div v-else class="max-w-xl mx-auto bg-[var(--bg-card)]/80 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6 shadow-xl animate-fade-in text-center relative">
          
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl shadow-[0_0_20px_rgba(16,185,129,0.5)]">
            <i class="fa-solid fa-check"></i>
          </div>
          
          <h3 class="text-[18px] font-bold mt-4 mb-2 text-[var(--text-primary)]">Chúc mừng! Bạn là người thứ <span class="text-blue-500 text-2xl font-black">#{{ waitlistRank }}</span> trong hàng đợi.</h3>
          <p class="text-[13px] text-[var(--text-secondary)] mb-6 leading-relaxed">Chúng tôi sẽ gửi email ngay khi tài khoản của bạn được kích hoạt.</p>
          
          <div class="bg-[var(--bg-app)] rounded-xl p-5 border border-[var(--border-color)] border-dashed text-left">
            <div class="flex items-center gap-2 mb-2">
                <i class="fa-solid fa-bolt text-orange-500 text-lg"></i>
                <p class="text-[13px] font-bold text-[var(--text-primary)]">Muốn trải nghiệm sớm hơn?</p>
            </div>
            <p class="text-[12px] text-[var(--text-secondary)] mb-4">Chia sẻ liên kết dưới đây cho bạn bè. <b>Mỗi lượt đăng ký thành công qua link này, bạn sẽ được tăng 10 bậc</b> trong hàng đợi!</p>
            
            <div class="flex items-center gap-2">
              <code class="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-[12px] text-blue-500 font-bold select-all truncate tracking-wide shadow-inner">{{ referralLink }}</code>
              <button @click="copyLink" class="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-bold rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2">
                <i class="fa-solid fa-copy"></i> Sao chép
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>

    <FloatingAiChat />
  </div>

  <HomePageFooter />
</template>

<script setup>
import { ref } from 'vue';
import HomePageHeader from '@/layouts/HomePageHeader.vue';
import HomePageFooter from '@/layouts/HomePageFooter.vue';
import AiPlayground from '../components/AiPlayground.vue';
import FloatingAiChat from '../components/FloatingAiChat.vue';

const aiFeatures = ref([
  { title: 'Lộ Trình Tự Động', description: 'Phân tích mục tiêu và xây dựng cây bài học loại bỏ kiến thức thừa.', icon: 'fa-solid fa-route', iconColor: 'text-blue-500', iconBg: 'bg-blue-500/10 border-blue-500/20' },
  { title: 'Gia Sư Ảo Đồng Hành', description: 'Tích hợp mô hình LLM giải thích chi tiết lỗi cú pháp 24/7.', icon: 'fa-solid fa-brain', iconColor: 'text-purple-500', iconBg: 'bg-purple-500/10 border-purple-500/20' },
  { title: 'Đánh Giá Lỗ Hổng', description: 'Chỉ ra chính xác lỗ hổng lý thuyết và đề xuất bài học bù.', icon: 'fa-solid fa-chart-pie', iconColor: 'text-emerald-500', iconBg: 'bg-emerald-500/10 border-emerald-500/20' },
  { title: 'Bài Tập Thích Ứng', description: 'Tự động thay đổi độ khó câu hỏi theo phản xạ của học viên.', icon: 'fa-solid fa-sliders', iconColor: 'text-orange-500', iconBg: 'bg-orange-500/10 border-orange-500/20' }
]);

// Waitlist Logic
const emailInput = ref('');
const isSubscribed = ref(false);
const waitlistRank = ref(0);
const referralLink = ref('');

const handleSubscribe = () => {
  if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
    alert('Vui lòng nhập đúng email hợp lệ!'); return;
  }
  isSubscribed.value = true;
  // Khởi tạo Rank giả định ngẫu nhiên giống thực tế
  waitlistRank.value = Math.floor(Math.random() * 50) + 120; 
  referralLink.value = `https://eduplatform.vn/invite/${Math.random().toString(36).substr(2, 6)}`;
};

const copyLink = () => {
  navigator.clipboard.writeText(referralLink.value);
  alert('Đã copy liên kết giới thiệu vào bộ nhớ tạm!');
};
</script>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>