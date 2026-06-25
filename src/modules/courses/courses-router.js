export default [
  {
    path: "/khoa-hoc-cua-toi",
    name: "KhoaHocCuaToi",
    component: () => import("./views/MyCourses.vue"),
    meta: {
      requiresAuth: true, // Bảo vệ route: chỉ người dùng đã đăng nhập mới xem được
      title: 'Khóa học của tôi' // Bổ sung tiêu đề tab trình duyệt
    }
  },
];