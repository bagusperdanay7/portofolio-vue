<script>
import { RouterLink, RouterView } from "vue-router";
import IconMoon from "./components/ui/Icons/IconMoon.vue";
import IconSun from "./components/ui/Icons/IconSun.vue";

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
      isMobileMenuOpened: false,
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
    toggleClickMobileMenu() {
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
      if (this.isMobileMenuOpened) {
        document.body.classList.add("overflow-hidden");
        this.$refs.mobilenav.classList.remove("invisible");
        setTimeout(() => {
          this.$refs.mobilenav.classList.remove("translate-x-full");
        }, 100);
      } else {
        document.body.classList.remove("overflow-hidden");
        this.$refs.mobilenav.classList.add("translate-x-full");
        setTimeout(() => {
          this.$refs.mobilenav.classList.add("invisible");
        }, 800);
      }
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
  // TODO: Coba onMounted dll di console.log aja, ketika diclick begimana pakai v-show
  mounted() {
    console.log("mounted");
  },
};
</script>

<template>
  <!-- TODO: Alter Data -->
  <div
    class="w-full h-dvh flex lg:hidden bg-light-bg dark:bg-dark-bg opacity-100 fixed top-0 bottom-0 right-0 left-0 z-50 transition duration-700 ease-in-out translate-x-full invisible"
    id="mobileNavigation"
    ref="mobilenav"
  >
    <div class="py-6 px-4 sm:px-6 w-full">
      <div class="flex flex-row justify-between items-center">
        <h1 class="text-light-100 text-base font-black dark:text-dark-100">
          {{ creator }}
        </h1>

        <div class="flex gap-x-2" id="buttonsToggle">
          <button
            class="text-base font-bold text-light-100 hover:text-primary-600 dark:text-dark-100"
            @click="themeToggle"
          >
            <IconSun v-if="isDark" />
            <IconMoon v-else />
          </button>
          <button
            class="lg:hidden mobile-menu-toggle cursor-pointer"
            @click="toggleClickMobileMenu"
          >
            <i
              class="bx bx-x text-2xl text-light-100 dark:text-dark-100 align-middle"
            ></i>
          </button>
        </div>
      </div>
      <hr class="h-0.5 bg-light-50 my-4" />
      <ul class="flex flex-col gap-y-4 my-auto text-center">
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Summary
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Education
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Experience
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Skills
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Projects
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Certifications
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Publications
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Contact Me
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
        <li>
          <h2 class="font-bold text-lg text-light-100 dark:text-dark-100">
            Special Thanks
          </h2>
          <p class="font-medium text-xs text-light-80 dark:text-dark-90">
            Ini adalah summary
          </p>
        </li>
      </ul>
    </div>
  </div>
  <header
    class="flex justify-between py-6 items-center mx-auto px-4 sm:px-6 lg:px-8 2xl:px-24"
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
      @click="toggleClickMobileMenu"
    >
      <i
        class="bx bx-menu-alt-left text-2xl text-light-100 dark:text-dark-100"
      ></i>
    </div>
  </header>
  <div
    class="content container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-[1440px]:px-0"
  >
    <RouterView />
  </div>
  <footer
    class="mt-12 px-4 sm:px-6 lg:px-8 min-[1440px]:px-0 py-12 bg-dark-bg dark:bg-dark-bg-2"
  >
    <div class="max-w-7xl mx-auto" id="footerContainer">
      <div class="flex flex-col md:flex-row justify-between">
        <div>
          <h1 class="text-dark-100 text-[28px] md:text-[32px] font-bold mb-7">
            {{ creator }}
          </h1>
          <ul class="flex flex-row flex-wrap gap-y-3 gap-x-6">
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
        <div class="mt-7 md:mt-0">
          <h2 class="font-bold text-dark-100 text-2xl mb-2">Get in Touch</h2>
          <p class="font-normal text-dark-100 text-sm mb-6">
            Mempererat Hubungan dengan saya, dengan menghubungi saya
          </p>
          <a
            href="#contacts"
            class="py-2.5 px-5 bg-primary-50 rounded-[10px] font-bold text-base text-primary-950 transition-all duration-300 ease-in-out hover:bg-primary-200"
          >
            Contact Me
          </a>
        </div>
      </div>
      <hr class="mt-12 mb-6" />
      <div class="social-media-footer flex gap-x-4 justify-center mb-4">
        <a href="https://github.com/bagusperdanay7" target="_blank">
          <i class="bx bxl-github text-dark-100 text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/bagus-perdana-yusuf/"
          target="_blank"
        >
          <i class="bx bxl-linkedin text-dark-100 text-2xl"></i>
        </a>
      </div>
      <p class="font-normal text-sm text-dark-100 align-middle text-center">
        <i class="bx bxs-heart text-primary-400 text-base"></i> Made with Love
        by
        {{ creator }}
      </p>
    </div>
  </footer>
</template>
