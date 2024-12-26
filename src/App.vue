<script>
import { RouterLink, RouterView } from "vue-router";
import IconMoon from "./components/Icons/IconMoon.vue";
import IconSun from "./components/Icons/IconSun.vue";
import { Transition } from "vue";

export default {
  components: {
    RouterLink,
    RouterView,
    IconMoon,
    IconSun,
    Transition,
  },
  data() {
    return {
      creator: "Bagus Perdana Yusuf",
      logo: "Bagus.py",
      isMobileMenuOpened: false,
      theme: {
        isDark: !!(
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ),
      },
      homeMenus: [
        {
          name: "Summary",
          link: "#summary",
          description: "A brief summary about me",
        },
        {
          name: "Education",
          link: "#education",
          description: "The educational journey I have undertaken",
        },
        {
          name: "Experience",
          link: "#experience",
          description: "My career journey so far",
        },
        {
          name: "Skills",
          link: "#skills",
          description: "Skills that I am capable of",
        },
        {
          name: "Projects",
          link: "#projects",
          description: "Projects I've conducted",
        },
        {
          name: "Certifications",
          link: "#certifications",
          description: "Certifications that I've obtained",
        },
        {
          name: "Publications",
          link: "#publications",
          description: "Scientific papers and blogs",
        },
      ],
      otherPagesMenu: [
        {
          name: "Home",
          link: "/",
          description: "A Home page of my web portfolio",
        },
        {
          name: "Projects",
          link: "/projects",
          description: "Projects I've conducted",
        },
        {
          name: "Certifications",
          link: "/certifications",
          description: "Certifications that I've obtained",
        },
      ],
    };
  },
  methods: {
    toggleClickMobileMenu() {
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
      if (this.isMobileMenuOpened) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
    switchTheme() {
      if (this.theme.isDark) {
        this.theme.isDark = false;
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      } else {
        this.theme.isDark = true;
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      }
    },
    navigateToSectionMobile(section) {
      this.toggleClickMobileMenu();
      setTimeout(() => {
        const sectionId = document.querySelector(section);
        sectionId.scrollIntoView({ behavior: "smooth" });
      }, 500);
    },
  },
  provide() {
    return {
      author: this.creator,
      theme: this.theme,
    };
  },
};
</script>

<template>
  <Transition
    name="nav-mobile"
    enter-active-class="animate-nav-mobile-show"
    leave-active-class="animate-nav-mobile-hide"
  >
    <div
      class="w-full h-dvh flex lg:hidden bg-light-bg dark:bg-dark-bg opacity-100 fixed top-0 bottom-0 right-0 left-0 z-50"
      v-show="isMobileMenuOpened"
      id="mobileNavigation"
      ref="mobilenav"
    >
      <div class="py-6 px-4 sm:px-6 w-full overflow-y-auto">
        <div class="flex flex-row justify-between items-center">
          <h1 class="text-light-100 text-base font-black dark:text-dark-100">
            <RouterLink :to="{ name: 'home' }" @click="toggleClickMobileMenu">
              {{ creator }}
            </RouterLink>
          </h1>
          <div class="flex gap-x-2" id="buttonsToggle">
            <button
              class="text-base font-bold text-light-100 hover:text-primary-600 dark:text-dark-100"
              type="button"
              @click="switchTheme"
            >
              <IconSun v-if="theme.isDark" />
              <IconMoon v-else />
            </button>
            <button
              class="lg:hidden mobile-menu-toggle cursor-pointer group"
              type="button"
              @click="toggleClickMobileMenu"
            >
              <i
                class="bx bx-x text-2xl text-light-100 dark:text-dark-100 align-middle group-hover:text-primary-600 dark:group-hover:text-primary-400"
              ></i>
            </button>
          </div>
        </div>
        <hr class="h-0.5 bg-light-50 my-4" />
        <ul v-if="$route.path === '/'" class="flex flex-col gap-y-4 my-auto">
          <li v-for="(menu, index) in homeMenus" :key="index">
            <a
              href="#"
              class="flex flex-row justify-between items-center gap-x-2 group"
              @click="navigateToSectionMobile(menu.link)"
            >
              <div class="menu-details">
                <h2
                  class="font-bold text-base text-light-100 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                >
                  {{ menu.name }}
                </h2>
                <p class="font-medium text-xs text-light-80 dark:text-dark-90">
                  {{ menu.description }}
                </p>
              </div>
              <i
                class="bx bx-chevron-right text-2xl text-light-100 dark:text-dark-100 transition duration-300 ease-in-out group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1"
              ></i>
            </a>
          </li>
        </ul>
        <ul v-else class="flex flex-col gap-y-4 my-auto">
          <li v-for="(menu, index) in otherPagesMenu" :key="index">
            <RouterLink
              :to="menu.link"
              class="flex flex-row justify-between items-center gap-x-2 group"
              @click="toggleClickMobileMenu"
            >
              <div class="menu-details">
                <h2
                  class="font-bold text-base text-light-100 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                >
                  {{ menu.name }}
                </h2>
                <p class="font-medium text-xs text-light-80 dark:text-dark-90">
                  {{ menu.description }}
                </p>
              </div>
              <i
                class="bx bx-chevron-right text-2xl text-light-100 dark:text-dark-100 transition duration-300 ease-in-out group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1"
              ></i>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
  <header
    class="flex justify-between py-6 items-center mx-auto px-4 sm:px-6 lg:px-8 2xl:px-24"
  >
    <div class="logo text-light-100 text-lg font-bold dark:text-dark-100">
      <RouterLink to="/">{{ logo }}</RouterLink>
    </div>
    <nav class="hidden lg:block">
      <ul v-if="$route.path === '/'">
        <li v-for="(menu, index) in homeMenus" :key="index" class="inline">
          <RouterLink
            :to="menu.link"
            class="ml-6 text-base font-bold text-light-100 hover:text-primary-600 dark:text-dark-90 dark:hover:text-primary-400"
            >{{ menu.name }}
          </RouterLink>
        </li>
        <li class="inline align-middle">
          <button
            type="button"
            class="ml-6 text-base font-bold"
            @click="switchTheme"
          >
            <IconSun v-if="theme.isDark" />
            <IconMoon v-else />
          </button>
        </li>
      </ul>
      <ul v-else>
        <li v-for="(menu, index) in otherPagesMenu" :key="index" class="inline">
          <RouterLink
            :to="menu.link"
            class="ml-6 text-base font-bold text-light-100 hover:text-primary-600 dark:text-dark-90 dark:hover:text-primary-400"
            active-class="text-primary-600 dark:text-primary-400"
            >{{ menu.name }}
          </RouterLink>
        </li>
        <li class="inline align-middle">
          <button
            type="button"
            class="ml-6 text-base font-bold"
            @click="switchTheme"
          >
            <IconSun v-if="theme.isDark" />
            <IconMoon v-else />
          </button>
        </li>
      </ul>
    </nav>

    <button
      class="block lg:hidden mobile-menu-toggle cursor-pointer group"
      @click="toggleClickMobileMenu"
    >
      <i
        class="bx bx-menu-alt-left text-2xl text-light-100 align-middle group-hover:text-primary-600 dark:text-dark-100 dark:group-hover:text-primary-400"
      ></i>
    </button>
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
          <ul
            v-if="$route.path === '/'"
            class="flex flex-row flex-wrap gap-y-3 gap-x-6"
          >
            <li v-for="(menu, index) in homeMenus" :key="index" class="inline">
              <RouterLink
                :to="menu.link"
                class="text-base font-bold text-dark-100 hover:text-primary-300"
                >{{ menu.name }}
              </RouterLink>
            </li>
          </ul>
          <ul v-else class="flex flex-row flex-wrap gap-y-3 gap-x-6">
            <li
              v-for="(menu, index) in otherPagesMenu"
              :key="index"
              class="inline"
            >
              <RouterLink
                :to="menu.link"
                class="text-base font-bold text-dark-100 hover:text-primary-300"
                >{{ menu.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="mt-7 md:mt-0">
          <h2 class="font-bold text-dark-100 text-2xl mb-2">Get in Touch</h2>
          <p class="font-normal text-dark-100 text-sm mb-6">
            Deepen the connection with me, by getting in touch with me
          </p>
          <RouterLink
            to="/#contacts"
            class="py-2.5 px-5 bg-primary-50 rounded-[10px] font-bold text-base text-primary-950 transition-all duration-300 ease-in-out hover:bg-primary-200"
          >
            Contact Me
          </RouterLink>
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
