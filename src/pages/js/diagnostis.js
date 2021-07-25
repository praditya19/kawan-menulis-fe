import { mapGetters } from "vuex";

export default {
  name: "diagnostis",
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
