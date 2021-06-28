import vueStep from 'vue-step'
export default { name: "Home",
  data () {
    return {
      nowStep: 8,
      stepList: [
        'Topik',
        'Pramenulis',
        'Pramenulis Lanjutan',
        'Menulis Isi',
        'Pengorganisasian',
        'Kesimpulan',
        'Revisi',
        'Publikasi',
      ]
    }
  },
  bahasan () {
    return {
      nowStep: 8,
      bahasan: [
        'Topik',
        'Pramenulis',
        'Pramenulis Lanjutan',
        'Menulis Isi',
        'Pengorganisasian',
        'Kesimpulan',
        'Revisi',
        'Publikasi',
      ]
    }
  },
  components: {
    vueStep
  }
};