<template>
  <div class="course-page">
    <header class="main-header">
      <div class="logo">EduPlatform</div>
      <nav v-if="isAuthenticated">
        <span class="user-greeting">Xin chào, {{ user?.name }}</span>
        <button @click="handleLogout" class="logout-btn">Đăng xuất</button>
      </nav>
      <nav v-else>
        <button @click="$router.push('/login')" class="login-btn">Đăng nhập</button>
      </nav>
    </header>

    <main class="container">
      <div class="hero-section">
        <h1>Khám phá các khóa học nổi bật</h1>
        <p>Nâng cao kỹ năng lập trình của bạn ngay hôm nay.</p>
      </div>

      <div class="course-grid">
        <div v-for="course in courses" :key="course.id" class="course-card">
          <img :src="course.thumbnail" :alt="course.title" class="course-img" />
          <div class="course-info">
            <span class="category">{{ course.category }}</span>
            <h3 class="course-title">{{ course.title }}</h3>
            <p class="course-desc">{{ course.description }}</p>
            
            <div class="course-footer">
              <span class="price">{{ course.price === 0 ? 'Miễn phí' : formatPrice(course.price) }}</span>
              <BaseButton 
                variant="primary" 
                @click="goToStudyRoom(course.id)"
              >
                Vào học ngay
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import BaseButton from '@/components/BaseButton.vue'
import { formatCurrency } from '@/utils/formatters' // Nếu anh đã tạo file formatters.js

const router = useRouter()
const { user, isAuthenticated, logout } = useAuth()

// Mock data khóa học
const courses = ref([
  {
    id: 1,
    title: 'Xây dựng hệ thống Backend với NestJS',
    description: 'Học cách thiết kế và phát triển RESTful API hiệu suất cao từ cơ bản đến nâng cao.',
    category: 'Backend',
    price: 0,
    thumbnail: 'https://via.placeholder.com/400x200/ea2845/FFFFFF?text=NestJS+Mastery'
  },
  {
    id: 2,
    title: 'Frontend hiện đại với Vue 3',
    description: 'Nắm vững Composition API, Pinia và Vue Router để xây dựng ứng dụng SPA chuyên nghiệp.',
    category: 'Frontend',
    price: 599000,
    thumbnail: 'https://via.placeholder.com/400x200/42b883/FFFFFF?text=Vue3+Advanced'
  },
  {
    id: 3,
    title: 'Làm chủ Cơ sở dữ liệu PostgreSQL',
    description: 'Tối ưu hóa câu truy vấn, thiết kế lược đồ và quản lý dữ liệu lớn hiệu quả.',
    category: 'Database',
    price: 450000,
    thumbnail: 'https://via.placeholder.com/400x200/336791/FFFFFF?text=PostgreSQL+Pro'
  }
])

const formatPrice = (price) => {
  // Fallback nếu không dùng utils/formatters.js
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

const goToStudyRoom = (courseId) => {
  // Chuyển hướng sang route StudyRoom cùng với param courseId
  router.push({ name: 'StudyRoom', params: { courseId: courseId } })
}

const handleLogout = () => {
  logout()
  // Tùy chọn: có thể redirect hoặc chỉ tải lại state
}
</script>

<style scoped>
.main-header {
  background: white;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.logo { font-size: 20px; font-weight: bold; color: #3b82f6; }

.user-greeting { margin-right: 15px; font-size: 14px; font-weight: 500; }
.logout-btn, .login-btn {
  padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;
}
.logout-btn { background: #f3f4f6; color: #374151; }
.login-btn { background: #3b82f6; color: white; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero-section { text-align: center; margin-bottom: 40px; }
.hero-section h1 { font-size: 32px; margin-bottom: 10px; color: #111827; }
.hero-section p { color: #6b7280; font-size: 16px; }

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.course-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.course-card:hover { transform: translateY(-5px); }

.course-img { width: 100%; height: 180px; object-fit: cover; }

.course-info { padding: 20px; }
.category { font-size: 12px; color: #3b82f6; font-weight: bold; text-transform: uppercase; margin-bottom: 8px; display: inline-block;}
.course-title { font-size: 18px; color: #1f2937; margin: 0 0 10px; line-height: 1.4; }
.course-desc { font-size: 14px; color: #6b7280; margin-bottom: 20px; line-height: 1.5; }

.course-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f3f4f6;
  padding-top: 15px;
}

.price { font-weight: bold; color: #ef4444; font-size: 16px; }
</style>