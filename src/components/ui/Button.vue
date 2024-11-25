<template>
  <button
    :type="type"
    class="text-dark-100 text-base font-bold bg-primary-600 py-2.5 rounded-[10px] hover:bg-primary-700 disabled:cursor-wait disabled:opacity-70 w-full sm:w-fit transition duration-300 ease-in-out dark:bg-primary-500 dark:hover:bg-primary-400"
    :class="size === 'base' ? 'px-14' : 'px-5'"
    :disabled="disabled"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "base",
    },
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>
