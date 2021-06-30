import Vue from 'vue'
import Vuex from 'vuex'
import tutor from './modules/tutor'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tutor
  }
})
