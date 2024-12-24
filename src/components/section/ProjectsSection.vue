<script>
import { RouterLink } from "vue-router";
import ProjectCard from "../ui/card/ProjectCard.vue";
import Badge from "../ui/Badge.vue";
import allProjects from "@/data/projects.json";

export default {
  components: {
    Badge,
    ProjectCard,
    RouterLink,
  },
  data() {
    return {
      projects: allProjects,
    };
  },
  computed: {
    someProjects() {
      return this.projects.slice(0, 6);
    },
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
      <RouterLink
        v-for="project in someProjects"
        :key="project.id"
        :to="{ name: 'project', params: { id: project.id } }"
      >
        <ProjectCard
          :name="project.name"
          :description="project.description.english"
          :snapshot="project.snapshot"
          :category="project.category"
          :contributors="project.contributors"
          :isMiniProject="project.miniProject"
        >
          <template #tags>
            <Badge
              v-for="(tech, index) in project.technology"
              :text="tech"
              :key="index"
            />
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
