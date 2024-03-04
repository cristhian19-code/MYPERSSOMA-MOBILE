import { RouteRecordRaw } from 'vue-router';
import auth from '../modules/auth/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/auth/login',
  },

  ...auth,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
