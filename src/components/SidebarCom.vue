<template>
  <Sidebar :visible="isSidebarOpen" :showCloseIcon="false">
    <button class="p-sidebar-close p-link" @click="toggleSidebar">
      <span class="p-sidebar-close-icon pi pi-times" />
    </button>

    <router-link to="/passengers">
      <div @click="toggleSidebar">Passengers</div></router-link
    >
    <router-link to="/airlines">
      <div @click="toggleSidebar">Airlines</div></router-link
    >
  </Sidebar>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    isSidebarOpen: Boolean,
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
})
export default class SidebarCom extends Vue {}
</script>