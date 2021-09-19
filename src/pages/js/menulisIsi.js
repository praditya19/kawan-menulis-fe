import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  name: "MenulisIsi",
  data() {
    return {
      showModal: false,
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModalErrorEmpety: false, // modal empety
      showModalValidation: false, // modal valid
      // page
      menulisIsi: true,
      menulisIsiPage2: false,
      menulisIsiPage3: false,
      dataForm: {
        menulis: [],
      },
      cekValidate: [],
      implementArrayPramenulis: [],
      // sesion
      pramenulisLanjutanDataSesion: {},
      jenisTopics: {},
      forEch: [], //get data page 2

      //Question Pramenulis
      pramenulisGuides: {},

      // Components Of Geting
      moustache: [], // For display
      remainder: [], // For exception

      domo: [], // valid
    };
  },
  mounted() {
    this.getDataSesion();
    this.getDataJenisTopics();
    this.getDataPramenulisGuidesList();
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var pramenulisLanjutanData = localStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.pramenulisLanjutanDataSesion = JSON.parse(pramenulisLanjutanData);
      this.pramenulisLanjutanDataSesion.resultParagraph = [];
    },
    ...mapActions(["getTopicGuidesList"]),
    getDataPramenulisGuidesList() {
      this.getTopicGuidesList({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          topicId: this.pramenulisLanjutanDataSesion.topicId,
          writingStepId: 36,
        },
        success: (res) => {
          this.pramenulisGuides = res;
        },

        fail: (res) => {
          console.log(res);
        },
      });
    },
    validasiTitik(valid) {
      for (var i = 0; i < valid.length; i++) {
        if (valid[i].substr(valid[i].length - 1) === ".") {
          valid[i] = valid[i].replace(".", "");
        }
      }
      var benar = JSON.stringify(this.pramenulisLanjutanDataSesion);
      localStorage.setItem("student_topik_menulis_paragraph", benar);
    },
    menulisIsiNext() {
      this.validasiTitik(this.pramenulisLanjutanDataSesion.resultParagraph);
      this.forEch.push(this.pramenulisLanjutanDataSesion.resultMenulis[0]);
      this.pramenulisLanjutanDataSesion.resultMenulis.splice(0, 1);
      // This Show
      for (
        let a = 0;
        a < this.pramenulisGuides.length &&
        a < this.pramenulisLanjutanDataSesion.resultMenulis.length;
        a++
      ) {
        this.moustache.push(this.pramenulisLanjutanDataSesion.resultMenulis[a]);
      }

      // This exception
      for (
        let b = 5;
        b < this.pramenulisLanjutanDataSesion.resultMenulis.length;
        b++
      ) {
        this.remainder.push(this.pramenulisLanjutanDataSesion.resultMenulis[b]);
      }

      // Next step
      this.pramenulisLanjutanDataSesion.resultMenulis = [];
      this.moustache.forEach((element) => {
        this.pramenulisLanjutanDataSesion.resultMenulis.push(element);
      });

      this.menulisIsiPage2 = true;
      if (this.menulisIsiPage2 === true) {
        this.menulisIsi = false;
        window.scrollTo(0, 0);
      } else {
        alert("error");
      }
    },
    takeModal(index) {
      var bbb = "showModal" + index;
      if ("showModal0" === bbb) {
        this.showModal1 = true;
      } else if ("showModal1" === bbb) {
        this.showModal2 = true;
      } else if ("showModal2" === bbb) {
        this.showModal3 = true;
      } else if ("showModal3" === bbb) {
        this.showModal4 = true;
      } else if ("showModal4" === bbb) {
        this.showModal5 = true;
      } else {
        return;
      }
    },
    checkingValidasi(arr, anj) {
      for (let i = 0; i < this.dataForm.menulis.length; i++) {
        if (this.dataForm.menulis[i] === undefined) {
          this.demo.push(this.dataForm.menulis[i]);
        }
        if (this.dataForm.menulis[i] === "") {
          this.demo.push(this.dataForm.menulis[i]);
        }
      }
      if (anj.length === 0) {
        for (var z = 0; z < arr.length; z++) {
          if (arr[z].substring(0, 1) == arr[z].substring(0, 1).toUpperCase()) {
            if (arr[z].substr(arr[z].length - 1) === ".") {
              this.cekValidate.push(arr[z]);
            } else {
              console.log(z);
            }
          } else {
            console.log(z);
          }
        }
        if (
          this.cekValidate.length ===
          this.pramenulisLanjutanDataSesion.resultMenulis.length
        ) {
          return true;
        } else {
          this.showModalValidation = true;
          return false;
        }
      } else if (anj.length !== 0) {
        this.showModalErrorEmpety = true;
      }
    },
    kirim() {
      this.cekValidate = [];
      this.demo = [];
      if (this.dataForm.menulis.length < this.pramenulisGuides.length) {
        this.showModalErrorEmpety = true;
        return;
      }
      var trueOrFalse = this.checkingValidasi(this.dataForm.menulis, this.demo);
      if (trueOrFalse === true) {
        for (
          var i = 0;
          i < this.pramenulisLanjutanDataSesion.resultMenulis.length;
          i++
        ) {
          var obj = {}; // <---- Move declaration inside loop
          obj["pramenulis"] = this.pramenulisLanjutanDataSesion.resultMenulis[
            i
          ].pramenulis;
          obj["menulis"] = this.dataForm.menulis[i];
          this.implementArrayPramenulis.push(obj);
        }
        this.pramenulisLanjutanDataSesion.resultMenulis = [];
        this.pramenulisLanjutanDataSesion.resultMenulis.push(this.forEch[0]);
        for (var j = 0; j < this.implementArrayPramenulis.length; j++) {
          this.pramenulisLanjutanDataSesion.resultMenulis.push(
            this.implementArrayPramenulis[j]
          );
        }
        if (this.remainder !== []) {
          this.remainder.forEach((element) => {
            var obj = {}; // <---- Move declaration inside loop
            obj["pramenulis"] = element.pramenulis;
            obj["menulis"] = "";
            this.pramenulisLanjutanDataSesion.resultMenulis.push(obj);
          });
        }
        var final = JSON.stringify(this.pramenulisLanjutanDataSesion);
        localStorage.setItem("student_topik_menulis_paragraph", final);
        this.$router.replace("/pengorganisasian");
      }
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
        text: "sebelumnya dan semua yang anda masukkan di tahapan ini akan hilang. Yakin kembali?",
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
