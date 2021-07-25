import { mapGetters } from "vuex";

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
      showModal7: false,
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
    },
    validasiTitik(valid) {
      for (var i = 0; i < valid.length; i++) {
        if (valid[i].substr(valid[i].length - 1) === ".") {
          valid[i] = valid[i].replace(".", "");
        }
      }
      var benar = JSON.stringify(this.pramenulisLanjutanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", benar);
    },
    menulisIsiNext() {
      this.validasiTitik(this.pramenulisLanjutanDataSesion.resultParagraph);
      this.forEch.push(this.pramenulisLanjutanDataSesion.resultMenulis[0]);
      this.pramenulisLanjutanDataSesion.resultMenulis.splice(0, 1);
      this.menulisIsiPage2 = true;
      if (this.menulisIsiPage2 === true) {
        this.menulisIsi = false;
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
        this.showModal7 = true;
      }
    },
    kirim() {
      this.cekValidate = [];
      if (
        this.dataForm.menulis.length <=
        this.pramenulisLanjutanDataSesion.resultMenulis.length - 1
      ) {
        alert("Harus di isi semua");
        return;
      }
      var trueOrFalse = this.checkingValidasi(this.dataForm.menulis);
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

        var final = JSON.stringify(this.pramenulisLanjutanDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", final);
        this.$router.replace("/pengorganisasian");
      }
    },
    checkingValidasi(arr) {
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
        alert(
          "Harus di awali dengan huruf kapital dan di akhiri dengan tanda baca titik"
        );
        return false;
      }
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
