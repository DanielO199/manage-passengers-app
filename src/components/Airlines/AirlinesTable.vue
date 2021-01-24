<template>
  <DataTable
    class="p-datatable-responsive-demo"
    :value="airlines"
    :paginator="true"
    :rows="10"
    :loading="isLoading"
    :filters="filters"
  >
    <template #header>
      <div class="search-wrapper">
        <div class="p-m-0">Manage airlines</div>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-model="filters['global']" placeholder="Search..." />
        </span>
      </div>
    </template>
    <Column header="Logo" field="logo">
      <template #body="slotProps">
        <span class="p-column-title">Logo</span>
        <img
          :src="slotProps.data.logo"
          :alt="slotProps.data.name"
          class="airline-image"
        />
      </template>
    </Column>
    <Column field="name" header="Name" :sortable="true">
      <template #body="slotProps">
        <span class="p-column-title">Name</span>
        {{ slotProps.data.name }}
      </template>
    </Column>
    <Column field="country" header="Country" :sortable="true">
      <template #body="slotProps">
        <span class="p-column-title">Country</span>
        {{ slotProps.data.country }}
      </template>
    </Column>

    <Column header="Details">
      <template #body="slotProps">
        <span class="p-column-title">Details</span>
        <Button
          icon="pi pi-eye"
          class="p-button-rounded p-button-success p-mr-2"
          @click="openDialog(slotProps.data)"
        />
      </template>
    </Column>
  </DataTable>

  <AirlineDialog
    @close-dialog="closeDialog"
    :isDialogOpen="isDialogOpen"
    :airline="airline"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AirlineDialog from "./AirlineDialog.vue";

@Options({
  components: { AirlineDialog },
  data() {
    return {
      isDialogOpen: false,
      airline: {},
      filters: {},
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters["airlines/isLoading"];
    },
    airlines() {
      return this.$store.getters["airlines/airlines"];
    },
  },
  async created() {
    await this.$store.dispatch("airlines/fetchAirlines");
  },
  methods: {
    closeDialog() {
      this.isDialogOpen = false;
    },
    openDialog(airline: any) {
      this.airline = { ...airline };
      this.isDialogOpen = true;
    },
  },
})
export default class AirlinesTable extends Vue {}
</script>