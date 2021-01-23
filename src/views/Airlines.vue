<template>
  <AirlinesTable />
</template>

<script>
import { Options, Vue } from "vue-class-component";

import AirlinesTable from "@/components/AirlinesTable";

@Options({
  components: { AirlinesTable },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters["passengers/isPassenger"];
    },
    hasPassengers() {
      return !this.isLoading && this.$store.getters["passengers/hasPassengers"];
    },
  },
  created() {
    this.fetchPassengers();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async fetchPassengers() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("passengers/fetchPassengers");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
})
export default class Airlines extends Vue {
  // get passengers() {
  //   console.log(this.$store.getters["passengers/passengers"]);
  //   return this.$store.getters["passengers/passengers"];
  // }
}
</script>

<style scoped>
</style>