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
      creator: "Bagus Perdana Yusuf",
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
      footerMenu: [
        "Summary",
        "Education",
        "Experience",
        "Skills",
        "Projects",
        "Certifications",
        "Publication",
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
  <!-- TODO: Responsive, Alter Data & Dark Mode -->
  <header
    class="flex justify-between py-6 items-center mx-auto px-4 sm:px-6 lg:px-8"
  >
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
  <div class="content container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
    <RouterView />
  </div>
  <footer class="mt-12 bg-dark-bg py-12 px-[100px]">
    <div class="flex justify-between">
      <div>
        <h1 class="text-dark-100 text-[32px] font-bold mb-7">{{ creator }}</h1>
        <ul class="flex flex-row gap-x-6">
          <li
            v-for="(menu, index) in footerMenu"
            v-bind:key="index"
            class="inline"
          >
            <RouterLink
              :to="`#${menu}`"
              class="text-base font-bold text-dark-100 hover:text-primary-300"
              >{{ menu }}</RouterLink
            >
          </li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold text-dark-100 text-2xl mb-2">Get in Touch</h2>
        <p class="font-normal text-dark-100 text-sm mb-6">
          Mempererat Hubungan dengan saya, dengan menghubungi saya
        </p>
        <!--  TODO: Pakai 2.5 kalau 10, dan juga untuk main pakai ini => https://tailwindcss.com/docs/max-width -->
        <button
          type="button"
          class="py-2.5 px-5 bg-primary-50 rounded-[10px] font-bold text-base text-primary-950"
        >
          Contact Me
        </button>
      </div>
    </div>
    <hr class="mt-12 mb-6" />
    <div class="social-media-footer flex gap-x-4 justify-center mb-4">
      <i class="bx bxl-github text-dark-100 text-2xl"></i>
      <i class="bx bxl-linkedin text-dark-100 text-2xl"></i>
    </div>
    <p class="font-normal text-sm text-dark-100 align-middle text-center">
      <i class="bx bxs-heart text-primary-400 text-base"></i> Made with Love by
      {{ creator }}
    </p>
  </footer>
</template>

<style scoped></style>
