import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'about',
  components: {
    NavBar
  },
  data() {
    return {
      peoples: [
        {
          name: 'Sebastian Togelang',
          title: 'Founding Partner Kejora Venture',
          // imageUrl: require('@/assets/images/people/sebastiantogelang.png'),
          link: 'http://kejorahq.com/kejora_team/sebastian-togelang'
        },
        {
          name: 'Andy Zain',
          title: 'Managing Partner',
          // imageUrl: require('@/assets/images/people/andizain.png'),
          link: 'http://kejorahq.com/kejora_team/andy-zain'
        },
        {
          name: 'Ferry Sutanto',
          title: 'Co-founder & CEO',
          // imageUrl: require('@/assets/images/people/ferry.png'),
          link: 'https://www.linkedin.com/in/fsutanto/'
        },
        {
          name: 'Adhiguna Mahendra',
          title: 'CTO/COO Aero Systems Indonesia, PhD in Machine Learning',
          // imageUrl: require('@/assets/images/people/adhiguna.png'),
          link: 'javascript:void(0)'
        },
        {
          name: 'Yauri Maulana',
          title: 'Software Architect',
          // imageUrl: require('@/assets/images/people/yauri.png'),
          link: 'javascript:void(0)'
        },
        {
          name: 'Jonathan Napitupulu',
          title: 'Big Data, Data Science, AI',
          // imageUrl: require('@/assets/images/people/jonathan.png'),
          link: 'javascript:void(0)'
        },
        {
          name: 'Raynal Gobel',
          title: 'Sr Full Stack Developer',
          // imageUrl: require('@/assets/images/people/raynal.png'),
          link: 'javascript:void(0)'
        },
        {
          name: 'Aditya K Goenawan',
          title: 'CEO Pakar, leading Digital Agency',
          // imageUrl: require('@/assets/images/people/adityagoenawan.png'),
          link: 'javascript:void(0)'
        },
        {
          name: 'Mohammad Ardiansyah',
          title: 'Sr Cybersecurity Consultant, Spentera',
          // imageUrl: require('@/assets/images/people/mohammadardiansyah.png'),
          link: 'javascript:void(0)'
        },
        {
          name: 'Muhammad Yusuf',
          title: 'iOS architect',
          // imageUrl: require('@/assets/images/people/yusuf.png'),
          link: 'javascript:void(0)'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['isMobile'])
  }
}
