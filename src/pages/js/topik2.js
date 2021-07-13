// import { mapActions } from "vuex";

export default {
  data() {
    return {
      showModal: false,
      showModal2: false,
      studentDataSession: {},
      // student_topik_menulis_paragraph: [],
      result_menulis: [],
      result_paragraph: [],
      konsep_parahraf: [],
      form: {
        kalimatSederhana: "",
      },
    };
  },
  mounted() {
    this.getStudentDataSesion();
  },
  computed: {},
  methods: {
    onSubmit() {
      if (this.form.kalimatSederhana === "") {
        alert("Tidak boleh kosong");
        return;
      }
      var arr = this.result_menulis.push({
        pramenulis: this.form.kalimatSederhana,
        menulis: "",
      });
      if (arr === []) {
        alert("can't save in array");
        return;
      }
      var topik = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
        studentId: this.studentDataSession.studentId,
        topicId: this.studentDataSession.topicId,
        studentActionsId: this.studentDataSession.id,
        resultMenulis: this.result_menulis,
        resultParagraph: this.result_paragraph,
        konsepParahraf: this.konsep_parahraf,
      };
      console.log(this.student_topik_menulis_paragrap);
      var convertToString = JSON.stringify(topik);
      sessionStorage.setItem(
        "student_topik_menulis_paragraph",
        convertToString
      );
      sessionStorage.removeItem("student_actions");
      this.$router.push("/pra-menulis");
    },
    getStudentDataSesion() {
      var studentData = sessionStorage.getItem("student_actions");
      this.studentDataSession = JSON.parse(studentData);
    },
  },
};
