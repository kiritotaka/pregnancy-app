<template>
  <v-app-bar class="shadow-sm" :elevation="1">
    <div class="px-3 flex justify-between w-full">
      <div>Xin chào {{ loginData?.user?.displayName }}</div>
      <div class="block md:hidden">
        <v-speed-dial location="bottom center" transition="fade-transition">
          <template v-slot:activator="{ props: activatorProps }">
            <span class="mdi mdi-menu text-xl" v-bind="activatorProps"></span>
          </template>

          <v-btn key="1" icon="$success"></v-btn>
          <v-btn key="2" icon="$info"></v-btn>
          <v-btn key="3" icon="$warning"></v-btn>
          <v-btn key="4" icon="$error" @click="logout()"></v-btn>
        </v-speed-dial>
      </div></div
  ></v-app-bar>
</template>

<script>
import { mapState } from "pinia";
import { useBaseStore } from "../../stores/baseStore";
export default {
  name: "HeaderPage",
  data() {
    return {};
  },
  computed: {
    ...mapState(useBaseStore, ["loginData"]),
  },
  methods: {
    logout() {
      const baseStore = useBaseStore();
      baseStore.$reset;
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style>
</style>