import people4 from "@/assets/people4.png";
import people3 from "@/assets/people3.png";
import people2 from "@/assets/people2.png";
import people1 from "@/assets/people1.png";

export default {
  name: "aboutUs",
  data() {
    return {
      profile: [
        {
          image: people4,
          nama: "Wiputra Cendana,B.Sc.,M.Pd.",
          status1: "Dosen pendidikan guru Sekolah Dasar",
          status2: "Ketua peneliti pengembangan riset teknologi asistif",
        },
        {
          image: people1,
          nama: "Dr. Budi Wibawanta, S.Sos., M.Si",
          status1: "Wakil Dekan Fakultas Ilmu Pendidikan",
          status2:
            "  Anggota peneliti sebagai tim ahli dalam mendesain latar penelitian dan berkorespondensi dengan tim ahli",
        },
        {
          image: people2,
          nama: "Year Rezeki Patricia Tantu, M.Pd.",
          status1: "Dosen Pendidikan Guru Sekolah Dasar",
          status2:
            "Anggota Peneliti sebagai tim yang berkorespondensi dengan programmer ahli teknologi asistif",
        },
        {
          image: people3,
          nama: "Neng Priyanti, M.Ed., M.A.",
          status1: "Dosen Prodi Pendidikan Bahasa Inggris",
          status2:
            "Anggota peneliti pengembang riset yang melakukan evaluasi dan monitoring terkait dengan pembuatan materi teknologi asistif",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
