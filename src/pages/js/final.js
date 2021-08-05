import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  name: "final",
  data() {
    return {
      showModal: false,
      proFeridingDataSesion: {},
      jenisTopics: {},
    };
  },
  mounted() {
    this.getDataSesion();
    this.getDataJenisTopics();
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var proFreadingData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.proFeridingDataSesion = JSON.parse(proFreadingData);
    },
    ...mapActions(["finishStudentsActions"]),
    sumbit() {
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
        success: () => {
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
    getDataJenisTopics() {
      var jenisTopic = sessionStorage.getItem("jenis_paragraph");
      this.jenisTopics = JSON.parse(jenisTopic);
    },
  },
  created() {
    var msg = "Any thing which u want";
    window.history.pushState({ html: msg, pageTitle: "AnyThing" }, "");
    window.onpopstate = function() {
      Swal.fire({
        title: "Apa kamu yakin ingin kembali?",
        text: "semua yang anda masukkan di tahapan ini akan hilang. Yakin kembali?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.close();
          this.history.go(-1);
          setTimeout(function() {
            Swal.close();
          }, 10);
          setTimeout(function() {
            window.location.reload();
          }, 10);
        } else {
          this.history.forward();
          setTimeout(function() {
            Swal.close();
          }, 50);
        }
      });
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
