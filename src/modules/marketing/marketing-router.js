export default [
  {
    path: "/khoa-hoc",
    name: "KhoaHoc",
    // Gọi đến views của module courses
    component: () => import("./views/CommerceCourses.vue"),
  },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    name: "ChiTietKhoaHoc",
    // Gọi đến views của module courses
    component: () => import("./views/CourseDetail.vue"),
  },
  {
    path: "/giang-vien/:id",
    name: "ThongTinGiangVien",
    // Gọi đến views của module courses
    component: () => import("./views/MentorDetail.vue"),
  },
];
