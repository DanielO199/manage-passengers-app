<template>
  <Header>Login</Header>
</template>

<script lang="ts">
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
})
export default class Login extends Vue {}
</script>