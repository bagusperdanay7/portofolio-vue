<script>
import SkillCard from "@/components/ui/SkillCard.vue";

export default {
  components: { SkillCard },
};
</script>

<template>
  <section class="mt-12">
    <h1
      class="font-bold text-center text-light-100 text-[32px] mb-4 dark:text-dark-100"
    >
      Skills
    </h1>
    <div
      class="skill-cards flex flex-col xs:flex-row gap-y-5 lg:gap-x-5 xs:flex-wrap xs:justify-between lg:justify-normal xl:justify-between"
    >
      <SkillCard skill="HTML">
        <template v-slot:icon>
          <box-icon name="html5" type="logo" color="#ff8a14"></box-icon>
        </template>
      </SkillCard>
      <SkillCard skill="CSS">
        <template v-slot:icon>
          <box-icon name="css3" type="logo" color="#2d53e5"></box-icon>
        </template>
      </SkillCard>
      <SkillCard skill="JavaScript">
        <template v-slot:icon>
          <box-icon name="javascript" type="logo" color="#FFCA28"></box-icon>
        </template>
      </SkillCard>
      <SkillCard skill="SASS">
        <template v-slot:icon>
          <box-icon name="sass" type="logo" color="#cc6699"></box-icon>
        </template>
      </SkillCard>
      <SkillCard skill="PHP">
        <template v-slot:icon>
          <box-icon name="php" type="logo" color="#7b7fb5"></box-icon>
        </template>
      </SkillCard>
      <SkillCard skill="Python">
        <template v-slot:icon>
          <box-icon name="python" type="logo" color="#2d5d84"></box-icon>
        </template>
      </SkillCard>
    </div>
  </section>
</template>
