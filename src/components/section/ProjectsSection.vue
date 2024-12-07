<script>
import { RouterLink } from "vue-router";
import ProjectCard from "../ui/card/ProjectCard.vue";
import Badge from "../ui/Badge.vue";
export default {
  components: {
    Badge,
    ProjectCard,
    RouterLink,
  },
};
</script>

<template>
  <section class="mt-12" id="projects">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Projects
    </h1>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" id="projectsCards">
      <ProjectCard
        name="Dashboard Sistem Informasi Wholesale"
        description="Website ini dibangun dalam rangka memenuhi tugas kerja praktek di PT Telkom Indonesia, dibangun menggunakan bahasa Pemrograman PHP dan Laravel. Special Attribute to: PT Telkom yang telah dikembangkan oleh"
        snapshot="src\assets\template.jpg"
        category="Front-End & Back-End Developer"
        :createdBy="[
          'Bagus Perdana Yusuf',
          'Robi Nurhidayat',
          'Raden Fachrul Ramzy Muhammad',
        ]"
      >
        <template #tags>
          <Badge text="HTML" />
          <Badge text="CSS" />
          <Badge text="Bootstrap" />
          <Badge text="JavaScript" />
          <Badge text="PHP" />
          <Badge text="Laravel" />
        </template>
      </ProjectCard>
      <ProjectCard
        name="Portofolio UI & UX"
        description="Website ini dibangun dalam rangka memenuhi tugas kerja praktek di PT Telkom Indonesia, dibangun menggunakan bahasa Pemrograman PHP dan Laravel. Special Attribute to: PT Telkom yang telah dikembangkan oleh Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quae."
        snapshot="src\assets\template.jpg"
        category="UI & UX Design"
        :createdBy="['Bagus Perdana Yusuf']"
      >
        <template #tags>
          <Badge text="UI Design" />
          <Badge text="UX Design" />
          <Badge text="Figma" />
        </template>
      </ProjectCard>
      <RouterLink to="/projects/1">
        <ProjectCard
          name="Final Project - ABSA using Bi-LSTM"
          description="Program ini dibuat khusus untuk S1 Undergraduate Thesis Final Project menggunakan bahasa pemrograman Python dan Library Keras dan Tensorflow."
          snapshot="src\assets\template.jpg"
          category="Machine Learning"
          :createdBy="['Bagus Perdana Yusuf']"
        >
          <template #tags>
            <Badge text="Python" />
            <Badge text="TensorFlow" />
            <Badge text="Keras" />
          </template>
        </ProjectCard>
      </RouterLink>
    </div>
    <div class="mt-4 text-center">
      <RouterLink
        :to="{ name: 'projects' }"
        class="text-sm rounded-[15px] font-bold border text-primary-500 border-primary-500 px-3 py-1.5 transition duration-300 ease-in-out hover:bg-primary-100 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-950"
        >Show All</RouterLink
      >
    </div>
  </section>
</template>
