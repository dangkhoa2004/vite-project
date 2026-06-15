import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

// 1. Import các router modules
import authRoutes from '@/modules/auth/router'
import courseRoutes from '@/modules/courses/router'
import learningRoutes from '@/modules/learning/router'

// 2. Gộp tất cả routes lại bằng Spread Operator (...)
const routes = [
  ...courseRoutes,
  ...learningRoutes,
  ...authRoutes
]

// 3. Khởi tạo Router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard chặn truy cập trái phép
router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth()

  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router