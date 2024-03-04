import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: 'login',
    component: () => import('../pages/login/Login.vue')
  }
] as RouteRecordRaw[];
