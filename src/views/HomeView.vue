<script>
import HeroSection from "../components/HeroSection.vue";
import SummarySection from "@/components/SummarySection.vue";
import EducationSection from "@/components/EducationSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";

export default {
  components: {
    HeroSection,
    SummarySection,
    EducationSection,
    SkillsSection,
    ProjectsSection,
  },
};
</script>

<template>
  <!-- TODO: Add Animation, Hover, Active et cetera, Transition when it's done dengan <Transition /> built-in component vue -->
  <main>
    <HeroSection />
    <SummarySection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
  </main>
</template>
