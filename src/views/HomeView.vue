<script>
import HeroSection from "../components/section/HeroSection.vue";
import SummarySection from "@/components/section/SummarySection.vue";
import EducationSection from "@/components/section/EducationSection.vue";
import ExperienceSection from "@/components/section/ExperienceSection.vue";
import SkillsSection from "@/components/section/SkillsSection.vue";
import ProjectsSection from "@/components/section/ProjectsSection.vue";
import CertificationsSection from "@/components/section/CertificationsSection.vue";
import PublicationsSection from "@/components/section/PublicationsSection.vue";
import ContactSection from "@/components/section/ContactSection.vue";
import SpecialSection from "@/components/section/SpecialSection.vue";

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
  methods: {
    handleScroll() {
      console.log("berhasil ditangkap");
    },
  },
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
