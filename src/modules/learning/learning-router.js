export default [
  {
    path: '/phong-hoc/:courseId',
    name: 'PhongHoc',
    component: () => import('./views/LearningRoom.vue'),
    meta: { 
      requiresAuth: true, 
      requiresPurchase: true,
      title: 'Phòng học' // Bổ sung tiêu đề tab trình duyệt
    }
  }
]