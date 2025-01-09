<script>
import Button from "@/components/ui/Button.vue";
import { RouterLink } from "vue-router";

export default {
  components: { Button, RouterLink },
  data() {
    return {
      title: "Page Not Found",
      message:
        "We apologize, but the page you're looking for is currently unavailable.",
    };
  },
};
</script>

<template>
  <main>
    <section class="h-[60svh]" id="errorState">
      <div class="text-center flex flex-col justify-center h-full">
        <h1
          class="text-xl md:text-2xl font-bold text-light-100 mb-2 dark:text-dark-100"
        >
          {{ title }}
        </h1>
        <p class="text-sm md:text-base text-light-80 dark:text-dark-90">
          {{ message }}
        </p>
        <RouterLink to="/" class="mt-4">
          <Button variant="secondary" size="regular">Back to Home</Button>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
