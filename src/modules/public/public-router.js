export default [
  {
    path: "/",
    name: "Home",
    // Mặc định gọi đến views của module courses
    component: () => import("./views/HomePage.vue"),
  }
];
