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
    };
  },
  mounted() {
    this.getDataSesion();
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
      this.pramenulisDataSesion.resultParagraph.push(this.form.kalimatUtama1);
      var savePage3 = JSON.stringify(this.pramenulisDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage3);
      this.kalimatUtamaPage4 = true;
      if (this.kalimatUtamaPage4 === true) {
        this.kalimatUtamaPage3 = false;
        this.showModal5 = false;
      } else {
        alert("error");
      }
    },
    page4Next() {
      this.pramenulisDataSesion.resultParagraph.push(this.form.kalimatUtama2);
      var savePage4 = JSON.stringify(this.pramenulisDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage4);
      this.showModal6 = false;
      this.$router.push("/pramenulis-lanjutan");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
