export default [
  {
    path: '/cai-dat-nguoi-dung',
    name: 'CaiDatNguoiDung',
    component: () => import('./views/UserSettings.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Cài đặt hệ thống' // Bổ sung tiêu đề cho tab trình duyệt
    }
  },
  {
    path: '/thong-bao',
    name: 'ThongBao',
    component: () => import('./views/Notification.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Thông báo' // Bổ sung tiêu đề cho tab trình duyệt
    }
  }
]