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
            "text-html bg-html-subtle dark:text-html-alt dark:bg-html-subtle-dark";
          break;
        case "CSS":
          this.addOnClass =
            "text-css bg-css-subtle dark:bg-css-subtle-dark dark:text-css-alt";
          break;
        case "JavaScript":
          this.addOnClass =
            "text-javascript-alt bg-javascript-subtle dark:text-javascript dark:bg-javascript-subtle-dark";
          break;
        case "PHP":
          this.addOnClass =
            "text-php bg-php-subtle dark:text-php-alt dark:bg-php-subtle-dark";
          break;
        case "Python":
          this.addOnClass =
            "text-python-2 bg-python-2-subtle dark:text-python-1 dark:bg-python-1-subtle-dark";
          break;
        case "Bootstrap":
          this.addOnClass =
            "text-bootstrap bg-bootstrap-subtle dark:text-bootstrap-alt dark:bg-bootstrap-subtle-dark";
          break;
        case "Laravel":
          this.addOnClass =
            "text-laravel bg-laravel-subtle dark:text-laravel-alt dark:bg-laravel-subtle-dark";
          break;
        case "Tailwind CSS":
          this.addOnClass =
            "text-tailwind bg-tailwind-subtle dark:bg-tailwind-subtle-dark";
          break;
        case "UI Design":
          this.addOnClass = "text-ui bg-ui-subtle dark:bg-ui-subtle-dark";
          break;
        case "UX Design":
          this.addOnClass =
            "text-ux bg-ux-subtle dark:text-ux-alt dark:bg-ux-subtle-dark";
          break;
        case "Figma":
          this.addOnClass =
            "text-figma bg-figma-subtle dark:bg-figma-subtle-dark";
          break;
        default:
          this.addOnClass =
            "bg-light-10 text-light-100 dark:text-dark-90 dark:bg-zinc-700";
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
