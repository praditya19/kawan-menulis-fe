import { mapGetters } from "vuex";

export default {
  name: "PraMenulis",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      topicDataSesion: {},
      dataForm: {
        menulisPage1: "",
        menulisPage2: "",
        menulisPage3: "",
        menulisPage4: "",
        menulisPage5: "",
      },
      pramenulisPage1: true,
      pramenulisPage2: false,
      pramenulisPage3: false,
      pramenulisPage4: false,
      pramenulisPage5: false,
      pramenulisPage6: false,
    };
  },

  methods: {
    getDataSesion() {
      var topicData = sessionStorage.getItem("student_topik_menulis_paragraph");
      this.topicDataSesion = JSON.parse(topicData);
    },
    pramenulis1Next() {
      if (this.dataForm.menulisPage1 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage1,
        menulis: "",
      });
      var savePage1 = JSON.stringify(this.topicDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage1);

      this.pramenulisPage2 = true;
      if (this.pramenulisPage2 === true) {
        this.pramenulisPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    pramenulis2Next() {
      if (this.dataForm.menulisPage2 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage2,
        menulis: "",
      });
      var savePage2 = JSON.stringify(this.topicDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage2);

      this.pramenulisPage3 = true;
      if (this.pramenulisPage3 === true) {
        this.pramenulisPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    pramenulis3Next() {
      if (this.dataForm.menulisPage3 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage3,
        menulis: "",
      });
      var savePage3 = JSON.stringify(this.topicDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage3);

      this.pramenulisPage4 = true;
      if (this.pramenulisPage4 === true) {
        this.pramenulisPage3 = false;
      } else {
        alert("{{ Internal Server Error to 3 }}, status:500;");
      }
    },
    pramenulis4Next() {
      if (this.dataForm.menulisPage4 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage4,
        menulis: "",
      });
      var savePage4 = JSON.stringify(this.topicDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage4);

      this.pramenulisPage5 = true;
      if (this.pramenulisPage5 === true) {
        this.pramenulisPage4 = false;
      } else {
        alert("{{ Internal Server Error to 4 }}, status:500;");
      }
    },
    pramenulis5Next() {
      if (this.dataForm.menulisPage5 === "") {
        alert("Tidak boleh kosong");
        return;
      }
      this.topicDataSesion.resultMenulis.push({
        pramenulis: this.dataForm.menulisPage5,
        menulis: "",
      });
      var savePage5 = JSON.stringify(this.topicDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage5);

      this.pramenulisPage6 = true;
      if (this.pramenulisPage5 === true) {
        this.pramenulisPage5 = false;
      } else {
        alert("{{ Internal Server Error to 5 }}, status:500;");
      }
    },
    pramenulis6Next() {
      this.$router.push("/kalimat-utama");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  mounted() {
    this.getDataSesion();
  },
};
