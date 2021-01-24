<template>
  <DataTable
    class="p-datatable-responsive-demo"
    :value="passengers"
    :lazy="true"
    :paginator="true"
    :rows="10"
    ref="dt"
    :totalRecords="totalRecords"
    :loading="isLoading"
    @page="onPage($event)"
    @row-select="onRowSelect"
    selectionMode="single"
  >
    <Column field="name" header="Name" ref="name" :sortable="false" />

    <Column field="trips" header="Trips" ref="country.name" :sortable="false" />

    <Column
      field="airline.name"
      header="Airline"
      ref="company"
      :sortable="false"
    />
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
    this.loadLazyData();
  },
  methods: {
    async loadLazyData(page?: any) {
      try {
        await this.$store.dispatch("passengers/fetchPassengers", {
          page,
          size: 10,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    onPage(event: any) {
      this.loadLazyData(event.page);
    },
    onRowSelect(event: any) {
      this.$router.push(`/passenger/${event.data._id}`);
    },
  },
})
export default class PassengersTable extends Vue {}
</script>