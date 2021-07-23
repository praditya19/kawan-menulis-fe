import { mapGetters } from "vuex";

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
    };
  },
  mounted() {
    this.getDataSesion();
    this.getDataJenisTopics();
  },
  methods: {
    getDataSesion() {
      var pramenulisData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.pramenulisDataSesion = JSON.parse(pramenulisData);
    },
    page1Next() {
      this.kalimatUtamaPage2 = true;
      if (this.kalimatUtamaPage2 === true) {
        this.kalimatUtamaPage1 = false;
      } else {
        alert("error");
      }
    },
    page2Next() {
      this.kalimatUtamaPage3 = true;
      if (this.kalimatUtamaPage3 === true) {
        this.kalimatUtamaPage2 = false;
      } else {
        alert("error");
      }
    },
    page3Next() {
      if (this.form.kalimatUtama1 === "") {
        this.showModal5 = true;
        return false;
      }
      var done = this.isValidHurufBesar(this.form.kalimatUtama1);
      if (done === true) {
        this.pramenulisDataSesion.resultParagraph.push(this.form.kalimatUtama1);
        var savePage3 = JSON.stringify(this.pramenulisDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", savePage3);

        this.kalimatUtamaPage4 = true;
        if (this.kalimatUtamaPage4 === true) {
          this.kalimatUtamaPage3 = false;
          this.showModal5 = false;
        } else {
          alert("{{Status: 500, Local: 'Sesion Storage empety 2!'}}");
        }
      }
      return false;
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
    page4Next() {
      if (this.form.kalimatUtama2 === "") {
        this.showModal5 = true;
        return false;
      }
      var done2 = this.isValidHurufBesar(this.form.kalimatUtama2);
      if (done2 === true) {
        this.pramenulisDataSesion.resultParagraph.push(this.form.kalimatUtama2);
        var savePage4 = JSON.stringify(this.pramenulisDataSesion);
        sessionStorage.setItem("student_topik_menulis_paragraph", savePage4);
        this.showModal6 = false;
        this.$router.push("/pramenulis-lanjutan");
      }
      return false;
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
