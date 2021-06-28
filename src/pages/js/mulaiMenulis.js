import { mapGetters } from "vuex";

export default {
  name: "mulaiMenulis",
  computed: {
    ...mapGetters(["isMobile"]),
  },
  methods: {
    mulaiMenulisPage2() {
      this.$router.replace("/mulai-menulis-page-2");
    },
  },
};
