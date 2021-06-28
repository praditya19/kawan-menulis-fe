import { mapGetters } from "vuex";

export default {
  name: "sumberBelajar",
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
