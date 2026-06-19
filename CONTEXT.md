
## 🏗️ **II. Kiến Trúc Tổng Thể**

### **Architecture Diagram**
```
┌─────────────────────────────────────────────────────────────┐
│                    VITE FRONTEND SPA                        │
├─────────────────────────────────────────────────────────────┤
│                                                             |
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Layouts (HomePageHeader, HomePageFooter)     │   │
│  │         LearningLayout (cho phòng học)               │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              ROUTER (Vue Router 4)                   │   │
│  │  ├─ /dang-nhap → account/SignIn                      │   │
│  │  ├─ /khoa-hoc-cua-toi → courses/MyCourses            │   │
│  │  ├─ /phong-hoc/:courseId → learning/LearningRoom     │   │
│  │  ├─ /khoa-hoc → marketing/CommerceCourses            │   │
│  │  └─ [8+ routes còn lại]                              │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌───────────────┬──────────────┬────────────────────────┐  │
│  │   MODULES     │ COMPONENTS   │  COMPOSABLES/UTILS/    │  │
│  │ (Feature-     │              │  STORES/SERVICES       │  │
│  │  based)       │              │                        │  │
│  └───────────────┴──────────────┴────────────────────────┘  │
│                                                             |
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP Requests
                              ▼
        ┌─────────────────────────────────────────┐
        │   BACKEND API (Go/Node.js + Database)   │
        │  http://localhost:8080/api              │
        ├─────────────────────────────────────────┤
        │  /auth (login, register)                │
        │  /users (profile, notifications)        │
        │  /courses (list, detail, progress)      │
        │  /learning (lessons, attachments)       │
        │  /commerce (orders, checkout)           │
        │  /orders (payment, billing)             │
        └─────────────────────────────────────────┘
```

---

## 📊 **II. Luồng Dữ Liệu (Data Flow)**

### **Authentication Flow**
```
SignIn.vue
  ↓ (v-model: email, password)
  ├─ handleLogin() 
  │  ├─ Call: authStore.login(credentials)
  │  │  ├─ authService.login() 
  │  │  │  └─ axios.post('/login', credentials)
  │  │  │     └─ [Backend returns: { token, userId, role }]
  │  │  ├─ Save token → localStorage('access_token')
  │  │  ├─ Set state: isAuthenticated = true
  │  │  └─ Return success
  │  │
  │  └─ router.push('/') [Home or redirect path]
  │
  └─ [Next requests] 
     └─ api.service.js Interceptor
        └─ Add Header: Authorization: Bearer {token}
```

### **User Profile Flow**
```
useAuth() composable
  ├─ read: isAuthenticated (from authStore)
  ├─ read: user (from userStore.profile)
  └─ call: checkSession()
     ├─ if (isAuthenticated && !userStore.profile)
     │  └─ userStore.fetchUserProfile()
     │     ├─ await userService.getProfile()
     │     │  └─ axios.get('/users/profile')
     │     ├─ mapProfileData(rawData) ← normalize backend response
     │     │  └─ Convert snake_case → camelCase
     │     └─ Store in state: userStore.profile
     │
     └─ [Components] → computed(() => user.value)
```

### **Course Learning Flow**
```
LearningRoom.vue (view)
  ├─ Route params: courseId, lessonId
  ├─ composable: useLearning()
  │  ├─ fetch course details
  │  ├─ fetch lessons
  │  └─ track progress
  │
  └─ Sub-components:
     ├─ SlideViewer.vue (bài giảng)
     ├─ VideoPlayer.vue (video)
     ├─ AttachmentList.vue (tài liệu)
     ├─ ChatBox.vue (chat với giáo viên)
     └─ TableOfContents.vue (mục lục khóa học)
```

### **State Management (Pinia)**
```
Stores/
├─ auth.store.js
│  ├─ state: token, isAuthenticated, isLoading, error
│  └─ actions: login(), register(), logout()
│
├─ user.store.js
│  ├─ state: profile, streaks, notifications, unreadCount
│  ├─ actions: fetchUserProfile(), fetchNotifications()
│  └─ helpers: mapProfileData(), mapNotificationData() ← DATA MAPPER PATTERN
│
├─ commerce.store.js
│  ├─ state: cart, orders, checkout status
│  └─ actions: addToCart(), removeFromCart(), checkout()
│
├─ learning.store.js
│  ├─ state: currentCourse, lessonProgress, watchHistory
│  └─ actions: fetchLessonProgress(), updateProgress()
│
└─ order.store.js
   ├─ state: orderList, orderDetail, paymentStatus
   └─ actions: fetchOrders(), fetchOrderDetail()
```

