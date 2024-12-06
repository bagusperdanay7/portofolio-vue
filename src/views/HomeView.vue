<script>
import HeroSection from "../components/HeroSection.vue";
import SummarySection from "@/components/SummarySection.vue";
import EducationSection from "@/components/EducationSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import CertificationsSection from "@/components/CertificationsSection.vue";
import PublicationsSection from "@/components/PublicationsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import SpecialSection from "@/components/SpecialSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";

export default {
  components: {
    HeroSection,
    SummarySection,
    EducationSection,
    ExperienceSection,
    SkillsSection,
    ProjectsSection,
    CertificationsSection,
    PublicationsSection,
    ContactSection,
    SpecialSection,
  },
  methods: {},
};
</script>

<template>
  <!-- TODO: Add Animation, Transition when it's done dengan <Transition /> built-in component vue -->
  <main>
    <HeroSection />
    <SummarySection />
    <EducationSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <PublicationsSection />
    <ContactSection />
    <SpecialSection />
  </main>
</template>
