import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ProjectView from "@/views/ProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/projects/:id",
      name: "project",
      component: ProjectView,
      props: true,
      meta: {
        title: "Bisa gak?",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Perbarui title berdasarkan meta title
  document.title = to.meta.title || "Portofolio | Bagus Perdana Yusuf";
  next();
});

export default router;
