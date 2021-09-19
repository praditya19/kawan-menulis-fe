import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  name: "PraMenulis",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      topicDataSesion: {},
      dataForm: {
        menulisPage1: "",
        menulisPage2: "",
        menulisPage3: "",
        menulisPage4: "",
        menulisPage5: "",
      },
      pramenulisPage1: true,
      pramenulisPage2: false,
      pramenulisPage3: false,
      pramenulisPage4: false,
      pramenulisPage5: false,
      pramenulisPage6: false,
      jenisTopics: {},

      //db
      pramenulisGuides: {},
    };
  },
  mounted() {
    this.getDataSesion();
    this.getDataJenisTopics();
    this.getDataPramenulisGuidesList();
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var topicData = localStorage.getItem("student_topik_menulis_paragraph");
      this.topicDataSesion = JSON.parse(topicData);
      if (this.topicDataSesion.resultMenulis[1] !== undefined) {
        this.topicDataSesion.resultMenulis.splice(1, 1);
        this.topicDataSesion.resultMenulis.splice(1, 1);
        this.topicDataSesion.resultMenulis.splice(1, 1);
        this.topicDataSesion.resultMenulis.splice(1, 1);
        this.topicDataSesion.resultMenulis.splice(1, 1);
      }
      const is2 = JSON.stringify(this.topicDataSesion);
      localStorage.setItem("student_topik_menulis_paragraph", is2);
    },
    ...mapActions(["getTopicGuidesList"]),
    getDataPramenulisGuidesList() {
      this.getTopicGuidesList({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          topicId: this.topicDataSesion.topicId,
          writingStepId: 36,
        },
        success: (res) => {
          this.pramenulisGuides = res;
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
    pramenulis1Next() {
      if (this.dataForm.menulisPage1 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      if (this.pramenulisGuides[1] === undefined) {
        this.topicDataSesion.resultMenulis.push({
          pramenulis: this.dataForm.menulisPage1,
          menulis: "",
        });
        this.pramenulisPage6 = true;
        window.scrollTo(0, 0);
        this.pramenulisPage1 = false;
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage1,
        menulis: "",
      });
      this.pramenulisPage2 = true;
      if (this.pramenulisPage2 === true) {
        window.scrollTo(0, 0);
        this.pramenulisPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    pramenulis2Next() {
      if (this.dataForm.menulisPage2 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      if (this.pramenulisGuides[2] === undefined) {
        this.topicDataSesion.resultMenulis.push({
          pramenulis: this.dataForm.menulisPage2,
          menulis: "",
        });
        this.pramenulisPage6 = true;
        window.scrollTo(0, 0);
        this.pramenulisPage2 = false;
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage2,
        menulis: "",
      });
      this.pramenulisPage3 = true;
      if (this.pramenulisPage3 === true) {
        window.scrollTo(0, 0);
        this.pramenulisPage2 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    pramenulis3Next() {
      if (this.dataForm.menulisPage3 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      if (this.pramenulisGuides[3] === undefined) {
        this.topicDataSesion.resultMenulis.push({
          pramenulis: this.dataForm.menulisPage3,
          menulis: "",
        });
        this.pramenulisPage6 = true;
        window.scrollTo(0, 0);
        this.pramenulisPage3 = false;
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage3,
        menulis: "",
      });
      this.pramenulisPage4 = true;
      if (this.pramenulisPage4 === true) {
        window.scrollTo(0, 0);
        this.pramenulisPage3 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 3 }}, status:500;");
      }
    },
    pramenulis4Next() {
      if (this.dataForm.menulisPage4 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      if (this.pramenulisGuides[4] === undefined) {
        this.topicDataSesion.resultMenulis.push({
          pramenulis: this.dataForm.menulisPage4,
          menulis: "",
        });
        this.pramenulisPage6 = true;
        window.scrollTo(0, 0);
        this.pramenulisPage4 = false;
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage4,
        menulis: "",
      });
      this.pramenulisPage5 = true;
      if (this.pramenulisPage5 === true) {
        window.scrollTo(0, 0);
        this.pramenulisPage4 = false;
      } else {
        alert("{{ Internal Server Error to 4 }}, status:500;");
      }
    },
    pramenulis5Next() {
      if (this.dataForm.menulisPage5 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage5,
        menulis: "",
      });
      this.pramenulisPage6 = true;
      if (this.pramenulisPage5 === true) {
        window.scrollTo(0, 0);
        this.pramenulisPage5 = false;
      } else {
        alert("{{ Internal Server Error to 5 }}, status:500;");
      }
    },
    pramenulis6Next() {
      var savePage4 = JSON.stringify(this.topicDataSesion);
      localStorage.setItem("student_topik_menulis_paragraph", savePage4);
      this.$router.push("/kalimat-utama");
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
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
