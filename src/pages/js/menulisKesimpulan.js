import { mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  name: "MenulisKesimpulan",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModalErrorEmpety: false,
      dataForm: {
        menulis: "",
      },
      menuliskesimpulanPage1: true,
      menuliskesimpulanPage2: false,
      menuliskesimpulanPage3: false,

      // Data Sesion
      dataSesion: {},
      jenisTopics: {},
      studentDataSession: {},
      topicGuides: {},
    };
  },
  mounted() {
    this.getDataSesion();
    this.getDataJenisTopics();
    this.getStudentDataSesion();
    this.getDataMenulisKesimpulancGuidesList();
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var pramenulisLanjutanData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.dataSesion = JSON.parse(pramenulisLanjutanData);
    },
    formatToDot(value) {
      return value.replace(".", "");
    },
    menuliskesimpulan1Next() {
      this.menuliskesimpulanPage2 = true;
      if (this.menuliskesimpulanPage2 === true) {
        this.menuliskesimpulanPage1 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    menuliskesimpulan2Next() {
      this.menuliskesimpulanPage3 = true;
      this.dataSesion.konsepParagraf = [];
      var empety = JSON.stringify(this.dataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", empety);
      if (this.menuliskesimpulanPage3 === true) {
        this.menuliskesimpulanPage2 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    menuliskesimpulan3Next() {
      if (this.dataForm.menulis === "") {
        this.showModalErrorEmpety = true;
        return;
      }
      this.dataSesion.konsepParagrafArray.push(
        this.formatToDot(this.dataForm.menulis)
      );
      this.dataSesion.konsepParagraf.push(
        this.dataSesion.konsepParagrafArray.join(". ") + "."
      );
      this.dataSesion.menulisKesimpulan.push(this.dataForm.menulis);
      var end = JSON.stringify(this.dataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", end);
      this.$router.push("/revisi");
    },
    getDataJenisTopics() {
      var jenisTopic = sessionStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
    },
    getStudentDataSesion() {
      var studentData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.studentDataSession = JSON.parse(studentData);
    },
    ...mapActions(["getTopicGuidesList"]),
    getDataMenulisKesimpulancGuidesList() {
      this.getTopicGuidesList({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          topicId: this.studentDataSession.topicId,
          writingStepId: 41,
        },
        success: (res) => {
          this.topicGuides = res;
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
  created() {
    var msg = "Any thing which u want";
    window.history.pushState({ html: msg, pageTitle: "AnyThing" }, "");
    window.onpopstate = function() {
      Swal.fire({
        title: "Apa kamu yakin ingin kembali?",
        text: "semua yang anda masukkan di tahapan ini akan hilang. Yakin kembali?",
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
  computed: {},
};
