// import "./assets/main.css";
import "./style.css"; // Import Style Tailwind

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

app.use(router);

app.mount("#app");
