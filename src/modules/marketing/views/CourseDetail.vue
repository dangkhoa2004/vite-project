<template>
  <HomePageHeader />
  
  <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-[var(--bg-app)]">
      <div class="text-blue-500 flex flex-col items-center">
          <i class="fa-solid fa-spinner fa-spin text-4xl mb-4"></i>
          <p>Đang tải chi tiết khóa học...</p>
      </div>
  </div>

  <div v-else-if="error" class="min-h-screen flex items-center justify-center bg-[var(--bg-app)] text-red-500">
      <p>{{ error }}</p>
  </div>

  <div v-else-if="courseInfo" class="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans relative overflow-hidden pb-20 pt-24 transition-colors duration-300">
    
    <div class="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
    <div class="absolute top-[60%] right-[-10%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

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
          <div class="relative w-full aspect-video bg-[var(--bg-card)] rounded-[24px] border border-[var(--border-color)] shadow-2xl overflow-hidden group cursor-pointer">
            <img :src="courseInfo.thumbnail" alt="Video bài giảng" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div class="w-20 h-20 bg-blue-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-[var(--text-primary)] text-2xl shadow-[0_0_30px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-play ml-1"></i>
              </div>
            </div>
          </div>
          <h1 class="text-2xl md:text-3xl font-bold text-[var(--text-primary)] leading-tight">
            {{ courseInfo.title }}
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
            <p>{{ courseInfo.description }}</p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-[var(--text-primary)] mb-4">Bạn sẽ học được gì:</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li v-for="(item, idx) in courseInfo.whatYouWillLearn" :key="idx"
                class="flex items-start gap-3 bg-[var(--bg-card)] p-4 rounded-2xl border border-[var(--border-color)]">
                <div class="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-[12px]"></i>
                </div>
                <span class="text-[14px]">{{ item }}</span>
              </li>
            </ul>
          </section>
        </div>

        <div class="lg:col-span-1">
          <CoursePricingSidebar :instructor="instructor" :price="courseInfo.price" />
        </div>
      </div>

      <CourseSimilar :courses="similarCourses" />
      <NewsletterBanner />
    </main>
  </div>
  <HomePageFooter />
</template>

<script setup>
import HomePageHeader from "@/layouts/HomePageHeader.vue"
import HomePageFooter from "@/layouts/HomePageFooter.vue"

// Import Sub-components
import CoursePlaylist from "../components/CoursePlaylist.vue"
import CoursePricingSidebar from "../components/CoursePricingSidebar.vue"
import MentorOfCourse from "../components/MentorOfCourse.vue"
import CourseSimilar from "../components/CourseSimilar.vue"
import NewsletterBanner from "../components/NewsletterBanner.vue"

// IMPORT COMPOSABLE MỚI TẠO
import { useCourseDetail } from '../composables/useCourseDetail'

// Hủy toàn bộ Mock Data cũ, chỉ cần gọi 1 dòng này để lấy dữ liệu động từ Store
const { courseInfo, instructor, playlist, similarCourses, isLoading, error } = useCourseDetail()

</script>