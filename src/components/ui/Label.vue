<template>
  <label
    class="block text-sm font-bold text-light-100 mb-2 capitalize"
    :for="$attrs['for']"
  >
    <slot>
      {{ defaultLabel }}
    </slot>
  </label>
</template>

<script>
export default {
  data() {
    return {
      defaultLabel: "Label",
    };
  },
};
</script>
