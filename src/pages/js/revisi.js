import { mapGetters } from "vuex";

export default {
  name: "Revisi",
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      revisiPage1: true,
      revisiPage2: false,
      revisiPage3: false,
      modalTambah: false,
      modalUbah: false,
      dataForm: {
        menulis: "",
        ubahData: "",
        tambahData: "",
      },
      // Member of Sessionss
      menulisKesimpulanDataSesion: {},
      // Sementara
      intermediary: [],
    };
  },
  mounted() {
    this.getDataSesion();
  },
  methods: {
    getDataSesion() {
      var menulisKesimpulanData = sessionStorage.getItem(
        "student_topik_menulis_paragraph"
      );
      this.menulisKesimpulanDataSesion = JSON.parse(menulisKesimpulanData);
    },
    toDropKonsepParagraf() {
      this.menulisKesimpulanDataSesion.konsepParagrafArray.splice(
        this.dataForm.menulis,
        1
      );
      var deleteArr = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", deleteArr);
      this.dataForm.menulis = "";
    },
    toSetKonsepParagraf() {
      this.dataForm.ubahData = this.menulisKesimpulanDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ];
      this.modalUbah = true;
    },
    setKonsepParagraf() {
      if (this.dataForm.ubahData === "") {
        alert("The data cannot be empty");
        return;
      }
      this.menulisKesimpulanDataSesion.konsepParagrafArray[
        this.dataForm.menulis
      ] = this.dataForm.ubahData;
      var update = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", update);
      this.dataForm.ubahData = "";
      this.modalUbah = false;
    },
    handelTambah() {
      if (this.dataForm.tambahData === "") {
        alert("Form is not vailid");
      } else if (this.dataForm.tambahData.length >= 60) {
        alert("Maximal 60 Characters");
      } else {
        if (this.menulisKesimpulanDataSesion.konsepParagrafArray.length <= 5) {
          this.handleSubmit(this.dataForm.tambahData);
          this.dataForm.tambahData = "";
        } else {
          alert("Cannot add more than six lines");
          return;
        }
      }
    },
    handleSubmit(value) {
      this.menulisKesimpulanDataSesion.konsepParagrafArray.push(value);
      var tambah = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", tambah);
      this.modalTambah = false;
    },
    revisi1Next() {
      this.revisiPage2 = true;
      this.menulisKesimpulanDataSesion.konsepParahraf = [];
      var empetyArray = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem("student_topik_menulis_paragraph", empetyArray);
      if (this.revisiPage2 === true) {
        this.revisiPage1 = false;
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    revisi2Next() {
      for (
        var i = 0;
        i < this.menulisKesimpulanDataSesion.konsepParagrafArray.length;
        i++
      ) {
        this.intermediary.push(
          "\t" + this.menulisKesimpulanDataSesion.konsepParagrafArray[i]
        );
      }
      this.menulisKesimpulanDataSesion.konsepParahraf.push(
        this.formatToDot(this.intermediary) + "."
      );
      var newKonsepParagraf = JSON.stringify(this.menulisKesimpulanDataSesion);
      sessionStorage.setItem(
        "student_topik_menulis_paragraph",
        newKonsepParagraf
      );
      this.revisiPage3 = true;
      if (this.revisiPage3 === true) {
        this.revisiPage2 = false;
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    formatToDot(value) {
      return value.toString().replace(/,/g, ".");
    },
    revisi3Next() {
      this.$router.push("/gaya-menulis");
    },
    validation() {
      return (
        this.dataForm.menulis.length > 4 && this.dataForm.menulis.length < 13
      );
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
