<script>
import { RouterLink } from "vue-router";
import HonorableCard from "../ui/card/HonorableCard.vue";

export default {
  components: {
    HonorableCard,
    RouterLink,
  },
  data() {
    return {
      description: {
        indonesia:
          "Saya ingin mengucapkan Terima kasih yang besar, kepada tokoh tokoh di bawah ini yang telah banyak mengajari saya dalam bidang Ilmu Komputer atau Teknik Informatika, yang membantu saya hingga bisa menjadi sekarang. Dan juga nama-nama yang tidak disebutkan",
        english:
          "I would like to express my great gratitude to these following figures who have greatly taught me in the field of computer science or informatics engineering, which helped me to be able to become the person I am today. I can't list all the names individually.",
      },
      inspiringFigures: [
        {
          name: "Pak Sandhika Galih",
          channel: "Web Programming UNPAS",
          classes: "border-wpu hover:drop-shadow-custom-wpu",
          image:
            "https://yt3.googleusercontent.com/ytc/AIdro_lE1Ypy63AS3WoLMoylyoDgMPl5VyeN2DwbeIo41_ewjds=s160-c-k-c0x00ffffff-no-rj",
          youtube: "https://www.youtube.com/@sandhikagalihWPU",
        },
        {
          name: "Kang Faqihza Mukhlish",
          channel: "Kelas Terbuka",
          classes:
            "border-kelas-terbuka hover:drop-shadow-custom-kelas-terbuka",
          image:
            "https://www.fti.itb.ac.id/wp-content/uploads/sites/9/2022/07/FQ-scaled.jpg",
          youtube: "https://www.youtube.com/@KelasTerbuka",
        },
        {
          name: "Pak Eko Kurniawan Khannedy",
          channel: "Programmer Zaman Now",
          classes: "border-pzn hover:drop-shadow-custom-primary",
          image:
            "https://media.licdn.com/dms/image/v2/D5603AQHRnLI-gGS7dQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693238977494?e=1738195200&v=beta&t=8DH8dPV4aRskfuesHMzEZmm0hXsVy9SNwuc3ZBg9pwk",
          youtube: "https://www.youtube.com/@ProgrammerZamanNow",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="mt-12" id="specialThanks">
    <div class="flex">
      <div
        class="bg-light-bg-2 dark:bg-dark-bg-2 flex-1 rounded-[20px] px-[25px] py-[30px]"
      >
        <h1
          class="text-light-100 dark:text-dark-100 mb-4 text-center text-[28px] font-bold md:text-[32px]"
        >
          Special Thanks
        </h1>
        <p
          class="text-light-80 dark:text-dark-90 mb-6 text-center text-base font-medium"
        >
          {{ description.english }}
        </p>
        <div
          id="honorableMention"
          class="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-between lg:flex-nowrap lg:justify-center"
        >
          <HonorableCard
            v-for="(figure, index) in inspiringFigures"
            :key="index"
            :name="figure.name"
            :channel="figure.channel"
            :class="figure.classes"
            :image="figure.image"
            :youtube="figure.youtube"
          />
        </div>
      </div>
    </div>
  </section>
</template>
