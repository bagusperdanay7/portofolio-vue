<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <h1>Test Project {{ $route.params.id }}</h1>
</template>
