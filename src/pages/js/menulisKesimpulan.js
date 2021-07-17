import { mapGetters } from "vuex";

export default {
  name: "MenulisKesimpulan",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      dataForm: {
        menulis: null,
      },
      menuliskesimpulanPage1: true,
      menuliskesimpulanPage2: false,
      menuliskesimpulanPage3: false,

      // Data Sesion
      dataSesion: {},

      // menampung
      conferSesion: [],
      padding: [],
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
      this.dataSesion = JSON.parse(pramenulisLanjutanData);
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    menuliskesimpulan1Next() {
      this.dataSesion.konsepParahraf = [];
      this.conferSesion = this.dataSesion.konsepParagrafArray;
      for (var i = 0; i < this.conferSesion.length; i++) {
        this.padding.push("\t" + this.conferSesion[i]);
      }
      this.dataSesion.konsepParahraf.push(this.formatToDot(this.padding) + ".");
      var validationParagraf = JSON.stringify(this.dataSesion);
      sessionStorage.setItem(
        "student_topik_menulis_paragraph",
        validationParagraf
      );
      this.menuliskesimpulanPage2 = true;
      if (this.menuliskesimpulanPage2 === true) {
        this.menuliskesimpulanPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    menuliskesimpulan2Next() {
      this.menuliskesimpulanPage3 = true;
      if (this.menuliskesimpulanPage3 === true) {
        this.menuliskesimpulanPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    menuliskesimpulan3Next() {
      if (this.dataForm.menulis === "") {
        alert("The data cannot be empty");
        return;
      }
      this.dataSesion.menulisKesimpulan.push(this.dataForm.menulis);
      var end = JSON.stringify(this.dataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", end);
      this.$router.push("/revisi");
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
