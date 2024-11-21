<template>
  <section class="mt-12" id="publications">
    <h1
      class="font-bold text-center text-light-100 text-[32px] mb-4 dark:text-dark-100"
    >
      Publications
    </h1>
    <div class="grid xl:grid-cols-4 gap-5" id="publicationsCards">
      <Publication
        title="Enhancing Aspect Detection Using BLSTM and Random Oversampling in
        Marketplace Application Review"
        image="https://fastly.picsum.photos/id/92/3568/2368.jpg?hmac=k-61p7oMQe6U59dEgm0Gu6bWTJGPfHblWxMskxTBZMo"
        category="Paper"
      />
      <Publication
        title="Analisis Sentiment Berbasis Aspek terhadap Ulasan Aplikasi Market Place Menggunakan Bidirectional Long Short-Term Memory"
        image="https://picsum.photos/id/180/367/267"
        category="Undergraduate Thesis"
      />
      <Publication />
      <Publication />
    </div>
  </section>
</template>

<script>
import { Transition } from "vue";
import Publication from "./ui/Publication.vue";

export default {
  data() {
    return {};
  },
  components: {
    Publication,
  },
  methods: {
    expandText(event) {
      setTimeout(() => {
        event.target.classList.remove("line-clamp-1");
      }, 1000);
    },
  },
};
</script>