---

## 🗂️ **III. Cấu Trúc Module (Feature-Based)**

### **Module Breakdown**

```
modules/
│
├─ account/                  ← Xác thực & quản lý tài khoản
│  ├─ account-router.js      ├─ Routes: /dang-nhap, /dang-ky, /thong-tin-tai-khoan
│  ├─ components/
│  │  └─ SettingNavInformation.vue
│  ├─ composables/
│  │  └─ useProfile.js       ├─ Custom hook cho profile management
│  └─ views/
│     ├─ SignIn.vue          ├─ [Chức năng: đăng nhập]
│     ├─ SignUp.vue          ├─ [Chức năng: đăng ký]
│     ├─ ForgotPassword.vue  ├─ [Chức năng: quên mật khẩu]
│     ├─ AccountProfile.vue  ├─ [Chức năng: xem/sửa thông tin]
│     ├─ AccountSecurity.vue ├─ [Chức năng: đổi mật khẩu, 2FA]
│     └─ AccountBilling.vue  ├─ [Chức năng: lịch sử thanh toán]
│
├─ courses/                  ← Quản lý danh sách khóa học
│  ├─ courses-router.js
│  ├─ components/
│  │  ├─ CourseFilter.vue    ├─ [Lọc, sắp xếp khóa học]
│  │  ├─ CourseGrid.vue      ├─ [Hiển thị grid khóa học]
│  │  ├─ CourseHeader.vue
│  │  ├─ CourseRoadmap.vue   ├─ [Lộ trình khóa học]
│  │  ├─ CourseSidebar.vue
│  │  └─ MyCertificates.vue  ├─ [Xem chứng chỉ hoàn thành]
│  └─ views/
│     └─ MyCourses.vue       ├─ [Khóa học của học viên]
│
├─ learning/                 ← Phòng học trực tuyến
│  ├─ learning-router.js     ├─ Route: /phong-hoc/:courseId
│  ├─ components/
│  │  ├─ SlideViewer.vue     ├─ [Hiển thị slide bài giảng]
│  │  ├─ VideoPlayer.vue     ├─ [Phát video học]
│  │  ├─ ChatBox.vue         ├─ [Chat với giáo viên]
│  │  ├─ AttachmentList.vue  ├─ [Tài liệu học]
│  │  └─ TableOfContents.vue ├─ [Mục lục khóa học]
│  └─ views/
│     └─ LearningRoom.vue    ├─ [Main learning interface]
│
├─ marketing/                ← Bán hàng & quảng cáo
│  ├─ marketing-router.js    ├─ Routes: /khoa-hoc, /khoa-hoc/:id
│  ├─ components/
│  │  ├─ CommerceCourseFilter.vue
│  │  ├─ CoursePlaylist.vue
│  │  ├─ CoursePricingSidebar.vue
│  │  ├─ CourseSimilar.vue
│  │  ├─ MentorOfCourse.vue
│  │  └─ PaymentMethods.vue
│  └─ views/
│     ├─ CommerceCourses.vue ├─ [Danh sách khóa học (shop)]
│     ├─ CourseDetail.vue    ├─ [Chi tiết khóa học trước mua]
│     ├─ MentorDetail.vue
│     └─ YourCart.vue        ├─ [Giỏ hàng]
│
├─ checkout/                 ← Thanh toán (Có thể chưa phát triển)
│  ├─ checkout-router.js
│  ├─ components/
│  │  ├─ PaymentMethods.vue  ├─ [Phương thức thanh toán]
│  └─ views/
│     └─ YourCart.vue
|
├─ explore/                  ← Khám phá & AI
│  ├─ explore-router.js
│  ├─ components/
│  │  ├─ AiPlayground.vue    ├─ [Sân chơi AI]
│  │  └─ FloatingAiChat.vue  ├─ [Chat AI nổi]
│  └─ views/
│     └─ Explore.vue
│
├─ teacher/                  ← Quản lý giáo viên (In Progress)
│  ├─ teacher-router.js
│  ├─ components/
│  │  └─ AnalyticsReports.vue
│  └─ views/
│     └─ [TBD]
│
├─ app-settings/             ← Cài đặt ứng dụng
│  ├─ app-settings-router.js
│  ├─ components/
│  │  ├─ ColorMode.vue       ├─ [Chế độ sáng/tối]
│  │  ├─ Notifications.vue
│  │  └─ LearningExperience.vue
│  └─ views/
│     ├─ UserSettings.vue    ├─ [Cài đặt người dùng]
│     └─ Notification.vue
│
└─ public/                   ← Trang công khai
   ├─ public-router.js
   ├─ components/
   │  ├─ HeroSection.vue     ├─ [Banner trang chủ]
   │  ├─ CourseGridSection.vue
   │  ├─ FeatureVideoSection.vue
   │  └─ BottomCtaSection.vue
   └─ views/
      └─ HomePage.vue        ├─ [Trang chủ]
```

