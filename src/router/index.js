import Vue from "vue";
import Router from "vue-router";
import Tutor from "@/pages/Tutor";
import Home from "@/pages/Home";
import SumberBelajar from "@/pages/SumberBelajar";
import MulaiMenulis from "@/pages/MulaiMenulis";
import MulaiMenulisPage2 from "@/pages/MulaiMenulisPage2";
import Diagnostis from "@/pages/Diagnostis";
import Diagnostis2 from "@/components/Diagnostis2";
import Diagnostis3 from "@/components/Diagnostis3";
import Diagnostis4 from "@/components/Diagnostis4";
import Diagnostis5 from "@/components/Diagnostis5";
import Diagnostis6 from "@/components/Diagnostis6";
import Diagnostis7 from "@/components/Diagnostis7";
import Diagnostis8 from "@/components/Diagnostis8";
import Diagnostis9 from "@/components/Diagnostis9";
import Diagnostis10 from "@/components/Diagnostis10";

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
      path: "/diagnostik2",
      name: "Diagnostis2",
      components: {
        default: Diagnostis2,
      },
    },
    {
      path: "/diagnostik3",
      name: "Diagnostis3",
      components: {
        default: Diagnostis3,
      },
    },
    {
      path: "/diagnostik4",
      name: "Diagnostis4",
      components: {
        default: Diagnostis4,
      },
    },
    {
      path: "/diagnostik5",
      name: "Diagnostis5",
      components: {
        default: Diagnostis5,
      },
    },
    {
      path: "/diagnostik6",
      name: "Diagnostis6",
      components: {
        default: Diagnostis6,
      },
    },
    {
      path: "/diagnostik7",
      name: "Diagnostis7",
      components: {
        default: Diagnostis7,
      },
    },
    {
      path: "/diagnostik8",
      name: "Diagnostis8",
      components: {
        default: Diagnostis8,
      },
    },
    {
      path: "/diagnostik9",
      name: "Diagnostis9",
      components: {
        default: Diagnostis9,
      },
    },
    {
      path: "/diagnostik10",
      name: "Diagnostis10",
      components: {
        default: Diagnostis10,
      },
    },
  ],
  mode: "history",
});

export default router;
