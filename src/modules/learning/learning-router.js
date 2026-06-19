export default [
  {
    path: '/phong-hoc/:courseId',
    name: 'LearningRoom',
    component: () => import('./views/LearningRoom.vue'),
    meta: { requiresAuth: true, requiresPurchase: true }
  }
]