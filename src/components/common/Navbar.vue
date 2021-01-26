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
      <h5 @click="logout"><i class="pi pi-power-off"></i> Logout</h5>
    </nav>
    <div class="hamburger">
      <i @click="toggleSidebar" class="pi pi-bars"></i>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
})
export default class Navbar extends Vue {}
</script>