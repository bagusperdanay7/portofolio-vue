<script>
import allProjects from "@/data/projects.json";
import ButtonLink from "@/components/ui/ButtonLink.vue";
import Badge from "@/components/ui/Badge.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
    try {
      const projectId = this.$route.params.id;
      const projects = allProjects.filter((project) => project.id == projectId);

      if (projects.length > 0) {
        this.projects = projects;
      } else {
        throw new Error("We couldn't find the project you're looking for.");
      }
    } catch (error) {
      this.isErrror = true;
      this.errorMessage = error;
      console.log(error);
    }
  },
  components: { ButtonLink, Badge },
  data() {
    return {
      projects: {},
      isErrror: false,
      errorMessage: "",
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    project() {
      if (this.projects !== null) {
        return { ...this.projects[0] };
      } else {
        this.Error = true;
        this.errorMessage = "We couldn't find the project you're looking for.";
        return null;
      }
    },
  },
};
</script>

<template>
  <main>
    <section
      class="mt-12"
      id="projectDetails"
      :class="{ 'h-[50svh]': isErrror }"
    >
      <!-- TODO: Tambahkan status mini project -->
      <div
        v-if="project"
        class="flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:gap-x-12 lg:gap-y-0"
      >
        <div class="flex flex-col gap-y-4" id="contentInformation">
          <img
            v-if="project.snapshot"
            class="w-full object-cover rounded-[10px] shadow-md dark:shadow-none"
            :src="
              project.snapshot.length
                ? project.snapshot[0].preview
                : '/src/assets/template.jpg'
            "
            :alt="project.snapshot.length ? project.snapshot[0].caption : ''"
          />
          <img
            v-else
            class="w-full object-cover rounded-[10px] shadow-md dark:shadow-none"
            src="/src/assets/template.jpg"
            alt="Template"
          />

          <div id="information">
            <h1 class="text-light-100 font-bold text-2xl dark:text-dark-100">
              {{ project.name }}
            </h1>
            <p
              v-if="project.description"
              class="mt-2 text-light-80 font-normal text-sm dark:text-dark-90"
            >
              {{ project.description.english }}
            </p>
          </div>

          <div class="space-x-4" id="buttons">
            <ButtonLink size="regular">Live Demo</ButtonLink>
            <ButtonLink
              variant="secondary"
              size="regular"
              :link="project.source"
              target="_blank"
              >Source Code</ButtonLink
            >
          </div>

          <div id="about"></div>

          <!-- 
          <figure>
            <img
              class="w-full object-cover"
              src="https://www.w3schools.com/tags/pic_trulli.jpg"
              alt="Trulli"
            />
            <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
          </figure> -->
        </div>
        <div
          class="min-w-[300px] max-w-80 py-4 flex flex-col gap-y-4"
          id="sideInformation"
        >
          <div class="category" id="category">
            <h2 class="text-light-100 text-base font-bold dark:text-dark-100">
              Category
            </h2>
            <span
              class="mt-2 block text-primary-900 text-sm font-bold dark:text-primary-200"
              >{{ project.category }}</span
            >
          </div>
          <div class="divider">
            <hr class="w-full h-0.5 bg-light-30" />
          </div>
          <div class="contributors">
            <h2 class="text-light-100 text-base font-bold dark:text-dark-100">
              Contributor
            </h2>
            <div class="mt-2.5 flex flex-col gap-y-2.5" id="allContributors">
              <a
                href=""
                v-for="contributor in project.contributors"
                :key="contributor"
                class="flex flex-row items-center gap-x-3 group"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                />
                <div class="">
                  <h3
                    class="text-light-100 font-bold text-sm transition duration-300 ease-in-out group-hover:text-primary-500 dark:text-dark-100 dark:group-hover:text-primary-300"
                  >
                    {{ contributor }}
                  </h3>
                  <p
                    class="text-xs font-normal text-light-80 mt-0.5 dark:text-dark-90"
                  >
                    <span>Junior Web Developer</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="divider">
            <hr class="w-full h-0.5 bg-light-30" />
          </div>
          <div class="tech-stack-info">
            <h2 class="text-light-100 text-base font-bold dark:text-dark-100">
              Technology Stack
            </h2>
            <div class="tech-stacks mt-2.5 flex flex-row gap-2 flex-wrap">
              <Badge
                v-for="tech in project.technology"
                :text="tech"
                :key="tech"
              />
            </div>
          </div>
          <div class="divider">
            <hr class="w-full h-0.5 bg-light-30" />
          </div>
          <div class="flex flex-col gap-y-4" id="moreInformations">
            <div class="" id="lastUpdated">
              <h2 class="text-light-100 text-base font-bold dark:text-dark-100">
                Last Updated
              </h2>
              <p
                class="text-sm font-normal text-light-80 mt-1 dark:text-dark-70"
              >
                December 10th, 2024 (1 week ago)
              </p>
            </div>
            <div class="" id="license">
              <h2 class="text-light-100 text-base font-bold dark:text-dark-100">
                License
              </h2>
              <p
                class="text-sm font-normal text-light-80 mt-1 dark:text-dark-70"
              >
                License under MIT license
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="dark:text-dark-100">{{ project }}</p>
    </section>
  </main>
</template>
