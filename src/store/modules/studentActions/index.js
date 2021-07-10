import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  studentsActions: [],
};

const mutations = {
  setStudentsActions(state, value) {
    state.studentsActions = value;
  },
};

const actions = {
  createStudentsActions: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(config.api.studentactions + "/add", requestBody).then(
      (response) => {
        commit("setStudentsActions", response);
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
