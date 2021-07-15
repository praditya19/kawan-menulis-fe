import { mapActions } from "vuex";

export default {
  data() {
    return {
      paragraphTypes: [],
      topicsTypes: [],
      studentDataSession: {},
      showModal: false,
      topicsSelect: "",
      paragraphSelect: "",
    };
  },

  mounted() {
    this.getAllParagraphTypes();
    this.getStudentDataSession();
  },

  computed: {},

  watch: {
    paragraphSelect: function(id) {
      this.getTopics(id);
      console.log("paragraph id", id);
    },
    topicsSelect: function(idTopic) {
      console.log("topics id", idTopic);
      return idTopic;
    },
  },
  methods: {
    ...mapActions(["getParagraphTypesList"]),
    getStudentDataSession() {
      var studentData = sessionStorage.getItem("student_id_mulai-menulis");
      this.studentDataSession = JSON.parse(studentData);
    },
    getTopics(topicId) {
      const requestBody = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
      };
      this.getParagraphTypesList({
        requestBody,
        success: (res) => {
          res.map((paragraphTypes) => {
            if (paragraphTypes.id === topicId) {
              this.topicsTypes = paragraphTypes.topics;
            }
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    async getAllParagraphTypes() {
      const requestBody = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
      };
      await this.getParagraphTypesList({
        requestBody,
        success: (res) => {
          res.map((paragraphTypes) => {
            if (paragraphTypes.topics.length !== 0) {
              this.paragraphTypes.push(paragraphTypes);
            }
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },

    ...mapActions(["createStudentsActions"]),
    async handlesubmit() {
      await this.createStudentsActions({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          studentId: this.studentDataSession.id,
          topicId: this.topicsSelect,
        },
        success: (res) => {
          console.log(res);
          sessionStorage.setItem(
            "student_actions",
            JSON.stringify(res.body.studentAction)
          );
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
};