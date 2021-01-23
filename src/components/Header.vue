<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/passengers">Passengers</router-link>
        </li>
        <li>
          <router-link to="/airlines">Airlines</router-link>
        </li>
      </ul>
      <h5><i class="pi pi-power-off"></i> Logout</h5>
    </nav>
    <div class="hamburger">
      <i @click="toggleSidebar" class="pi pi-bars"></i>
    </div>
  </header>
  <SidebarCom :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import SidebarCom from "@/components/SidebarCom.vue";

@Options({
  components: {
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
export default class Header extends Vue {}
</script>