<script>
import SkillCard from "@/components/ui/card/SkillCard.vue";
import skillJson from "@/data/skills.json";

export default {
  components: { SkillCard },
  data() {
    return {
      skills: skillJson,
    };
  },
  inject: ["theme"],
};
</script>

<template>
  <section class="mt-12" id="skills">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Skills
    </h1>
    <div
      class="skill-cards grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5"
    >
      <SkillCard
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill.name"
        :logo="theme.isDark ? skill.logo.dark : skill.logo.light"
        :description="skill.description"
      />
    </div>
  </section>
</template>
