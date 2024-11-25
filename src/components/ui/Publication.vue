<template>
  <div class="publication cursor-pointer group">
    <img
      :src="image"
      :alt="title"
      class="rounded-t-[15px] w-full min-h-[294px] xl:max-h-80 transition-all duration-500 ease-in-out opacity-85 object-cover group-hover:opacity-100"
    />
    <div
      class="publication-content p-4 bg-light-bg-2 rounded-b-[15px] transition-all duration-500 ease-in-out group-hover:bg-primary-950 dark:bg-dark-bg-2 dark:group-hover:bg-primary-50"
    >
      <span
        class="text-primary-800 text-xs font-semibold transition-all duration-500 ease-in-out group-hover:text-primary-200 dark:text-primary-300 dark:group-hover:text-primary-800"
        >{{ category }}</span
      >
      <h2
        class="mt-1 text-light-100 font-bold text-sm line-clamp-2 transition-all duration-500 ease-in-out group-hover:text-dark-90 group-hover:line-clamp-none dark:text-dark-100 dark:group-hover:text-light-80"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "This is just default text for publication title",
    },
    image: {
      type: String,
      default: "/src/assets/template.jpg",
    },
    category: {
      type: String,
      default: "Blog",
    },
  },
};
</script>

<style></style>
