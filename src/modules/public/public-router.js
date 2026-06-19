export default [
  {
    path: "/",
    name: "TrangChu",
    // Mặc định gọi đến views của module courses
    component: () => import("./views/TrangChu.vue"),
  }
];
