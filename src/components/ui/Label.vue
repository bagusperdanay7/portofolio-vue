<script>
export default {
  data() {
    return {
      defaultLabel: "Label",
    };
  },
};
</script>

<template>
  <label
    class="block text-sm font-bold text-light-100 mb-2 capitalize dark:text-dark-100"
    :for="$attrs['for']"
  >
    <slot>
      {{ defaultLabel }}
    </slot>
  </label>
</template>
