import Vue from "vue";
import Router from "vue-router";
import Tutor from "@/pages/Tutor";
import Home from "@/pages/Home";
import SumberBelajar from "@/pages/SumberBelajar";
import MulaiMenulis from "@/pages/MulaiMenulis";
import MulaiMenulisPage2 from "@/pages/MulaiMenulisPage2";
import Diagnostis from "@/pages/Diagnostis";
import DiagnostisDataDiri from "@/components/DiagnostisDataDiri";
import DiagnostisQuestion from "@/components/DiagnostisQuestion";
import DiagnostisHasilTes from "@/components/DiagnostisHasilTes";
import Topik from "@/pages/Topik";
import Topik2 from "@/pages/Topik2";
import MenulisIsi from "@/pages/MenulisIsi";
import PramenulisLanjutan from "@/pages/PramenulisLanjutan";
import KalimatUtama from "@/pages/KalimatUtama";
import PraMenulis from "@/pages/PraMenulis";
import MenulisKesimpulan from "@/pages/MenulisKesimpulan";
import Pengorganisasian from "@/pages/Pengorganisasian";
import Revisi from "@/pages/Revisi";
import Style from "@/pages/Style";
import StrukturKalimat from "@/pages/StrukturKalimat";
import TataBahasa from "@/pages/TataBahasa";
import Proofreading from "@/pages/Proofreading";
import Final from "@/pages/Final";
import Cetak from "@/pages/Cetak";
import StudentStatistik from "@/pages/StudentStatistik";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,
      },
    },
    {
      path: "/diagnostik",
      name: "Diagnostis",
      components: {
        default: Diagnostis,
      },
    },
    {
      path: "/diagnostik-data-diri",
      name: "DiagnostisDataDiri",
      components: {
        default: DiagnostisDataDiri,
      },
    },
    {
      path: "/diagnostik-question",
      name: "DiagnostisQuestion",
      components: {
        default: DiagnostisQuestion,
      },
    },
    {
      path: "/diagnostik-hasil-tes",
      name: "DiagnostisHasilTes",
      components: {
        default: DiagnostisHasilTes,
      },
    },
    {
      path: "/sumber-belajar",
      name: "Belajar",
      components: {
        default: SumberBelajar,
      },
    },
    {
      path: "/tutor",
      name: "Tutor",
      components: {
        default: Tutor,
      },
    },
    {
      path: "/mulai-menulis",
      name: "Menulis",
      components: {
        default: MulaiMenulis,
      },
    },
    {
      path: "/mulai-menulis-page-2",
      name: "Menulis",
      components: {
        default: MulaiMenulisPage2,
      },
    },
    {
      path: "/menulis-isi",
      name: "MenulisIsi",
      components: {
        default: MenulisIsi,
      },
    },
    {
      path: "/menulis-kesimpulan",
      name: "MenulisKesimpulan",
      components: {
        default: MenulisKesimpulan,
      },
    },
    {
      path: "/topik",
      name: "Topik",
      components: {
        default: Topik,
      },
    },
    {
      path: "/topik2",
      name: "Topik2",
      components: {
        default: Topik2,
      },
    },
    {
      path: "/pra-menulis",
      name: "PraMenulis",
      components: {
        default: PraMenulis,
      },
    },
    {
      path: "/pramenulis-lanjutan",
      name: "PramenulisLanjutan",
      components: {
        default: PramenulisLanjutan,
      },
    },
    {
      path: "/kalimat-utama",
      name: "KalimatUtama",
      components: {
        default: KalimatUtama,
      },
    },
    {
      path: "/pengorganisasian",
      name: "Pengorganisasian",
      components: {
        default: Pengorganisasian,
      },
    },
    {
      path: "/revisi",
      name: "Revisi",
      components: {
        default: Revisi,
      },
    },
    {
      path: "/gaya-menulis",
      name: "Style",
      components: {
        default: Style,
      },
    },
    {
      path: "/struktur-kalimat",
      name: "StrukturKalimat",
      components: {
        default: StrukturKalimat,
      },
    },
    {
      path: "/tata-bahasa",
      name: "TataBahasa",
      components: {
        default: TataBahasa,
      },
    },
    {
      path: "/proofreading",
      name: "Proofreading",
      components: {
        default: Proofreading,
      },
    },
    {
      path: "/final",
      name: "Final",
      components: {
        default: Final,
      },
    },
    {
      path: "/cetak",
      name: "Cetak",
      components: {
        default: Cetak,
      },
    },
    {
      path: "/:studentId?_:nim?",
      name: "StudentStatistik",
      components: {
        default: StudentStatistik,
      },
    },
  ],
  mode: "history",
});

export default router;
