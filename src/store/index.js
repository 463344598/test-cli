import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const {postAnswer, AnswerInfo} = require('../tophp');
const state = {
  postArr: [],//答题情况
  goldnum: 0,
  isPost: false,//是否已经提交答案
  rightkey:question.right,
  answerkey:['错'],
  ansyflag:[],
  sum1:0,
  sum2:1,
  sum3:2,
};
const getters = {};
const actions = {
  postAnswer({state}) {
    postAnswer(state.postArr, AnswerInfo.testNum);
    state.isPost = true;
  },
  pushToPostArr({state}, value) {
    state.postArr.push(value);
  }
};
const mutations = {
  setIsPost(state, value) {
    state.isPost = value;
  }
};
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
export default store
