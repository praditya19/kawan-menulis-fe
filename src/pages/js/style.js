import { mapGetters } from "vuex";

export default {
  name: "style",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModalFinish: false,
      modalTambah: false,
      modalUbah: false,
      dataForm: {
        menulis: "",
        tambahData: "",
        ubahData: "",
      },
      stylePage1: true,
      stylePage2: false,
      stylePage3: false,
      stylePage4: false,
      stylePage5: false,
      stylePageFinish: false,

      // Member Of Sessionss
      revisiDataSesion: {},

      intermediary: [],
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var revisiData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.revisiDataSesion = JSON.parse(revisiData);
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
        this.revisiDataSesion.konsepParagrafArray.move(now, index);
        var ascending = JSON.stringify(this.revisiDataSesion);
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
      var arr = this.revisiDataSesion.konsepParagrafArray.length - 1;
      if (arr >= index) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.revisiDataSesion.konsepParagrafArray.move(now, index);
        var descending = JSON.stringify(this.revisiDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", descending);
        this.dataForm.menulis = index;
      } else {
        alert("Has reached the maximum limit");
      }
    },
    toDropKonsepParagraf() {
      this.revisiDataSesion.konsepParagrafArray.splice(
        this.dataForm.menulis,
        1
      );
      var deleteArr = JSON.stringify(this.revisiDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", deleteArr);
      this.dataForm.menulis = "";
    },
    toSetKonsepParagraf() {
      this.dataForm.ubahData = this.revisiDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ];
      this.modalUbah = true;
    },
    setKonsepParagraf() {
      if (this.dataForm.ubahData === "") {
        alert("The data cannot be empty");
        return;
      }
      this.revisiDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ] = this.dataForm.ubahData.replace(".", "");
      var update = JSON.stringify(this.revisiDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", update);
      this.dataForm.ubahData = "";
      this.modalUbah = false;
    },
    handelTambah() {
      if (this.dataForm.tambahData === "") {
        alert("Form is not vailid");
      } else if (this.dataForm.tambahData.length >= 60) {
        alert("Maximal 60 Characters");
      } else {
        if (this.revisiDataSesion.konsepParagrafArray.length <= 5) {
          this.handleSubmit(this.dataForm.tambahData);
          this.dataForm.tambahData = "";
        } else {
          alert("Cannot add more than six lines");
          this.modalTambah = false;
          return;
        }
      }
    },
    handleSubmit(value) {
      this.revisiDataSesion.konsepParagrafArray.push(value.replace(".", ""));
      var tambah = JSON.stringify(this.revisiDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", tambah);
      this.modalTambah = false;
    },
    style1Next() {
      this.revisiDataSesion.konsepParagraf = [];
      var empetyArray = JSON.stringify(this.revisiDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", empetyArray);
      this.dataForm.menulis = "";
      this.stylePage2 = true;

      if (this.stylePage2 === true) {
        this.stylePage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    style2Next() {
      this.dataForm.menulis = "";
      this.stylePage3 = true;

      if (this.stylePage3 === true) {
        this.stylePage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    style3Next() {
      this.dataForm.menulis = "";
      this.stylePage4 = true;

      if (this.stylePage4 === true) {
        this.stylePage3 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    style4Next() {
      this.dataForm.menulis = "";
      this.stylePage5 = true;

      if (this.stylePage5 === true) {
        this.stylePage4 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    style5Next() {
      this.dataForm.menulis = "";
      for (
        var i = 0;
        i < this.revisiDataSesion.konsepParagrafArray.length;
        i++
      ) {
        this.intermediary.push(
          "\t" + this.revisiDataSesion.konsepParagrafArray[i]
        );
      }
      this.revisiDataSesion.konsepParagraf.push(
        this.formatToDot(this.intermediary) + "."
      );
      var newKonsepParagraf = JSON.stringify(this.revisiDataSesion);
      sessionStorage.setItem(
        "student_topik_menulis_paragraph",
        newKonsepParagraf
      );
      this.stylePageFinish = true;

      if (this.stylePageFinish === true) {
        this.stylePage5 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    styleFinishNext() {
      this.$router.push("/struktur-kalimat");
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
