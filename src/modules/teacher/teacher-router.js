export default [
  {
    path: "/giang-vien/danh-sach-khoa-hoc",
    name: "QuanLyKhoaHoc",
    component: () => import("./views/ManageCourses.vue"),
    meta: {
      requiresAuth: true,      // Bảo vệ route: chỉ giảng viên đã đăng nhập mới xem được
      title: 'Quản lý khóa học' // Tiêu đề tab trình duyệt
    }
  },
];