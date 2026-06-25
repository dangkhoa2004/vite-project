// File: src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useGlobalLoader } from '@/composables/useGlobalLoader'

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
import dashboardRoutes from '@/modules/dashboard/dashboard-router'
import NotFound from '@/components/features/NotFound.vue'

// 2. Gộp tất cả routes lại 
const routes = [
  ...publicRoutes,
  ...courseRoutes,
  ...learningRoutes,
  ...accountRoutes,
  ...exploreRoutes,
  ...teacherRoutes,
  ...marketingRoutes,
  ...checkoutRoutes,
  ...dashboardRoutes,
  ...systemRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      requiresAuth: false,
      title: 'Không tìm thấy trang'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 3. Navigation Guards (Bảo vệ và thiết lập trước khi vào trang)
router.beforeEach((to, from) => {
  const { isAuthenticated } = useAuth()
  const { showLoader } = useGlobalLoader()
  
  // Hiển thị hiệu ứng loading
  showLoader('Đang tải trang...')

  // --- CẬP NHẬT TIÊU ĐỀ (DYNAMIC TITLE) ---
  const defaultTitle = 'Edu Platform'
  document.title = to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle

  // --- XỬ LÝ PHÂN QUYỀN (AUTH GUARDS) ---
  
  // Trường hợp 1: Cố tình vào trang yêu cầu đăng nhập khi chưa đăng nhập
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // Đã sửa 'Login' thành 'DangNhap' để khớp với router của bạn
    return { name: 'DangNhap', query: { redirect: to.fullPath } }
  }

  // Trường hợp 2: Đã đăng nhập nhưng cố tình quay lại trang Đăng nhập / Đăng ký
  if (to.meta.requiresGuest && isAuthenticated.value) {
    // Đá về trang chủ hoặc Dashboard tuỳ ý bạn (ở đây đang set về trang chủ)
    return { path: '/' }
  }

  return true // Cho phép qua
})

// 4. After Hooks (Chạy sau khi đã load xong trang)
router.afterEach(() => {
  const { hideLoader } = useGlobalLoader()
  // Tắt loader sau một khoảng delay nhỏ để UI mượt mà
  setTimeout(() => {
    hideLoader()
  }, 400)
})

export default router