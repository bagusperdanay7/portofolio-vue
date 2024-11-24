<template>
  <div
    class="project-card p-[15px] bg-light-bg-2 rounded-[15px] transition-all duration-300 ease-in-out hover:drop-shadow-custom-primary"
  >
    <div class="project-image">
      <img :src="snapshot" :alt="name" class="w-full" />
    </div>
    <div class="project-content mt-4">
      <span class="font-bold text-sm text-primary-900">{{ category }}</span>
      <h2 class="font-black text-light-100 text-base mb-2">
        {{ name }}
      </h2>
      <p class="font-normal text-xs text-light-80 mb-2 line-clamp-3">
        {{ description }}
      </p>
      <p class="text-xs text-light-100">
        Created by
        <strong>
          <span v-for="team in createdBy" :key="team">{{
            team + (team == createdBy.at(-1) ? "" : ", ")
          }}</span>
        </strong>
      </p>
    </div>
    <div class="project-tag flex flex-row gap-2 mt-4 flex-wrap">
      <slot name="tags"></slot>
    </div>
  </div>
</template>

<script>
// TODO: Ubah pakai project(object) ketika data sudah ada
export default {
  props: {
    name: String,
    description: String,
    snapshot: String,
    category: String,
    createdBy: Array,
  },
};
</script>
