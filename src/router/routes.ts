import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'exercises',
        name: 'AllExercisesPage',
        component: () => import('pages/exercise/AllExercisesPage.vue'),
        children: [
          {
            path: ':unitId',
            name: 'UnitPage',
            component: () => import('pages/exercise/UnitPage.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
