<template>
  <span
    class="font-bold text-xs px-2 py-1 rounded-full cursor-pointer"
    :class="[badgeClass]"
    >{{ text ?? "Default" }}</span
  >
</template>

<script>
export default {
  data() {
    return {
      defaultClass: "font-bold text-xs px-2 py-1 rounded-full cursor-pointer",
      addOnClass: "bg-slate-200 text-slate-900",
    };
  },
  props: {
    text: String,
  },
  computed: {
    badgeClass() {
      switch (this.text) {
        case "HTML":
          this.addOnClass = "bg-[#FFE7CA] text-[#FF8A14]";
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
          this.addOnClass = "bg-slate-200 text-slate-900";
          break;
      }

      return this.addOnClass;
    },
  },
};
</script>
