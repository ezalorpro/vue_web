import Vue from "vue";
import VueRouter from "vue-router";
import home_view from "../views/home_view.vue";
import register_view from "@/views/register_view"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home_view",
    component: home_view
  },
  {
    path: "/register",
    name: "register_view",
    component: register_view
  }
];

const router = new VueRouter({
  routes
});

export default router;
