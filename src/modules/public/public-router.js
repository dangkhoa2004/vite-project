export default [
  {
    path: "/",
    name: "TrangChu",
    component: () => import("./views/TrangChu.vue"),
    meta: {
      title: 'Trang chủ' // Tiêu đề tab trình duyệt
    }
  }
];