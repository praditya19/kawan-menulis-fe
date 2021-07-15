import { mapGetters } from "vuex";

export default {
  name: "Proofreading",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      dataForm: {
        menulis: null,
      },
      proofreadingPage1: true,
      proofreadingPage2: false,
      proofreadingPage3: false,
      proofreadingPage4: false,
      proofreadingPage5: false,
    };
  },

  methods: {
    proofreading1Next() {
      this.proofreadingPage2 = true;
      if (this.proofreadingPage2 === true) {
        this.proofreadingPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    proofreading2Next() {
      this.proofreadingPage3 = true;
      if (this.proofreadingPage3 === true) {
        this.proofreadingPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    proofreading3Next() {
      this.proofreadingPage4 = true;
      if (this.proofreadingPage4 === true) {
        this.proofreadingPage3 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    proofreading4Next() {
      this.proofreadingPage5 = true;
      if (this.proofreadingPage5 === true) {
        this.proofreadingPage4 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    proofreading5Next() {
      this.proofreadingPage6 = true;
      if (this.proofreadingPage6 === true) {
        this.proofreadingPage5 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    proofreading6Next() {
      this.$router.push("/final");
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
