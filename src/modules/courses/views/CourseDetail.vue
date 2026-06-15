<template>
    <HomePageHeader />
  <div class="min-h-screen bg-[#0f1115] text-gray-200 font-sans relative overflow-hidden pb-20 pt-24">
    
    <div class="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
    <div class="absolute top-[60%] right-[-10%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

    <main class="relative z-10 max-w-7xl mx-auto px-6">
      
      <nav class="flex items-center gap-2 text-[13px] text-gray-500 mb-6 font-medium">
        <a href="/" class="hover:text-blue-400 transition-colors">Trang chủ</a>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <a href="/khoa-hoc" class="hover:text-blue-400 transition-colors">Khóa học</a>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span class="text-gray-300">Chi tiết khóa học</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        <div class="lg:col-span-2 flex flex-col gap-4">
          <div class="relative w-full aspect-video bg-[#1c1e24] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" alt="Video bài giảng" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div class="w-20 h-20 bg-blue-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl shadow-[0_0_30px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-play ml-1"></i>
              </div>
            </div>
          </div>
          <h1 class="text-2xl md:text-3xl font-bold text-white leading-tight">
            Tư duy Toán học Tiêu chuẩn - Bài 2: Đạo hàm cơ bản
          </h1>
        </div>

        <div class="lg:col-span-1 bg-[#1c1e24]/80 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-xl flex flex-col h-[400px] lg:h-auto max-h-[500px]">
          <div class="p-5 border-b border-white/5">
            <h3 class="text-lg font-bold text-white">Danh sách bài học</h3>
          </div>
          <div class="flex-1 overflow-y-auto p-3 custom-scrollbar flex flex-col gap-2">
            
            <div 
              v-for="(video, index) in playlist" 
              :key="index"
              :class="[
                'flex items-center gap-4 p-3 rounded-[16px] cursor-pointer transition-all duration-300 border',
                video.active 
                  ? 'bg-blue-500/10 border-blue-500/30 shadow-inner' 
                  : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
              ]"
            >
              <div class="relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                <img :src="video.thumb" alt="thumb" class="w-full h-full object-cover opacity-80" />
                <div class="absolute inset-0 flex items-center justify-center bg-black/20">
                  <i v-if="video.active" class="fa-solid fa-play-circle text-blue-400 text-xl"></i>
                  <i v-else class="fa-solid fa-lock text-gray-400 text-sm"></i>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <h4 :class="['text-[13px] font-bold line-clamp-2 mb-1', video.active ? 'text-blue-400' : 'text-gray-200']">
                  {{ video.title }}
                </h4>
                <span class="text-[11px] text-gray-500 font-medium"><i class="fa-regular fa-clock mr-1"></i>{{ video.duration }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        
        <div class="lg:col-span-2 space-y-10 text-gray-400 leading-relaxed text-[15px]">
          
          <section>
            <h2 class="text-2xl font-bold text-white mb-4">Thông tin khóa học</h2>
            <p>Khóa học này cung cấp nền tảng vững chắc về tư duy logic và các kỹ năng giải quyết vấn đề toán học. Phù hợp cho học sinh muốn nâng cao thành tích và chuẩn bị cho các kỳ thi quan trọng. Nội dung được thiết kế trực quan, dễ hiểu, đi từ cơ bản đến nâng cao với hàng trăm bài tập thực hành sát thực tế.</p>
            <p class="mt-4">Bạn sẽ được tiếp cận phương pháp học tập chủ động, giúp ghi nhớ lâu và phản xạ nhanh trước các dạng đề khó.</p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">Chứng chỉ hoàn thành</h2>
            <p>Sau khi hoàn thành 100% video bài giảng và vượt qua bài kiểm tra cuối khóa với điểm số tối thiểu 80/100, học viên sẽ được cấp Chứng nhận hoàn thành khóa học từ EduPlatform, có giá trị lưu hành toàn quốc và tích hợp trực tiếp vào CV xin việc hoặc hồ sơ học tập.</p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">Đối tượng tham gia</h2>
            <p>Khóa học không yêu cầu đầu vào quá cao, phù hợp với: Học sinh mất gốc toán, học sinh muốn thi học sinh giỏi, hoặc bất kỳ ai muốn rèn luyện tư duy logic.</p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">Bạn sẽ học được gì trong khóa học này:</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li v-for="i in 6" :key="i" class="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div class="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-[12px]"></i>
                </div>
                <span class="text-[14px]">Nắm vững toàn bộ các định lý toán học cơ bản áp dụng thực tế.</span>
              </li>
            </ul>
          </section>

        </div>

        <div class="lg:col-span-1">
          <div class="sticky top-28 bg-[#1c1e24]/80 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-2xl p-6">
            
            <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <span class="text-gray-400 font-medium">Giá:</span>
              <span class="text-2xl font-extrabold text-white">499.000đ</span>
            </div>

            <ul class="space-y-4 mb-8 text-[14px]">
              <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-user-tie w-5"></i> Giảng viên</span>
                <span class="font-bold text-white">Thầy Wade Warren</span>
              </li>
              <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-star w-5"></i> Đánh giá</span>
                <div class="text-yellow-500 text-[12px]">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                </div>
              </li>
              <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-regular fa-clock w-5"></i> Thời lượng</span>
                <span class="font-medium text-white">10 Ngày</span>
              </li>
              <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-book-open w-5"></i> Bài học</span>
                <span class="font-medium text-white">30 Bài</span>
              </li>
              <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-clipboard-question w-5"></i> Trắc nghiệm</span>
                <span class="font-medium text-white">5 Bài</span>
              </li>
              <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-certificate w-5"></i> Chứng chỉ</span>
                <span class="font-medium text-emerald-400">Có</span>
              </li>
              <li class="flex justify-between items-center pb-3 border-b border-white/5">
                <span class="text-gray-400"><i class="fa-solid fa-language w-5"></i> Ngôn ngữ</span>
                <span class="font-medium text-white">Tiếng Việt</span>
              </li>
              <li class="flex justify-between items-center">
                <span class="text-gray-400"><i class="fa-solid fa-infinity w-5"></i> Quyền truy cập</span>
                <span class="font-medium text-white">Trọn đời</span>
              </li>
            </ul>

            <button class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] hover:-translate-y-0.5">
              Đăng ký học ngay
            </button>
            <p class="text-center text-[12px] text-gray-500 mt-4">Cam kết hoàn tiền trong 7 ngày nếu không hài lòng.</p>
          </div>
        </div>

      </div>

      <div class="mb-20">
        <h2 class="text-2xl font-bold text-white mb-8">Khóa học tương tự</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div v-for="course in similarCourses" :key="course.id" class="group bg-[#1c1e24]/60 backdrop-blur-md rounded-[24px] p-3 border border-white/5 hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300">
            <div class="flex gap-4 items-center">
              <div class="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                <img :src="course.thumb" alt="Course" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div class="flex-1 py-1">
                <h3 class="text-[14px] font-bold text-white leading-tight mb-1 group-hover:text-blue-400 transition-colors">{{ course.title }}</h3>
                <div class="text-yellow-500 text-[10px] mb-2">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[15px] font-extrabold text-orange-400">{{ course.price }}</span>
                  <button class="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center">
                    <i class="fa-solid fa-bag-shopping text-[12px]"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="relative bg-gradient-to-br from-[#0f121d] to-[#1a1c29] rounded-[32px] border border-white/5 p-12 text-center overflow-hidden mb-10 shadow-2xl">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <img src="https://i.pravatar.cc/150?img=11" alt="avatar" class="absolute top-10 left-[15%] w-12 h-12 rounded-full border-2 border-white/20 shadow-lg animate-bounce" style="animation-duration: 4s;" />
        <img src="https://i.pravatar.cc/150?img=32" alt="avatar" class="absolute bottom-10 left-[20%] w-14 h-14 rounded-full border-2 border-white/20 shadow-lg animate-bounce" style="animation-duration: 5s;" />
        <img src="https://i.pravatar.cc/150?img=12" alt="avatar" class="absolute top-16 right-[15%] w-10 h-10 rounded-full border-2 border-white/20 shadow-lg animate-bounce" style="animation-duration: 4.5s;" />
        <img src="https://i.pravatar.cc/150?img=44" alt="avatar" class="absolute bottom-12 right-[20%] w-16 h-16 rounded-full border-2 border-white/20 shadow-lg animate-bounce" style="animation-duration: 6s;" />

        <div class="relative z-10 max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Đăng ký để nhận thông báo <br/>về các khóa học mới nhất
          </h2>
          <p class="text-sm text-gray-400 mb-8">Hơn 20K+ học viên đang học tập mỗi ngày cùng EduPlatform. Hãy tham gia cùng chúng tôi.</p>
          
          <div class="flex items-center w-full max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-full p-1.5 border border-white/10 shadow-lg focus-within:border-blue-500/50 transition-colors">
            <input 
              type="email" 
              placeholder="Nhập địa chỉ email của bạn..." 
              class="flex-1 bg-transparent border-none text-white text-sm px-5 focus:outline-none placeholder-gray-500"
            />
            <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full transition-all shadow-md">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>

    </main>
  </div>
  <HomePageFooter />
