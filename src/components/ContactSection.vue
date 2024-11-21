<script>
import Contact from "./ui/Contact.vue";
export default {
  components: {
    Contact,
  },
};
</script>

<template>
  <section class="mt-12">
    <h1
      class="font-bold text-center text-light-100 text-[32px] mb-2 dark:text-dark-100"
    >
      Contact Me
    </h1>
    <p class="text-base font-semibold text-light-80 text-center mb-7">
      If you are interested in collaborating or making an offer, kindly complete
      the following form.
    </p>
    <div class="grid lg:grid-cols-2" id="contactBox">
      <div
        class="bg-blue-950 p-6 rounded-t-xl lg:rounded-l-xl"
        id="contactInformation"
      >
        <h2 class="text-dark-100 font-bold text-xl mb-2">
          Contact Information
        </h2>
        <p class="text-dark-90 font-normal text-sm">
          You may also contact me via one of these platforms
        </p>
        <div class="flex flex-col gap-y-6 mt-6" id="contacts">
          <Contact
            brand="WhatsApp"
            value="+6288214709338"
            iconClass="bxl-whatsapp"
          />
          <Contact
            brand="Telegram"
            value="6288214709338"
            iconClass="bxl-telegram"
          />
          <Contact
            brand="Email"
            value="baguspyus@gmail.com"
            iconClass="bxl-gmail"
          />
          <Contact
            brand="Address"
            value="Jl. Mutiara Raya Blok C2/5 Sukaharja, Telukjambe Timur, Karawang. 41361"
            iconClass="bxs-map"
          />
        </div>
      </div>
      <div
        class="bg-light-bg-2 p-6 rounded-b-xl lg:rounded-r-xl"
        id="formContainer"
      ></div>
    </div>
  </section>
</template>
