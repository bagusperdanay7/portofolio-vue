<script>
import certifications from "@/data/certifications.json";
import CertificateCard from "@/components/ui/card/CertificateCard.vue";
import { Transition } from "vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.certificates = certifications;
    }, 300);
  },
  components: { CertificateCard, Transition },
  data() {
    return {
      isModalShow: false,
      isLoading: false,
      certificateImage: null,
      certificateName: null,
      certificateProvider: null,
      certificateCredential: null,
      certificates: [],
    };
  },
  methods: {
    toggleModalCertificate(certificate) {
      if (!this.isModalShow) {
        this.isModalShow = true;
        this.isLoading = true;
        setTimeout(() => {
          this.certificateName = certificate.name;
          this.certificateImage = certificate.image;
          this.certificateProvider = certificate.provider;
          this.certificateCredential = certificate.credential;
          this.isLoading = false;
        }, 800);
      } else {
        this.isModalShow = false;
        this.isLoading = false;
        this.certificateName = null;
        this.certificateImage = null;
        this.certificateProvider = null;
        this.certificateCredential = null;
      }
    },
  },
  computed: {
    sortByNameCertificates() {
      this.certificates.sort((firstItem, secondItem) => {
        if (firstItem.provider === secondItem.provider) {
          return firstItem.name.localeCompare(secondItem.name);
        }
        return firstItem.provider.localeCompare(secondItem.provider);
      });
      return this.certificates;
    },
  },
};
</script>

<template>
  <section class="mt-12" id="certifications">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      All Certifications
    </h1>
    <div
      v-if="certificates.length < 1"
      class="text-light-100 dark:text-dark-100 text-center"
    >
      <i class="bx bx-loader bx-spin text-3xl"></i>
    </div>
    <div
      v-else
      class="grid min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 gap-5"
      id="certificationsCards"
    >
      <CertificateCard
        v-for="certificate in sortByNameCertificates"
        :key="certificate.id"
        :name="certificate.name"
        :image="certificate.image"
        :provider="certificate.provider"
        @click="toggleModalCertificate(certificate)"
      />
    </div>
  </section>
  <Transition name="fade">
    <div
      v-if="isModalShow"
      class="fixed top-0 left-0 w-full h-full bg-dark-bg bg-opacity-80 z-40"
    ></div>
  </Transition>
  <Transition
    name="zoom"
    enter-active-class="animate-zoom-in"
    leave-active-class="animate-zoom-out"
  >
    <div
      class="flex fixed top-0 bottom-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-0"
      id="certificationPreview"
      v-show="isModalShow"
      tabindex="-1"
      @click.self="toggleModalCertificate"
    >
      <div
        class="flex flex-col gap-y-4 bg-light-bg-2 dark:bg-dark-bg-2 aspect-video 2xl:w-[55%] px-4 py-6 md:p-6 rounded-[10px] m-auto"
        id="certificationModal"
      >
        <div class="modal-image-head flex justify-between items-start">
          <div>
            <h1
              class="font-bold text-base sm:text-lg text-light-100 dark:text-dark-100"
            >
              {{ certificateName }}
            </h1>
            <p
              class="inline text-xs sm:text-sm font-medium text-light-100 dark:text-dark-90 mt-1"
            >
              {{ certificateProvider }}
              <span
                v-if="!isLoading && certificateCredential"
                class="ml-0.5 text-light-100 dark:text-dark-100"
                >·</span
              >
              <a
                v-if="!isLoading && certificateCredential"
                :href="certificateCredential"
                target="_blank"
                class="text-xs ml-1 font-semibold text-light-50 hover:text-primary-600 dark:text-dark-70 dark:hover:text-primary-300"
                >Show Credential <i class="bx bx-link-external text-xs"></i
              ></a>
            </p>
          </div>
          <button
            type="button"
            class="hover:bg-light-10 hover:rounded-full dark:hover:bg-dark-50"
            @click="toggleModalCertificate"
          >
            <i
              class="bx bx-x align-top text-2xl sm:text-3xl text-light-100 dark:text-dark-100"
            ></i>
          </button>
        </div>
        <div
          class="modal-image-content flex flex-col justify-center items-center"
          :class="{ 'h-full': isLoading }"
        >
          <div v-if="isLoading" class="text-light-100 dark:text-dark-100">
            <i class="bx bx-loader bx-spin text-3xl md:text-5xl"></i>
          </div>
          <img
            v-else
            :src="certificateImage"
            :alt="certificateName"
            class="w-full h-auto max-w-[800px] object-contain aspect-[16/11]"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>
