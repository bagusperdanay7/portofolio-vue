<script>
export default {
  props: {
    logo: {
      type: String,
      default: "",
    },
    skill: {
      type: String,
      default: "HTML",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div
    class="p-[15px] bg-light-bg-2 rounded-[10px] basis-full xs:basis-[49%] sm:basis-[32%] lg:basis-[23.4%] xl:basis-[15.0%] transition-all duration-300 ease-in-out hover:ring-1 hover:ring-primary-400 dark:bg-dark-bg-2"
  >
    <div class="card-content flex gap-x-3 flex-row items-center h-full">
      <img
        :src="logo"
        :alt="skill"
        class="w-full max-w-8 max-h-8 dark:text-white text-xs"
      />
      <span
        class="font-semibold text-light-100 text-sm dark:text-dark-100 cursor-help"
        :title="description"
        >{{ skill }}</span
      >
    </div>
  </div>
</template>
