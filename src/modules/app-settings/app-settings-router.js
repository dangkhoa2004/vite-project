export default [
  {
    path: '/cai-dat-nguoi-dung',
    name: 'CaiDatNguoiDung',
    component: () => import('./views/UserSettings.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/thong-bao',
    name: 'ThongBao',
    component: () => import('./views/Notification.vue'),
    meta: { requiresAuth: true }
  }
]