import Vue from "vue";
import Vuex from "vuex";
import tutor from "./modules/tutor";
import learning from "./modules/learningSources";
import students from "./modules/students";
import diagnostik from "./modules/diagnostik";
import topics from "./modules/topics";
import scores from "./modules/scores";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tutor,
    learning,
    students,
    diagnostik,
    topics,
    scores
  },
});
