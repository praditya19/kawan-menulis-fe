import { mapGetters, mapActions } from "vuex";

export default {
  name: "topic",
  data() {
    return {
      topics: [],
    };
  },
  mounted() {
    this.getAllTopics();
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  methods: {
    ...mapActions(["getTopicsList"]),
    getAllTopics() {
      const requestBody = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
      };
      this.getTopicsList({
        requestBody,
        success: (res) => {
          res.map((topics) => {
            console.log(this.topics);
            this.topics.push(topics);
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
};
