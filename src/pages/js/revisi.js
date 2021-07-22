import { mapGetters } from "vuex";

export default {
  name: "Revisi",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      revisiPage1: true,
      revisiPage2: false,
      revisiPage3: false,
      modalTambah: false,
      modalUbah: false,
      showModalError: false,
      dataForm: {
        menulis: "",
        ubahData: "",
        tambahData: "",
      },
      // Member of Sessionss
      menulisKesimpulanDataSesion: {},
      // Sementara
      intermediary: [],
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var menulisKesimpulanData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.menulisKesimpulanDataSesion = JSON.parse(menulisKesimpulanData);
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
        this.menulisKesimpulanDataSesion.konsepParagrafArray.move(now, index);
        var ascending = JSON.stringify(this.menulisKesimpulanDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", ascending);
        this.dataForm.menulis = index;
      } else {
        alert("Kalimat tidak bisa di naikan lagi");
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
      var arr = this.menulisKesimpulanDataSesion.konsepParagrafArray.length - 1;
      if (arr >= index) {
        Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
        };
        this.menulisKesimpulanDataSesion.konsepParagrafArray.move(now, index);
        var descending = JSON.stringify(this.menulisKesimpulanDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", descending);
        this.dataForm.menulis = index;
      } else {
        alert("Kalimat tidak bisa di turunkan lagi");
      }
    },
    toDropKonsepParagraf() {
      this.menulisKesimpulanDataSesion.konsepParagrafArray.splice(
        this.dataForm.menulis,
        1
      );
      var deleteArr = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", deleteArr);
      this.dataForm.menulis = "";
    },
    toSetKonsepParagraf() {
      this.dataForm.ubahData = this.menulisKesimpulanDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ];
      this.modalUbah = true;
    },
    setKonsepParagraf() {
      if (this.dataForm.ubahData === "") {
        alert("Form tidak boleh kosong");
        return;
      }
      this.menulisKesimpulanDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ] = this.dataForm.ubahData.replace(".", "");
      var update = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", update);
      this.dataForm.ubahData = "";
      this.modalUbah = false;
    },
    handelTambah() {
      if (this.dataForm.tambahData === "") {
        alert("Form tidak boleh kosong");
      } else if (this.dataForm.tambahData.length >= 60) {
        alert("Maksimal 60 Kosa Kata");
      } else {
        if (this.menulisKesimpulanDataSesion.konsepParagrafArray.length < 10) {
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
      this.menulisKesimpulanDataSesion.konsepParagrafArray.push(
        value.replace(".", "")
      );
      var tambah = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", tambah);
      this.modalTambah = false;
    },
    revisi1Next() {
      this.revisiPage2 = true;
      this.menulisKesimpulanDataSesion.konsepParagraf = [];
      var empetyArray = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", empetyArray);
      if (this.revisiPage2 === true) {
        this.revisiPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    revisi2Next() {
      for (
        var i = 0;
        i < this.menulisKesimpulanDataSesion.konsepParagrafArray.length;
        i++
      ) {
        this.intermediary.push(
          "\t" + this.menulisKesimpulanDataSesion.konsepParagrafArray[i]
        );
      }
      this.menulisKesimpulanDataSesion.konsepParagraf.push(
        this.formatToDot(this.intermediary) + "."
      );
      var newKonsepParagraf = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem(
        "student_topik_menulis_paragraph",
        newKonsepParagraf
      );
      this.revisiPage3 = true;

      if (this.revisiPage3 === true) {
        this.revisiPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    revisi3Next() {
      this.$router.push("/gaya-menulis");
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
