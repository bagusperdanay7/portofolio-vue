<script>
import Certificate from "./ui/Certificate.vue";

export default {
  components: { Certificate },
  data() {
    return {};
  },
  methods: {
    def() {
      alert("diklik");
    },
  },
};
</script>

<template>
  <section class="mt-12">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Certifications
    </h1>
    <div
      class="grid min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-5"
      id="certificationsCards"
    >
      <Certificate name="Introduction to CSS - Sololearn" />
      <Certificate
        name="Sertifikasi Web Developer"
        image="https://picsum.photos/seed/picsum/536/354"
      />
      <Certificate
        name="Machine Learning Pemula - Dicoding"
        image="https://picsum.photos/id/48/367/267"
      />
      <Certificate
        name="UI / UX for Beginners - Great Learning"
        image="https://picsum.photos/seed/picsum/536/354"
        @click="def"
      />
    </div>
  </section>
</template>
