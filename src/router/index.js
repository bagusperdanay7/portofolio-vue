import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import CertificateView from "@/views/CertificateView.vue";

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
            name: "project",
            component: ProjectsView,
        },
        {
            path: "/certificates",
            name: "certificate",
            component: CertificateView,
        },
    ],
});

export default router;
