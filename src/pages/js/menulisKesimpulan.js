import { mapGetters } from "vuex";

export default {
  name: "Menulis Kesimpulan",
  data() {
    return {
      showModal: false,
      dataForm: {
        menulis: null,
      },
      menulisKesimpulan1: true,
      menulisKesimpulan2: false,
      menulisKesimpulan3: false,
    };
  },
  methods: {
    menulisKesimpulan1Next() {
      this.menulisKesimpulan2 = true;
      if (this.menulisKesimpulan2 === true) {
        this.menulisKesimpulan1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    menulisKesimpulan2Next() {
      this.menulisKesimpulan3 = true;
      if (this.menulisKesimpulan3 === true) {
        this.menulisKesimpulan2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    menulisKesimpulan3Next() {
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
