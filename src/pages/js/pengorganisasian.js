import { mapGetters } from "vuex";

export default {
  name: "Pengorganisasian",
  data() {
    return {
      showModal: false,
      dataForm: {
        menulis: null,
      },
      pengorganisasianPage1: true,
      pengorganisasianPage2: false,
      pengorganisasianPage3: false,
      pengorganisasianPage4: false,
    };
  },

  methods: {
    pengorganisasian1Next() {
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
