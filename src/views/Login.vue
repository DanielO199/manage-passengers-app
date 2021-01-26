<template>
  <form class="login-form">
    <Header>Login</Header>
    <label>Username</label>
    <InputText v-model="username" autocomplete="on" />
    <label>Password</label>
    <Password
      type="password"
      v-model="password"
      :feedback="false"
      autocomplete="on"
    />
    <Button v-if="!isLoading" label="Submit" @click="login" />
    <i
      v-if="isLoading"
      class="pi pi-spin pi-spinner"
      :style="{
        fontSize: '1.5rem',
      }"
    ></i>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Header } from "@/components/common";

import Password from "primevue/password";

@Options({
  components: { Header, Password },
  data() {
    return {
      username: null,
      password: null,
    };
  },

  methods: {
    async login() {
      await this.$store.dispatch("auth/login", {
        username: this.username,
        password: this.password,
      });
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters["auth/isLoading"];
    },
  },
})
export default class Login extends Vue {}
</script>