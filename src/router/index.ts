import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Generator from "@/views/Generator/Generator.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/generator",
  },
  {
    path: "/generator",
    component: Generator,
  },
  {
    path: "/ai-chat",
    component: () => import("@/views/AiChat/AiChat.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
