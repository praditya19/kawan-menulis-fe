import { mapGetters, mapActions } from "vuex";

export default {
  name: "tutor",
  data() {
    return {
      peoples: [],
    };
  },
  mounted() {
    this.getAllTutor();
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters(["isMobile", "kmClientId", "kmClientSecret"]),
  },
  methods: {
    ...mapActions(["getTutorList"]),
    getAllTutor() {
      const requestBody = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
      };
      this.getTutorList({
        requestBody,
        success: (res) => {
          res.map((tutor) => {
            this.peoples.push(tutor);
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
};
