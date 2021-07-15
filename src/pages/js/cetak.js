import { mapGetters } from "vuex";

export default {
  name: "Cetak",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
