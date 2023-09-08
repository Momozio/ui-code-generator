import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Generator from "@/views/Generator/Generator.vue";
import Test from "@/views/Test.vue";
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
    path: "/test",
    component: Test,
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
