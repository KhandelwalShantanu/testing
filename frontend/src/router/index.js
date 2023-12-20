import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import projectView from "../components/projectView.vue";
import investMent from "../components/investMent.vue";
import salesView from "../components/salesView";
import leadsView from "../components/leadsView";
import profitView from "../components/profitView";
import requestAccess from "../components/requestAccess";
import Profile from "../views/Profile.vue";
 import Signup from "../views/Signup.vue";
 import Signin from "../views/Signin.vue";
import GetEmployee from "../components/GetEmployee.vue"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/requestaccess",
    name: "Request Access",
    component: requestAccess,
  },
  {
    path: "/projects",
    name: "Projects",
    component: projectView,
  },
  {
    path: "/investment",
    name: "Investment",
    component: investMent,
  },
  {
    path: "/leads",
    name: "Leads",
    component: leadsView,
  },
  {
    path: "/sales",
    name: "Sales",
    component: salesView,
  },
  {
    path: "/profit",
    name: "Profit",
    component: profitView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/employees/:val",
    name: 'Employees/',
    component: GetEmployee,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token');
  if (to.path !== '/signin' && to.path !== '/signup') {
      if (!loggedIn || loggedIn=="") {
          next('/signin');
      } else {
          next();
      }
  } else {
      next();
  }
});


export default router;
