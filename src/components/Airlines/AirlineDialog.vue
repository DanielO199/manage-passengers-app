<template>
  <Dialog
    v-model:visible="isDialogOpen"
    :style="{ width: '100%', maxWidth: '650px' }"
    header="Airline Details"
    :modal="true"
    class="p-fluid"
    :closable="false"
  >
    <img :src="airline.logo" :alt="airline.image" class="airline-image" />
    <div class="dialog-content">
      <div class="dialog-content__item">
        <label>Name</label> {{ airline.name }}
      </div>
      <div class="dialog-content__item">
        <label>Country</label>{{ airline.country }}
      </div>
      <div class="dialog-content__item">
        <label>Head quater</label>{{ airline.head_quaters }}
      </div>

      <div class="dialog-content__item">
        <label>Slogan</label>{{ airline.slogan }}
      </div>

      <div class="dialog-content__item">
        <label>Established</label>{{ airline.established }}
      </div>

      <div class="dialog-content__item">
        <label>Website</label>{{ airline.website }}
      </div>
    </div>

    <Button @click="closeDialog" label="Close" />
  </Dialog>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    airline: Object,
    isDialogOpen: Boolean,
  },

  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
})
export default class AirlineDialog extends Vue {}
</script>