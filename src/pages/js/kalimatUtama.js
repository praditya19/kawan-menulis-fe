import { mapGetters } from "vuex";

export default {
  name: "kalimatUtama",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      kalimatUtamaPage1: true,
      kalimatUtamaPage2: false,
      kalimatUtamaPage3: false,
      kalimatUtamaPage4: false,
    };
  },
  methods: {
    page1Next() {
      this.kalimatUtamaPage2 = true;
      if (this.kalimatUtamaPage2 === true) {
        this.kalimatUtamaPage1 = false;
      } else {
        alert("error");
      }
    },
    page2Next() {
      this.kalimatUtamaPage3 = true;
      if (this.kalimatUtamaPage3 === true) {
        this.kalimatUtamaPage2 = false;
      } else {
        alert("error");
      }
    },
    page3Next() {
      this.kalimatUtamaPage4 = true;
      if (this.kalimatUtamaPage4 === true) {
        this.kalimatUtamaPage3 = false;
        this.showModal5 = false;
      } else {
        alert("error");
      }
    },
    page4Next() {
      alert("END");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
