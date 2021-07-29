import { mapActions } from "vuex";

export default {
  name: "StudentStatistik",
  data() {
    return {
      statistik: false,
      show: true,
      selected: null,
      dataStudentSesion: {},
      studentStatistik: {}
    };
  },
  computed: {
  },
  mounted() {
    this.getDataSesion();
    this.getStudentList();
    window.scrollTo(0, 0);
  },
  methods: {
    getDataSesion() {
      var dataStudent = sessionStorage.getItem("student_id_mulaimenulis");
      this.dataStudentSesion = JSON.parse(dataStudent);
    },
    ...mapActions(["getMyList"]),
    getStudentList() {
      this.getMyList({
        requestBody: {
          clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
          clientSecret: "27e78980e2419b308c86559ef0fb0105",
          studentId: this.dataStudentSesion.id,
          nim: this.dataStudentSesion.nim,
        },
        success: (res) => {
          // console.log(res.body.studentActions);
          this.studentStatistik = res.body.studentActions
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    goToModal() {
      this.statistik = true;
      this.show = false;
    },
  },
};
