import { mapGetters } from "vuex";

export default {
  name: "Pengorganisasian",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModalUbahPage3: false,
      showModalTambahPage3: false,
      pramenulisLanjutanDataSesion: {},
      dataForm: {
        tambahParagrafPage3: "",
        ubahParagrafPage3: "",
        resultMenulis: [],
        pilih: "",
      },
      memberiJarak: [],
      pengorganisasianPage1: true,
      pengorganisasianPage2: false,
      pengorganisasianPage3: false,
      pengorganisasianPage4: false,
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var pramenulisLanjutanData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.pramenulisLanjutanDataSesion = JSON.parse(pramenulisLanjutanData);
      if (this.pramenulisLanjutanDataSesion.konsepParagraf.length !== 0) {
        this.pramenulisLanjutanDataSesion.konsepParagraf = [];
        this.pramenulisLanjutanDataSesion.konsepParagrafArray = [];
        var toEmpetyArray = JSON.stringify(this.pramenulisLanjutanDataSesion);
        sessionStorage.setItem(
          "student_topik_menulis_paragraph",
          toEmpetyArray
        );
      }
    },
    ubahPramenulis() {
      if (this.dataForm.ubahParagrafPage3 === "") {
        alert("The data cannot be empty");
        return;
      }
      this.pramenulisLanjutanDataSesion.konsepParagrafArray[
        this.dataForm.pilih
      ] = this.dataForm.ubahParagrafPage3.replace(".", "");
      var saveDate2 = JSON.stringify(this.pramenulisLanjutanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", saveDate2);
      this.dataForm.ubahParagrafPage3 = "";
      this.showModalUbahPage3 = false;
    },
    tombolUbah() {
      var hasil = this.pramenulisLanjutanDataSesion.konsepParagrafArray[
        this.dataForm.pilih
      ];
      this.dataForm.ubahParagrafPage3 = hasil;
      this.showModalUbahPage3 = true;
    },
    tambahPramenulis() {
      if (this.pramenulisLanjutanDataSesion.konsepParagrafArray.length <= 5) {
        this.handleSubmit(this.dataForm.tambahParagrafPage3);
        this.showModalTambahPage3 = false;
        this.dataForm.tambahParagrafPage3 = "";
        return;
      } else {
        alert("Cannot add more than six lines");
        this.showModalTambahPage3 = false;
      }
    },
    handleSubmit(tambah) {
      this.pramenulisLanjutanDataSesion.konsepParagrafArray.push(
        tambah.replace(".", "")
      );
      var saveDate2 = JSON.stringify(this.pramenulisLanjutanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", saveDate2);
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    pengorganisasian1Next() {
      if (this.dataForm.resultMenulis.length === 0) {
        alert("The data cannot be empty. Please choose first");
        return;
      }
      for (var j = 0; j < this.dataForm.resultMenulis.length; j++) {
        this.pramenulisLanjutanDataSesion.konsepParagrafArray.push(
          this.dataForm.resultMenulis[j] // <-------- loop valid 1.1
        );
      }
      for (var k = 0; k < this.dataForm.resultMenulis.length; k++) {
        this.memberiJarak.push("\t" + this.dataForm.resultMenulis[k]);
      }
      this.pramenulisLanjutanDataSesion.konsepParagraf.push(
        this.formatToDot(this.memberiJarak) + "."
      );
      var savePage1 = JSON.stringify(this.pramenulisLanjutanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage1);
      this.pengorganisasianPage2 = true;

      if (this.pengorganisasianPage2 === true) {
        this.pengorganisasianPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    pengorganisasian2Next() {
      this.pengorganisasianPage3 = true;

      if (this.pengorganisasianPage3 === true) {
        this.pengorganisasianPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    pengorganisasian3Next() {
      this.dataForm.pilih = "";
      this.pengorganisasianPage4 = true;

      if (this.pengorganisasianPage4 === true) {
        this.pengorganisasianPage3 = false;
      } else {
        alert("{{ Internal Server Error to 3 }}, status:500;");
      }
    },
    pengorganisasian4Next() {
      this.$router.push("/menulis-kesimpulan");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
