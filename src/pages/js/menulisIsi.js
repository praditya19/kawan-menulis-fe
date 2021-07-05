import { mapGetters } from "vuex";

export default {
  name: "MenulisIsi",
  data() {
    return {
      dataForm: {
        menulis: null,
      },
      menulisIsi: true,
      menulisIsiPage2: false,
    };
  },
  methods: {
    menulisIsiNext() {
      this.menulisIsiPage2 = true;
      if (this.menulisIsiPage2 === true) {
        this.menulisIsi = false;
      } else {
        alert("error");
      }
    },
    isPage() {
      if (this.validateDot(this.dataForm.menulis)) {
        alert("end");
      } else {
        return false;
      }
    },
    validateDot(menulis) {
      const checking = `${menulis}.`;
      if (checking === menulis) {
        return true;
      } else {
        alert("coba periksa kembali subjek anda");
        return false;
      }
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
