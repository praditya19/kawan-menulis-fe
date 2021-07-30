import { mapActions } from "vuex";

export default {
  name: "StudentStatistik",
  data() {
    return {
      statistik: false,
      show: true,
      selected: null,
      time: "",
      dataStudentSesion: {},
      studentStatistik: {},
      nigga: {},
      duration: [],
    };
  },
  computed: {},
  mounted() {
    this.getDataSesion();
    this.getStudentList();
    this.time = new Date();
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
          this.studentStatistik = res.body.studentActions;
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    cariData(req) {
      const cari = this.studentStatistik.filter(
        (index) => index.studentId === req.studentId
      );
      if (cari.length > 0) {
        this.nigga = cari;
      } else {
        console.log("Data tidak ditemukan");
      }
    },
    beauty(t0, t1) {
      let d = new Date(t1) - new Date(t0);
      let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
      let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
      let hours = Math.floor(
        d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24
      );
      let minutes = Math.floor(
        d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60
      );
      let seconds = Math.floor(
        d / 1000 -
          weekdays * 7 * 24 * 60 * 60 -
          days * 24 * 60 * 60 -
          hours * 60 * 60 -
          minutes * 60
      );
      let millisecond = Math.floor(
        d -
          weekdays * 7 * 24 * 60 * 60 * 1000 -
          days * 24 * 60 * 60 * 1000 -
          hours * 60 * 60 * 1000 -
          minutes * 60 * 1000 -
          seconds * 1000
      );
      console.log(millisecond);
      let t = {};
      [
        "weekdays",
        "days",
        "hours",
        "minutes",
        "seconds",
        "millisecond",
      ].forEach((q) => {
        t[q] = eval(q);
      });
      return t;
    },
    goToModal() {
      const req = {
        studentId: this.dataStudentSesion[0].id,
      };
      this.cariData(req);
      this.statistik = true;
      this.show = false;
      for (let i = 0; i < this.nigga.length; i++) {
        let obj = {};
        obj["no"] = i + 1;
        obj["paragraphType"] = this.nigga[i].topic.paragraphType.name;
        obj["startDate"] = new Date(this.nigga[i].startDate);
        obj["endDate"] = new Date(this.nigga[i].endDate);
        obj["durations"] = this.beauty(
          this.nigga[i].startDate,
          this.nigga[i].endDate
        );
        this.duration.push(obj);
      }
    },
    cancle() {
      this.statistik = false;
      this.show = true;
      this.duration = [];
    },
    ok() {
      this.statistik = false;
      this.show = true;
      this.duration = [];
    },
  },
};
