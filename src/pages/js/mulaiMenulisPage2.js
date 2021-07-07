import { mapGetters, mapActions } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "mulaiMenulisPage2",
  data() {
    return {
      user: {
        namaLengkap: null,
        email: null,
        prodi: null,
        nim: null,
        clientId: null,
        clientSecret: null,
      },
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  methods: {
    ...mapActions(["createStudents"]),
    handleSubmit() {
      if (this.validateForm()) {
        if (this.validEmail(this.user.email)) {
          this.createStudents({
            data: {
              name: this.user.namaLengkap,
              email: this.user.email,
              prodi: this.user.prodi,
              nim: this.user.nim,
              clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
              clientSecret: "27e78980e2419b308c86559ef0fb0105",
            },
            success: (res) => {
              sessionStorage.setItem("student_id_for_topik", JSON.stringify(res.data.student))
              this.$router.push("/topik");
              window.location.reload();
            },
            fail: (res) => {
              console.log(res);
            },
          });
        } else {
          return false;
        }
      }
      return false;
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validateForm() {
      if (this.user) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};