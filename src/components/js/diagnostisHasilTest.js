import { mapActions } from "vuex";

export default {
  data() {
    return {
      clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
      clientSecret: "27e78980e2419b308c86559ef0fb0105",
      studentResultSession: {},
      studentDiagnostikSession: {},
    };
  },
  mounted() {
    this.getStudentResultSession();
    this.getStudentDiagnostikSession();
    window.scrollTo(0, 0);
  },
  computed: {},
  methods: {
    getStudentResultSession() {
      var studentResult = sessionStorage.getItem("result_student");
      this.studentResultSession = JSON.parse(studentResult);
    },
    getStudentDiagnostikSession() {
      var studentDiagnostik = sessionStorage.getItem(
        "student_diagnostis-data-diri"
      );
      this.studentDiagnostikSession = JSON.parse(studentDiagnostik);
    },
    ...mapActions(["sendEmail"]),
    handleSubmit() {
      this.sendEmail({
        requestBody: {
          clientId: this.clientId,
          clientSecret: this.clientSecret,
          studentId: this.studentDiagnostikSession[0].id,
          scoreId: this.studentResultSession.id,
          actualScore: this.studentResultSession.endScore,
        },
        success: (res) => {
          console.log(res);
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
};
