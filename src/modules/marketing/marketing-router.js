export default [
  {
    path: "/khoa-hoc",
    name: "KhoaHoc",
    component: () => import("./views/CommerceCourses.vue"),
    meta: {
      title: 'Khóa học' // Tiêu đề tab trình duyệt
    }
  },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    name: "ChiTietKhoaHoc",
    component: () => import("./views/CourseDetail.vue"),
    meta: {
      title: 'Chi tiết khóa học' // Tiêu đề tab trình duyệt
    }
  },
  {
    path: "/giang-vien/:id",
    name: "ThongTinGiangVien",
    component: () => import("./views/MentorDetail.vue"),
    meta: {
      title: 'Thông tin giảng viên' // Tiêu đề tab trình duyệt
    }
  },
];