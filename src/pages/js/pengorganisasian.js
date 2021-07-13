import { mapGetters } from "vuex";

export default {
  name: "Pengorganisasian",
  data() {
    return {
      showModal: false,
      pramenulisLanjutanDataSesion: {},
      dataForm: {
        resultMenulis: [],
        resultParagraph: [],
      },
      pengorganisasianPage1: true,
      pengorganisasianPage2: false,
      pengorganisasianPage3: false,
      pengorganisasianPage4: false,
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var pramenulisLanjutanData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.pramenulisLanjutanDataSesion = JSON.parse(pramenulisLanjutanData);
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    pengorganisasian1Next() {
      const validate = this.dataForm.resultParagraph.length;
      const titikAkhir = validate === 0 ? "" : ".";
      this.pramenulisLanjutanDataSesion.konsepParahraf.push(
        this.formatToDot(this.dataForm.resultMenulis) +
          "." +
          this.formatToDot(this.dataForm.resultParagraph) +
          titikAkhir
      );
      var savePage1 = JSON.stringify(this.pramenulisLanjutanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", savePage1);
      this.pengorganisasianPage2 = true;
      if (this.pengorganisasianPage2 === true) {
        this.pengorganisasianPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    pengorganisasian2Next() {
      this.pengorganisasianPage3 = true;
      if (this.pengorganisasianPage3 === true) {
        this.pengorganisasianPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    pengorganisasian3Next() {
      this.pengorganisasianPage4 = true;
      if (this.pengorganisasianPage4 === true) {
        this.pengorganisasianPage3 = false;
      } else {
        alert("{{ Internal Server Error to 3 }}, status:500;");
      }
    },
    pengorganisasian4Next() {
      alert("end");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
