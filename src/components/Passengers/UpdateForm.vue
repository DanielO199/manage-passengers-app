<template>
  <form class="passenger-form">
    <label for="name">Name</label>
    <InputText
      id="name"
      v-model="passenger.name"
      required="true"
      autofocus
      :class="{ 'p-invalid': !passenger.name }"
    />
    <label for="name">Trips</label>
    <InputNumber
      id="trips"
      v-model="passenger.trips"
      required="true"
      autofocus
      :class="{ 'p-invalid': !passenger.trips }"
    />
    <Button
      v-if="!isLoadingAction"
      @click="updatePassenger"
      label="Save"
      icon="pi pi-check"
      :style="{
        width: '100px',
        height: '35px',
        marginTop: '1rem',
      }"
      iconPos="right"
      :disabled="!passenger.name || !passenger.trips"
    />
    <i
      v-if="isLoadingAction"
      class="pi pi-spin pi-spinner"
      :style="{
        fontSize: '1.5rem',
        marginTop: '1.5rem',
        marginLeft: '2.5rem',
      }"
    ></i>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    passenger: Object,
  },
  methods: {
    updatePassenger() {
      this.$emit("update-passenger");
    },
  },
  computed: {
    isLoadingAction() {
      return this.$store.getters["passengers/isLoadingAction"];
    },
  },
})
export default class UpdateForm extends Vue {}
</script>