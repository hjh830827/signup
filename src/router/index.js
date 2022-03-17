import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup1",
    name: "signup1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup1.vue"),
  },
  {
    path: "/signup2",
    name: "signup2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup2.vue"),
  },
  {
    path: "/signup3",
    name: "signup3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup3.vue"),
  },
  {
    path: "/gridTest",
    name: "gridTest",
    component: () =>
      import(/* webpackChunkName: "gridTest" */ "../views/gridTest.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
