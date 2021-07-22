import { mapGetters } from "vuex";

export default {
  name: "tataBahasa",
  data() {
    return {
      showModal: false,
      strukturkalimatPage1: true,
      strukturkalimatPage2: false,
      strukturkalimatPage3: false,
      strukturkalimatPage4: false,
      strukturkalimatPage5: false,
      showModalError: false,
      dataForm: {
        menulis: "",
        tambahData: "",
        ubahData: "",
      },
      //Member of Sessions
      strukturKalimatDataSesion: {},

      modalTambah: false,
      modalUbah: false,

      intermediary: [],
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var styleData = sessionStorage.getItem("student_topik_menulis_paragraph");
      this.strukturKalimatDataSesion = JSON.parse(styleData);
    },
    ascending() {
      // <-- ATAS(up) -->
      var now = this.dataForm.menulis;
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
        this.strukturKalimatDataSesion.konsepParagrafArray.move(now, index);
        var ascending = JSON.stringify(this.strukturKalimatDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", ascending);
        this.dataForm.menulis = index;
      } else {
        alert("Kalimat tidak bisa di naikkan lagi");
      }
    },
    descending() {
      // <---- BAWAH(down) ------>
      var now = this.dataForm.menulis;
      if (now === "") {
        alert("Silahkan memilih untuk menurunkan");
        return;
      }
      var index = now + 1;
      var arr = this.strukturKalimatDataSesion.konsepParagrafArray.length - 1;
      if (arr >= index) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.strukturKalimatDataSesion.konsepParagrafArray.move(now, index);
        var descending = JSON.stringify(this.strukturKalimatDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", descending);
        this.dataForm.menulis = index;
      } else {
        alert("Kalimat tidak bisa di turunkan lagi");
      }
    },
    toDropKonsepParagraf() {
      this.strukturKalimatDataSesion.konsepParagrafArray.splice(
        this.dataForm.menulis,
        1
      );
      var deleteArr = JSON.stringify(this.strukturKalimatDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", deleteArr);
      this.dataForm.menulis = "";
    },
    toSetKonsepParagraf() {
      this.dataForm.ubahData = this.strukturKalimatDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ];
      this.modalUbah = true;
    },
    setKonsepParagraf() {
      if (this.dataForm.ubahData === "") {
        alert("Form tidak boleh kosong");
        return;
      }
      this.strukturKalimatDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ] = this.dataForm.ubahData.replace(".", "");
      var update = JSON.stringify(this.strukturKalimatDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", update);
      this.dataForm.ubahData = "";
      this.dataForm.menulis = "";
      this.modalUbah = false;
    },
    handelTambah() {
      if (this.dataForm.tambahData === "") {
        alert("Form tidak boleh kosong");
      } else if (this.dataForm.tambahData.length >= 60) {
        alert("Maksimal 60 Kosa kata");
      } else {
        if (this.strukturKalimatDataSesion.konsepParagrafArray.length < 10) {
          this.handleSubmit(this.dataForm.tambahData);
          this.dataForm.tambahData = "";
        } else {
          this.modalTambah = false;
          this.showModalError = true;
          this.dataForm.tambahData = "";
        }
      }
    },
    handleSubmit(value) {
      this.strukturKalimatDataSesion.konsepParagrafArray.push(
        value.replace(".", "")
      );
      var tambah = JSON.stringify(this.strukturKalimatDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", tambah);
      this.menulis = "";
      this.modalTambah = false;
    },
    strukturkalimat1Next() {
      this.strukturkalimatPage2 = true;
      this.dataForm.menulis = "";
      if (this.strukturkalimatPage2 === true) {
        this.strukturkalimatPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    strukturkalimat2Next() {
      this.strukturkalimatPage3 = true;
      this.dataForm.menulis = "";
      if (this.strukturkalimatPage3 === true) {
        this.strukturkalimatPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    strukturkalimat3Next() {
      this.strukturkalimatPage4 = true;
      this.dataForm.menulis = "";
      if (this.strukturkalimatPage4 === true) {
        this.strukturkalimatPage3 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    strukturkalimat4Next() {
      this.strukturKalimatDataSesion.konsepParagraf = [];
      for (
        var i = 0;
        i < this.strukturKalimatDataSesion.konsepParagrafArray.length;
        i++
      ) {
        this.intermediary.push(
          "\t" + this.strukturKalimatDataSesion.konsepParagrafArray[i]
        );
      }
      this.strukturKalimatDataSesion.konsepParagraf.push(
        this.formatToDot(this.intermediary) + "."
      );
      var newKonsepParagraf = JSON.stringify(this.strukturKalimatDataSesion);
      sessionStorage.setItem(
        "student_topik_menulis_paragraph",
        newKonsepParagraf
      );
      this.strukturkalimatPage5 = true;
      this.dataForm.menulis = "";
      if (this.strukturkalimatPage5 === true) {
        this.strukturkalimatPage4 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    strukturkalimat5Next() {
      this.$router.push("/proofreading");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
