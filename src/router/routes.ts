import * as VueRouter from "vue-router";
export const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: "/login",
    name: "LoginRouter",
    component: () => import("@/pages/login/loginPage.vue"),
  },
  {
    path: "/register",
    name: "RegisterRouter",
    component: () => import("@/pages/login/registerPage.vue"),
  },
  {
    path: "/form-input",
    name: "FormInputRouter",
    component: () => import("@/pages/formInput/medicalForm.vue"),
  },
  {
    path: "/master",
    name: "MaterRouter",
    component: () => import("@/pages/master/masterPage.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "/",
        name: "NotMatchDashboardRouter",
        component: () => import("@/pages/dashboard/dashboardPage.vue"),
      },
      {
        path: "/dashboard",
        name: "DashboardRouter",
        component: () => import("@/pages/dashboard/dashboardPage.vue"),
      },
      
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/pages/notFound/notFoundPage.vue"),
  },
  {
    path: "/notfound",
    name: "NotFoundRouter",
    component: () => import("@/pages/notFound/notFoundPage.vue"),
  },
];
