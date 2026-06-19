export default [
  {
    path: "/khoa-hoc-cua-toi",
    name: "KhoaHocCuaToi",
    // Gọi đến views của module courses
    component: () => import("./views/MyCourses.vue"),
  },
];
