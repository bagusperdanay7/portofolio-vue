<script>
import Badge from "@/components/ui/Badge.vue";
import ProjectCard from "@/components/ui/card/ProjectCard.vue";
import { RouterLink } from "vue-router";
import allProjects from "@/data/projects.json";

export default {
  mounted() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.projects = allProjects;
    }, 300);
  },
  components: {
    Badge,
    ProjectCard,
    RouterLink,
  },
  data() {
    return {
      projects: [],
    };
  },
};
</script>

<template>
  <main>
    <section class="mt-12" id="allProjects">
      <h1
        class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
      >
        All Projects
      </h1>
      <div
        v-if="projects.length < 1"
        class="text-light-100 dark:text-dark-100 text-center"
      >
        <i class="bx bx-loader bx-spin text-3xl"></i>
      </div>
      <div
        v-else
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        id="projectsCards"
      >
        <RouterLink
          v-for="project in projects"
          :key="project.id"
          :to="{ name: 'project', params: { id: project.id } }"
        >
          <ProjectCard
            :name="project.name"
            :description="project.description.english"
            :thumbnail="project.thumbnail"
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
    </section>
  </main>
</template>
