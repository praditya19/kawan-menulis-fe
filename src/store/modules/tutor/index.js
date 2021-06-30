import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  tutorList : []
};

const mutations = {
  setTutorList(state,value){
    state.tutorList = value
  }
};

const actions = {
  getTutorList: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(`${config.api.tutor}`, requestBody).then(
      (response) => {
        success && success(response.body.tutors)
        commit('setTutorList', response.body.tutors)
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
};
const getters = {
  kmClientId: (state) => {
    return state.KMclientid;
  },
  kmClientSecret: (state) => {
    return state.KMclientsecret;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
