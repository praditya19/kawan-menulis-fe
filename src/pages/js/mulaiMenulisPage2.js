import { mapGetters } from "vuex";

export default {
  name: "mulaiMenulisPage2",
  data() {
    return {
      types: ["text", "email", "text", "number"],
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
