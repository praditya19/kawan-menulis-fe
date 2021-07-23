import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  paragraphtypesList: [],
  topicGuidesList: [],
  paragraphTypes: [],
};

const mutations = {
  setparagraphtypesList(state, value) {
    state.paragraphtypesList = value;
  },
  settopicguidesList(state, value) {
    state.getTopicGuidesList = value;
  },
  getParagraphTypes(state, value) {
    state.paragraphTypes = value;
  },
};

const actions = {
  getParagraphTypesList: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(config.api.paragraphtypes + "/list", requestBody).then(
      (response) => {
        success && success(response.body.paragraphTypes);
        commit("setparagraphtypesList", response.body.paragraphTypes);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
  getTopicGuidesList: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(config.api.topicGuides + "/list", requestBody).then(
      (response) => {
        success && success(response.body.topicGuides);
        commit("settopicguidesList", response.body.topicGuides);
      },
      (response) => {
        fail && fail(response);
      }
    );
  },
  getParagraphTypesById: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(config.api.paragraphtypes + "/detail", requestBody).then(
      (response) => {
        commit("getParagraphTypes", response);
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
