import { mapActions } from "vuex";

export default {
  data() {
    return {
      showModal: false,
      showModal2: false,
      studentDataSession: {},
      result_menulis: [],
      result_paragraph_kalimat_utama: [],
      result_paragraph: [],
      konsep_paragrafToString: [],
      konsep_paragraf_array: [],
      menulis_kesimpulan: [],
      form: {
        kalimatSederhana: "",
      },
      topicGuides: {},
      jenisTopics: {},
    };
  },
  mounted() {
    this.getStudentDataSesion();
    this.getDataTopicGuidesList();
    this.getDataJenisTopics();
    window.scrollTo(0, 0);
  },
  methods: {
    onSubmit() {
      if (this.form.kalimatSederhana === "") {
        alert("Tidak boleh kosong");
        return;
      }
      this.result_menulis = [];
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
        resultParagraphKalimatUtama: this.result_paragraph_kalimat_utama,
        konsepParagraf: this.konsep_paragrafToString,
        konsepParagrafArray: this.konsep_paragraf_array,
        menulisKesimpulan: this.menulis_kesimpulan,
      };
      console.log(this.student_topik_menulis_paragrap);
      var convertToString = JSON.stringify(topik);
      localStorage.setItem(
        "student_topik_menulis_paragraph",
        convertToString
      );
      // localStorage.removeItem("student_actions");
      this.$router.push("/pra-menulis");
    },
    getStudentDataSesion() {
      var studentData = localStorage.getItem("student_actions");
      this.studentDataSession = JSON.parse(studentData);
    },
    ...mapActions(["getTopicGuidesList"]),
    getDataTopicGuidesList() {
      this.getTopicGuidesList({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          topicId: this.studentDataSession.topicId,
          writingStepId: 35,
        },
        success: (res) => {
          this.topicGuides = res;
        },

        fail: (res) => {
          console.log(res);
        },
      });
    },
    getDataJenisTopics() {
      var jenisTopic = localStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
    },
  },
};
