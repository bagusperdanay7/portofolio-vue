<template>
  <section class="mt-12" id="specialThanks">
    <div class="flex">
      <div
        class="flex-1 rounded-[20px] py-[30px] px-[25px] bg-light-bg-2 dark:bg-dark-bg-2"
      >
        <h1
          class="font-bold text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100 text-center"
        >
          Special Thanks
        </h1>
        <p
          class="font-medium text-base text-light-80 mb-6 text-center dark:text-dark-90"
        >
          Saya ingin mengucapkan Terima kasih yang besar, kepada tokoh tokoh di
          bawah ini yang telah banyak mengajari saya dalam bidang Ilmu Komputer
          atau Teknik Informatika, yang membantu saya hingga bisa menjadi
          sekarang. Dan juga nama-nama yang tidak disebutkan
        </p>
        <div
          class="flex flex-col sm:flex-row lg:justify-center gap-5 sm:flex-wrap lg:flex-nowrap md:justify-between"
          id="honorableMention"
        >
          <HonorableCard
            name="Pak Sandhika Galih"
            channel="Web Programming UNPAS"
            class="border-wpu hover:drop-shadow-custom-wpu"
          />
          <HonorableCard
            name="Kang Faqihza Mukhlish"
            channel="Kelas Terbuka"
            class="border-kelas-terbuka hover:drop-shadow-custom-kelas-terbuka"
          />
          <HonorableCard
            name="Pak Eko Kurniawan Khannedy"
            channel="Programmer Zaman Now"
            class="border-pzn hover:drop-shadow-custom-primary"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HonorableCard from "./ui/HonorableCard.vue";

export default {
  components: { HonorableCard },
};
</script>
