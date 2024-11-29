<template>
  <div class="certification">
    <div class="img-container relative group cursor-pointer">
      <i
        class="bx bxs-show text-primary-50 text-2xl top-1/2 left-1/2 absolute z-10 -translate-x-1/2 -translate-y-1/2 invisible transition duration-300 ease-in group-hover:visible"
      ></i>
      <img
        :src="image"
        :alt="`${name} certification`"
        class="rounded-xl object-cover w-full max-h-72 min-[500px]:max-h-52 md:max-h-72 min-[900px]:max-h-[200px] lg:max-h-64 xl:max-h-[228px] transition duration-300 ease-in group-hover:brightness-50"
      />
    </div>
    <h2 class="font-bold text-sm text-light-100 mt-2 dark:text-dark-100">
      {{ name }}
    </h2>
    <p class="mt-1 text-xs font-medium text-light-80 dark:text-dark-90">
      {{ provider }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    provider: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "/src/assets/template.jpg",
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
