import { mapGetters } from "vuex";

export default {
  name: "StrukturKalimat",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      dataForm: {
        menulis: "",
        tambahData: "",
        ubahData: "",
      },
      strukturkalimatPage1: true,
      strukturkalimatPage2: false,
      strukturkalimatPage3: false,
      strukturkalimatPage4: false,
      strukturkalimatPage5: false,

      // Member Of Sessionss
      styleDataSesion: {},

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
      this.styleDataSesion = JSON.parse(styleData);
    },
    ascending() {
      // <-- ATAS(up) -->
      var now = this.dataForm.menulis;
      if (now === "") {
        alert("Choose first to raise");
        return;
      }
      var index = now - 1;
      if (index >= 0) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.styleDataSesion.konsepParagrafArray.move(now, index);
        var ascending = JSON.stringify(this.styleDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", ascending);
        this.dataForm.menulis = index;
      } else {
        alert("Has reached the maximum limit");
      }
    },
    descending() {
      // <---- BAWAH(down) ------>
      var now = this.dataForm.menulis;
      if (now === "") {
        alert("Choose the first one to drop");
        return;
      }
      var index = now + 1;
      var arr = this.styleDataSesion.konsepParagrafArray.length - 1;
      if (arr >= index) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.styleDataSesion.konsepParagrafArray.move(now, index);
        var descending = JSON.stringify(this.styleDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", descending);
        this.dataForm.menulis = index;
      } else {
        alert("Has reached the maximum limit");
      }
    },

    toDropKonsepParagraf() {
      this.styleDataSesion.konsepParagrafArray.splice(this.dataForm.menulis, 1);
      var deleteArr = JSON.stringify(this.styleDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", deleteArr);
      this.dataForm.menulis = "";
    },
    toSetKonsepParagraf() {
      this.dataForm.ubahData = this.styleDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ];
      this.modalUbah = true;
    },
    setKonsepParagraf() {
      if (this.dataForm.ubahData === "") {
        alert("The data cannot be empty");
        return;
      }
      this.styleDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ] = this.dataForm.ubahData.replace(".", "");
      var update = JSON.stringify(this.styleDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", update);
      this.dataForm.ubahData = "";
      this.dataForm.menulis = "";
      this.modalUbah = false;
    },
    handelTambah() {
      if (this.dataForm.tambahData === "") {
        alert("Form is not vailid");
      } else if (this.dataForm.tambahData.length >= 60) {
        alert("Maximal 60 Characters");
      } else {
        if (this.styleDataSesion.konsepParagrafArray.length <= 5) {
          this.handleSubmit(this.dataForm.tambahData);
          this.dataForm.tambahData = "";
        } else {
          alert("Cannot add more than six lines");
          this.modalTambah = false;
        }
      }
    },
    handleSubmit(value) {
      this.styleDataSesion.konsepParagrafArray.push(value.replace(".", ""));
      var tambah = JSON.stringify(this.styleDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", tambah);
      this.menulis = "";
      this.modalTambah = false;
    },
    strukturkalimat1Next() {
      this.dataForm.menulis = "";
      this.strukturkalimatPage2 = true;

      if (this.strukturkalimatPage2 === true) {
        this.strukturkalimatPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    strukturkalimat2Next() {
      this.dataForm.menulis = "";
      this.strukturkalimatPage3 = true;

      if (this.strukturkalimatPage3 === true) {
        this.strukturkalimatPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    strukturkalimat3Next() {
      this.dataForm.menulis = "";
      this.strukturkalimatPage4 = true;

      if (this.strukturkalimatPage4 === true) {
        this.strukturkalimatPage3 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    strukturkalimat4Next() {
      this.dataForm.menulis = "";
      this.styleDataSesion.konsepParagraf = [];
      for (
        var i = 0;
        i < this.styleDataSesion.konsepParagrafArray.length;
        i++
      ) {
        this.intermediary.push(
          "\t" + this.styleDataSesion.konsepParagrafArray[i]
        );
      }
      this.styleDataSesion.konsepParagraf.push(
        this.formatToDot(this.intermediary) + "."
      );
      var newKonsepParagraf = JSON.stringify(this.styleDataSesion);
      sessionStorage.setItem(
        "student_topik_menulis_paragraph",
        newKonsepParagraf
      );
      this.strukturkalimatPage5 = true;

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
      this.$router.push("/tata-bahasa");
    },
    validation() {
      return (
        this.dataForm.menulis.length > 4 && this.dataForm.menulis.length < 13
      );
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
