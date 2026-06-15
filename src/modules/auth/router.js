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
];
