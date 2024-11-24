<script>
import SkillCard from "@/components/ui/SkillCard.vue";

export default {
  components: { SkillCard },
};
</script>

<template>
  <!-- TODO: Kalau bisa pakai marquee aja -->
  <section class="mt-12">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Skills
    </h1>
    <div
      class="skill-cards flex flex-col xs:flex-row gap-y-5 lg:gap-x-5 xs:flex-wrap xs:justify-between lg:justify-normal xl:justify-between"
    >
      <SkillCard skill="HTML">
        <template v-slot:icon>
          <i class="bx bxl-html5 text-2xl text-[#ff8a14]"></i>
        </template>
      </SkillCard>
      <SkillCard skill="CSS">
        <template v-slot:icon>
          <i class="bx bxl-css3 text-2xl text-[#2d53e5]"></i>
        </template>
      </SkillCard>
      <SkillCard skill="JavaScript">
        <template v-slot:icon>
          <i class="bx bxl-javascript text-2xl text-[#FFCA28]"></i>
        </template>
      </SkillCard>
      <SkillCard skill="SASS">
        <template v-slot:icon>
          <i class="bx bxl-sass text-2xl text-[#cc6699]"></i>
        </template>
      </SkillCard>
      <SkillCard skill="PHP">
        <template v-slot:icon>
          <i class="bx bxl-php text-2xl text-[#7b7fb5]"></i>
        </template>
      </SkillCard>
      <SkillCard skill="Python">
        <template v-slot:icon>
          <i class="bx bxl-python text-2xl text-[#2d5d84]"></i>
        </template>
      </SkillCard>
    </div>
  </section>
</template>
