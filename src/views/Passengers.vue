<template>
  <Header>Passengers</Header>
  <PassengersTable />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { PassengersTable } from "@/components/Passengers";
import { Header } from "@/components/common";

@Options({
  components: { PassengersTable, Header },
})
export default class Passengers extends Vue {}
</script>
