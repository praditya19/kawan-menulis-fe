import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  questionList: [],
};

const mutations = {
  setAnswerList(state, value) {
    state.questionList = value;
  },
};

const actions = {
  getAnswerList: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(config.api.question + "/list", requestBody).then(
      (response) => {
        success && success(response.body.questions);
        commit("setAnswerList", response.body.questions);
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
