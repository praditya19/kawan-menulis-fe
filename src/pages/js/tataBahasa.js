import { mapGetters } from "vuex";

export default {
  name: "tataBahasa",
  data() {
    return {
      strukturkalimatPage1: true,
      strukturkalimatPage2: false,
      strukturkalimatPage3: false,
      strukturkalimatPage4: false,
      strukturkalimatPage5: false,
    };
  },
  methods: {
    strukturkalimat1Next() {
      this.strukturkalimatPage2 = true;
      if (this.strukturkalimatPage2 === true) {
        this.strukturkalimatPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    strukturkalimat2Next() {
      this.strukturkalimatPage3 = true;
      if (this.strukturkalimatPage3 === true) {
        this.strukturkalimatPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    strukturkalimat3Next() {
      this.strukturkalimatPage4 = true;
      if (this.strukturkalimatPage4 === true) {
        this.strukturkalimatPage3 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    strukturkalimat4Next() {
      this.strukturkalimatPage5 = true;
      if (this.strukturkalimatPage5 === true) {
        this.strukturkalimatPage4 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    strukturkalimat5Next() {
      this.$router.push("/proofreading");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
