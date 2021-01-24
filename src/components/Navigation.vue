<template>
  <Navbar @toggle-sidebar="toggleSidebar" />
  <SidebarCom :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import SidebarCom from "@/components/SidebarCom.vue";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    Navbar,
    SidebarCom,
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