---

## 📁 **IV. Cấu Trúc Thư Mục Chi Tiết**

```
src/
├─ App.vue                   ← Root component
├─ main.js                   ← Entry point (Vue app initialization)
├─ style.css                 ← Global styles
│
├─ router/
│  └─ index.js               ← Vue Router config + Navigation guards
│
├─ stores/                   ← Pinia global state
│  ├─ auth.store.js          ├─ Token, authentication state
│  ├─ user.store.js          ├─ Profile, notifications, streaks
│  ├─ commerce.store.js      ├─ Cart, checkout
│  ├─ learning.store.js      ├─ Course progress, watch history
│  └─ order.store.js         ├─ Orders, billing history
│
├─ services/                 ← API calls (stateless, reusable)
│  ├─ api.service.js         ├─ Axios instance + Interceptors
│  ├─ auth.service.js        ├─ Auth endpoints
│  ├─ user.service.js        ├─ User profile endpoints
│  ├─ learning.service.js    ├─ Learning/course endpoints
│  ├─ commerce.service.js    ├─ Shop/commerce endpoints
│  └─ order.service.js       ├─ Order endpoints
│
├─ composables/              ← Reusable Vue 3 logic (Composition API)
│  ├─ useAuth.js             ├─ Auth state + permissions (student, teacher, admin)
│  ├─ useColorMode.js        ├─ Dark/light mode toggle
│  └─ useGlobalLoader.js     ├─ Global loading indicator
│
├─ components/               ← Reusable Vue components
│  ├─ ui/                    ├─ Base/generic components
│  │  ├─ BaseButton.vue      ├─ Primary, secondary, danger buttons
│  │  └─ DropDownUI.vue      ├─ Dropdown component
│  │
│  └─ features/              ├─ Feature-specific components
│     └─ NotFound.vue        ├─ 404 page
│
├─ layouts/                  ← Layout components
│  ├─ HomePageHeader.vue     ├─ Header (navigation, search)
│  ├─ HomePageFooter.vue     ├─ Footer
│  └─ LearningLayout.vue     ├─ Layout cho phòng học
│
├─ modules/                  ← Feature modules (see IV)
│  ├─ account/
│  ├─ courses/
│  ├─ learning/
│  ├─ marketing/
│  ├─ checkout/
│  ├─ explore/
│  ├─ teacher/
│  ├─ app-settings/
│  └─ public/
│
├─ types/                    ← TypeScript JSDoc type definitions
│  └─ learning.js            ├─ UserMessage, CourseAttachment, LessonInfo types
│
├─ utils/                    ← Pure utility functions
│  └─ formatters.js          ├─ formatVideoTime(), formatCurrency()
│
└─ assets/                   ← Static assets
   ├─ icons/                 ├─ SVG icons (if any)
   ├─ images/                ├─ Images
   └─ styles/                ├─ CSS utilities (if any)
```

---

## 📋 **V. Quy Ước Đặt Tên (Naming Conventions)**

### **File Naming**

