<template>
  <div class="bg-[var(--bg-card)]/60 backdrop-blur-md rounded-[24px] border border-[var(--border-color)] overflow-hidden mb-20 shadow-xl">
    
    <div class="border-b border-[var(--border-color)] p-5 bg-[var(--bg-card)]/40 flex justify-between items-center">
      <div>
        <h2 class="text-lg font-bold flex items-center gap-2">
          <i class="fa-solid fa-flask text-purple-400 text-sm"></i> Phòng thử nghiệm EduAI (Beta)
        </h2>
        <p class="text-[12px] text-[var(--text-secondary)] mt-0.5">Tinh chỉnh tham số để xem AI thay đổi lộ trình theo thời gian thực</p>
      </div>
    </div>

    <div class="p-6 min-h-[360px] bg-[var(--bg-app)]/30">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-5 space-y-6">
          
          <div>
            <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-2">Trình độ hiện tại:</label>
            <div class="grid grid-cols-3 gap-2">
              <button v-for="lvl in levels" :key="lvl.id" @click="form.level = lvl.id"
                :class="['h-10 rounded-xl border text-[12px] font-bold transition-all', form.level === lvl.id ? 'border-blue-500 bg-blue-500/10 text-blue-500 shadow-sm' : 'border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]']">
                {{ lvl.name }}
              </button>
            </div>
          </div>

          <div>
            <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-2">Mục tiêu hướng tới:</label>
            <select v-model="form.target" class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 text-[var(--text-primary)] transition-all font-medium shadow-sm">
              <option value="frontend">Frontend Developer (Vue/React)</option>
              <option value="backend">Backend Engineer (Node/PHP)</option>
            </select>
          </div>

          <div>
            <div class="flex justify-between items-end mb-2">
              <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Thời gian rảnh:</label>
              <span class="text-[14px] font-extrabold text-blue-500">{{ form.hours }} giờ / ngày</span>
            </div>
            <input type="range" min="1" max="8" step="1" v-model="form.hours" class="w-full h-2 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer accent-blue-500" />
            <div class="flex justify-between text-[10px] text-[var(--text-secondary)] mt-1 font-medium">
              <span>1h (Thong thả)</span>
              <span>8h (Bootcamp)</span>
            </div>
          </div>

          <div class="pt-2">
            <button @click="simulateRoadmap" :disabled="isSimulating"
              class="w-full h-12 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white text-[13px] font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.2)] flex items-center justify-center gap-2">
              <i v-if="isSimulating" class="fa-solid fa-circle-notch animate-spin"></i>
              <i v-else class="fa-solid fa-wand-magic-sparkles"></i>
              {{ isSimulating ? 'Đang phân tích...' : 'Tạo lộ trình cá nhân hóa' }}
            </button>
            <p class="text-[10px] text-center mt-3 text-[var(--text-secondary)] flex items-center justify-center gap-1.5 tooltip">
              <i class="fa-solid fa-shield-halved text-emerald-500"></i> Dữ liệu huấn luyện từ 5.000+ kỹ sư đã thành công
            </p>
          </div>
        </div>

        <div class="lg:col-span-7 border border-[var(--border-color)] bg-[var(--bg-card)]/40 p-6 rounded-[24px] min-h-[340px] flex flex-col relative overflow-hidden shadow-inner">
          
          <div v-if="!roadmapResult && !isSimulating" class="flex-1 flex flex-col items-center justify-center text-center opacity-50 py-10">
            <i class="fa-solid fa-robot text-5xl mb-4"></i>
            <p class="text-[13px]">Cung cấp thông tin bên trái để EduAI phác thảo bản đồ học tập dành riêng cho bạn.</p>
          </div>

          <div v-else-if="isSimulating" class="flex-1 flex flex-col items-center justify-center space-y-5 animate-fade-in">
             <div class="w-16 h-16 relative">
                 <div class="absolute inset-0 rounded-full border-4 border-[var(--border-color)]"></div>
                 <div class="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
                 <i class="fa-solid fa-microchip absolute inset-0 flex items-center justify-center text-xl text-blue-500"></i>
             </div>
             <div class="text-center">
                 <h4 class="text-[14px] font-bold text-blue-500 mb-1">{{ currentLoadingText }}</h4>
                 <div class="w-48 h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden mx-auto mt-3">
                     <div class="h-full bg-blue-500 transition-all duration-300 ease-out" :style="{ width: loadingProgress + '%' }"></div>
                 </div>
             </div>
          </div>

          <div v-else class="animate-fade-in space-y-6 h-full flex flex-col">
            <div class="flex justify-between items-center mb-2">
              <h4 class="text-[15px] font-extrabold text-[var(--text-primary)]">Lộ trình <span class="text-blue-500">tối ưu nhất</span></h4>
              <span class="text-[11px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                Dự kiến: {{ estimatedMonths }} tháng
              </span>
            </div>

            <div class="space-y-4 relative flex-1">
              <div class="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 to-[var(--border-color)] z-0"></div>
              
              <div v-for="(step, sIdx) in roadmapResult" :key="sIdx" 
                :class="['flex gap-4 items-start relative z-10 transition-all duration-500', 
                (!emailCaptured && sIdx > 0) ? 'blur-[4px] opacity-40 select-none pointer-events-none' : '']">
                
                <div class="w-8 h-8 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white font-extrabold text-[12px] flex items-center justify-center shrink-0">
                  {{ sIdx + 1 }}
                </div>
                <div class="bg-[var(--bg-app)] border border-[var(--border-color)] p-4 rounded-2xl flex-1 hover:border-blue-500/30 transition-colors shadow-sm">
                  <h5 class="text-[14px] font-bold text-[var(--text-primary)] mb-1">{{ step.title }}</h5>
                  <p class="text-[12px] text-[var(--text-secondary)] mb-3 leading-relaxed">{{ step.detail }}</p>
                  <a :href="step.link" class="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-500 bg-blue-500/10 hover:bg-blue-500 hover:text-white px-3 py-1.5 rounded-lg transition-all border border-blue-500/20">
                    <i class="fa-solid fa-play"></i> Xem khóa học
                  </a>
                </div>
              </div>

              <div v-if="!emailCaptured" class="absolute bottom-[-24px] left-[-24px] right-[-24px] h-[75%] bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/95 to-transparent flex flex-col items-center justify-end pb-8 px-6 z-20">
                  <div class="bg-[var(--bg-app)] border border-blue-500/30 p-5 rounded-2xl shadow-2xl max-w-sm w-full text-center transform translate-y-4 animate-fade-in-up">
                      <div class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                          <i class="fa-solid fa-lock"></i>
                      </div>
                      <h4 class="text-[14px] font-bold mb-2">Lộ trình {{ estimatedMonths }} tháng đã sẵn sàng!</h4>
                      <p class="text-[11px] text-[var(--text-secondary)] mb-4">Nhập email để mở khóa chi tiết các chặng tiếp theo, nhận bản PDF và giữ chỗ trong danh sách 500 Beta Tester.</p>
                      <div class="flex flex-col gap-2">
                          <input type="email" v-model="gateEmail" placeholder="Nhập email của bạn..." class="w-full h-10 px-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[12px] outline-none focus:border-blue-500" />
                          <button @click="unlockRoadmap" class="w-full h-10 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[12px] font-bold shadow-md transition-all">
                              Mở khóa lộ trình ngay
                          </button>
                      </div>
                  </div>
              </div>
            </div>

            <div v-if="emailCaptured" class="pt-4 border-t border-[var(--border-color)] flex justify-end gap-3 mt-auto">
                <button class="px-5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)] text-[12px] font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500 transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-download"></i> Tải PDF
                </button>
                <button class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[12px] font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                    <i class="fa-regular fa-bookmark"></i> Lưu vào tài khoản
                </button>
            </div>

          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-[var(--border-color)]">
          <h4 class="text-[13px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-6 text-center">Người dùng nội bộ nói gì về EduAI?</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-[var(--bg-card)]/50 border border-[var(--border-color)] p-5 rounded-2xl relative">
                  <i class="fa-solid fa-quote-left absolute top-4 right-4 text-3xl text-[var(--border-color)] opacity-50"></i>
                  <p class="text-[12px] text-[var(--text-secondary)] italic mb-4 relative z-10">"Nhờ EduAI vạch lộ trình, tôi đã tiết kiệm được 2 tháng học lan man các kiến thức không cần thiết. Hệ thống chỉ định đúng khóa học tôi cần."</p>
                  <div class="flex items-center gap-3">
                      <img src="https://i.pravatar.cc/150?u=12" class="w-8 h-8 rounded-full object-cover border border-[var(--border-color)]" />
                      <div>
                          <p class="text-[12px] font-bold text-[var(--text-primary)]">Nguyễn Văn A</p>
                          <p class="text-[10px] text-blue-500">Fresher Frontend</p>
                      </div>
                  </div>
              </div>
              <div class="bg-[var(--bg-card)]/50 border border-[var(--border-color)] p-5 rounded-2xl relative">
                  <i class="fa-solid fa-quote-left absolute top-4 right-4 text-3xl text-[var(--border-color)] opacity-50"></i>
                  <p class="text-[12px] text-[var(--text-secondary)] italic mb-4 relative z-10">"Cảm giác có một Mentor định hướng từng bước rất yên tâm. Tôi thích cách AI tự điều chỉnh thời gian học theo lịch đi làm của tôi."</p>
                  <div class="flex items-center gap-3">
                      <img src="https://i.pravatar.cc/150?u=22" class="w-8 h-8 rounded-full object-cover border border-[var(--border-color)]" />
                      <div>
                          <p class="text-[12px] font-bold text-[var(--text-primary)]">Hoàng Tuấn</p>
                          <p class="text-[10px] text-emerald-500">Chuyển ngành IT</p>
                      </div>
                  </div>
              </div>
              <div class="bg-[var(--bg-card)]/50 border border-[var(--border-color)] p-5 rounded-2xl relative hidden md:block">
                  <i class="fa-solid fa-quote-left absolute top-4 right-4 text-3xl text-[var(--border-color)] opacity-50"></i>
                  <p class="text-[12px] text-[var(--text-secondary)] italic mb-4 relative z-10">"Bản PDF lộ trình do EduAI xuất ra cực kỳ chi tiết. Tôi đã in nó ra và dán lên tường để có động lực code mỗi ngày."</p>
                  <div class="flex items-center gap-3">
                      <img src="https://i.pravatar.cc/150?u=33" class="w-8 h-8 rounded-full object-cover border border-[var(--border-color)]" />
                      <div>
                          <p class="text-[12px] font-bold text-[var(--text-primary)]">Mai Linh</p>
                          <p class="text-[10px] text-purple-500">Sinh viên IT</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const levels = [
  { id: 'zero', name: 'Mới bắt đầu' },
  { id: 'basic', name: 'Đã biết cơ bản' },
  { id: 'pro', name: 'Muốn nâng cao' }
];

