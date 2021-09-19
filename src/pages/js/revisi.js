import { mapGetters } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";

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
      var menulisKesimpulanData = localStorage.getItem(
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
      this.modalTambah = false;
    },
    revisi1Next() {
      this.revisiPage2 = true;
      if (this.revisiPage2 === true) {
        this.revisiPage1 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    revisi2Next() {
      this.menulisKesimpulanDataSesion.konsepParagraf = [];
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
      this.revisiPage3 = true;
      if (this.revisiPage3 === true) {
        this.revisiPage2 = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    revisi3Next() {
      var ascending = JSON.stringify(this.menulisKesimpulanDataSesion);
      localStorage.setItem("student_topik_menulis_paragraph", ascending);
      this.$router.push("/gaya-menulis");
    },
    validation() {
      return (
        this.dataForm.menulis.length > 4 && this.dataForm.menulis.length < 13
      );
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
        text: "semua yang anda masukkan di tahapan ini akan hilang. Yakin kembali?",
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
