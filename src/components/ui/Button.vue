<template>
  <button
    :type="type"
    class="text-dark-100 text-base font-bold bg-primary-600 py-[10px] rounded-[10px] hover:bg-primary-700 disabled:cursor-wait disabled:opacity-70 w-full sm:w-fit"
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
