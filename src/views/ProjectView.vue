<script>
import allProjects from "@/data/projects.json";
export default {
  data() {
    return {
      project: null,
      isErrror: false,
      errorMessage: "",
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    try {
      const projectId = this.$route.params.id;
      const project = allProjects.filter((project) => project.id == projectId);

      if (project.length > 0) {
        this.project = project;
      } else {
        throw new Error("We couldn't find the project you're looking for.");
      }
    } catch (error) {
      this.isErrror = true;
      this.errorMessage = error;
    }
  },
};
</script>

<template>
  <main>
    <section class="mt-12" :class="{ 'h-[50svh]': isErrror }">
      <h1 class="dark:text-dark-100">Test Project {{ $route.params.id }}</h1>
      <p class="dark:text-dark-100">{{ project }}</p>
      <div v-if="isErrror" class="dark:text-dark-100">
        {{ errorMessage }}
      </div>
    </section>
  </main>
</template>
