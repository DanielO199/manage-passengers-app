<template>
  <DataTable
    ref="dt"
    :value="airlines"
    v-model:selection="selectedProducts"
    dataKey="id"
    :paginator="true"
    :rows="10"
    :filters="filters"
  >
    <template #header>
      <div class="table-header">
        <h5 class="p-m-0">Manage Products</h5>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-model="filters['global']" placeholder="Search by name" />
        </span>
      </div>
    </template>

    <!-- <Column
      selectionMode="multiple"
      headerStyle="width: 3rem"
      :exportable="false"
    ></Column> -->
    <Column field="country" header="Country" :sortable="true"></Column>
    <Column field="name" header="Name" :sortable="true"></Column>
    <Column header="Image">
      <template #body="slotProps">
        <img
          :src="'demo/images/product/' + slotProps.data.image"
          :alt="slotProps.data.image"
          class="product-image"
        />
      </template>
    </Column>
    <Column field="website" header="Website" :sortable="true">
      <!-- <template #body="slotProps">
        {{ formatCurrency(slotProps.data.price) }}
      </template> -->
    </Column>
    <Column field="category" header="Category" :sortable="true"></Column>

    <Column field="inventoryStatus" header="Status" :sortable="true"> </Column>
    <Column :exportable="false">
      <template #body="slotProps">
        <Button
          icon="pi pi-pencil"
          class="p-button-rounded p-button-success p-mr-2"
          @click="editProduct(slotProps.data)"
        />
      </template>
    </Column>
  </DataTable>

  <Dialog
    v-model:visible="productDialog"
    :style="{ width: '450px' }"
    header="Product Details"
    :modal="true"
    class="p-fluid"
  >
    <img
      :src="'demo/images/product/' + product.image"
      :alt="product.image"
      class="product-image"
      v-if="product.image"
    />
    <div class="p-field">
      <label for="name">Name</label>
      <InputText
        id="name"
        v-model.trim="product.name"
        required="true"
        autofocus
        :class="{ 'p-invalid': submitted && !product.name }"
      />
      <small class="p-error" v-if="submitted && !product.name"
        >Name is required.</small
      >
    </div>
    <div class="p-field">
      <label for="description">Description</label>
    </div>

    <div class="p-field">
      <label class="p-mb-3">Category</label>
      <div class="p-formgrid p-grid">
        <div class="p-field-radiobutton p-col-6">
          <label for="category1">Accessories</label>
        </div>
        <div class="p-field-radiobutton p-col-6">
          <label for="category2">Clothing</label>
        </div>
        <div class="p-field-radiobutton p-col-6">
          <label for="category3">Electronics</label>
        </div>
        <div class="p-field-radiobutton p-col-6">
          <label for="category4">Fitness</label>
        </div>
      </div>
    </div>

    <div class="p-formgrid p-grid">
      <div class="p-field p-col">
        <label for="price">Price</label>
        <!-- <InputNumber
          id="price"
          v-model="product.price"
          mode="currency"
          currency="USD"
          locale="en-US"
        /> -->
      </div>
      <div class="p-field p-col">
        <label for="quantity">Quantity</label>
        <!-- <InputNumber id="quantity" v-model="product.quantity" integeronly /> -->
      </div>
    </div>
    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        class="p-button-text"
        @click="hideDialog"
      />
      <Button
        label="Save"
        icon="pi pi-check"
        class="p-button-text"
        @click="saveProduct"
      />
    </template>
  </Dialog>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  data() {
    return {
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      product: {},
      selectedProducts: null,
      filters: {},
      submitted: false,
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
      return this.$store.getters["airlines/isLoading"];
    },
    airlines() {
      return this.$store.getters["airlines/airlines"];
    },
  },

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
    editProduct(product: any) {
      this.product = { ...product };
      this.productDialog = true;
    },
    async loadLazyData(page?: any) {
      try {
        await this.$store.dispatch("airlines/fetchAirlines");
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
      // this.$router.push(`/passenger/${event.data._id}`);
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
export default class AirlinesTable extends Vue {}
</script>