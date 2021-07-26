import { mapGetters, mapActions } from "vuex";

export default {
  name: "tutor",
  data() {
    return {
      peoples: [],
    };
  },
  mounted() {
    this.getAllTutor();
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters(["isMobile", "kmClientId", "kmClientSecret"]),
  },
  methods: {
    ...mapActions(["getTutorList"]),
    getAllTutor() {
      const requestBody = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
      };
      this.getTutorList({
        requestBody,
        success: (res) => {
          res.map((tutor) => {
            this.peoples.push(tutor);
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    toWa(phone) {
      var str = this.setCharAt(phone, 0, "62");
      window.open(`https://api.whatsapp.com/send?phone=${str}`);
    },
    setCharAt(str, index, chr) {
      if (index > str.length - 1) return str;
      return str.substring(0, index) + chr + str.substring(index + 1);
    },
    toEmail(email) {
      window.open(
        `https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=${email}`
      );
    },
  },
};
