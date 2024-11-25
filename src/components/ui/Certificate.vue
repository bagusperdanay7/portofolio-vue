<template>
  <div class="certification">
    <div class="img-container relative group cursor-pointer">
      <i
        class="bx bxs-show text-primary-50 text-2xl top-1/2 left-1/2 absolute z-10 -translate-x-1/2 -translate-y-1/2 invisible transition duration-300 ease-in group-hover:visible"
      ></i>
      <img
        :src="image ?? '/src/assets/template.jpg'"
        :alt="name + ' certification'"
        class="rounded-xl object-cover w-full lg:max-h-60 transition duration-300 ease-in group-hover:brightness-50"
      />
    </div>
    <h2 class="font-bold text-sm text-light-100 mt-2 dark:text-dark-100">
      {{ name }}
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: String,
    image: String,
  },
};
</script>
