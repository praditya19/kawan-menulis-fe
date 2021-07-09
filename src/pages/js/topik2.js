// import { mapActions } from "vuex";

export default {
  data() {
    return {
      showModal: false,
      showModal2: false,
      form: {
        kalimatSederhana: "",
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {
    onSubmit() {
      var convertToString = JSON.stringify(this.form.kalimatSederhana);
      sessionStorage.setItem("topik", convertToString);
    },
  },
};
