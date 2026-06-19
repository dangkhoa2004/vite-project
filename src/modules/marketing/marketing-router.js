export default [
  {
    path: "/khoa-hoc",
    name: "Courses",
    // Gọi đến views của module courses
    component: () => import("./views/CommerceCourses.vue"),
  },
  {
    path: "/chi-tiet-khoa-hoc",
    name: "CourseDetail",
    // Gọi đến views của module courses
    component: () => import("./views/CourseDetail.vue"),
  },
  {
    path: "/giang-vien/:id",
    name: "MentorDetail",
    // Gọi đến views của module courses
    component: () => import("./views/MentorDetail.vue"),
  },
  {
    path: "/gio-hang",
    name: "Cart",
    component: () => import("./views/YourCart.vue"),
  },
];
