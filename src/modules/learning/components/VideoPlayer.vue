<template>
  <div class="video-container">
    <video 
      class="player" 
      controls 
      @timeupdate="onTimeUpdate"
      poster="https://via.placeholder.com/800x450/000000/FFFFFF?text=Video+Thumbnail"
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      Trình duyệt của bạn không hỗ trợ video.
    </video>
  </div>
</template>

<script setup>
import { useLearningStore } from '@/stores/learning.store'

const store = useLearningStore()

const onTimeUpdate = (event) => {
  store.currentVideoTime = event.target.currentTime
}
</script>

<style scoped>
.video-container {
  width: 100%;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.player {
  width: 100%;
  max-height: 500px;
  outline: none;
}
</style>