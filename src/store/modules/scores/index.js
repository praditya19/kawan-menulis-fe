import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {};

const mutations = {};

const actions = {
  createScores: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(config.api.scores + "/calculate", requestBody).then(
      (response) => {
        console.log(response);
        success && success(response);
        console.log(commit);
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
