export default [
  {
    path: "/dang-nhap",
    name: "DangNhap",
    component: () => import("./views/SignIn.vue"),
  },
  {
    path: "/dang-ky",
    name: "DangKy",
    component: () => import("./views/SignUp.vue"),
  },
  {
    path: "/quen-mat-khau",
    name: "QuenMatKhau",
    component: () => import("./views/ForgotPassword.vue"),
  },
  {
    path: "/thong-tin-tai-khoan",
    name: "ThongTinTaiKhoan",
    component: () => import("./views/AccountProfile.vue"),
  },
  {
    path: "/lich-su-thanh-toan",
    name: "LichSuThanhToan",
    component: () => import("./views/AccountBilling.vue"),
  },
  {
    path: "/cai-dat-bao-mat",
    name: "CaiDatBaoMat",
    component: () => import("./views/AccountSecurity.vue"),
  }
];
