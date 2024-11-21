<template>
  <div class="contact flex flex-row gap-x-4 items-center">
    <i class="bx text-4xl text-secondary-300" :class="iconClass"></i>
    <div class="contact-information">
      <h3 class="font-bold text-sm text-dark-90 mb-1">{{ brand ?? "" }}</h3>
      <p class="text-dark-100 font-normal text-sm">{{ value ?? "" }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    brand: String,
    value: String,
    iconClass: String,
  },
};
</script>
