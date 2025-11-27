<template>
  <div class="min-h-[100vh] h-[100vh]">
  <v-overlay
    v-if="overlayStatus"
    v-model="overlayStatus"
    style="z-index: 99"
    class="flex justify-center items-center"
  ></v-overlay>
  <v-snackbar
    location="top right"
    v-model="snackData.status"
    timeout="4000"
    :color="snackData.color"
    >{{ snackData.message }}</v-snackbar
  >
  <router-view></router-view>
</div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import { useBaseStore } from "./stores/baseStore";

export default {
  name: "AppPage",
  data() {
    return {
      overlayStatus: false,
      snackData: {
        status: false,
        message: "",
        color: "red-darken-4",
      },
    };
  },
  computed: {
    ...mapState(useBaseStore, ["overlay", "snack"]),
    ...mapWritableState(useBaseStore, ["overlay", "snack"]),
  },
  watch: {
    snack(data) {
      console.log(data);
      this.snackData = data;
    },
    overlay(data) {
      this.overlayStatus = data;
    },
  },
};
</script>

<style>
</style>>