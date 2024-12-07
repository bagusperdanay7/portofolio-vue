<script>
import PublicationCard from "../ui/card/PublicationCard.vue";
import publications from "@/data/publications.json";

export default {
  components: {
    PublicationCard,
  },
  data() {
    return {
      publications: publications,
    };
  },
  methods: {},
};
</script>

<template>
  <section class="mt-12" id="publications">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Publications
    </h1>
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      id="publicationsCards"
    >
      <PublicationCard
        v-for="publication in publications"
        :key="publication.id"
        :title="publication.title"
        :image="publication.snapshot"
        :category="publication.category"
        :link="publication.link"
      />
    </div>
  </section>
</template>
