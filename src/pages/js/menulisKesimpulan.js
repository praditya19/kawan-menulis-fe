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
    menuliskesimpulan1Next() {
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
      alert("end");
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
