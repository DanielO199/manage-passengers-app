<template>
  <Header>Passenger details</Header>
  <div class="passenger-content" v-if="!isLoading">
    <div class="passenger-content__item">
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
    </div>

    <div class="passenger-content__item">
      <h3>Passenger airline details</h3>
      <div class="passenger-airline">
        <div>
          <label for="name">Name</label>
          <div>{{ passenger.airline.name }}</div>
        </div>
        <div>
          <label for="name">Country</label>
          <div>{{ passenger.airline.country }}</div>
        </div>
      </div>
    </div>
  </div>
  <Toast position="top-right" />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { Header } from "@/components/common";

@Options({
  props: {
    id: String,
  },
  components: { Header },
  async created() {
    await this.$store.dispatch("passengers/fetchPassenger", this.id);
  },
  methods: {
    async updatePassenger() {
      try {
        await this.$store.dispatch("passengers/updatePassenger", {
          id: this.id,
          name: this.passenger.name,
          trips: this.passenger.trips,
          airline: this.passenger.airline.id,
        });

        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3000,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters["passengers/isLoading"];
    },
    isLoadingAction() {
      return this.$store.getters["passengers/isLoadingAction"];
    },
    passenger() {
      return this.$store.getters["passengers/passenger"];
    },
  },
})
export default class PassengerDetails extends Vue {}
</script>