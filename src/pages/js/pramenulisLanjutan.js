import { mapGetters, mapActions } from "vuex";

export default {
  name: "PramenulisLanjutan",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal1: false,
      dataForm: {
        tambahPramenulis: "",
        pramenulisLanjutan: "",
        pramenulisLanjutanPembaruan: "",
      },
      kalimatUtamaDataSesion: {},
      jenisTopics: {},
    };
  },
  mounted() {
    this.getDataSesion();
    this.getDataJenisTopics();
    this.getDataPramenulisLanjutanGuidesList();
    window.scrollTo(0, 0);
  },
  methods: {
    // coba button
    buttonActiveSalin1() {},
    // end
    getDataSesion() {
      var kalimatUtamaData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.kalimatUtamaDataSesion = JSON.parse(kalimatUtamaData);
    },
    ...mapActions(["getTopicGuidesList"]),
    getDataPramenulisLanjutanGuidesList() {
      this.getTopicGuidesList({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          // topicId: this.kalimatUtamaDataSesion.topicId,
          writingStepId: 38,
        },
        success: (res) => {
          console.log(res.data);
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    upCatatanMenulis() {
      if (this.dataForm.pramenulisLanjutanPembaruan === "") {
        alert("Form tidak boleh kosong");
        return (this.showModal2 = false);
      }
      this.kalimatUtamaDataSesion.resultMenulis[
        this.dataForm.pramenulisLanjutan
      ] = {
        pramenulis: this.dataForm.pramenulisLanjutanPembaruan,
        menulis: "",
      };
      var saveDate = JSON.stringify(this.kalimatUtamaDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", saveDate);
      this.showModal2 = false;
    },
    toMenulisIsi() {
      this.validasiTitik(this.kalimatUtamaDataSesion.resultMenulis);
      this.$router.replace("/menulis-isi");
    },

    handleOk() {
      if (this.dataForm.tambahPramenulis === "") {
        alert("Form harus di isi");
      } else if (this.dataForm.tambahPramenulis.length >= 60) {
        alert("Maksimal 60 Kosa kata");
      } else {
        if (this.kalimatUtamaDataSesion.resultMenulis.length < 10) {
          this.handleSubmit(this.dataForm.tambahPramenulis);
          this.dataForm.tambahPramenulis = "";
        } else {
          alert("Maksimal menambahkan 10 item");
          this.showModal = false;
          this.dataForm.tambahPramenulis = "";
          return;
        }
      }
    },
    validasiTitik(valid) {
      for (var i = 0; i < valid.length; i++) {
        if (
          valid[i].pramenulis.substr(valid[i].pramenulis.length - 1) === "."
        ) {
          valid[i].pramenulis = valid[i].pramenulis.replace(".", "");
        } else if (
          valid[i].pramenulis.substr(valid[i].pramenulis.length - 1) === "?"
        ) {
          valid[i].pramenulis = valid[i].pramenulis.replace("?", "");
        } else if (
          valid[i].pramenulis.substr(valid[i].pramenulis.length - 1) === "!"
        ) {
          valid[i].pramenulis = valid[i].pramenulis.replace("!", "");
        }
      }
      var benar = JSON.stringify(this.kalimatUtamaDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", benar);
    },
    handleSubmit(tambah) {
      this.kalimatUtamaDataSesion.resultMenulis.push({
        pramenulis: tambah,
        menulis: "",
      });
      var saveDate2 = JSON.stringify(this.kalimatUtamaDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", saveDate2);
      this.showModal = false;
    },
    modal2() {
      var bbb = this.kalimatUtamaDataSesion.resultMenulis[
        this.dataForm.pramenulisLanjutan
      ];
      this.dataForm.pramenulisLanjutanPembaruan = bbb.pramenulis;
      this.showModal2 = true;
    },
    getDataJenisTopics() {
      var jenisTopic = sessionStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
