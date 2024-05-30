<script>
import HeroSection from "../components/HeroSection.vue";
import SummarySection from "@/components/SummarySection.vue";
import EducationSection from "@/components/EducationSection.vue";

export default {
    components: {
        HeroSection,
        SummarySection,
        EducationSection,
    },
};
</script>

<template>
    <main>
        <HeroSection />
        <SummarySection />
        <EducationSection />
    </main>
</template>
