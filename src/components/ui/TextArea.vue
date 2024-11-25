<script>
import Label from "./Label.vue";

export default {
  props: {
    name: {
      type: String,
      default: "Text",
    },
    id: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "Text",
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
  <textarea
    :name="name"
    :id="id"
    :placeholder="placeholder"
    class="rounded-lg w-full h-28 border border-[#ABABAB] bg-transparent px-3 py-2 text-sm text-light-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 placeholder:text-light-50 dark:text-dark-100 dark:placeholder:text-dark-70"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  ></textarea>
</template>
