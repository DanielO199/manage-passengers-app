<template>
  <div>{{ id }} {{ name }}</div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    id: String,
    name: String,
  },
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    console.log(this.$route, "XD");
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
  },
})
export default class PassengerDetails extends Vue {}
</script>