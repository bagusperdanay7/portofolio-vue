<script>
import Certificate from "./ui/Certificate.vue";

export default {
  components: { Certificate },
  data() {
    return {
      isModalShow: false,
      cerficateImage: null,
      certificateName: null,
      certificateProvider: null,
      certificates: [
        {
          name: "Introduction to CSS",
          provider: "Sololearn",
          image:
            "https://api2.sololearn.com/v2/certificates/CC-YQBE6YIR/image/png?t=638378154210245190",
        },
        {
          name: "Sertifikasi Web Developer",
          provider: "BNSP",
          image: "https://picsum.photos/seed/picsum/536/354",
        },
        {
          name: "Machine Learning Pemula",
          provider: "Dicoding",
          image: "https://picsum.photos/id/48/367/267",
        },
        {
          name: "UI / UX for Beginners",
          provider: "Great Learning",
          image: "https://picsum.photos/seed/picsum/536/354",
        },
      ],
    };
  },
  methods: {
    toggleModalCertificate(name, image, provider) {
      this.isModalShow = !this.isModalShow;

      setTimeout(() => {
        this.certificateName = name;
        this.cerficateImage = image;
        this.certificateProvider = provider;
      }, 500);
    },
  },
};
</script>

<template>
  <section class="mt-12" id="certifications">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Certifications
    </h1>
    <div
      class="grid min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-5"
      id="certificationsCards"
    >
      <Certificate
        v-for="(certificate, index) in certificates"
        :key="index"
        :name="certificate.name"
        :image="certificate.image"
        @click="
          toggleModalCertificate(
            certificate.name,
            certificate.image,
            certificate.provider
          )
        "
      />
    </div>
  </section>
  <div
    class="flex fixed top-0 bottom-0 left-0 right-0 z-50 animate-modalshow"
    id="certificationPreview"
    v-show="isModalShow"
    tabindex="-1"
    @keyup.esc="toggleModalCertificate"
  >
    <div
      class="flex flex-col gap-y-4 bg-light-bg-2 dark:bg-dark-bg-2 aspect-video w-[55%] max-w-[1980px] p-6 rounded-[10px] m-auto"
      id="certificationModal"
    >
      <div class="modal-image-head flex justify-between items-start">
        <div>
          <h1 class="font-bold text-lg text-light-100 dark:text-dark-100">
            {{ certificateName }}
          </h1>
          <p class="text-sm font-medium text-light-100 dark:text-dark-90">
            {{ certificateProvider }}
          </p>
        </div>
        <button
          type="button"
          class="hover:bg-light-10 hover:rounded-full dark:hover:bg-dark-50"
          @click="toggleModalCertificate"
        >
          <i
            class="bx bx-x align-top text-3xl text-light-100 dark:text-dark-100"
          ></i>
        </button>
      </div>
      <div
        class="modal-image-content flex flex-col justify-center items-center"
      >
        <div
          v-if="
            (cerficateImage == null) |
              (certificateName == null) |
              (certificateProvider == null)
          "
          class="text-light-100 dark:text-dark-100"
        >
          <i class="bx bx-loader bx-spin text-5xl"></i>
        </div>
        <img v-else :src="cerficateImage" alt="" class="w-full max-w-[800px]" />
      </div>
    </div>
  </div>
</template>
