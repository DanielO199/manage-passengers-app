<template>
  <Navbar @toggle-sidebar="toggleSidebar" />
  <Drawer @toggle-sidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Drawer from "./Drawer.vue";
import Navbar from "./Navbar.vue";

@Options({
  components: {
    Navbar,
    Drawer,
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
})
export default class Navigation extends Vue {}
</script>