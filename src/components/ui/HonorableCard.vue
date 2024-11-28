<template>
  <div
    class="honorable-card p-[15px] bg-light-bg-2 border rounded-[15px] flex flex-row items-center gap-x-2 sm:w-[48%] xl:w-fit xl:min-w-[295px] transition duration-300 ease-in-out dark:bg-dark-bg-2"
  >
    <img
      :src="image"
      :alt="name"
      class="size-9 rounded-full aspect-square object-cover"
    />
    <div class="inspiration-details">
      <h2 class="text-sm font-bold text-light-100 dark:text-dark-100">
        {{ name }}
      </h2>
      <p class="text-sm font-medium text-light-80 dark:text-dark-90">
        {{ channel }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "https://picsum.photos/id/64/367/267",
    },
    channel: {
      type: String,
      default: "",
    },
  },
};
</script>
