import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";

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
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var proFreadingData = localStorage.getItem(
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
      var studentActions = localStorage.getItem(
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
        success: () => {
          this.showModalSendEmailSucces = true;
        },
        fail: () => {
          this.erorSend = true;
        },
      });
    },
    getDataJenisTopics() {
      var jenisTopic = localStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
    },
    getStudentCetak() {
      var student = localStorage.getItem("student_id_mulaimenulis");
      this.dataStudent = JSON.parse(student);
    },
  },
  created() {
    var msg = "Any thing which u want";
    window.history.pushState({ html: msg, pageTitle: "AnyThing" }, "");
    window.onpopstate = function() {
      Swal.fire({
        title: "Apa kamu yakin ingin kembali?",
        text:
          "semua yang anda masukkan di tahapan ini akan hilang. Yakin kembali?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.close();
          this.history.go(-1);
          setTimeout(function() {
            Swal.close();
          }, 10);
          setTimeout(function() {
            window.location.reload();
          }, 10);
        } else {
          this.history.forward();
          setTimeout(function() {
            Swal.close();
          }, 50);
        }
      });
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
