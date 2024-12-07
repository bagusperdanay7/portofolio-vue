<script>
import EvenList from "../ui/list/EvenList.vue";
import MobileList from "../ui/list/MobileList.vue";
import OddList from "../ui/list/OddList.vue";

export default {
  components: {
    OddList,
    EvenList,
    MobileList,
  },
  data() {
    return {
      educations: [
        {
          year: 2006,
          schoolName: "SDN Sukaharja 2 (Elementary School)",
          details:
            "Between 2006 and 2012, I attended an elementary school named SDN Sukaharja 2.",
        },
        {
          year: 2012,
          schoolName: "SMPN 3 Karawang Barat (Junior High School)",
          details:
            "In 2012, I enrolled at SMPN 2 West Karawang for my junior high school education and graduated in 2015.",
        },
        {
          year: 2015,
          schoolName: "SMAN 5 Karawang (Senior High School)",
          details:
            "In 2015, I enrolled at SMAN 5 Karawang in the Natural Sciences (IPA) program and graduated in 2018.",
        },
        {
          year: 2018,
          schoolName: "Universitas Komputer Indonesia",
          details:
            'I pursued higher education in 2018 by majoring in informatics engineering at Universitas Komputer Indonesia (Indonesian Computer University), Bandung\'s Faculty of Engineering and Computer Science. I finished my final project, "Analisis Sentimen Berbasis Aspek terhadap Ulasan Aplikasi Market Place Menggunakan Bidirectional Long Short-Term Memory" and I eventually passed, earning a 3.44/4.00 GPA and graduating in June 2023 with a Bachelor of Informatics Engineering (S.Kom).',
        },
      ],
    };
  },
};
</script>

<template>
  <section class="mt-12" id="education">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Education
    </h1>
    <ul class="hidden sm:flex flex-col gap-y-5" id="educationListExceptMobile">
      <li
        class="grid grid-cols-9 group"
        v-for="(education, index) in educations"
        :key="index"
      >
        <OddList
          v-if="index % 2 === 0"
          :status="education.year"
          :institution="education.schoolName"
          :details="education.details"
          iconClass="bx bxs-graduation"
        />
        <EvenList
          v-else-if="index % 2 !== 0"
          :status="education.year"
          :institution="education.schoolName"
          :details="education.details"
          iconClass="bx bxs-graduation"
        />
      </li>
    </ul>
    <ul class="flex sm:hidden flex-col gap-y-5" id="educationListMobile">
      <li
        class="grid grid-cols-9 gap-x-4 group"
        v-for="(education, index) in educations"
        :key="index"
      >
        <MobileList
          :status="education.year"
          :institution="education.schoolName"
          :details="education.details"
          iconClass="bx bxs-graduation"
        />
      </li>
    </ul>
  </section>
</template>
