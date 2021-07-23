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
        resultMenulis: [],
        pilih: "",
      },
      valid: [], // descending components
      imitation: [], // descending components
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
      this.imitation = this.pramenulisLanjutanDataSesion.resultMenulis;
    },
    intersect(a, b) {
      // descending  & ascending
      if (b.length <= a.length) {
        var t;
        (t = b), (b = a), (a = t); // indexOf to loop over shorter
        return a.filter(function(e) {
          return b.indexOf(e) > -1;
        });
      }
    },
    descending() {
      // <----- To Down
      if (this.dataForm.resultMenulis.length !== 0) {
        this.pramenulisLanjutanDataSesion.resultMenulis.forEach((element) => {
          this.valid.push(element.pramenulis);
        });
        var instance = this.intersect(this.valid, this.dataForm.resultMenulis);
        if (instance.length !== this.dataForm.resultMenulis.length) {
          alert("Kalimat di Catatan paragraf sudah berada di bawah");
          return false; // <------ fail
        }
        if (this.dataForm.resultMenulis.length >= 2) {
          alert("Hanya bisa memindahkan kalimat satu per satu");
          return false; //  <----- fail
        }
        this.dataForm.resultMenulis.forEach((element) => {
          this.pramenulisLanjutanDataSesion.resultParagraph.push(element);
        });
        var filteredPeople = this.imitation.filter(
          (item) => item.pramenulis !== this.dataForm.resultMenulis[0]
        );
        (this.pramenulisLanjutanDataSesion.resultMenulis = []),
          filteredPeople.forEach((element) => {
            this.pramenulisLanjutanDataSesion.resultMenulis.push(element);
          });
        var descendingSv = JSON.stringify(this.pramenulisLanjutanDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", descendingSv); // <-----  everything will be fine
        location.reload();
      } else {
        alert("Silahkan memilih terlebih dahulu");
      }
    },
    ascending() {
      // <------ To Up
      if (this.dataForm.resultMenulis.length !== 0) {
        var instance = this.intersect(
          this.pramenulisLanjutanDataSesion.resultParagraph,
          this.dataForm.resultMenulis
        );
        if (instance.length !== this.dataForm.resultMenulis.length) {
          alert("Kalimat di Catatan menulis sudah berada di atas");
          return false; // <------ fail
        }
        if (this.dataForm.resultMenulis.length >= 2) {
          alert("Hanya bisa memindahkan kalimat satu per satu");
          return false; //  <----- fail
        }
        this.pramenulisLanjutanDataSesion.resultMenulis.push({
          pramenulis: this.dataForm.resultMenulis[0],
          menulis: "",
        });
        var filteredPeople = this.pramenulisLanjutanDataSesion.resultParagraph.filter(
          (item) => item !== this.dataForm.resultMenulis[0]
        );
        this.pramenulisLanjutanDataSesion.resultParagraph = [];
        filteredPeople.forEach((element) => {
          this.pramenulisLanjutanDataSesion.resultParagraph.push(element);
        });
        this.dataForm.resultMenulis = [];
        var ascendingSv = JSON.stringify(this.pramenulisLanjutanDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", ascendingSv); // <-----  everything will be fine
        location.reload();
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
        alert("Maksimal menambahkan 10 item");
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
    pengorganisasian1Next() {
      if (this.pramenulisLanjutanDataSesion.resultParagraph.length === 0) {
        this.showModalErrorEmpety = true;
        return;
      }
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
        this.pramenulisLanjutanDataSesion.resultParagraph.join(". ") + "."
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
