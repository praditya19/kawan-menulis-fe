import { mapActions } from "vuex";

export default {
  data() {
    return {
      studentResultSession: {}
    };
  },
  mounted() {
    this.getStudentResultSession();
  },
  computed: {
  },
  methods: {
    ...mapActions(["getTopicsList"]),
    getStudentResultSession() {
      var studentResult = sessionStorage.getItem("result_student")
      this.studentResultSession = JSON.parse(studentResult)
    },
  },
};
