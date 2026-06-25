// File: src/modules/account/account-router.js

export default [
  // ==========================================
  // NHÓM 1: CÁC TRANG AUTH (CHỈ DÀNH CHO KHÁCH)
  // ==========================================
  {
    path: "/dang-nhap",
    name: "DangNhap",
    component: () => import("./views/SignIn.vue"), // Đảm bảo đường dẫn import đúng với dự án
    meta: { 
      requiresGuest: true, // Chặn người đã đăng nhập
      title: "Đăng nhập"
    },
  },
  {
    path: "/dang-ky",
    name: "DangKy",
    component: () => import("./views/SignUp.vue"),
    meta: { 
      requiresGuest: true,
      title: "Đăng ký"
    },
  },
  {
    path: "/quen-mat-khau",
    name: "QuenMatKhau",
    component: () => import("./views/ForgotPassword.vue"),
    meta: { 
      requiresGuest: true,
      title: "Quên mật khẩu"
    },
  },

  // ==========================================
  // NHÓM 2: TRANG CÁ NHÂN (BẮT BUỘC ĐĂNG NHẬP)
  // ==========================================
  {
    path: "/tai-khoan",
    // AccountLayout.vue sẽ chứa Sidebar cố định và <router-view />
    // component: () => import("@/layouts/AccountLayout.vue"), 
    meta: { 
      requiresAuth: true // Áp dụng bảo vệ cho tất cả trang con
    },
    children: [
      {
        path: "", // Khi truy cập /tai-khoan, tự động chuyển về trang thông tin
        redirect: { name: "ThongTinTaiKhoan" }
      },
      {
        path: "thong-tin", // URL sẽ là /tai-khoan/thong-tin
        name: "ThongTinTaiKhoan",
        component: () => import("./views/AccountProfile.vue"),
        meta: { title: "Hồ sơ cá nhân" }
      },
      {
        path: "lich-su-thanh-toan", // URL sẽ là /tai-khoan/lich-su-thanh-toan
        name: "LichSuThanhToan",
        component: () => import("./views/AccountBilling.vue"),
        meta: { title: "Lịch sử thanh toán" }
      },
      {
        path: "cai-dat-bao-mat", // URL sẽ là /tai-khoan/cai-dat-bao-mat
        name: "CaiDatBaoMat",
        component: () => import("./views/AccountSecurity.vue"),
        meta: { title: "Bảo mật & Mật khẩu" }
      }
    ]
  }
];