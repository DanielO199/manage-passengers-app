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
  computed: {
    isLoggedIn() {
      console.log(this.$store.getters["auth/isAuthenticated"]);
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
  watch: {
    isAuth() {
      if (!this.$store.getters["auth/isAuthenticated"])
        this.$router.replace("/");
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
