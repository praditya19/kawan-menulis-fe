import { mapGetters } from "vuex";

export default {
  name: "Revisi",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      dataForm: {
        menulis: null,
      },
      revisiPage1: true,
      revisiPage2: false,
      revisiPage3: false,
    };
  },

  methods: {
    revisi1Next() {
      this.revisiPage2 = true;
      if (this.revisiPage2 === true) {
        this.revisiPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    revisi2Next() {
      this.revisiPage3 = true;
      if (this.revisiPage3 === true) {
        this.revisiPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    revisi3Next() {
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