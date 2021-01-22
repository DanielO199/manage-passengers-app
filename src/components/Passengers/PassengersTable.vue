<template>
  <DataTable
    class="p-datatable-responsive-demo"
    :value="passengers"
    :lazy="true"
    :paginator="true"
    :rows="10"
    :filters="filters"
    ref="dt"
    :totalRecords="totalRecords"
    :loading="isLoading"
    @page="onPage($event)"
    @sort="onSort($event)"
    @row-select="onRowSelect"
    v-model:selection="passenger"
    selectionMode="single"
  >
    <!-- <base-button link :to="coachDetailsLink"> -->
    <Column field="name" header="Name" ref="name" :sortable="false"> </Column>
    <!-- </base-button> -->
    <Column
      field="trips"
      header="Trips"
      filterField="country.name"
      filterMatchMode="contains"
      ref="country.name"
      :sortable="false"
    >
    </Column>
    <Column
      field="airline.name"
      header="Airline"
      filterMatchMode="contains"
      ref="company"
      :sortable="false"
    >
    </Column>
    <Column
      field="representative.name"
      header="Representative"
      filterField="representative.name"
      ref="representative.name"
      :sortable="false"
    >
    </Column>
  </DataTable>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  data() {
    return {
      // totalRecords: 20,
      passenger: null,
      lazyParams: {},
      columns: [
        { field: "name", header: "Name" },
        { field: "trips", header: "Trips" },
        { field: "company", header: "Company" },
        { field: "representative.name", header: "Representative" },
      ],
    };
  },
  // props: {
  //   // passengers: Array,
  //   totalRecords: Number,
  // },
  components: {
    HelloWorld,
  },
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
    coachDetailsLink() {
      return this.$route.path + "/" + "123123213ds"; // /coaches/c1
    },
  },
  customerService: null,

  mounted() {
    this.lazyParams = {
      first: 0,
      rows: this.$refs.dt.rows,
      sortField: null,
      sortOrder: null,
      filters: this.filters,
    };

    // this.loadLazyData();
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
      console.log(event);
      this.$router.push(`/passenger/${event.data._id}`);
      // this.$router.push({
      //   name: "passenger",
      //   params: { id: event.data._id },
      // });
    },
    onSort(event: any) {
      this.lazyParams = event;
      this.loadLazyData();
    },
    onFilter(event: any) {
      if (event.keyCode === 13) {
        this.loading = true;
        this.lazyParams.filters = this.filters;
        this.loadLazyData();
      }
    },
  },
})
export default class PassengersTable extends Vue {
  // get isLoading() {
  //   return this.$store.getters["passengers/isLoading"];
  // }
  // get passengers() {
  //   return this.$store.getters["passengers/passengers"];
  // }
  // get totalRecords() {
  //   return this.$store.getters["passengers/totalRecords"];
  // }
}
</script>

<style lang="scss" scoped>
</style>