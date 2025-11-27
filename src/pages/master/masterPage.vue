<template>
  <v-layout ref="app" class="rounded rounded-md border">
    <v-navigation-drawer>
      <v-list nav>
        <v-list-item title="Navigation drawer" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <headerVue />

    <v-main class="h-[100vh]">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import headerVue from './header.vue';
export default {
  name: "MaterPage",
  components: {
    headerVue
  }
};
</script>

<style>
</style>