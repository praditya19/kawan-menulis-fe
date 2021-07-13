import { mapGetters } from "vuex";

export default {
  name: "PramenulisLanjutan",
  data() {
    return {
      showModal: false,
      showModal2: false,
      dataForm: {
        pramenulisLanjutan: "",
        pramenulisLanjutanPembaruan: "",
      },
      kalimatUtamaDataSesion: {},
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var kalimatUtamaData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.kalimatUtamaDataSesion = JSON.parse(kalimatUtamaData);
    },
    upCatatanMenulis() {
      if (this.dataForm.pramenulisLanjutanPembaruan === "") {
        alert("error input");
        return (this.showModal2 = false);
      }
      console.log(this.dataForm.pramenulisLanjutanPembaruan);
      this.kalimatUtamaDataSesion.resultMenulis[
        this.dataForm.pramenulisLanjutan
      ] = this.dataForm.pramenulisLanjutanPembaruan;
      var saveDate = JSON.stringify(this.kalimatUtamaDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", saveDate);
      this.showModal2 = false;
      window.location.reload();
    },
    toMenulisIsi() {
      this.$router.replace("/menulis-isi");
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      if (this.name === "") {
        alert("Form is not vailid");
        return;
      } else if (this.name.length > 65) {
        alert("Maximal 50 Characters");
        return;
      } else {
        this.handleSubmit();
        this.name = "";
        this.nameState = null;
        this.$bvModal.hide("bv-modal-example");
      }
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
