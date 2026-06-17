export default [
  {
    path: "/dang-nhap",
    name: "Login",
    component: () => import("./views/SignIn.vue"),
  },
  {
    path: "/dang-ky",
    name: "Register",
    component: () => import("./views/SignUp.vue"),
  },
  {
    path: "/quen-mat-khau",
    name: "ForgotPassword",
    component: () => import("./views/ForgotPassword.vue"),
  },
  {
    path: "/thong-tin-tai-khoan",
    name: "AccountProfile",
    component: () => import("./views/AccountProfile.vue"),
  },
  {
    path: "/lich-su-thanh-toan",
    name: "AccountBilling",
    component: () => import("./views/AccountBilling.vue"),
  },
  {
    path: "/cai-dat-bao-mat",
    name: "AccountSecurity",
    component: () => import("./views/AccountSecurity.vue"),
  }
];
