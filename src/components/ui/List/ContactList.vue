<script>
export default {
  data() {
    return {};
  },
  props: {
    brand: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    iconClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="contact flex flex-row gap-x-4 items-center">
    <i
      class="bx text-4xl text-secondary-300 dark:text-secondary-600"
      :class="iconClass"
    ></i>
    <div class="contact-information">
      <h3 class="font-bold text-sm text-dark-90 mb-1 dark:text-light-80">
        {{ brand }}
      </h3>
      <p class="text-dark-100 font-normal text-sm dark:text-light-100">
        {{ value }}
      </p>
    </div>
  </div>
</template>
