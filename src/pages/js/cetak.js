import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cetak",
  data() {
    return {
      clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
      clientSecret: "27e78980e2419b308c86559ef0fb0105",
      studentActionsSession: {},
      proFeridingDataSesion: {},
      dataForm: {
        menulis: "",
      },
      showModalCopy: false,
      copy: "",
      jenisTopics: {},
      dataStudent: {},

      // Send email is Succes
      showModalSendEmailSucces: false,

      // Send Email Error
      erorSend: false,
    };
  },
  mounted() {
    this.getStudentCetak();
    this.getDataSesion();
    this.getStudentAction();
    this.getDataJenisTopics();
    console.log(this.dataStudent);
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var proFreadingData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.proFeridingDataSesion = JSON.parse(proFreadingData);
      this.copy =
        this.proFeridingDataSesion.konsepParagrafArray.join(". ") + ".";
    },
    toTopik() {
      this.$router.push("/topik");
    },
    copyToClipBoard() {
      var copy = this.copy;
      const el = document.createElement("textarea");
      el.value = copy;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      this.showModalCopy = true;
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
    getStudentAction() {
      var studentActions = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.studentActionsSession = JSON.parse(studentActions);
    },
    ...mapActions(["sendEmailCetak"]),
    handleSubmitCetak() {
      this.sendEmailCetak({
        requestBody: {
          clientId: this.clientId,
          clientSecret: this.clientSecret,
          studentId: this.studentActionsSession.studentId,
          topicId: this.studentActionsSession.topicId,
        },
        success: (res) => {
          if (res.body.sendEmai === "success") {
            this.showModalSendEmailSucces = true;
          } else {
            this.erorSend = true;
          }
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    getDataJenisTopics() {
      var jenisTopic = sessionStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
    },
    getStudentCetak() {
      var student = sessionStorage.getItem("student_id_mulaimenulis");
      this.dataStudent = JSON.parse(student);
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
