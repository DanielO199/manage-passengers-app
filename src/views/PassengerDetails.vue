<template>
  <Header>Passenger details</Header>
  <div class="passenger-content" v-if="!isLoading">
    <div class="passenger-content__item">
      <UpdateForm :passenger="passenger" @update-passenger="updatePassenger" />
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

import { UpdateForm } from "@/components/Passengers";
import { Header } from "@/components/common";

@Options({
  props: {
    id: String,
  },
  components: { Header, UpdateForm },
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
          detail: "Passenger Updated",
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
    passenger() {
      return this.$store.getters["passengers/passenger"];
    },
  },
})
export default class PassengerDetails extends Vue {}
</script>