<script>
export default {
  data() {
    return {
      addOnClass: "",
    };
  },
  props: {
    text: {
      type: String,
      default: "Default",
    },
  },
  computed: {
    badgeClass() {
      switch (this.text) {
        case "HTML":
          this.addOnClass =
            "text-html bg-html/15 dark:text-html-alt dark:bg-html-alt/15";
          break;
        case "CSS":
          this.addOnClass =
            "text-css bg-css/15 dark:text-css-alt dark:bg-css-alt/15";
          break;
        case "JavaScript":
          this.addOnClass =
            "text-javascript-alt bg-javascript-alt/15 dark:text-javascript dark:bg-javascript/15";
          break;
        case "PHP":
          this.addOnClass =
            "text-php bg-php/15 dark:text-php-alt dark:bg-php/15";
          break;
        case "Python":
          this.addOnClass =
            "text-python-2 bg-python-2/15 dark:text-python-1 dark:bg-python-1/15";
          break;
        case "Bootstrap CSS":
          this.addOnClass =
            "text-bootstrap bg-bootstrap/15 dark:text-bootstrap-alt dark:bg-bootstrap-alt/15";
          break;
        case "Laravel":
          this.addOnClass =
            "text-laravel bg-laravel/15 dark:text-laravel-alt dark:bg-laravel-alt/15";
          break;
        case "Tailwind CSS":
          this.addOnClass = "text-tailwind bg-tailwind/15 dark:bg-tailwind/15";
          break;
        case "User Interface":
          this.addOnClass = "text-ui bg-ui/15 dark:bg-ui/15";
          break;
        case "User Experience":
          this.addOnClass =
            "text-ux bg-ux/15 dark:text-ux-alt dark:bg-ux-alt/15";
          break;
        case "Figma":
          this.addOnClass = "text-figma bg-figma/15 dark:bg-figma/15";
          break;
        case "MySQL":
          this.addOnClass =
            "text-mysql bg-mysql/15 dark:text-mysql-alt dark:bg-mysql-alt/15";
          break;
        case "Vue.js":
          this.addOnClass = "text-vue bg-vue/15 dark:bg-vue/15";
          break;
        case "Keras":
          this.addOnClass =
            "text-keras bg-keras/15 dark:text-keras-alt dark:bg-keras-alt/15";
          break;
        case "TensorFlow":
          this.addOnClass =
            "text-tensorflow bg-tensorflow/15 dark:bg-tensorflow/15";
          break;
        default:
          this.addOnClass =
            "text-light-100 bg-light-100/15 dark:text-dark-90 dark:bg-dark-90/15";
          break;
      }

      return this.addOnClass;
    },
  },
};
</script>

<template>
  <span
    class="font-bold text-xs px-2 py-1 rounded-full cursor-pointer"
    :class="[badgeClass]"
    >{{ text }}</span
  >
</template>
