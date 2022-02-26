import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateTicket from "../views/CreateTicket.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },{
      path: "/create-ticket",
      name: "createTicket",
      component: CreateTicket,
    },
  ],
});

export default router;
