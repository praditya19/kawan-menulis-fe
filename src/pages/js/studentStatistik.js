import { mapGetters } from "vuex";

export default {
  name: "StudentStatistik",
  data() {
    return {
      statistik: false,
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  mounted() {
    let studentId = this.$route.params.studentId;
    let nim = this.$route.params.nim;
    console.log(studentId, nim);
    window.scrollTo(0, 0);
  },
};
