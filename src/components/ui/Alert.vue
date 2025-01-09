<script>
export default {
  props: {
    variant: {
      type: String,
      default: "success",
      validator: (value) => {
        return ["success", "warning", "danger"].includes(value);
      },
    },
    text: {
      type: String,
      default: "Fill the content",
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<template>
  <div
    class="flex items-center gap-x-2 alert bottom-3 right-3 px-4 py-3 shadow-sm rounded-xl"
    :class="{
      'bg-teal-500/10 dark:bg-teal-400/10': variant == 'success',
      'bg-amber-500/10 dark:bg-amber-400/10': variant == 'warning',
      'bg-rose-500/10 dark:bg-rose-400/10': variant == 'danger',
      hidden: !isShow,
    }"
  >
    <i
      v-if="variant == 'success'"
      class="bx bx-check-circle text-teal-500 text-lg align-middle dark:text-teal-400"
    ></i>
    <i
      v-else-if="variant == 'warning'"
      class="bx bx-error-circle text-amber-500 text-lg align-middle dark:text-amber-400"
    ></i>
    <i
      v-else-if="variant == 'danger'"
      class="bx bx-error-circle text-rose-500 text-lg align-middle dark:text-rose-400"
    ></i>
    <p class="text-light-100 text-sm dark:text-dark-100">{{ text }}</p>
  </div>
</template>
