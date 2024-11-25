<script>
import Label from "./Label.vue";

export default {
  props: {
    label: {
      type: String,
      default: "Name",
    },
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      default: "name",
    },
    name: {
      type: String,
      name: "name",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  components: {
    Label,
  },
};
</script>

<template>
  <Label :for="id">{{ label }}</Label>
  <input
    :type="type"
    :id="id"
    class="rounded-lg h-12 w-full border border-[#ABABAB] bg-transparent px-3 py-1 text-sm text-light-100 transition-colors placeholder:text-light-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-dark-100 dark:placeholder:text-dark-70"
    :placeholder="placeholder"
    :name="name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
