<script>
import HeroButtons from "@/components/HeroButtons.vue";
import SocialMediaIcons from "../SocialMediaIcons.vue";
import { Transition } from "vue";

export default {
  components: {
    HeroButtons,
    SocialMediaIcons,
    Transition,
  },
  data() {
    return {
      occupation: "Junior Web Developer",
    };
  },
  computed: {
    autoChangeJobValue() {
      if (this.occupation === "Junior Web Developer") {
        setTimeout(() => {
          this.occupation = "Freelancer";
        }, 5000);
      } else {
        setTimeout(() => {
          this.occupation = "Junior Web Developer";
        }, 5000);
      }
      return this.occupation;
    },
  },
  methods: {
    info() {
      console.log(this.$refs.herobtn.$refs.hireMeButton);
    },
  },
  inject: ["author"],
};
</script>

<template>
  <section class="mt-[50px]" id="hero" @click="info">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
      <div class="z-0">
        <h1
          class="font-black text-4xl/tight md:text-[40px] order-last lg:order-first text-light-100 mb-0 dark:text-dark-100 animate-startrise"
        >
          Hello!, My name is
          <span class="text-primary-600 dark:text-primary-300">{{
            author
          }}</span
          >. I am&nbsp;
          <Transition
            name="slide-up"
            enter-active-class="animate-slide-up-in"
            leave-active-class="animate-slide-up-out"
          >
            <strong
              class="bg-gradient-to-r from-secondary-600 to-primary-500 text-transparent bg-clip-text block min-[584px]:inline-block min-[871px]:block min-[1440px]:inline-block absolute dark:from-secondary-300 dark:to-primary-300"
              v-if="occupation === 'Junior Web Developer'"
            >
              {{ autoChangeJobValue }}
            </strong>
            <strong
              class="bg-gradient-to-r from-secondary-600 to-primary-500 text-transparent bg-clip-text block min-[584px]:inline-block min-[871px]:block min-[1440px]:inline-block absolute dark:from-secondary-300 dark:to-primary-300"
              v-else-if="occupation === 'Freelancer'"
              >{{ autoChangeJobValue }}
            </strong>
          </Transition>
        </h1>
        <p
          class="text-light-80 mb-6 mt-24 min-[385px]:mt-12 min-[584px]:mt-4 min-[871px]:mt-14 min-[1440px]:mt-4 dark:text-dark-90 animate-startrise"
        >
          Building websites on the front-end and back-end is my primary focus.
          Additionally, I have a strong passion for machine learning and UI/UX
          design.
        </p>
        <HeroButtons ref="herobtn" @scroll-to-contact="handleScroll" />
        <SocialMediaIcons class="mt-9" />
      </div>

      <div class="justify-self-center order-first lg:order-last">
        <div
          class="w-[70%] h-1/2 xs:w-[55%] xs:h-[55%] sm:w-1/2 md:w-1/3 lg:w-[300px] lg:h-[300px] xl:h-[400px] xl:w-[400px] absolute blur-2xl rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 dark:from-primary-600 dark:to-secondary-600 dark:blur-3xl dark:animate-smooth-motion"
        >
          >
        </div>
        <img
          src="./../../assets/profile.png"
          :alt="author"
          class="relative left-auto top-auto right-auto bottom-auto xl:left-16 z-10 w-64 mx-auto"
        />
      </div>
    </div>
  </section>
</template>
