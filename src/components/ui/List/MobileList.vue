<script>
export default {
  props: {
    status: {
      type: [String, Number],
      default: "",
    },
    institution: {
      type: String,
      default: "",
    },
    details: {
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
  <div class="col-auto justify-items-center">
    <div
      class="p-1.5 size-8 min-[475px]:size-9 mx-auto bg-primary-200 rounded-full text-center align-middle transition duration-300 ease-in-out group-hover:bg-primary-600 dark:bg-primary-900"
    >
      <i
        class="text-lg min-[475px]:text-2xl sm:text-2xl text-primary-600 transition duration-300 ease-in-out group-hover:text-primary-100 dark:text-primary-100"
        :class="iconClass"
      ></i>
    </div>
    <hr class="w-0.5 h-full mx-auto bg-primary-950 dark:bg-primary-100" />
  </div>
  <div class="col-span-8">
    <time
      class="font-semibold text-base text-primary-700 mb-2 dark:text-primary-400"
      >{{ status }}</time
    >
    <h2 class="text-lg font-bold text-light-100 dark:text-dark-100">
      {{ institution }}
    </h2>
    <h3
      v-if="$slots.span"
      class="mt-2 text-light-80 text-[15px] font-medium dark:text-dark-90"
    >
      <slot name="span" />
    </h3>
    <p class="text-sm text-light-80 font-normal mt-2 dark:text-dark-90">
      {{ details }}
    </p>
  </div>
</template>
