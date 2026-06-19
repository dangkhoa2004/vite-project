import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useGlobalLoader } from '@/composables/useGlobalLoader' // 1. Import composable quản lý loading

// 1. Import các router modules
import publicRoutes from '@/modules/public/public-router'
import accountRoutes from '@/modules/account/account-router'
import courseRoutes from '@/modules/courses/courses-router'
import learningRoutes from '@/modules/learning/learning-router'
import systemRoutes from '@/modules/app-settings/app-settings-router'
import exploreRoutes from '@/modules/explore/explore-router'
import teacherRoutes from '@/modules/teacher/teacher-router'
import marketingRoutes from '@/modules/marketing/marketing-router'
import checkoutRoutes from '@/modules/checkout/checkout-router'
import NotFound from '@/components/features/NotFound.vue'

// 2. Gộp tất cả routes lại bằng Spread Operator (...)
const routes = [
  ...publicRoutes,
  ...courseRoutes,
  ...learningRoutes,
  ...accountRoutes,
  ...exploreRoutes,
  ...teacherRoutes,
  ...marketingRoutes,
  ...checkoutRoutes,
  ...systemRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      requiresAuth: false, // Thường là trang công khai
      title: 'Không tìm thấy trang'
    }
  }
]

// 3. Khởi tạo Router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation Guard chặn truy cập trái phép VÀ bật Loading
router.beforeEach((to, from) => {
  const { isAuthenticated } = useAuth()
  const { showLoader } = useGlobalLoader()

  // Bật hiệu ứng loading ngay khi bắt đầu điều hướng trang
  showLoader('Đang tải trang...')

  // Logic kiểm tra đăng nhập của em giữ nguyên
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { name: 'Login', query: { redirect: to.fullPath } }
  }

  return true
})

// Hook chạy sau khi trang đã được tải xong
router.afterEach(() => {
  const { hideLoader } = useGlobalLoader()
  
  // Dùng setTimeout (khoảng 300ms - 500ms) để UI mượt mà, 
  // tránh tình trạng trang load quá nhanh làm màn hình nhấp nháy khó chịu
  setTimeout(() => {
    hideLoader()
  }, 400)
})

export default router