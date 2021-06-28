import { mapGetters } from "vuex";
export default {
  name: "tutor",
  data() {
    return {
      peoples: [
        {
          name: "ALDO AGATHON ",
          email: "aldoagathon64@gmail.com 01409190020@student.uph.edu",
          imageUrl: require("@/assets/Foto.png"),
        },
        {
          name: "BERKATI SELAMAT JAYA LAHAGU",
          email: "berkatiselamat86@gmail.com 01409190020@student.uph.edu",
          imageUrl: require("@/assets/Foto (1).png"),
        },
        {
          name: "DHEA LASMARIA SIMANJUNTAK",
          email: "dhelas100901@gmail.com 01409190038@student.uph.edu",
          imageUrl: require("@/assets/Foto (2).png"),
        },
        {
          name: "DITA YULIANTIN",
          email: "ditayuliantin0@gmail.com 01409190012@student.uph.edu",
          imageUrl: require("@/assets/Foto (3).png"),
        },
        {
          name: "DIVA YASHIRA HUTABARAT",
          email: "divayashira5@gmail.com 01409190017@student.uph.edu",
          imageUrl: require("@/assets/Foto (4).png"),
        },
        {
          name: "FEBE TISNA PRAMUDIKA",
          email: "febetisna@gmail.com 01409190027@student.uph.edu",
          imageUrl: require("@/assets/Foto (5).png"),
        },
        {
          name: "JIHAN SYAFIRA SIMANJUNTAK",
          email: " jihansimanjuntak26@gmail.com 01409190037@stident.uph.edu",
          imageUrl: require("@/assets/Foto (6).png"),
        },
        {
          name: "LESMAN LASE",
          email: "lesmanlase21@gmail.com 01409190019@student.uph.edu",
          imageUrl: require("@/assets/Foto (7).png"),
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
