<template>
  <HomePageHeader />
  <div
    class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-24 transition-colors duration-300">

    <div
      class="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0">
    </div>
    <div
      class="absolute top-[60%] right-[-10%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0">
    </div>

    <main class="relative z-10 max-w-7xl mx-auto px-6">

      <nav class="flex items-center gap-2 text-[13px] text-[var(--text-secondary)] mb-6 font-medium">
        <a href="/" class="hover:text-blue-400 transition-colors">Trang chủ</a>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <a href="/khoa-hoc" class="hover:text-blue-400 transition-colors">Khóa học</a>
        <i class="fa-solid fa-chevron-right text-[10px]"></i>
        <span class="text-[var(--text-primary)]">Chi tiết khóa học</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div class="lg:col-span-2 flex flex-col gap-4">
          <div
            class="relative w-full aspect-video bg-[var(--bg-card)] rounded-[24px] border border-[var(--border-color)] shadow-2xl overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
              alt="Video bài giảng"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div
                class="w-20 h-20 bg-blue-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-[var(--text-primary)] text-2xl shadow-[0_0_30px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-play ml-1"></i>
              </div>
            </div>
          </div>
          <h1 class="text-2xl md:text-3xl font-bold text-[var(--text-primary)] leading-tight">
            Tư duy Toán học Tiêu chuẩn - Bài 2: Đạo hàm cơ bản
          </h1>
        </div>

        <div class="lg:col-span-1">
          <CoursePlaylist :playlist="playlist" />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        <div class="lg:col-span-2 space-y-10 text-[var(--text-secondary)] leading-relaxed text-[15px]">
          <MentorOfCourse :instructor="instructor" />

          <section>
            <h2 class="text-2xl font-bold text-[var(--text-primary)] mb-4">Thông tin khóa học</h2>
            <p>Khóa học này cung cấp nền tảng vững chắc về tư duy logic...</p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-[var(--text-primary)] mb-4">Bạn sẽ học được gì:</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li v-for="i in 6" :key="i"
                class="flex items-start gap-3 bg-[var(--bg-card)] p-4 rounded-2xl border border-[var(--border-color)]">
                <div
                  class="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-[12px]"></i>
                </div>
                <span class="text-[14px]">Nắm vững toàn bộ các định lý toán học cơ bản áp dụng thực tế.</span>
              </li>
            </ul>
          </section>
        </div>

        <div class="lg:col-span-1">
          <CoursePricingSidebar :instructor="instructor" price="499.000đ" />
        </div>
      </div>

      <CourseSimilar :courses="similarCourses" />
      <NewsletterBanner />
    </main>
  </div>
  <HomePageFooter />
</template>

<script setup>
import { ref } from 'vue'
import HomePageHeader from "@/layouts/HomePageHeader.vue"
import HomePageFooter from "@/layouts/HomePageFooter.vue"

// Import Sub-components
import CoursePlaylist from "@/modules/courses/components/CoursePlaylist.vue"
import CoursePricingSidebar from "@/modules/courses/components/CoursePricingSidebar.vue"
import MentorOfCourse from "@/modules/courses/components/MentorOfCourse.vue"
import CourseSimilar from "@/modules/courses/components/CourseSimilar.vue"
import NewsletterBanner from "@/modules/courses/components/NewsletterBanner.vue"

// --- MOCK DATA ---
const instructor = ref({
  id: '1',
  name: 'Thầy Wade Warren',
  role: 'Chuyên gia luyện thi Toán học Cấp Quốc gia',
  avatar: 'https://i.pravatar.cc/150?img=11',
  rating: '4.9',
  reviews: '2,400',
  students: '15,000+',
  coursesCount: 12,
  bio: 'Với hơn 10 năm kinh nghiệm luyện thi đại học khối A, A1 và thi học sinh giỏi các cấp. Phương pháp giảng dạy của thầy tập trung vào việc đi tìm "bản chất của vấn đề" giúp học sinh rèn luyện tư duy logic thay vì học vẹt công thức. Thầy đã từng là cố vấn cho nhiều đội tuyển Olympic Toán học.'
})

const playlist = ref([
  { title: 'Toán học - Giới thiệu tổng quan', duration: '1:37', thumb: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&q=80', active: true },
  { title: 'Toán học - Tiêu chuẩn Bài 1', duration: '8:45', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
  { title: 'Toán học - Tiêu chuẩn Bài 2', duration: '12:11', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
  { title: 'Toán học - Tiêu chuẩn Bài 3', duration: '6:10', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
  { title: 'Toán học - Tiêu chuẩn Bài 4', duration: '10:00', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
  { title: 'Toán học - Tổng kết chương', duration: '7:53', thumb: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80', active: false },
])

const similarCourses = ref([
  { id: 1, title: 'Đại số tuyến tính nâng cao', price: '450.000đ', thumb: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&q=80' },
  { id: 2, title: 'Hình học không gian cơ bản', price: '399.000đ', thumb: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=200&q=80' },
  { id: 3, title: 'Luyện thi Đại học Khối A', price: '899.000đ', thumb: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80' },
  { id: 4, title: 'Giải tích toán học phần 1', price: '450.000đ', thumb: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&q=80' },
])
</script>