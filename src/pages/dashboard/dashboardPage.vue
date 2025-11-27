<template>
  <div class="grid gap-3">
    <summaryPregnancyVue />
  </div>
</template>

<script>
import summaryPregnancyVue from "./summary/summaryPregnancy.vue";
export default {
  name: "DashBoardPage",
  components: { summaryPregnancyVue },

  data() {
    return {};
  },
};
</script>

<style>
</style>