<template>
  <DashBoardSideBar />
  <main class="flex-1 lg:ml-[260px] p-6 lg:p-8 xl:p-10 relative z-10">
    <DashBoardFeatureButton />
    <DashBoardSystemIndex />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      <DashBoardWelcomeBanners />
      <DashBoardPromoCards />
    </div>
    <DashBoardIntroSection />
    <DashBoardBanners />
  </main>
</template>

<script setup>
import DashBoardSideBar from '../components/DashBoardSideBar.vue'
import DashBoardFeatureButton from '../components/DashBoardFeatureButton.vue'
import DashBoardSystemIndex from '../components/DashBoardSystemIndex.vue'
import DashBoardWelcomeBanners from '../components/DashBoardWelcomeBanners.vue'
import DashBoardPromoCards from '../components/DashBoardPromoCards.vue'
import DashBoardIntroSection from '../components/DashBoardIntroSection.vue'
import DashBoardBanners from '../components/DashBoardBanners.vue'
</script>