<template>
  <!-- <div id="nav"> -->
  <Header v-if="isLoggedIn" />
  <!-- </div> -->
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
})
export default class App extends Vue {
  // get isLoggedIn() {
  //   return this.$store.getters.isAuthenticated;
  // }
}
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
