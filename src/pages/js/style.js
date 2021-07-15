import { mapGetters } from "vuex";

export default {
  name: "style",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModalFinish: false,
      dataForm: {
        menulis: null,
      },
      stylePage1: true,
      stylePage2: false,
      stylePage3: false,
      stylePage4: false,
      stylePage5: false,
      stylePageFinish: false,
    };
  },

  methods: {
    style1Next() {
      this.stylePage2 = true;
      if (this.stylePage2 === true) {
        this.stylePage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    style2Next() {
      this.stylePage3 = true;
      if (this.stylePage3 === true) {
        this.stylePage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    style3Next() {
      this.stylePage4 = true;
      if (this.stylePage4 === true) {
        this.stylePage3 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    style4Next() {
      this.stylePage5 = true;
      if (this.stylePage5 === true) {
        this.stylePage4 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    style5Next() {
      this.stylePageFinish = true;
      if (this.stylePageFinish === true) {
        this.stylePage5 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    styleFinishNext() {
      this.$router.push("/struktur-kalimat");
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
