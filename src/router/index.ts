import Vue from 'vue'
import VueRouter from 'vue-router'










Vue.use(VueRouter)


const routes = [

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard.vue'),
 
   },
  {
    path: '/tableInbound',
    name: 'tableInbound',
    component: () => import('@/views/tableInbound.vue')
  },
  {
    path: '/tableOutbound',
    name: 'tableOutbound',
    component: () => import('@/views/tableOutbound.vue')
  },
  
  
  {
    path: '/report',
    name: 'report',
    component: () => import('@/views/report.vue')
  },
  
  
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search.vue')
  },
  {
    path: '/documentCategory',
    name: 'documentCategory',
    component: () => import('@/views/documentCategory.vue')
  },
  {
    path: '/department',
    name: 'department',
    component: () => import('@/views/department.vue')
  },
  {
    path: '/userManager',
    name: 'userManager',
    component: () => import('@/views/userManager.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import('@/views/login.vue')
  },
  {
    path: '/postComponent',
    name: 'PostComponent',
    component: () => import('@/components/postComponent.vue')
  },
  {
    path: '/lap',
    name: 'lap',
    component: () => import('@/views/lap.vue')
  },
  {
    path: '/show/:doc_Id/editdoc',
    name: 'editdoc',
    component: () => import('@/views/editdoc.vue')
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile.vue')
  },
  {
    path: '/Users',
    name: 'Users',
    component: () => import('@/views/Users.vue')
  },
 

 
 
 
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



  
 export default router;


