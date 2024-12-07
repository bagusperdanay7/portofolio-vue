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
      const contact = this.$refs.contact;
      const contactElement = contact.$el;
      const input = contact.$refs.nameInput.$refs.input;
      contactElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        input.focus();
      }, 1100);
    },
  },
};
</script>

<template>
  <!-- TODO: Add Animation, Transition when it's done dengan <Transition /> built-in component vue -->
  <main>
    <HeroSection @call-to-action="handleScroll" />
    <SummarySection />
    <EducationSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <PublicationsSection />
    <ContactSection ref="contact" />
    <SpecialSection />
  </main>
</template>
