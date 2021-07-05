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

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/tutor",
      name: "Tutor",
      components: {
        default: Tutor,
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
      path: "/",
      name: "Home",
      components: {
        default: Home,
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
      path: "/diagnostikhasiltes",
      name: "DiagnostisHasilTes",
      components: {
        default: DiagnostisHasilTes,
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
      path: "/pramenulis-lanjutan",
      name: "PramenulisLanjutan",
      components: {
        default: PramenulisLanjutan,
      },
    },
    {
      path: "/menulis-isi",
      name: "MenulisIsi",
      components: {
        default: MenulisIsi,
      },
    },
  ],
  mode: "history",
});

export default router;
