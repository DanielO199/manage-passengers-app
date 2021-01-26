<template>
  <Navigation v-if="isLoggedIn" />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Navigation } from "@/components/common";

@Options({
  components: {
    Navigation,
  },
  created() {
    this.$store.dispatch("auth/tryLogin");
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
