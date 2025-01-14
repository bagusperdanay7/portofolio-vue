<script>
export default {
  inject: ["author"],
};
</script>

<template>
  <section class="mt-12" id="summary">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-4 dark:text-dark-100"
    >
      Summary
    </h1>
    <div
      class="summary-box p-[25px] bg-light-bg-2 rounded-[20px] transition duration-300 ease-in-out dark:bg-dark-bg-2"
    >
      <p class="font-normal text-light-100 dark:text-dark-100">
        “Hello Everyone, My full name is {{ author }}, and my nickname is Bagus.
        Originally from Karawang, West Java, Indonesia, I am a
        <strong
          >a bachelor's degree graduate in Informatics Engineering from
          Universitas Komputer Indonesia in 2023.</strong
        >
        Currently, I am working as a
        <strong>freelancer Web Developer</strong> and actively seeking new job
        opportunities. During my three-month internship at PT Telkom Indonesia,
        Graha Merah Putih Bandung, I developed an information system using
        <span class="text-primary-600 dark:text-primary-300 font-semibold"
          >PHP</span
        >,
        <span class="text-primary-600 dark:text-primary-300 font-semibold"
          >Laravel</span
        >, and
        <span class="text-primary-600 dark:text-primary-300 font-semibold"
          >MySQL</span
        >. Recently, I completed a freelance project as a
        <strong>Backend Programmer</strong>, leveraging
        <span class="text-primary-600 dark:text-primary-300 font-semibold"
          >PHP</span
        >
        and
        <span class="text-primary-600 dark:text-primary-300 font-semibold"
          >Laravel</span
        >
        technologies. Besides backend expertise, I possess skills in
        <span class="text-primary-600 dark:text-primary-300 font-semibold"
          >Vue.js</span
        >
        and
        <span class="text-primary-600 dark:text-primary-300 font-semibold"
          >Tailwind CSS</span
        >
        for <strong>front-end development</strong>. My vision is to become a
        <strong>web developer or full-stack developer</strong> who can make a
        positive impact on the company, community, and Indonesia. I am eager to
        continue learning, collaborating in a team, and dedicating my time,
        creativity, and skills to provide innovative and impactful solutions for
        the advancement of technology. In addition, I have a great enthusiasm
        for <strong>machine learning, and UI & UX design</strong>.”
      </p>
    </div>
  </section>
</template>
