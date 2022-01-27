import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Blogs from "../views/Blogs.vue";

import Create from "../views/user/Create.vue";
import Dashboard from "../views/user/Dashboard.vue";

import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guest: true }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guest: true }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/blogs/:id",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/create",
    name: "Create",
    component: Create,
    meta: { requiresAuth: true }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
