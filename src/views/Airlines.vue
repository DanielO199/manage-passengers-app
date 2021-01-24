<template>
  <AirlinesTable />
</template>

<script>
import { Options, Vue } from "vue-class-component";

import AirlinesTable from "@/components/AirlinesTable";

@Options({
  components: { AirlinesTable },
})
export default class Airlines extends Vue {}
</script>

<style scoped>
</style>