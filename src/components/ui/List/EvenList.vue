<template>
  <div class="col-span-4"></div>
  <div class="col-auto justify-items-center">
    <div
      class="p-1.5 size-9 bg-primary-200 rounded-full text-center align-middle transition duration-300 ease-in-out group-hover:bg-primary-600"
    >
      <i
        class="text-2xl text-primary-600 transition duration-300 ease-in-out group-hover:text-primary-100"
        :class="iconClass"
      ></i>
    </div>
    <hr class="w-0.5 h-full bg-primary-950" />
  </div>
  <div class="col-span-4">
    <time class="font-semibold text-lg lg:text-xl text-primary-700 mb-2">{{
      status
    }}</time>
    <h2 class="text-xl lg:text-2xl font-bold text-light-100">
      {{ institution }}
    </h2>
    <h3 v-if="$slots.span" class="mt-2 text-light-80 text-base font-medium">
      <slot name="span" />
    </h3>
    <p class="text-sm text-light-80 font-normal mt-2">
      {{ details }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
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
