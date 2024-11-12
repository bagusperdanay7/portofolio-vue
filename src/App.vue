<script>
import { RouterLink, RouterView } from "vue-router";
import IconMoon from "./components/ui/IconMoon.vue";
import IconSun from "./components/ui/IconSun.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    IconMoon,
    IconSun,
  },
  data() {
    return {
      isMenuOpened: false,
      isDark:
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
          ? true
          : false,
      menus: [
        {
          name: "Home",
          link: "#",
        },
        {
          name: "Education",
          link: "#education",
        },
        {
          name: "Experience",
          link: "#experience",
        },
        {
          name: "Skills",
          link: "#skills",
        },
        {
          name: "Projects",
          link: "#projects",
        },
        {
          name: "Certifications",
          link: "#certifications",
        },
        {
          name: "Publication",
          link: "#publication",
        },
      ],
    };
  },
  methods: {
    toggleClick() {
      // TODO: Ubah disini
      alert("Aku Diklik bos");
    },
    themeToggle() {
      if (this.isDark) {
        this.isDark = false;
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      } else {
        this.isDark = true;
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      }
    },
  },
};
</script>

<template>
  <header class="flex justify-between py-6 items-center">
    <div class="logo text-light-100 text-base font-black dark:text-dark-100">
      <RouterLink to="/">Bagus Perdana Yusuf</RouterLink>
    </div>
    <nav class="hidden lg:block">
      <ul>
        <li v-for="(menu, index) in menus" v-bind:key="index" class="inline">
          <RouterLink
            :to="menu.link"
            class="ml-6 text-base font-bold hover:text-primary-600 dark:text-dark-90 dark:hover:text-primary-400"
            >{{ menu.name }}</RouterLink
          >
        </li>
        <li class="inline align-middle">
          <button
            class="ml-6 text-base font-bold text-light-100 hover:text-primary-600 dark:text-dark-100"
            @click="themeToggle"
          >
            <IconSun v-if="isDark" />
            <IconMoon v-else />
          </button>
        </li>
      </ul>
    </nav>

    <div
      class="block lg:hidden mobile-menu-toggle cursor-pointer align-middle"
      @click="toggleClick"
    >
      <i
        class="bx bx-menu-alt-left text-2xl text-light-100 dark:text-dark-100"
      ></i>
    </div>
    <!-- TODO: Edit Menu Disini -->
    <p v-show="isMenuOpened">Aku Tampil</p>
  </header>
  <RouterView />
</template>

<style scoped></style>
