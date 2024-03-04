import { RouteRecordRaw } from "vue-router";
import loginRoutes from "./login.routes";

export default [
  {
    path: '/auth/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      ...loginRoutes
    ]
  }
] as RouteRecordRaw[];
