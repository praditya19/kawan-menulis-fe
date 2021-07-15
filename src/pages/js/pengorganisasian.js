import { mapGetters } from "vuex";

export default {
  name: "Pengorganisasian",
  data() {
    return {
      showModal: false,
      showModal2: false,
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
      if (this.pramenulisLanjutanDataSesion.konsepParahraf.length !== 0) {
        this.pramenulisLanjutanDataSesion.konsepParahraf = [];
        var toEmpetyArray = JSON.stringify(this.pramenulisLanjutanDataSesion);
        sessionStorage.setItem(
          "student_topik_menulis_paragraph",
          toEmpetyArray
        );
      }
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    formatToNull(value) {
      return value.toString().replace(/,/g, "");
    },
    pengorganisasian1Next() {
      if (
        this.dataForm.resultMenulis.length === 0 &&
        this.dataForm.resultParagraph.length === 0
      ) {
        alert("The data cannot be empty. Please choose first");
        return;
      }
      this.pramenulisLanjutanDataSesion.konsepParahraf.push(
        this.formatToDot(this.dataForm.resultMenulis) +
          "." +
          this.formatToNull(this.dataForm.resultParagraph)
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
