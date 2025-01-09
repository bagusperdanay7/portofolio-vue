import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ProjectView from "@/views/ProjectView.vue";
import CertificationsView from "@/views/CertificationsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/certifications",
      name: "certifications",
      component: CertificationsView,
      meta: {
        title: "All Certifications - Portfolio | Bagus Perdana Yusuf",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
      meta: {
        title: "All Projects - Portfolio | Bagus Perdana Yusuf",
      },
    },
    {
      path: "/projects/:id",
      name: "project",
      component: ProjectView,
      props: true,
      meta: {
        title: "",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
      meta: {
        title: "Page not Found - Portfolio | Bagus Perdana Yusuf",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 16,
        behavior: "smooth",
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  // Perbarui title berdasarkan meta title
  document.title = to.meta.title || "Portofolio | Bagus Perdana Yusuf";
  next();
});

export default router;
