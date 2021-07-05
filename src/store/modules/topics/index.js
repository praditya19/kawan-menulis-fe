import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  topicsList : []
};

const mutations = {
  setTopicsList(state,value){
    state.tutorList = value
  }
};

const actions = {
  getTopicsList: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(config.api.topics + "/list", requestBody).then(
      (response) => {
        success && success(response.body.topics)
        commit('setTopicsList', response.body.topics)
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
};
const getters = {
};

export default {
  state,
  getters,
  actions,
  mutations,
};
