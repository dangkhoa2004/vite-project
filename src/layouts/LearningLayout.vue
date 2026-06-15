<template>
  <div class="learning-layout">
    <header class="learning-header">
      <div class="logo">
        <span class="back-btn" @click="$router.push('/')">← Quay lại</span>
        <h2>Khóa học: Xây dựng Frontend với Vue 3</h2>
      </div>
    </header>
    
    <main class="learning-content">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.learning-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #111827;
  color: #f3f4f6;
}

.learning-header {
  height: 60px;
  background-color: #1f2937;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #374151;
}

.logo {
  display: flex;
  align-items: center;
  gap: 20px;
}

.back-btn {
  cursor: pointer;
  color: #60a5fa;
  font-weight: bold;
}

.learning-content {
  flex: 1;
  overflow: hidden;
}
</style>