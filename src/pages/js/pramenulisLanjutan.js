import { mapGetters } from "vuex";

export default {
  name: "PramenulisLanjutan",
  data() {
    return {
      showModal: false,
      showModal2: false,
      dataForm: {
        tambahPramenulis: "",
        pramenulisLanjutan: "",
        pramenulisLanjutanPembaruan: "",
      },
      kalimatUtamaDataSesion: {},
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var kalimatUtamaData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.kalimatUtamaDataSesion = JSON.parse(kalimatUtamaData);
    },
    upCatatanMenulis() {
      if (this.dataForm.pramenulisLanjutanPembaruan === "") {
        alert("error input");
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
      window.location.reload();
    },
    toMenulisIsi() {
      this.validasiTitik(this.kalimatUtamaDataSesion.resultMenulis);
      this.$router.replace("/menulis-isi");
    },

    handleOk() {
      if (this.dataForm.tambahPramenulis === "") {
        alert("Form is not vailid");
      } else if (this.dataForm.tambahPramenulis.length >= 60) {
        alert("Maximal 60 Characters");
      } else {
        if (this.kalimatUtamaDataSesion.resultMenulis.length <= 5) {
          this.handleSubmit(this.dataForm.tambahPramenulis);
          this.dataForm.tambahPramenulis = "";
        } else {
          alert("Cannot add more than six lines");
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
        } else if (
          valid[i].pramenulis.substr(valid[i].pramenulis.length - 1) === ","
        ) {
          valid[i].pramenulis = valid[i].pramenulis.replace(",", "");
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
      this.howModal = false;
      window.location.reload();
    },
    modal2() {
      var bbb = this.kalimatUtamaDataSesion.resultMenulis[
        this.dataForm.pramenulisLanjutan
      ];
      this.dataForm.pramenulisLanjutanPembaruan = bbb.pramenulis;
      this.showModal2 = true;
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
