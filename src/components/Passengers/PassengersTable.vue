<template>
  <DataTable
    class="p-datatable-responsive-demo"
    :value="passengers"
    :lazy="true"
    :paginator="true"
    :rows="10"
    :totalRecords="totalRecords"
    :loading="isLoading"
    @page="onPage($event)"
    @row-select="onRowSelect"
    selectionMode="single"
  >
    <Column field="name" header="Name">
      <template #body="slotProps">
        <span class="p-column-title">Name</span>
        {{ slotProps.data.name }}
      </template>
    </Column>
    <Column field="trips" header="Trips">
      <template #body="slotProps">
        <span class="p-column-title">Trips</span>
        {{ slotProps.data.trips }}
      </template>
    </Column>
    <Column field="airline.name" header="Airline">
      <template #body="slotProps">
        <span class="p-column-title">Airline</span>
        {{ slotProps.data.airline.name }}
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  computed: {
    isLoading() {
      return this.$store.getters["passengers/isLoading"];
    },
    passengers() {
      return this.$store.getters["passengers/passengers"];
    },
    totalRecords() {
      return this.$store.getters["passengers/totalRecords"];
    },
  },
  created() {
    this.loadPassengers();
  },
  methods: {
    async loadPassengers(page?: number) {
      await this.$store.dispatch("passengers/fetchPassengers", {
        page,
        size: 10,
      });
    },
    onPage(event: any) {
      this.loadPassengers(event.page);
    },
    onRowSelect(event: any) {
      this.$router.push(`/passenger/${event.data._id}`);
    },
  },
})
export default class PassengersTable extends Vue {}
</script>