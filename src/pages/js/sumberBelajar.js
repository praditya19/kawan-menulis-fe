import { mapGetters, mapActions } from "vuex";

export default {
  name: "sumberBelajar",
  data() {
    return {
      learning: [],
    };
  },
  mounted() {
    this.getAllLearning();
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  methods: {
    ...mapActions(["getLearningSourcesList"]),
    getAllLearning() {
      const requestBody = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
      };
      this.getLearningSourcesList({
        requestBody,
        success: (res) => {
          res.learningSources.map((learning) => {
            this.learning.push(learning);
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
};
