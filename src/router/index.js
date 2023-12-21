import { createRouter, createWebHistory } from "vue-router";
import {auth} from '../firebase_auth'

const router = createRouter({
  history: createWebHistory(),
routes : [
  { path: '/', redirect: '/login' },
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('../pages/dashboard.vue'),
        meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
      {
        path: 'account-settings',
        component: () => import('../pages/account-settings.vue'),
        meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
      {
        path: 'typography',
        name:'patient-records',
        component: () => import('../pages/typography.vue'),
       meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
      {
        path: 'patient-registration',
        component: () => import('../views/pages/account-settings/patient-registration.vue'),
        meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
      {
        path: 'notifications',
        component: () => import('../pages/notifications.vue'),
        meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
      {
        path: 'icons',
        component: () => import('../pages/icons.vue'),
        meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
      {
        path: 'cards',
        component: () => import('../pages/cards.vue'),
        meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
      {
        path: 'tables',
        component: () => import('../pages/tables.vue'),
        meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
      {
        path: 'form-layouts',
        component: () => import('../pages/form-layouts.vue'),
        meta: {
          requiresAuth: true, // Add this meta field to indicate authentication is required
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('../layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../pages/login.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/[...all].vue'),
      },
    ],
  },
]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // Wait for the authentication state to be resolved
  await new Promise(resolve => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe(); // Unsubscribe to avoid multiple calls
      resolve(user);
    });
  });

  const user = auth.currentUser;

  if (requiresAuth && !user) {
    // User is not authenticated, and the route requires authentication
    next('/login'); // Redirect to the login page
  } else {
    next(); // Continue navigation
  }
});

export default router;
