import { mapGetters } from "vuex";

export default {
  name: "Cetak",
  data() {
    return {
      proFeridingDataSesion: {},
      dataForm: {
        menulis: "",
      },
      showModalCopy: false,
      copy: "",
    };
  },
  mounted() {
    this.getDataSesion();
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var proFreadingData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.proFeridingDataSesion = JSON.parse(proFreadingData);
      this.copy =
        this.proFeridingDataSesion.konsepParagrafArray.join(". ") + ".";
    },
    toTopik() {
      this.$router.push("/topik");
    },
    copyToClipBoard() {
      var copy = this.copy;
      const el = document.createElement("textarea");
      el.value = copy;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      this.showModalCopy = true;
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
