<template>
  <HomePageHeader />
  <div class="min-h-screen bg-[#0f1115] text-gray-200 font-sans relative overflow-hidden pb-20">
    <div
      class="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0">
    </div>
    <div
      class="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none z-0">
    </div>
    <div
      class="absolute bottom-0 left-[20%] w-[30vw] h-[30vw] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0">
    </div>

    <main class="relative z-10 max-w-7xl mx-auto px-6 pt-24 flex flex-col gap-32">
      <HeroSection />
      <FeatureVideoSection />
      <CourseGridSection />
      <BottomCtaSection />
    </main>
  </div>
  <HomePageFooter />
</template>

<script setup>
import HomePageHeader from "@/layouts/HomePageHeader.vue";
import HomePageFooter from "@/layouts/HomePageFooter.vue";
import HeroSection from "@/modules/courses/components/HeroSection.vue";
import FeatureVideoSection from "@/modules/courses/components/FeatureVideoSection.vue";
import CourseGridSection from "@/modules/courses/components/CourseGridSection.vue";
import BottomCtaSection from "@/modules/courses/components/BottomCtaSection.vue";
</script>
