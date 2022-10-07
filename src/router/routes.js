
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/HomePage.vue'),
        name: 'Home'
      },
      { 
        path: '/about',
        component: () => import('pages/About.vue'),
        name: 'About'
      },
      {
        path: '/login',
        component: () => import('pages/Login.vue'),
        name: 'Login'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
