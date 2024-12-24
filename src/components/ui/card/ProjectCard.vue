<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    snapshot: {
      type: Array,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    contributors: {
      type: Array,
      default: [],
    },
    isMiniProject: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div
    class="project-card p-[15px] bg-light-bg-2 rounded-[15px] transition-all duration-300 ease-in-out hover:drop-shadow-custom-primary dark:bg-dark-bg-2"
  >
    <div class="project-image relative">
      <img
        :src="
          snapshot.length ? snapshot[0].preview : 'src\\assets\\template.jpg'
        "
        :alt="snapshot.length ? snapshot[0].caption : name"
        class="w-full rounded-[10px] text-xs"
        :title="
          snapshot.length
            ? snapshot[0].original
              ? ''
              : 'This is an illustrative image'
            : ''
        "
      />
      <span
        v-if="isMiniProject"
        class="absolute top-0 translate-x-2 translate-y-2 text-[10px] font-bold text-dark-100 px-1.5 py-1 bg-primary-600/90 rounded-lg"
        >Mini Project</span
      >
    </div>
    <div class="project-content mt-3">
      <span
        class="block font-bold text-sm text-primary-900 dark:text-primary-300 mb-0.5"
        >{{ category }}
      </span>
      <h2 class="font-black text-light-100 text-base mb-2 dark:text-dark-100">
        {{ name }}
      </h2>
      <p
        class="font-normal text-xs text-light-80 mb-2 line-clamp-3 dark:text-dark-90"
      >
        {{ description }}
      </p>
      <p class="text-xs text-light-100 dark:text-dark-100">
        Created by
        <strong v-for="contributor in contributors" :key="contributor">
          <a
            href=""
            class="transition duration-300 ease-in-out hover:underline hover:text-primary-500 dark:hover:text-primary-300"
            >{{ contributor }}</a
          >{{ contributor == contributors.at(-1) ? "" : ", " }}
        </strong>
      </p>
    </div>
    <div class="project-tag flex flex-row gap-2 mt-4 flex-wrap">
      <slot name="tags"></slot>
    </div>
  </div>
</template>
