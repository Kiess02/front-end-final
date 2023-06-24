import Vue from "vue";
import VueRouter from "vue-router";
import meta from "vue-meta";
import store from "@/store";
import  VueCookies  from "vue-cookies";


Vue.use(VueRouter);
Vue.use(VueCookies);

//Vue.$cookies.config('1d')



const routes = [
  {
    path: "/",
    redirect: "login",
    meta: {
      requireAuth: false,
    },
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/tableInbound",
    name: "tableInbound",
    component: () => import("@/views/tableInbound.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/tableOutbound",
    name: "tableOutbound",
    component: () => import("@/views/tableOutbound.vue"),
    meta: {
      requireAuth: true,
    },
  },

  {
    path: "/report",
    name: "report",
    component: () => import("@/views/report.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/report",
    name: "report",
    component: () => import("@/views/report.vue"),
    meta: {
      requireAuth: true,
    },
  },

  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/documentCategory",
    name: "documentCategory",
    component: () => import("@/views/documentCategory.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/department",
    name: "department",
    component: () => import("@/views/department.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/userManager",
    name: "userManager",
    component: () => import("@/views/userManager.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",

    component: () => import("@/views/login.vue"),
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/postComponent",
    name: "PostComponent",
    component: () => import("@/components/postComponent.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/lap",
    name: "lap",
    component: () => import("@/views/lap.vue"),
  },
  {
    path: "/show/:doc_Id/editdoc",
    name: "editdoc",
    component: () => import("@/views/editdoc.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/show/:doc_Id/relationship-form",
    name: "re-relationshipform",
    component: () => import("@/views/relationship-form.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/:doc_Id/fileReader",
    name: "fileReader",
    component: () => import("@/views/fileReader.vue"),
    meta: {
      requireAuth: true,
    },
  },
 

  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/profile.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/Users",
    name: "Users",
    component: () => import("@/views/Users.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/sanod",
    name: "sanod",
    component: () => import("@/views/sanod.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/relationship-form",
    name: "relationship-form",
    component: () => import("@/views/relationship-form.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/relationship-form",
    name: "relationship-form.vue",
    component: () => import("@/views/relationship-form.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/Input-inbound-document",
    name: "Input-inbound-document",
    component: () => import("@/views/Input-inbound-document.vue"),
    meta: {
      requireAuth: true,
    },
  },

  {
    path: "/report-inbound",
    name: "report-inbound",
    component: () => import("@/views/report-inbound.vue"),
    meta: {
      requireAuth: true,
    },
  },

  {
    path: "/report-outbound",
    name: "report-outbound",
    component: () => import("@/views/report-outbound.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/lap2",
    name: "lap2",
    component: () => import("@/views/lap2.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/lap3",
    name: "lap3",
    component: () => import("@/views/lap3.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/fileReader",
    name: "fileReader",
    component: () => import("@/views/fileReader.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search.vue"),
    meta: {
      requireAuth: true,
     
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



// router.beforeEach((to, from, next) => {
//   let cookies_token = Vue.$cookies.get('user')
//   if (cookies_token == null) {
//     next("/login")
//   } else {
//     next()
//   }
// })




const authGuard = (to: any, from: any, next: any) => {
  const token = Vue.$cookies.get('user')
  if (token == null) {
    // User is not authenticated, not allow navigation
    next({name:'login'})
  } else {
    // User is  authenticated, allow
    next()
  }
}


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    authGuard(to, from, next)
    to.name !== 'login'
  } else {
    next()
  }
})

// router.beforeEach((to,from,next) =>{
//   let requireAuth = Vue.$cookies.get('user')
//   //const requireAuth = to.matched.some((record) => record.meta.requireAuth)

//   if(requireAuth == null)
//     next({name:'login'})
//   else
//   next({name:'dashboard'});
// })

export default router;