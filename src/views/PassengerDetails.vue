<template>
  <div v-if="!isLoading">{{ passenger?.name }}</div>
  <div></div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    id: String,
  },
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.fetchPassenger();
  },
  methods: {
    async fetchPassenger() {
      const id = this.id;
      await this.$store.dispatch("passengers/fetchPassenger", id);
    },
  },
  computed: {
    //   fullName() {
    //     return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    //   },
    //   areas() {
    //     return this.selectedCoach.areas;
    //   },
    //   rate() {
    //     return this.selectedCoach.hourlyRate;
    //   },
    //   description() {
    //     return this.selectedCoach.description;
    //   },
    //   contactLink() {
    //     return this.$route.path + "/" + this.id + "/contact";
    //   },
    passenger() {
      // console.log(this.$store.getters["passengers/passenger"]);
      return this.$store.getters["passengers/passenger"];
    },
  },
})
export default class PassengerDetails extends Vue {
  get isLoading() {
    return this.$store.getters["passengers/isLoading"];
  }
  // get passenger() {
  //   return this.$store.getters["passengers/passenger"];
  // }
}
</script>