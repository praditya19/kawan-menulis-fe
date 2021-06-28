import { mapGetters } from "vuex";

export default {
  name: "diagnostis",
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
