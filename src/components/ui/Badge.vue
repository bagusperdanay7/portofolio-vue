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
            "text-html bg-html-subtle-light dark:bg-html-subtle-dark";
          break;
        case "CSS":
          this.addOnClass = "bg-[#D6E7FF] text-[#227AFF]";
          break;
        case "JavaScript":
          this.addOnClass = "bg-[#FFF7DB] text-[#D5B135]";
          break;
        case "PHP":
          this.addOnClass = "bg-[#E5E8FF] text-[#2245FF]";
          break;
        case "Bootstrap":
          this.addOnClass = "bg-[#DDE0FF] text-[#3C50FF]";
          break;
        case "Laravel":
          this.addOnClass = "bg-[#FFE3E3] text-[#FF0B0B]";
          break;
        case "Python":
          this.addOnClass =
            "text-python-2 bg-python-2-subtle-light dark:text-python-1 dark:bg-python-1-subtle-dark";
          break;
        case "UI Design":
          this.addOnClass = "bg-[#FFE8F6] text-[#FF14A1]";
          break;
        case "UX Design":
          this.addOnClass = "bg-[#DDE0FF] text-[#3C50FF]";
          break;
        case "Figma":
          this.addOnClass = "bg-[#FFE6DF] text-[#FF3D00]";
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