const form = ref({ target: 'frontend', level: 'zero', hours: '2' });
const isSimulating = ref(false);
const roadmapResult = ref(null);

// States cho Gated Content & Loading
const emailCaptured = ref(false);
const gateEmail = ref('');
const loadingTexts = ['Đang thu thập dữ liệu học viên...', 'Đang phân tích mục tiêu cá nhân...', 'Khớp nối dữ liệu 5000+ lộ trình...', 'Đang tối ưu thời gian học...', 'Hoàn tất!'];
const currentLoadingText = ref('');
const loadingProgress = ref(0);

// Tính toán thời gian (Real-time tweak)
const estimatedMonths = computed(() => {
  let baseHours = form.value.target === 'frontend' ? 240 : 300;
  if (form.value.level === 'basic') baseHours -= 80;
  if (form.value.level === 'pro') baseHours -= 150;
  const dailyHours = parseInt(form.value.hours);
  const totalDays = baseHours / dailyHours;
  return Math.max(1, Math.ceil(totalDays / 30));
});

// AI Logic Mock
const generateRoadmap = () => {
  if (form.value.target === 'frontend') {
    return [
      { title: 'Chặng 1: Nền tảng UI/UX', detail: 'Học cách tư duy bố cục, xây dựng giao diện tương thích mọi thiết bị với HTML/CSS & Tailwind.', course: 'Làm chủ Tailwind CSS', link: '/khoa-hoc' },
      { title: 'Chặng 2: Logic với JavaScript', detail: 'Hiểu rõ DOM, Event Loop, và xử lý bất đồng bộ (Promises, Async/Await).', course: 'JavaScript Thực chiến', link: '/khoa-hoc' },
      { title: 'Chặng 3: Framework Vue 3', detail: 'Quản lý State với Pinia, xây dựng SPA hiệu năng cao.', course: 'Vue.js 3 Masterclass', link: '/khoa-hoc' }
    ].slice(form.value.level === 'pro' ? 2 : form.value.level === 'basic' ? 1 : 0);
  } else {
    return [
      { title: 'Chặng 1: SQL Căn bản & Nâng cao', detail: 'Thiết kế chuẩn hóa DB, viết query tối ưu trên PostgreSQL.', course: 'PostgreSQL Thực chiến', link: '/khoa-hoc' },
      { title: 'Chặng 2: RESTful API với Node.js', detail: 'Xây dựng API chuẩn hóa bảo mật với JWT, phân quyền Middleware.', course: 'Backend Node.js', link: '/khoa-hoc' },
      { title: 'Chặng 3: Docker & Triển khai', detail: 'Đóng gói ứng dụng và Deploy lên Server AWS/VPS.', course: 'DevOps Cơ bản', link: '/khoa-hoc' }
    ].slice(form.value.level === 'pro' ? 2 : form.value.level === 'basic' ? 1 : 0);
  }
};

const simulateRoadmap = () => {
  isSimulating.value = true;
  roadmapResult.value = null;
  emailCaptured.value = false; // Reset trạng thái mở khóa
  gateEmail.value = '';
  loadingProgress.value = 0;
  
  let step = 0;
  currentLoadingText.value = loadingTexts[0];
  
  // Hiệu ứng Loading Bar chân thực
  const interval = setInterval(() => {
    step++;
    loadingProgress.value = (step / loadingTexts.length) * 100;
    
    if (step < loadingTexts.length) {
        currentLoadingText.value = loadingTexts[step];
    } else {
        clearInterval(interval);
        setTimeout(() => {
            isSimulating.value = false;
            roadmapResult.value = generateRoadmap();
        }, 400); // Thêm chút delay cho mượt
    }
  }, 700);
};

// Xử lý mở khóa
const unlockRoadmap = () => {
    if (!gateEmail.value.includes('@')) {
        alert('Vui lòng nhập email hợp lệ!');
        return;
    }
    emailCaptured.value = true;
};

// Tự động re-render số tháng nếu người dùng kéo Slider
watch(() => form.value.hours, () => {
  // Computed property tự xử lý
});
</script>

<style scoped>
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
}
</style>