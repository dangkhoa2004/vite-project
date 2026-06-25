export default [
  {
    path: "/bang-dieu-khien",
    name: "BangDieuKhien",
    meta: {
      requiresAuth: true,
      title: 'Bảng Điều Khiển'
    },
    component: () => import("./views/DashBoard.vue"),
  },
];
