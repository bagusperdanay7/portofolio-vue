<script>
import HeroButtons from "@/components/ui/HeroButtons.vue";
import SocialMediaIcons from "./SocialMediaIcons.vue";

export default {
  components: {
    HeroButtons,
    SocialMediaIcons,
  },
};
</script>

<template>
  <!-- TODO: Junior Web Developer pakai animasi: https://vuejs.org/guide/built-ins/transition#transition-between-elements-->
  <section class="mt-[50px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
      <div class="z-0">
        <h1
          class="font-black text-4xl/tight md:text-[40px] mb-0 order-last lg:order-first text-light-100 dark:text-dark-100 animate-startrise"
        >
          Hello!, My name is
          <span class="text-primary-600 dark:text-primary-300"
            >Bagus Perdana Yusuf</span
          >. I am
          <strong
            class="bg-gradient-to-r from-secondary-600 to-primary-500 text-transparent bg-clip-text dark:from-secondary-300 dark:to-primary-300"
            >Junior Web Developer</strong
          >
        </h1>
        <p class="mt-4 text-light-80 mb-6 dark:text-dark-90 animate-startrise">
          Building websites on the front-end and back-end is my primary focus.
          Additionally, I have a strong passion for machine learning and UI/UX
          design.
        </p>
        <HeroButtons />
        <SocialMediaIcons class="mt-9" />
      </div>

      <div class="justify-self-center order-first lg:order-last">
        <div
          class="w-[70%] h-1/2 xs:w-[55%] xs:h-[55%] sm:w-1/2 md:w-1/3 lg:w-[300px] lg:h-[300px] xl:h-[400px] xl:w-[400px] absolute blur-2xl rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 dark:from-primary-600 dark:to-secondary-600 dark:blur-3xl dark:animate-smooth-motion"
        >
          >
        </div>
        <img
          src="../assets/profile.png"
          alt="Bagus Perdana Yusuf"
          class="relative left-auto top-auto right-auto bottom-auto xl:left-16 z-10 w-64 mx-auto"
        />
      </div>
    </div>
  </section>
</template>
