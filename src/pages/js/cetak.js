import { mapGetters } from "vuex";

export default {
  name: "Cetak",
  data() {
    return {
      proFeridingDataSesion: {},
    };
  },
  mounted() {
    this.getDataSesion();
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var proFreadingData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.proFeridingDataSesion = JSON.parse(proFreadingData);
    },
    toTopik() {
      this.$router.push("/topik");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
