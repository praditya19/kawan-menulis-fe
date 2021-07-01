import { mapGetters, mapActions } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "mulaiMenulisPage2",
  data() {
    return {
      user: {
        namaLengkap: "",
        email: "",
        prodi: "",
        nim: "",
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
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
        this.createStudents({
          data: {
            name: this.user.namaLengkap,
            email: this.user.email,
            prodi: this.user.prodi,
            nim: this.user.nim,
            clientId: this.user.clientId,
            clientSecret: this.user.clientSecret,
          },
          success: () => {
            this.$router.push("/diagnostik-question");
            window.location.reload();
          },
          fail: (res) => {
            console.log(res);
          },
        });
      }
    },
    validateForm() {
      if (
        this.user.namaLengkap === "" ||
        this.user.email === "" ||
        this.user.prodi === "" ||
        this.user.nim === ""
      ) {
        return false;
      }
      return true;
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
