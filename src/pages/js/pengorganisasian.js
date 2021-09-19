import { mapGetters } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";

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
      catatanMenulis: [],
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
      var pramenulisLanjutanData = localStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.pramenulisLanjutanDataSesion = JSON.parse(pramenulisLanjutanData);
      this.pramenulisLanjutanDataSesion.resultParagraph = [];
      this.pramenulisLanjutanDataSesion.konsepParagraf = [];
      this.pramenulisLanjutanDataSesion.konsepParagrafArray = [];
      for (
        let i = 0;
        i < this.pramenulisLanjutanDataSesion.resultMenulis.length;
        i++
      ) {
        if (this.pramenulisLanjutanDataSesion.resultMenulis[i].menulis !== "") {
          this.catatanMenulis.push(
            this.pramenulisLanjutanDataSesion.resultMenulis[i].menulis.replace(
              ".",
              ""
            )
          );
        }
      }
      var sv = JSON.stringify(this.pramenulisLanjutanDataSesion);
      localStorage.setItem("student_topik_menulis_paragraph", sv);
    },
    // Up down by index
    ascending2() {
      // <-- ATAS(up) -->
      var now = this.dataForm.pilih;
      if (now === "") {
        alert("Silahkan memilih untuk menaikan");
        return;
      }
      var index = now - 1;
      if (index >= 0) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.pramenulisLanjutanDataSesion.konsepParagrafArray.move(now, index);
        this.dataForm.pilih = index;
      } else {
        alert("Kalimat tidak bisa di naikan lagi");
      }
    },
    descending2() {
      // <---- BAWAH(down) ------>
      var now = this.dataForm.pilih;
      if (now === "") {
        alert("Silahkan memilih untuk menurunkan");
        return;
      }
      var index = now + 1;
      var arr =
        this.pramenulisLanjutanDataSesion.konsepParagrafArray.length - 1;
      if (arr >= index) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.pramenulisLanjutanDataSesion.konsepParagrafArray.move(now, index);
        this.dataForm.pilih = index;
      } else {
        alert("Kalimat tidak bisa di turunkan lagi");
      }
    },
    // end
    descending() {
      // <----- To Down
      if (this.dataForm.resultMenulis.length !== 0) {
        var instance = this.catatanMenulis[this.dataForm.resultMenulis];
        this.pramenulisLanjutanDataSesion.resultParagraph.push(instance);
        this.catatanMenulis.splice(this.dataForm.resultMenulis, 1);
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
        this.catatanMenulis.push(instance);
        this.pramenulisLanjutanDataSesion.resultParagraph.splice(
          this.dataForm.resultMenulis1,
          1
        );
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
    },
    pengorganisasian1Next() {
      if (this.pramenulisLanjutanDataSesion.resultParagraph.length < 1) {
        this.showModalErrorEmpety = true;
        window.scrollTo(0, 0);
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
      this.pengorganisasianPage2 = true;
      if (this.pengorganisasianPage2 === true) {
        this.pengorganisasianPage1 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    pengorganisasian2Next() {
      this.pengorganisasianPage3 = true;
      if (this.pengorganisasianPage3 === true) {
        this.pengorganisasianPage2 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    pengorganisasian3Next() {
      this.dataForm.pilih = "";
      this.pengorganisasianPage4 = true;
      if (this.pengorganisasianPage4 === true) {
        this.pengorganisasianPage3 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 3 }}, status:500;");
      }
    },
    pengorganisasian4Next() {
      var saveDate2 = JSON.stringify(this.pramenulisLanjutanDataSesion);
      localStorage.setItem("student_topik_menulis_paragraph", saveDate2);
      this.$router.push("/menulis-kesimpulan");
    },
    getDataJenisTopics() {
      var jenisTopic = localStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
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
