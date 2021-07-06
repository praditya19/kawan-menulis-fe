import { mapGetters } from "vuex";

export default {
  name: "MenulisIsi",
  data() {
    return {
      showModal: false,
      dataForm: {
        menulis: null,
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
    pramenulis1Next() {
      this.pramenulisPage2 = true;
      if (this.pramenulisPage2 === true) {
        this.pramenulisPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    pramenulis2Next() {
      this.pramenulisPage3 = true;
      if (this.pramenulisPage3 === true) {
        this.pramenulisPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    pramenulis3Next() {
      this.pramenulisPage4 = true;
      if (this.pramenulisPage4 === true) {
        this.pramenulisPage3 = false;
      } else {
        alert("{{ Internal Server Error to 3 }}, status:500;");
      }
    },
    pramenulis4Next() {
      this.pramenulisPage5 = true;
      if (this.pramenulisPage5 === true) {
        this.pramenulisPage4 = false;
      } else {
        alert("{{ Internal Server Error to 4 }}, status:500;");
      }
    },
    pramenulis5Next() {
      this.pramenulisPage6 = true;
      if (this.pramenulisPage5 === true) {
        this.pramenulisPage5 = false;
      } else {
        alert("{{ Internal Server Error to 5 }}, status:500;");
      }
    },
    pramenulis6Next() {
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