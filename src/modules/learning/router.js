export default [
  {
    path: '/learning/:courseId',
    name: 'StudyRoom',
    component: () => import('./views/StudyRoom.vue'),
    meta: { requiresAuth: true, requiresPurchase: true }
  }
]