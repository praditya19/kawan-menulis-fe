import { mapGetters, mapActions } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "mulaiMenulisPage2",
  data() {
    return {
      isSalah1: false,
      isSalah2: false,
      isSalah3: false,
      isSalah4: false,
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
      this.user.namaLengkap === null
        ? (this.isSalah1 = true)
        : (this.isSalah1 = false);
      this.user.email === null
        ? (this.isSalah2 = true)
        : (this.isSalah2 = false);
      this.user.prodi === null
        ? (this.isSalah3 = true)
        : (this.isSalah3 = false);
      this.user.nim === null ? (this.isSalah4 = true) : (this.isSalah4 = false);
      if (
        this.isSalah1 === false &&
        this.isSalah2 === false &&
        this.isSalah3 === false &&
        this.isSalah4 === false
      ) {
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
                sessionStorage.setItem(
                  "student_diagnostis-data-diri",
                  JSON.stringify(res.data.student)
                );
                this.$router.push("/diagnostik-question").catch(() => {});
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
      }
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
