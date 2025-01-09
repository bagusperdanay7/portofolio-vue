<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (value) => {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
    },
    size: {
      type: String,
      default: "base",
      validator: (value) => {
        return ["base", "regular", "small"].includes(value);
      },
    },
    rounded: {
      type: String,
      default: "normal",
      validator: (value) => {
        return ["normal", "full"].includes(value);
      },
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

<template>
  <button
    :type="type"
    class="font-bold transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-70"
    :class="{
      'px-14': size === 'base',
      'text-base px-14 py-2.5': size === 'base',
      'text-base px-5 py-2.5': size === 'regular',
      'text-sm px-3 py-1.5': size === 'small',
      'text-dark-100 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400':
        variant === 'primary',
      'text-primary-600 bg-transparent border border-primary-600 hover:bg-primary-100 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-950':
        variant === 'secondary',
      'rounded-[10px]': rounded === 'normal',
      'rounded-full': rounded === 'full',
    }"
    :disabled="disabled"
  >
    <slot>Submit</slot>
  </button>
</template>
