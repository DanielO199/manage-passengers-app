<template>
  <Sidebar :visible="isSidebarOpen" :showCloseIcon="false">
    <button class="p-sidebar-close p-link" @click="toggleSidebar">
      <span class="p-sidebar-close-icon pi pi-times" />
    </button>
    <router-link to="/airlines">
      <div class="drawer-link__item" @click="toggleSidebar">
        Airlines
      </div></router-link
    >
    <router-link to="/passengers">
      <div class="drawer-link__item" @click="toggleSidebar">
        Passengers
      </div></router-link
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
export default class Drawer extends Vue {}
</script>