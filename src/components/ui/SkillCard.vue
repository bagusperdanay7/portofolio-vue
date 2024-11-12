<script>
export default {
  props: ["skill"],
};
</script>

<template>
  <div
    class="p-[15px] bg-light-bg-2 rounded-[10px] basis-full xs:basis-[49%] sm:basis-[32%] lg:basis-[23.4%] xl:basis-[15.0%]"
  >
    <div class="card-content flex gap-x-2 flex-row items-center">
      <slot name="icon"></slot>
      <span class="font-normal text-light-100 text-sm">{{ skill }}</span>
    </div>
  </div>
</template>
