import { mapActions } from "vuex";

export default {
  data() {
    return {
      paragraphTypes: [],
      studentDataSession: {},
      showModal: false
    };
  },
  mounted() {
    this.getAllParagraphTypes();
    this.getStudentDataSession();
  },
  computed: {
  },
  methods: {
    ...mapActions(["getParagraphTypesList"]),
    getStudentDataSession() {
      var studentData = sessionStorage.getItem("student_id_mulai-menulis")
      this.studentDataSession = JSON.parse(studentData)
    },
    getAllParagraphTypes() {
      const requestBody = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
      };
      this.getParagraphTypesList({
        requestBody,
        success: (res) => {
          res.map((paragraphTypes) => {
            console.log(this.paragraphTypes);
            this.paragraphTypes.push(paragraphTypes);
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
};
