export default [
  {
    path: '/cai-dat-nguoi-dung',
    name: 'UserSettings',
    component: () => import('./views/UserSettings.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/thong-bao',
    name: 'Notification',
    component: () => import('./views/Notification.vue'),
    meta: { requiresAuth: true }
  }
]