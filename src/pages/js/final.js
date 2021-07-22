import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "final",
  data() {
    return {
      showModal: false,
      proFeridingDataSesion: {},
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var proFreadingData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.proFeridingDataSesion = JSON.parse(proFreadingData);
    },
    ...mapActions(["finishStudentsActions"]),
    submit() {
      this.finishStudentsActions({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          studentId: this.proFeridingDataSesion.studentId,
          topicId: this.proFeridingDataSesion.topicId,
          finalResult: this.proFeridingDataSesion.konsepParagraf[0]
            .replace(/\t/g, "")
            .toString(),
        },
        success: (res) => {
          sessionStorage.setItem("student_action_final", JSON.stringify(res.body.studentAction))
          this.$router.push("/cetak");
        },

        fail: (res) => {
          console.log(res);
        },
      });
    },
    toStyle() {
      this.$router.push("/gaya-menulis");
    },
    toRevisi() {
      this.$router.push("/revisi");
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};

