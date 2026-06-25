export default [
  {
    path: "/gio-hang",
    name: "GioHang",
    component: () => import("./views/YourCart.vue"),
    meta: {
      title: 'Giỏ hàng' // Bổ sung tiêu đề cho tab trình duyệt
      // requiresAuth: true // Bỏ comment dòng này nếu bạn muốn bắt buộc đăng nhập mới được xem giỏ hàng
    }
  },
];