<script>
import SkillCard from "@/components/ui/SkillCard.vue";
import skillJson from "@/data/skills.json";

export default {
  data() {
    return {
      skills: skillJson,
    };
  },
  components: { SkillCard },
  watch: {},
};
// TODO: Di jsonnya, tambahkan dark image dan light, dan edit logo (alpine, tensorflow, laravel, figma)
</script>

<template>
  <section class="mt-12" id="skills">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Skills
    </h1>
    <div
      class="skill-cards flex flex-col xs:flex-row gap-y-5 lg:gap-x-5 xs:flex-wrap xs:justify-between lg:justify-normal xl:justify-between"
    >
      <SkillCard
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill.name"
        :logo="skill.logo"
        :description="skill.description"
      >
      </SkillCard>
    </div>
  </section>
</template>