| Loại | Pattern | Ví Dụ | Nơi |
|------|---------|-------|-----|
| **Router** | `*-router.js` | `courses-router.js` | `modules/*/` |
| **Store** | `*.store.js` | `auth.store.js` | `stores/` |
| **Service** | `*.service.js` | `auth.service.js` | `services/` |
| **Composable** | `use*.js` | `useAuth.js` | `composables/` |
| **Component** | `PascalCase.vue` | `BaseButton.vue` | `components/` |
| **View** | `PascalCase.vue` | `SignIn.vue` | `modules/*/views/` |
| **Utility** | `camelCase.js` | `formatters.js` | `utils/` |

### **Variable & Function Naming**

```javascript
// Boolean: Prefix với is/has/should
const isAuthenticated = true
const hasRole = (roleId) => { }
const shouldShowModal = computed(() => { })

// Array: Plural
const notifications = []
const sortOptions = [{ value: 'recent', label: 'Recent' }]

// Function: Verb + Noun (camelCase)
const handleLogin = () => { }
const formatVideoTime = (seconds) => { }
const fetchUserProfile = async () => { }
const mapProfileData = (raw) => { }  ← Data Mapper pattern

// State in Store: camelCase
state: () => ({
  token: null,
  isLoading: false,
  notifications: []
})

// Action: camelCase, verb-first
actions: {
  async login(credentials) { },
  async fetchNotifications() { }
}
```

### **Route Naming**

```javascript
// Path: kebab-case (tiếng Việt hoặc English)
path: '/dang-nhap'          ← Vietnamese (preferred)
path: '/khoa-hoc-cua-toi'
path: '/phong-hoc/:courseId'
path: '/thong-tin-tai-khoan'

// Route name: PascalCase
name: 'DangNhap'
name: 'KhoaHocCuaToi'
name: 'PhongHoc'
name: 'ThongTinTaiKhoan'
```

---

## 🔄 **VI. API Service Pattern**

### **API Interceptors (api.service.js)**

```javascript
// 1. REQUEST INTERCEPTOR: Add auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 2. RESPONSE INTERCEPTOR: Handle errors globally
apiClient.interceptors.response.use(
  response => response.data,  ← Unwrap Axios response
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token')
      router.push('/dang-nhap')  ← Redirect to login on 401
    }
    return Promise.reject(error)
  }
)
```

### **Service Layer Pattern**

```javascript
// services/auth.service.js - Stateless wrapper
const authService = {
  register(userData) {
    return apiClient.post('/register', userData)
  },
  login(credentials) {
    return apiClient.post('/login', credentials)
  }
}

// Usage in Store:
// const res = await authService.login(credentials)
// if (res.status === 'success') { ... }
```

---

## 🎨 **VII. Data Mapper Pattern**

```javascript
// user.store.js
const mapProfileData = (raw) => ({
  id: raw.id,
  email: raw.email,
  fullName: raw.full_name,  ← snake_case → camelCase
  avatar: raw.avatar_url || `https://ui-avatars.com/api/?name=${raw.full_name}`,
  roleId: raw.role_id,
  skills: raw.profile?.skills ? JSON.parse(raw.profile.skills) : []
})

// Usage:
const res = await userService.getProfile()
this.profile = mapProfileData(res.data)
```

---

## 🔐 **VIII. Authentication Flow**

### **Token Management**
1. **Login**: Backend trả token → store vào `localStorage('access_token')`
2. **Request**: Api interceptor tự động add `Authorization: Bearer {token}`
3. **Response 401**: Interceptor xóa token + redirect `/dang-nhap`
4. **Logout**: `authStore.logout()` xóa token + xóa state

### **Role-Based Access Control (RBAC)**
```javascript
// useAuth.js - Định nghĩa quyền:
// 1 = Học viên (Student)
// 2 = Giáo viên (Teacher)
// 3 = Admin

const isStudent = computed(() => user.value?.roleId === 1)
const isTeacher = computed(() => user.value?.roleId === 2)
const isAdmin = computed(() => user.value?.roleId === 3)

const hasRole = (requiredRoleId) => user.value?.roleId === requiredRoleId
```

### **Route Guards (router/index.js)**
```javascript
// Navigation Guard: Check requiresAuth meta
router.beforeEach((to, from) => {
  const { isAuthenticated } = useAuth()
  
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { 
      name: 'Login', 
      query: { redirect: to.fullPath }  ← Save original path
    }
  }
})
```