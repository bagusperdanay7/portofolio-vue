<script>
import allProjects from "@/data/projects.json";
import ButtonLink from "@/components/ui/ButtonLink.vue";
import Badge from "@/components/ui/Badge.vue";
import { format, formatDistanceToNow } from "date-fns";
import Button from "@/components/ui/Button.vue";
import { RouterLink } from "vue-router";

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
      this.errorMessage.title = "Project Not Found";
      this.errorMessage.description = error;
    }
  },
  components: { ButtonLink, Badge, Button, RouterLink },
  data() {
    return {
      projects: {},
      isError: false,
      errorMessage: { title: "", description: "" },
      text: {
        tools: {
          indonesia:
            "Perkakas yang dibutuhkan untuk mengembangkan aplikasi ini antara lain:",
          english:
            "To develop this application, the following tools are needed:",
        },
      },
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
        this.errorMessage.title = "Project Not Found";
        this.errorMessage.description =
          "We couldn't find the project you're looking for.";
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
    <section v-if="isError && !project" class="h-[60svh]" id="errorState">
      <div class="text-center flex flex-col justify-center h-full">
        <h1
          class="text-xl md:text-2xl font-bold text-light-100 mb-2 dark:text-dark-100"
        >
          {{ errorMessage.title }}
        </h1>
        <p class="text-sm md:text-base text-light-80 dark:text-dark-90">
          {{ errorMessage.description }}
        </p>
        <RouterLink to="/" class="mt-4">
          <Button variant="secondary" size="regular">Back to Home</Button>
        </RouterLink>
      </div>
    </section>
    <section v-else class="mt-12" id="projectDetails">
      <div
        v-if="project"
        class="flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:gap-x-12 lg:gap-y-0"
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
            <h1
              class="text-light-100 font-bold text-xl md:text-2xl dark:text-dark-100"
            >
              {{ project.name }}
            </h1>
            <p
              v-if="project.description"
              class="mt-2 text-light-80 font-normal text-sm md:text-base dark:text-dark-90"
            >
              {{ project.description.english }}
            </p>
          </div>

          <div class="space-x-4 my-2.5" id="buttons">
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

          <div id="about">
            <h2
              class="text-light-100 mb-1 text-lg font-bold dark:text-dark-100"
            >
              About
            </h2>
            <div class="flex flex-col gap-y-2" id="paragraphs">
              <p
                v-for="paragraph in project.details.about.english"
                class="text-light-80 text-sm md:text-base leading-6 font-normal dark:text-dark-90"
              >
                {{ paragraph }}
              </p>
            </div>
            <p
              class="mt-2 text-light-80 text-sm md:text-base leading-6 font-normal dark:text-dark-90"
            >
              {{ text.tools.english }}
            </p>

            <div class="my-6 overflow-x-auto" id="techStacksTable">
              <table
                class="w-full text-xs md:text-sm text-left text-light-100 dark:text-dark-100"
              >
                <caption
                  class="caption-top text-light-50 font-semibold mb-1 dark:text-dark-70"
                >
                  List of Technology Stack & Tools.
                </caption>
                <thead
                  class="bg-transparent text-xs md:text-sm text-light-100 uppercase border-b border-light-50 dark:text-dark-100"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">Tech & Tools</th>
                    <th scope="col" class="px-6 py-3">Version</th>
                    <th scope="col" class="px-6 py-3">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="tool in project.details.tools.english"
                    class="bg-transparent transition duration-200 ease-in-out hover:bg-light-10/80 dark:hover:bg-dark-bg-2"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-light-100 dark:text-dark-100"
                    >
                      {{ tool.name }}
                    </th>
                    <td class="px-6 py-4 text-light-100 dark:text-dark-100">
                      {{ tool.version }}
                    </td>
                    <td class="px-6 py-4 text-light-100 dark:text-dark-100">
                      {{ tool.usage }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2
              class="text-light-100 mb-1 text-lg font-bold dark:text-dark-100"
            >
              Responsibilites
            </h2>
            <p
              class="text-light-80 text-sm md:text-base leading-6 font-normal dark:text-dark-90"
            >
              These are the roles and Responsibilites per contributor:
            </p>
            <div class="mt-2 flex flex-col gap-y-4" id="resposibilities">
              <div
                v-for="responsibility in project.details.responsibilities"
                :key="responsibility.name"
                :id="
                  responsibility.name.slice(0, 2).toLowerCase() +
                  'Responsibilities'
                "
              >
                <h3
                  class="text-light-80 font-bold text-sm md:text-base dark:text-dark-90"
                >
                  {{ responsibility.name }}
                </h3>
                <ul class="list-disc pl-5">
                  <li
                    v-for="tasks in responsibility.detail.english"
                    class="text-light-80 pl-1 font-normal text-sm md:text-base leading-6 dark:text-dark-90"
                  >
                    {{ tasks }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-if="project.previews !== null" id="preview">
            <h2
              class="text-light-100 mb-2 text-lg font-bold dark:text-dark-100"
            >
              Preview
            </h2>
            <div id="figmaPreview">
              <iframe
                v-if="project.category == 'UI & UX Design'"
                class="w-full aspect-video"
                style="border: 1px solid rgba(0, 0, 0, 0.1)"
                :src="project.previews.preview"
                :title="project.name"
                allowfullscreen
              ></iframe>
            </div>
            <div id="imagesPreview">
              <figure
                v-if="project.category != 'UI & UX Design'"
                v-for="image in project.previews"
                :key="image.caption"
              >
                <img
                  class="w-full object-cover shadow-md dark:shadow-none"
                  :src="image.preview ?? '/src/assets/template.jpg'"
                  :alt="image.caption ?? 'template'"
                />
                <figcaption
                  class="text-center mt-1 text-light-80 text-xs md:text-sm font-normal dark:text-dark-90"
                >
                  {{ image.caption }}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div
          class="lg:min-w-[300px] lg:max-w-80 py-4 flex flex-col gap-y-4"
          id="sideInformation"
        >
          <div class="category" id="category">
            <h2
              class="text-light-100 text-base md:text-lg font-bold dark:text-dark-100"
            >
              Category
            </h2>
            <span
              class="mt-2 block text-primary-900 text-sm md:text-base font-bold dark:text-primary-200"
              >{{ project.category }}</span
            >
          </div>
          <div class="divider">
            <hr class="w-full h-0.5 bg-light-30" />
          </div>
          <div class="contributors">
            <h2
              class="text-light-100 text-base md:text-lg font-bold dark:text-dark-100"
            >
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
            <h2
              class="text-light-100 text-base md:text-lg font-bold dark:text-dark-100"
            >
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
              <h2
                class="text-light-100 text-base md:text-lg font-bold dark:text-dark-100"
              >
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
              <h2
                class="text-light-100 text-base md:text-lg font-bold dark:text-dark-100"
              >
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
    </section>
  </main>
</template>
