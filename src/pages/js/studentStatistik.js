// import { mapGetters, mapActions } from "vuex";

export default {
  name: "StudentStatistik",
  data() {
    return {};
  },
  mounted() {
    let nim = this.$route.params.nim
    let studentId =  this.$route.params.studentId
    alert(nim + " | " + studentId)
    window.scrollTo(0, 0);
  },
  methods: {},
  computed: {},
};
