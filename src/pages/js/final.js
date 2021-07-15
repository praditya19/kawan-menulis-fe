import { mapGetters } from "vuex";

export default {
  name: "final",
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
