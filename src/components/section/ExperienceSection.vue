<script>
import OddList from "../ui/list/OddList.vue";
import EvenList from "../ui/list/EvenList.vue";
import MobileList from "../ui/list/MobileList.vue";

export default {
  components: {
    OddList,
    EvenList,
    MobileList,
  },
  data() {
    return {
      experiences: [
        {
          position: "Web Developer",
          institution: "PT Telkom Indonesia - Bandung, Indonesia (Internship)",
          span: "Sep 2021 - Dec 2021",
          details:
            "Collaborated with a team of 3 people in building a Data Management Information System website that helps employees manage customer technical data using HTML, CSS, JavaScript and PHP Laravel in a team. Design the user interface, implement the user interface, implement CRUD operations, filter features and user authentication.",
        },
        {
          position: "Backend Programmer (Laravel)",
          institution: "Freelance - Bandung, Indonesia (Remote)",
          span: "Oct 2024 - Current",
          details:
            "Collaborate with the team to design and develop web applications with the Laravel framework. Implement role-based authentication and authorization to manage user access to applications. Handle the implementation of OAuth and Socialite for authentication integration with third-party applications, specifically Google. Utilized Git as a version control system and GitHub as a collaborative platform to facilitate efficient code sharing, review, and modifications, fostering seamless and rapid teamwork. Provided CRUD (Create, Read, Update, Delete) functionalities across multiple modules to enable efficient data management and manipulation.",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="mt-12" id="experience">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Experience
    </h1>
    <ul class="hidden sm:flex flex-col gap-y-5" id="experienceListExceptMobile">
      <li
        class="grid grid-cols-9 group"
        v-for="(experience, index) in experiences"
        :key="index"
      >
        <OddList
          v-if="index % 2 === 0"
          :status="experience.position"
          :institution="experience.institution"
          :details="experience.details"
          iconClass="bx bxs-briefcase"
        >
          <template #span>
            {{ experience.span }}
          </template>
        </OddList>
        <EvenList
          v-else-if="index % 2 !== 0"
          :status="experience.position"
          :institution="experience.institution"
          :details="experience.details"
          iconClass="bx bxs-briefcase"
        >
          <template #span>
            {{ experience.span }}
          </template>
        </EvenList>
      </li>
    </ul>
    <ul class="flex sm:hidden flex-col gap-y-5" id="experienceListMobile">
      <li
        class="grid grid-cols-9 gap-x-4 group"
        v-for="(experience, index) in experiences"
        :key="index"
      >
        <MobileList
          :status="experience.position"
          :institution="experience.institution"
          :details="experience.details"
          iconClass="bx bxs-briefcase"
        >
          <template #span>
            {{ experience.span }}
          </template>
        </MobileList>
      </li>
    </ul>
  </section>
</template>
