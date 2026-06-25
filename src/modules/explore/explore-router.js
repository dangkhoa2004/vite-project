export default [
  {
    path: '/kham-pha',
    name: 'KhamPha',
    component: () => import('./views/Explore.vue'),
    meta: {
      title: 'Khám phá' // Bổ sung tiêu đề tab trình duyệt
    }
  }
]