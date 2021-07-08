import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  paragraphtypesList : []
};

const mutations = {
  setparagraphtypesList(state,value){
    state.paragraphtypesList = value
  }
};

const actions = {
  getParagraphTypesList: ({ commit }, { requestBody, success, fail }) => {
    Vue.http.post(config.api.paragraphtypes + "/list", requestBody).then(
      (response) => {
        success && success(response.body.paragraphTypes)
        commit('setparagraphtypesList', response.body.paragraphTypes)
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
