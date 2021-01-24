<template>
  <PassengersTable />
</template>

<script>
import { Options, Vue } from "vue-class-component";

import { PassengersTable } from "@/components/Passengers";

@Options({
  components: { PassengersTable },
})
export default class Passengers extends Vue {}
</script>

<style scoped>
</style>