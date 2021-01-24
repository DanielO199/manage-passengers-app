<template>
  <Header>Airlines</Header>
  <AirlinesTable />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { AirlinesTable } from "@/components/Airlines";
import { Header } from "@/components/common";

@Options({
  components: { AirlinesTable, Header },
})
export default class Airlines extends Vue {}
</script>