<script>
import ContactList from "../ui/list/ContactList.vue";
import Input from "../ui/Input.vue";
import TextArea from "../ui/TextArea.vue";
import Button from "../ui/Button.vue";

export default {
  components: {
    ContactList,
    Input,
    TextArea,
    Button,
  },
  data() {
    return {
      name: "",
      message: "",
      email: "",
      buttonText: "Submit",
      buttonDisabled: false,
      informationContact: [
        {
          socialMedia: "WhatsApp",
          value: "+6288214709338",
          icon: "bxl-whatsapp",
        },
        {
          socialMedia: "Telegram",
          value: "+6288214709338",
          icon: "bxl-telegram",
        },
        {
          socialMedia: "Email",
          value: "baguspyus@gmail.com",
          icon: "bxl-gmail",
        },
        {
          socialMedia: "Address",
          value:
            "Jl. Mutiara Raya Blok C2/5 Sukaharja, Telukjambe Timur, Karawang. 41361",
          icon: "bxs-map",
        },
      ],
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
};
</script>

<template>
  <section class="mt-12" id="contacts">
    <h1
      class="font-bold text-center text-light-100 text-[28px] md:text-[32px] mb-2 dark:text-dark-100"
    >
      Contact Me
    </h1>
    <p
      class="text-base font-semibold text-light-80 text-center mb-7 dark:text-dark-90"
    >
      If you are interested in collaborating or making an offer, kindly complete
      the following form.
    </p>
    <div class="grid lg:grid-cols-2" id="contactBox">
      <div
        class="bg-primary-950 p-6 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none dark:bg-primary-50"
        id="contactInformation"
      >
        <h2 class="text-dark-100 font-bold text-xl mb-2 dark:text-light-100">
          Contact Information
        </h2>
        <p class="text-dark-90 font-normal text-sm dark:text-light-80">
          You may also contact me via one of these platforms
        </p>
        <div class="flex flex-col gap-y-6 mt-6" id="contacts">
          <ContactList
            v-for="(contact, index) in informationContact"
            :key="index"
            :brand="contact.socialMedia"
            :value="contact.value"
            :iconClass="contact.icon"
          />
        </div>
      </div>
      <div
        class="bg-light-bg-2 p-6 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none dark:bg-dark-bg-2"
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
              ref="nameInput"
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
