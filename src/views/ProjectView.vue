<script>
import allProjects from "@/data/projects.json";
import ButtonLink from "@/components/ui/ButtonLink.vue";
import Badge from "@/components/ui/Badge.vue";
import { format, formatDistanceToNow } from "date-fns";

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
      this.isError = true;
      this.errorMessage = error;
      console.log(error);
    }
  },
  components: { ButtonLink, Badge },
  data() {
    return {
      projects: {},
      isError: false,
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
      if (Array.isArray(this.projects) && this.projects.length > 0) {
        const result = { ...this.projects[0] };
        return result;
      } else {
        this.isError = true;
        this.errorMessage = "We couldn't find the project you're looking for.";
        return null;
      }
    },
  },
  methods: {
    formattedDate(date) {
      const newDate = new Date(date);
      return format(newDate, "PPP");
    },
    readableDate(date) {
      const newDate = new Date(date);
      return formatDistanceToNow(newDate);
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
      <div
        v-if="project"
        class="flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:gap-x-12 lg:gap-y-0"
      >
        <div class="flex flex-col gap-y-4" id="contentInformation">
          <img
            v-if="project.thumbnail"
            class="w-full object-cover rounded-[10px] shadow-md dark:shadow-none"
            :src="project.thumbnail.src ?? ''"
            :alt="project.thumbnail.caption ?? ''"
          />
          <img
            v-else
            class="w-full object-cover rounded-[10px] shadow-md dark:shadow-none"
            src="/src/assets/template.jpg"
            alt="Template"
          />

          <div id="information">
            <span
              v-if="project.miniProject"
              class="block text-primary-600 text-sm font-bold dark:text-primary-400"
              >Mini Project</span
            >
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

          <div class="space-x-4 mt-3" id="buttons">
            <ButtonLink
              size="regular"
              :link="project.url === '' ? null : project.url"
              target="_blank"
              :disabled="!project.url"
              >Live Demo</ButtonLink
            >
            <ButtonLink
              variant="secondary"
              size="regular"
              :link="project.source"
              target="_blank"
              ><i class="bx bx-code align-middle text-lg me-1.5"></i>Source
              Code</ButtonLink
            >
          </div>

          <div id="about"></div>
          <div id="preview">
            <iframe
              v-if="project.category == 'UI & UX Design'"
              style="border: 1px solid rgba(0, 0, 0, 0.1)"
              width="800"
              height="450"
              src="https://embed.figma.com/design/UHWZmtqrQPkLTo1km7YPZn/Design?node-id=221-2&embed-host=share"
              :title="project.name"
              allowfullscreen
            ></iframe>
          </div>

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
                v-for="contributor in project.contributors"
                :key="contributor"
                :href="contributor.profile"
                target="_blank"
                class="flex flex-row items-center gap-x-3 group"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  :src="
                    contributor.avatar ??
                    'https://www.w3schools.com/howto/img_avatar.png'
                  "
                  :alt="contributor.name"
                />
                <div class="">
                  <h3
                    class="text-light-100 font-bold text-sm transition duration-300 ease-in-out group-hover:text-primary-500 dark:text-dark-100 dark:group-hover:text-primary-300"
                  >
                    {{ contributor.name }}
                  </h3>
                  <p
                    class="text-xs font-normal text-light-80 mt-0.5 dark:text-dark-90"
                  >
                    <span>{{ contributor.role }}</span>
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
                <time :datetime="project.lastUpdated">{{
                  formattedDate(project.lastUpdated)
                }}</time>
                ({{ readableDate(project.lastUpdated) + " ago" }})
              </p>
            </div>
            <div class="" id="license">
              <h2 class="text-light-100 text-base font-bold dark:text-dark-100">
                License
              </h2>
              <p
                class="text-sm font-normal text-light-80 mt-1 dark:text-dark-70"
              >
                {{
                  project.license
                    ? `License under ${project.license} license.`
                    : "License not found"
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="dark:text-dark-100">{{ project }}</p>
    </section>
  </main>
</template>
