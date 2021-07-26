import { mapGetters } from "vuex";

export default {
  name: "Pengorganisasian",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModalError: false,
      showModalUbahPage3: false,
      showModalTambahPage3: false,
      showModalErrorEmpety: false,
      pramenulisLanjutanDataSesion: {},
      dataForm: {
        tambahParagrafPage3: "",
        ubahParagrafPage3: "",
        resultMenulis: "",
        resultMenulis1: "",
        pilih: "",
      },
      pengorganisasianPage1: true,
      pengorganisasianPage2: false,
      pengorganisasianPage3: false,
      pengorganisasianPage4: false,
      jenisTopics: {},
    };
  },
  mounted() {
    this.getDataSesion();
    this.getDataJenisTopics();
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var pramenulisLanjutanData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.pramenulisLanjutanDataSesion = JSON.parse(pramenulisLanjutanData);
      this.pramenulisLanjutanDataSesion.konsepParagraf = [];
      this.pramenulisLanjutanDataSesion.konsepParagrafArray = [];
      var sv = JSON.stringify(this.pramenulisLanjutanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", sv);
    },
    descending() {
      // <----- To Down
      if (this.dataForm.resultMenulis.length !== 0) {
        var instance = this.pramenulisLanjutanDataSesion.resultMenulis[
          this.dataForm.resultMenulis
        ].pramenulis;
        this.pramenulisLanjutanDataSesion.resultParagraph.push(instance);
        this.pramenulisLanjutanDataSesion.resultMenulis.splice(
          this.dataForm.resultMenulis,
          1
        );
        var descendingSv = JSON.stringify(this.pramenulisLanjutanDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", descendingSv); // <-----  everything will be fine
        this.dataForm.resultMenulis = "";
      } else {
        alert("Silahkan memilih terlebih dahulu");
      }
    },
    ascending() {
      // <------ To Up
      if (this.dataForm.resultMenulis1.length !== 0) {
        var instance = this.pramenulisLanjutanDataSesion.resultParagraph[
          this.dataForm.resultMenulis1
        ];
        this.pramenulisLanjutanDataSesion.resultMenulis.push({
          pramenulis: instance,
          menulis: "",
        });
        this.pramenulisLanjutanDataSesion.resultParagraph.splice(
          this.dataForm.resultMenulis1,
          1
        );
        var ascendingSv = JSON.stringify(this.pramenulisLanjutanDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", ascendingSv); // <-----  everything will be fine
        this.dataForm.resultMenulis1 = "";
      } else {
        alert("Harus memilih terlebih dahulu");
      }
    },
    ubahPramenulis() {
      if (this.dataForm.ubahParagrafPage3 === "") {
        alert("Form tidak boleh kosong");
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
      if (this.dataForm.tambahParagrafPage3 === "") {
        alert("Form tidak boleh kosong");
        return;
      }
      if (this.pramenulisLanjutanDataSesion.konsepParagrafArray.length < 10) {
        this.handleSubmit(this.dataForm.tambahParagrafPage3);
        this.showModalTambahPage3 = false;
        this.dataForm.tambahParagrafPage3 = "";
        return;
      } else {
        this.showModalTambahPage3 = false;
        this.showModalError = true;
        this.dataForm.tambahParagrafPage3 = "";
      }
    },
    handleSubmit(tambah) {
      this.pramenulisLanjutanDataSesion.konsepParagrafArray.push(
        tambah.replace(".", "")
      );
      var saveDate2 = JSON.stringify(this.pramenulisLanjutanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", saveDate2);
    },
    pengorganisasian1Next() {
      if (this.pramenulisLanjutanDataSesion.resultParagraph.length < 1) {
        this.showModalErrorEmpety = true;
        return;
      }
      this.pramenulisLanjutanDataSesion.konsepParagrafArray.push(
        this.pramenulisLanjutanDataSesion.resultParagraphKalimatUtama[1].replace(
          ".",
          ""
        )
      );
      for (
        var j = 0;
        j < this.pramenulisLanjutanDataSesion.resultParagraph.length;
        j++
      ) {
        this.pramenulisLanjutanDataSesion.konsepParagrafArray.push(
          this.pramenulisLanjutanDataSesion.resultParagraph[j] // <-------- loop valid 1.1
        );
      }
      this.pramenulisLanjutanDataSesion.konsepParagraf.push(
        this.pramenulisLanjutanDataSesion.konsepParagrafArray.join(". ") + "."
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
    getDataJenisTopics() {
      var jenisTopic = sessionStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
