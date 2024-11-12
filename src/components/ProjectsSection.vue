<template>
  <section class="mt-12" id="projects">
    <h1
      class="font-bold text-center text-light-100 text-[32px] mb-4 dark:text-dark-100"
    >
      Projects
    </h1>
    <div class="grid xl:grid-cols-3 gap-5" id="projectsCards">
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
    </div>
  </section>
</template>

<script>
import Badge from "./ui/Badge.vue";
import ProjectCard from "./ui/ProjectCard.vue";
export default {
  components: {
    Badge,
    ProjectCard,
  },
};
</script>
