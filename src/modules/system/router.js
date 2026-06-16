export default [
  {
    path: '/cai-dat-nguoi-dung',
    name: 'UserSettings',
    component: () => import('./views/UserSettings.vue'),
    meta: { requiresAuth: true }
  }
]