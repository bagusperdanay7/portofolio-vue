<script>
import Button from "./ui/Button.vue";
import Contact from "./ui/Contact.vue";
import Input from "./ui/Input.vue";
import TextArea from "./ui/TextArea.vue";

export default {
  data() {
    return {
      name: "",
      message: "",
      email: "",
      buttonText: "Submit",
      buttonDisabled: false,
    };
  },
  methods: {
    handleContactForm() {
      this.buttonText = "Submitting...";
      this.buttonDisabled = true;
      console.log("name: ", this.name);
      console.log("email: ", this.email);
      console.log("message: ", this.message);
      setTimeout(() => {
        this.buttonText = "Submit";
        this.buttonDisabled = false;
      }, 1000);
    },
  },
  components: {
    Contact,
    Input,
    TextArea,
    Button,
  },
};
</script>

<template>
  <section class="mt-12" id="contacts">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-2 dark:text-dark-100"
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
      >
        <form action="#" method="post" @submit.prevent="handleContactForm">
          <div class="mb-4">
            <Input
              name="name"
              type="text"
              label="Name"
              id="name"
              placeholder="Enter your name"
              v-model="name"
            />
          </div>
          <div class="mb-4">
            <Input
              name="email"
              type="email"
              label="Email"
              id="email"
              placeholder="Enter your email"
              v-model="email"
            />
          </div>
          <div class="mb-[25px]">
            <TextArea
              label="Message"
              name="message"
              placeholder="Enter your message"
              id="message"
              v-model="message"
            />
          </div>
          <div class="text-right">
            <Button type="submit" :disabled="buttonDisabled">{{
              buttonText
            }}</Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
