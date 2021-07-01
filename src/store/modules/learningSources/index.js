import Vue from "vue";
import VueResource from "vue-resource";
import config from "@/config";

Vue.use && Vue.use(VueResource);

const state = {
  learningSourcesList : []
};

const mutations = {
    setLearningSourcesList(state,value){
      state.learningSourcesList = value
    }
  };

const actions = {
    getLearningSourcesList: ({ commit }, { requestBody, success, fail }) => {
      Vue.http.post(`${config.api.learning}`, requestBody).then(
        (response) => {
          success && success(response.body)
          commit('setLearningSourcesList', response.body)
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
