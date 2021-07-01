import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  userData: {},
};

const mutations = {
  setUserData(state, value) {
    state.userData = value;
  },
};

const actions = {
  createStudents: ({ commit }, { data, success, fail }) => {
    Vue.http.post(config.api.students + "/add", data).then(
      (response) => {
        commit("setUserData", response);
        success && success(response);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
};
const getters = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
