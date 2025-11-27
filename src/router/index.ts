import { useBaseStore } from "@/stores/baseStore";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const baseStore = useBaseStore();
  if (to.path === "/login") {
    baseStore.$reset();
    next();
  } else if (!baseStore.$state.isLogedin) {
    if (to.path === "/register") {
      next();
    }
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;
