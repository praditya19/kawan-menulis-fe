import { mapGetters, mapActions } from "vuex";

export default {
  name: "kalimatUtama",
  data() {
    return {
      pramenulisDataSesion: {},
      form: {
        kalimatUtama1: "",
        kalimatUtama2: "",
      },
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      kalimatUtamaPage1: true,
      kalimatUtamaPage2: false,
      kalimatUtamaPage3: false,
      kalimatUtamaPage4: false,
      jenisTopics: {},

      // db
      kalimatUtamaGuides: [],
    };
  },
  mounted() {
    this.getDataSesion();
    this.getDataJenisTopics();
    this.getDataKalimatUtamaGuidesList();
    window.scrollTo(0, 0);
    // window.onpopstate = function() {
    //   alert("browser-back");
    // };
  },
  methods: {
    getDataSesion() {
      var pramenulisData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.pramenulisDataSesion = JSON.parse(pramenulisData);
    },
    getDataJenisTopics() {
      var jenisTopic = sessionStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
    },
    ...mapActions(["getTopicGuidesList"]),
    getDataKalimatUtamaGuidesList() {
      this.getTopicGuidesList({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          topicId: this.pramenulisDataSesion.topicId,
          writingStepId: 37,
        },
        success: (res) => {
          this.kalimatUtamaGuides = res;
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    page1Next() {
      if (this.kalimatUtamaGuides[1] === undefined) {
        this.pramenulisDataSesion.resultParagraphKalimatUtama.push(
          "",
          "Bagaimana Pakar Membayangkan Apa yang Harus Difokuskan"
        );
        this.$router.push("/pramenulis-lanjutan");
        this.kalimatUtamaPage1 = false;
        return;
      }
      this.kalimatUtamaPage2 = true;
      if (this.kalimatUtamaPage2 === true) {
        this.kalimatUtamaPage1 = false;
        window.scrollTo(0, 0);
      } else {
        alert("error");
      }
    },
    page2Next() {
      if (this.kalimatUtamaGuides[2] === undefined) {
        this.pramenulisDataSesion.resultParagraphKalimatUtama.push(
          "",
          "Bagaimana Pakar Membayangkan Apa yang Harus Difokuskan"
        );
        this.$router.push("/pramenulis-lanjutan");
        this.kalimatUtamaPage2 = false;
        return;
      }
      this.kalimatUtamaPage3 = true;
      if (this.kalimatUtamaPage3 === true) {
        this.kalimatUtamaPage2 = false;
        window.scrollTo(0, 0);
      } else {
        alert("error");
      }
    },
    isValidHurufBesar(msg) {
      var checking = msg.substring(0, 1);
      var lastChar = msg.substr(msg.length - 1);
      if (checking == checking.toUpperCase()) {
        if (lastChar === ".") {
          return true;
        } else {
          this.showModal5 = true;
        }
        if (lastChar === "?") {
          return true;
        } else {
          this.showModal5 = true;
        }
        if (lastChar === "!") {
          return true;
        } else {
          this.showModal5 = true;
        }
      } else {
        this.showModal5 = true;
      }
    },
    page3Next() {
      if (this.form.kalimatUtama1 === "") {
        this.showModal5 = true;
        return false;
      }
      if (this.kalimatUtamaGuides[3] === undefined) {
        const isYes = this.form.kalimatUtama1.replace(".", "");
        this.pramenulisDataSesion.resultParagraphKalimatUtama.push("", isYes);
        const is3 = JSON.stringify(this.pramenulisDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", is3);
        this.$router.push("/pramenulis-lanjutan");
      } else {
        const isYes2 = this.form.kalimatUtama1.replace(".", "");
        this.pramenulisDataSesion.resultParagraphKalimatUtama.push(isYes2);
        this.kalimatUtamaPage3 = false;
        var savePage3 = JSON.stringify(this.pramenulisDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", savePage3);
        this.kalimatUtamaPage4 = true;
        window.scrollTo(0, 0);
        this.kalimatUtamaPage3 = false;
      }
      // Demo Valid 4.2
      // var done = this.isValidHurufBesar(this.form.kalimatUtama1);
      // if (done === true) {
      //   if (this.kalimatUtamaGuides[3] === undefined) {
      //     this.pramenulisDataSesion.resultParagraphKalimatUtama.push(
      //       "",
      //       this.form.kalimatUtama1
      //     );
      //     const is3 = JSON.stringify(this.pramenulisDataSesion);
      //     sessionStorage.setItem("student_topik_menulis_paragraph", is3);
      //     this.$router.push("/pramenulis-lanjutan");
      //     this.kalimatUtamaPage3 = false;
      //     return;
      //   }
      //   this.pramenulisDataSesion.resultParagraphKalimatUtama.push(
      //     this.form.kalimatUtama1
      //   );
      //   var savePage3 = JSON.stringify(this.pramenulisDataSesion);
      //   sessionStorage.setItem("student_topik_menulis_paragraph", savePage3);
      //   this.kalimatUtamaPage4 = true;
      //   if (this.kalimatUtamaPage4 === true) {
      //     this.kalimatUtamaPage3 = false;
      //   } else {
      //     alert("{{Status: 500, Local: 'Sesion Storage empety 2!'}}");
      //   }
      // }
      // return false;
    },
    page4Next() {
      if (this.form.kalimatUtama2 === "") {
        this.showModal5 = true;
        return false;
      }
      var done2 = this.isValidHurufBesar(this.form.kalimatUtama2);
      if (done2 === true) {
        this.pramenulisDataSesion.resultParagraphKalimatUtama.push(
          this.form.kalimatUtama2
        );
        var savePage4 = JSON.stringify(this.pramenulisDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", savePage4);
        this.showModal6 = false;
        this.$router.push("/pramenulis-lanjutan");
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};

