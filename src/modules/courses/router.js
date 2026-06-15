export default [
  {
    path: "/",
    name: "Home",
    // Mặc định gọi đến views của module courses
    component: () => import("./views/HomePage.vue"),
  },
  {
    path: "/khoa-hoc",
    name: "Courses",
    // Gọi đến views của module courses
    component: () => import("./views/Courses.vue"),
  },
  {
    path: "/chi-tiet-khoa-hoc",
    name: "CourseDetail",
    // Gọi đến views của module courses
    component: () => import("./views/CourseDetail.vue"),
  },
];
