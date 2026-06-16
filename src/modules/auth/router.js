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
    name: "AccountInformation",
    component: () => import("./views/AccountInformation.vue"),
  },
  {
    path: "/lich-su-thanh-toan",
    name: "PaymentHistory",
    component: () => import("./views/PaymentHistory.vue"),
  },
  {
    path: "/cai-dat-bao-mat",
    name: "SecurityNPassword",
    component: () => import("./views/SecurityNPassword.vue"),
  }
];
