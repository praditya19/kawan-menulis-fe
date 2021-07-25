import { mapGetters } from "vuex";

export default {
  name: "mulaiMenulis",
  computed: {
    ...mapGetters(["isMobile"]),
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    mulaiMenulisPage2() {
      this.$router.replace("/mulai-menulis-page-2");
    },
  },
};