</template>

<script setup>
import HomePageHeader from "@/layouts/HomePageHeader.vue";
import HomePageFooter from "@/layouts/HomePageFooter.vue";
import { ref } from 'vue'

// Mock Data cho Playlist
const playlist = ref([
  { title: 'Toán học - Giới thiệu tổng quan', duration: '1:37', thumb: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&q=80', active: true },
  { title: 'Toán học - Tiêu chuẩn Bài 1', duration: '8:45', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
  { title: 'Toán học - Tiêu chuẩn Bài 2', duration: '12:11', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
  { title: 'Toán học - Tiêu chuẩn Bài 3', duration: '6:10', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
  { title: 'Toán học - Tiêu chuẩn Bài 4', duration: '10:00', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
  { title: 'Toán học - Tổng kết chương', duration: '7:53', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
])

// Mock Data cho Similar Courses
const similarCourses = ref([
  { id: 1, title: 'Đại số tuyến tính nâng cao', price: '450.000đ', thumb: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&q=80' },
  { id: 2, title: 'Hình học không gian cơ bản', price: '399.000đ', thumb: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=200&q=80' },
  { id: 3, title: 'Luyện thi Đại học Khối A', price: '899.000đ', thumb: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80' },
  { id: 4, title: 'Giải tích toán học phần 1', price: '450.000đ', thumb: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&q=80' },
])
</script>

<style scoped>
/* Tuỳ chỉnh thanh cuộn cho Playlist */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #374151;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
}
</style>