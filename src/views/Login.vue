<template>
  <Header>Login</Header>
  <InputText v-model="username" placeholder="Search..." />
  <InputText v-model="password" placeholder="Search..." />
  <Button label="Submit" @click="login" />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { Options, Vue } from "vue-class-component";
import { Header } from "@/components/common";

@Options({
  components: { Header },
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async login() {
      const formData = new FormData();
      formData.append("username", "api-user4@iwt.net");
      formData.append("password", "b3z0nV0cLO");
      formData.append("scope", "offline_access");
      formData.append("grant_type", "password");
      formData.append("client_id", "0oahdhjkutaGcIK2M4x6");

      const cors = "https://cors-anywhere.herokuapp.com/";
      const endpoint =
        "https://dev-457931.okta.com/oauth2/aushd4c95QtFHsfWt4x6/v1/token";
      try {
        await fetch(cors + endpoint, {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(formData),
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
})
export default class Login extends Vue {}
</script>