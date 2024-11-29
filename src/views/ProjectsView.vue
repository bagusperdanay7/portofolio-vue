<template>
  <div class="about">
    <h1 class="text-pink-500">Projects</h1>
    <div v-if="projects.length < 1" class="dark:text-dark-100">
      <i class="bx bx-loader bx-spin"></i> Loading...
    </div>
    <div v-else>{{ projects }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
};
</script>

<style></style>
